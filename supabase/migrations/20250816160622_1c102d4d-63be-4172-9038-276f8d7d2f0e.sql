-- Temporarily disable RLS for testing (remove auth requirement)
ALTER TABLE public.profiles DISABLE ROW LEVEL SECURITY;

-- Add a demo_user_id column to simulate user separation without auth
ALTER TABLE public.profiles ADD COLUMN demo_user_id TEXT DEFAULT 'demo-user';

-- Create an index for better performance
CREATE INDEX idx_profiles_demo_user_id ON public.profiles(demo_user_id);