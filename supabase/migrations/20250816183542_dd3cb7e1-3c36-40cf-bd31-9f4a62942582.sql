-- Update RLS policy to allow access to demo portfolios
DROP POLICY IF EXISTS "Portfolios are selectable by owner only" ON public.portfolios;

CREATE POLICY "Users can view their own portfolios and demo portfolios" 
ON public.portfolios 
FOR SELECT 
USING (auth.uid() = owner_id OR owner_id = 'demo-user');