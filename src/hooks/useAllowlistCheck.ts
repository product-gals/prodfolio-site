import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import { userIsAllowlisted } from '@/lib/allowlistUtils';

export const useAllowlistCheck = (user: User | null) => {
  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    const checkAllowlist = async () => {
      if (!user?.email) {
        console.log('useAllowlistCheck: no user email, setting isAllowed to null');
        setIsAllowed(null);
        return;
      }

      console.log('useAllowlistCheck: checking allowlist for user:', user.email);
      setIsChecking(true);
      
      try {
        const allowed = await userIsAllowlisted(supabase, user.email);
        console.log('useAllowlistCheck: result for', user.email, ':', allowed);
        setIsAllowed(allowed);
      } catch (error) {
        console.error('useAllowlistCheck: error checking allowlist:', error);
        setIsAllowed(false);
      } finally {
        setIsChecking(false);
      }
    };

    if (user?.email) {
      checkAllowlist();
    } else {
      console.log('useAllowlistCheck: no user, setting isAllowed to null');
      setIsAllowed(null);
    }
  }, [user?.email]); // Only depend on email, not the entire user object

  return { isAllowed, isChecking };
};