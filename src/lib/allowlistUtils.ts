import { SupabaseClient } from '@supabase/supabase-js';

export async function userIsAllowlisted(
  supabase: SupabaseClient, 
  email: string | null | undefined
): Promise<boolean> {
  if (!email) {
    console.log('allowlist check: no email provided');
    return false; // don't decide until we have an email
  }
  
  const normalized = email.trim().toLowerCase();
  console.log('allowlist check: checking email', normalized);
  
  try {
    const { data, error } = await supabase
      .from('allowlist_emails')
      .select('email')
      .eq('email', normalized)
      .maybeSingle(); // Use maybeSingle() to avoid errors when no row found
    
    if (error) {
      console.error('allowlist query error:', error);
      return false;
    }
    
    const isAllowed = !!data;
    console.log('allowlist check result:', { email: normalized, isAllowed, foundData: data });
    return isAllowed;
  } catch (error) {
    console.error('allowlist check exception:', error);
    return false;
  }
}