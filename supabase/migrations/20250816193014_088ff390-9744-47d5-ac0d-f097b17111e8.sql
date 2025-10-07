-- Create allowlist_emails table
CREATE TABLE public.allowlist_emails (
  email text PRIMARY KEY,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  added_by text,
  notes text
);

-- Enable RLS on the table
ALTER TABLE public.allowlist_emails ENABLE ROW LEVEL SECURITY;

-- Create policy for admin access only (we'll handle admin check in the app)
CREATE POLICY "Admin users can manage allowlist" 
ON public.allowlist_emails 
FOR ALL 
USING (true) 
WITH CHECK (true);

-- Insert some initial test emails if needed
INSERT INTO public.allowlist_emails (email, notes) VALUES 
('admin@example.com', 'Initial admin user'),
('test@example.com', 'Test user');