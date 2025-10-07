-- Add missing fields to portfolios table for the publish flow
ALTER TABLE public.portfolios 
ADD COLUMN view_count integer NOT NULL DEFAULT 0,
ADD COLUMN cover text;