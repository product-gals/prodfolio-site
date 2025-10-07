-- Add case study data as JSON to portfolios table
ALTER TABLE public.portfolios 
ADD COLUMN case_studies jsonb DEFAULT '[]'::jsonb;