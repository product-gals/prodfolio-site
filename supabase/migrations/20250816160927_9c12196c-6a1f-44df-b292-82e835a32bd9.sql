-- Remove foreign key constraint temporarily for demo testing
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_user_id_fkey;

-- Make user_id nullable for demo mode
ALTER TABLE public.profiles ALTER COLUMN user_id DROP NOT NULL;