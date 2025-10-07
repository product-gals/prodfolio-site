-- Fix profiles table schema to use id as the auth user reference
-- First, update existing records to set id = user_id where user_id is not null
UPDATE profiles SET id = user_id WHERE user_id IS NOT NULL;

-- Make user_id non-nullable and add proper constraint
ALTER TABLE profiles ALTER COLUMN user_id SET NOT NULL;

-- Add unique constraint on user_id to prevent duplicates
ALTER TABLE profiles ADD CONSTRAINT profiles_user_id_unique UNIQUE (user_id);

-- Drop the demo_user_id column as it's no longer needed
ALTER TABLE profiles DROP COLUMN IF EXISTS demo_user_id;

-- Update the handle_new_user function to use proper id mapping
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = 'public'
AS $$
BEGIN
  INSERT INTO public.profiles (id, user_id, name, email)
  VALUES (
    NEW.id,  -- Use auth user id as profile id
    NEW.id,  -- Also store in user_id for consistency
    COALESCE(NEW.raw_user_meta_data->>'name', SPLIT_PART(NEW.email, '@', 1)),
    NEW.email
  )
  ON CONFLICT (user_id) DO NOTHING;  -- Prevent duplicate profiles
  RETURN NEW;
END;
$$;