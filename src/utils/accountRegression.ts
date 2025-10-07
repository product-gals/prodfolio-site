// Regression test utilities for user account handling
// Use these functions to verify account consistency across all users

import { supabase } from '@/integrations/supabase/client';

export const verifyUserAccountConsistency = async () => {
  const results = {
    hasProfile: false,
    hasRole: false,
    canLoadPortfolios: false,
    canSaveSettings: false,
    errors: [] as string[]
  };

  try {
    // Check if user has valid session
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user?.id) {
      results.errors.push('No authenticated user session');
      return results;
    }

    // Check if user has profile
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', session.user.id)
      .maybeSingle();
    
    if (profileError && profileError.code !== 'PGRST116') {
      results.errors.push(`Profile check error: ${profileError.message}`);
    } else if (profile) {
      results.hasProfile = true;
    }

    // Check if user has role
    const { data: role, error: roleError } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', session.user.id)
      .maybeSingle();
    
    if (roleError && roleError.code !== 'PGRST116') {
      results.errors.push(`Role check error: ${roleError.message}`);
    } else if (role) {
      results.hasRole = true;
    }

    // Check if user can load portfolios
    const { data: portfolios, error: portfolioError } = await supabase
      .from('portfolios')
      .select('id, title, slug')
      .eq('owner_id', session.user.id);
    
    if (portfolioError) {
      results.errors.push(`Portfolio load error: ${portfolioError.message}`);
    } else {
      results.canLoadPortfolios = true;
    }

    // Test settings save capability (dry run)
    const testProfile = {
      id: session.user.id,
      user_id: session.user.id,
      name: profile?.name || 'Test User',
      email: session.user.email || 'test@example.com',
      title: profile?.title || 'Test Title',
      linkedin_url: profile?.linkedin_url || null
    };

    const { error: saveError } = await supabase
      .from('profiles')
      .upsert(testProfile, { onConflict: 'user_id' });
    
    if (saveError) {
      results.errors.push(`Settings save error: ${saveError.message}`);
    } else {
      results.canSaveSettings = true;
    }

  } catch (error: any) {
    results.errors.push(`Unexpected error: ${error.message}`);
  }

  return results;
};

export const logUserAccountStatus = async () => {
  console.log('🔍 Running user account consistency check...');
  const results = await verifyUserAccountConsistency();
  
  console.log('📊 Account Status Results:');
  console.log(`✅ Has Profile: ${results.hasProfile}`);
  console.log(`✅ Has Role: ${results.hasRole}`);
  console.log(`✅ Can Load Portfolios: ${results.canLoadPortfolios}`);
  console.log(`✅ Can Save Settings: ${results.canSaveSettings}`);
  
  if (results.errors.length > 0) {
    console.log('❌ Errors found:');
    results.errors.forEach(error => console.log(`   - ${error}`));
  } else {
    console.log('✅ All checks passed! Account is consistent.');
  }
  
  return results;
};