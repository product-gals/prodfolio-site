-- Onboarding responses table for first-time flow
-- Ensure update function exists
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create table
CREATE TABLE IF NOT EXISTS public.onboarding_responses (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  journey_stage text,
  top_goal text,
  has_projects boolean,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz
);

-- Enable RLS
ALTER TABLE public.onboarding_responses ENABLE ROW LEVEL SECURITY;

-- Reset existing policies to avoid duplicates
DROP POLICY IF EXISTS "Users can view their own onboarding responses" ON public.onboarding_responses;
DROP POLICY IF EXISTS "Users can insert their own onboarding responses" ON public.onboarding_responses;
DROP POLICY IF EXISTS "Users can update their own onboarding responses" ON public.onboarding_responses;

-- RLS policies
CREATE POLICY "Users can view their own onboarding responses"
ON public.onboarding_responses
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own onboarding responses"
ON public.onboarding_responses
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own onboarding responses"
ON public.onboarding_responses
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS trg_onboarding_responses_updated_at ON public.onboarding_responses;
CREATE TRIGGER trg_onboarding_responses_updated_at
BEFORE UPDATE ON public.onboarding_responses
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();