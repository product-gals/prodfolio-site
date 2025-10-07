-- Create a proper demo user UUID and update RLS policy
-- First, let's use a fixed UUID for demo user
-- UUID: 00000000-0000-0000-0000-000000000001

DROP POLICY IF EXISTS "Portfolios are selectable by owner only" ON public.portfolios;

CREATE POLICY "Users can view their own portfolios and demo portfolios" 
ON public.portfolios 
FOR SELECT 
USING (auth.uid() = owner_id OR owner_id = '00000000-0000-0000-0000-000000000001'::uuid);