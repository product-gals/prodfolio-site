-- Normalize existing emails to lowercase
UPDATE allowlist_emails SET email = lower(email);

-- Create unique index on lowercase email for consistent matching
DROP INDEX IF EXISTS allowlist_emails_email_key;
CREATE UNIQUE INDEX allowlist_emails_email_key ON allowlist_emails (lower(email));

-- Create a policy to allow authenticated users to read allowlist for membership check
DROP POLICY IF EXISTS "Allow authenticated users to read allowlist" ON allowlist_emails;
CREATE POLICY "Allow authenticated users to read allowlist" 
ON allowlist_emails 
FOR SELECT 
USING (auth.role() = 'authenticated');