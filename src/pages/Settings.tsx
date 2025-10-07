import React, { useEffect, useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useSEO } from "@/hooks/useSEO";
interface ProfileForm {
  name: string;
  title: string;
  linkedin: string;
  email: string;
}
const Settings: React.FC = () => {
  // SEO for settings page
  useSEO({
    title: "Account Settings | Prodfolio Dashboard",
    description: "Manage your Prodfolio account settings, profile information, and preferences.",
    noindex: true // Private user settings page
  });

  const [profile, setProfile] = useState<ProfileForm>({
    name: "",
    title: "",
    linkedin: "",
    email: ""
  });
  const [authProvider, setAuthProvider] = useState<"email" | "google" | "unknown">("unknown");
  const [loading, setLoading] = useState(true);
  const initials = useMemo(() => {
    if (profile.name) return profile.name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
    if (profile.email) return profile.email[0]?.toUpperCase() ?? "U";
    return "U";
  }, [profile.name, profile.email]);

  // SECURITY: Enhanced password validation with better requirements
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");
  
  // Strong password validation: min 8 chars, contains uppercase, lowercase, number, special char
  const isStrongPassword = (password: string): boolean => {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return minLength && hasUpper && hasLower && hasNumber && hasSpecial;
  };
  
  const isPwdValid = pwd.length >= 8 && pwd === pwd2 && isStrongPassword(pwd);
  useEffect(() => {
    let mounted = true;
    const init = async () => {
      try {
        // Get current authenticated user
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        
        if (authError) {
          console.error('Auth error:', authError);
          if (mounted) setLoading(false);
          return;
        }

        if (!user?.id) {
          if (mounted) setLoading(false);
          return;
        }

        const email = user.email ?? "";
        const provider = user.app_metadata?.provider as any || "unknown";
        if (!mounted) return;

        // Load profile using user_id (single source of truth)
        const {
          data: profileData,
          error
        } = await supabase.from('profiles').select('*').eq('user_id', user.id).maybeSingle();
        
        if (error && error.code !== 'PGRST116') {
          console.error('Profile fetch error:', error);
          // Don't show error toast for missing profile, that's normal for new users
        }

        // Initialize profile data, ensuring email from auth takes precedence
        setProfile({
          name: profileData?.name || user.user_metadata?.name || "",
          title: profileData?.title || "",
          linkedin: profileData?.linkedin_url || "",
          email: email // Always use auth email as source of truth
        });
        setAuthProvider(provider === "google" ? "google" : provider === "email" ? "email" : "unknown");
      } catch (e) {
        console.error('Settings initialization error:', e);
        toast({
          title: "Failed to load settings",
          description: "Please refresh the page and try again.",
          variant: "destructive"
        });
      } finally {
        if (mounted) setLoading(false);
      }
    };
    init();
    return () => {
      mounted = false;
    };
  }, []);
  const saveProfile = async () => {
    try {
      // Get current authenticated user (single source of truth)
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError) {
        throw new Error(`Authentication error: ${authError.message}`);
      }
      
      if (!user?.id) {
        throw new Error('User not authenticated. Please log in and try again.');
      }

      // Validate required fields
      if (!profile.name.trim()) {
        throw new Error('Name is required');
      }

      const profileData = {
        id: user.id,  // Use auth user ID as profile ID
        user_id: user.id,  // Keep user_id for consistency
        name: profile.name.trim(),
        title: profile.title.trim(),
        email: profile.email.trim(),
        linkedin_url: profile.linkedin.trim() || null
      };

      const { data, error } = await supabase.from('profiles').upsert(profileData, {
        onConflict: 'user_id'
      }).select();
      
      if (error) {
        throw new Error(`Failed to save profile: ${error.message}`);
      }
      
      toast({
        title: "✅ Profile saved! Your updates will now show across your portfolios."
      });
    } catch (e: any) {
      toast({
        title: "Save failed",
        description: e?.message || "Please try again or contact support if the issue persists.",
        variant: "destructive"
      });
    }
  };
  const handleChangePassword = async () => {
    if (!isPwdValid) {
      toast({
        title: "Invalid password",
        description: "Password must be at least 8 characters and contain uppercase, lowercase, number, and special character. Passwords must match.",
        variant: "destructive"
      });
      return;
    }
    try {
      const {
        error
      } = await supabase.auth.updateUser({
        password: pwd
      });
      if (error) throw error;
      setPwd("");
      setPwd2("");
      toast({
        title: "Password updated"
      });
    } catch (e: any) {
      toast({
        title: "Update failed",
        description: e?.message || "Try again.",
        variant: "destructive"
      });
    }
  };
  return <TooltipProvider>
    <div className="min-h-screen bg-muted/30">
      <div className="prodfolio-container py-8">
        {/* Simple header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground">Settings</h1>
          <p className="text-sm text-muted-foreground mt-3">Manage your account and preferences.</p>
        </div>

        {/* Cards container */}
        <div className="space-y-6 max-w-2xl">
          {/* Profile Card */}
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar className="h-12 w-12 cursor-pointer">
                      <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="text-xs">In beta we're unable to store files but in the future we will allow the option to upload a photo.</p>
                  </TooltipContent>
                </Tooltip>
                <div>
                  <CardTitle className="text-lg">Account Profile</CardTitle>
                  <p className="text-sm text-muted-foreground">These details are shared across any portfolio you create.</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input data-testid="profile-name-input" id="name" value={profile.name} onChange={e => setProfile({
                    ...profile,
                    name: e.target.value
                  })} placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" value={profile.title} onChange={e => setProfile({
                    ...profile,
                    title: e.target.value
                  })} placeholder="PM" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn URL (optional)</Label>
                  <Input id="linkedin" type="url" value={profile.linkedin} onChange={e => setProfile({
                    ...profile,
                    linkedin: e.target.value
                  })} placeholder="https://www.linkedin.com/in/your-handle" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={profile.email} onChange={e => setProfile({
                    ...profile,
                    email: e.target.value
                  })} disabled={authProvider === "google"} readOnly={authProvider === "google"} />
                  {authProvider === "google" && <p className="text-xs text-muted-foreground">Email is managed by Google sign‑in</p>}
                </div>
              </div>
              <div className="pt-2">
                <Button data-testid="settings-save" onClick={saveProfile} disabled={loading}>
                  Save Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Authentication Card */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Authentication</CardTitle>
              <p className="text-sm text-muted-foreground">Only needed if you signed up with email. If you use Google, manage your password there. </p>
              
            </CardHeader>
            <CardContent>
              {authProvider === "google" ? <div className="flex items-center gap-3 text-muted-foreground">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span>Signed in with Google</span>
                </div> : <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="pwd">New password</Label>
                      <Input 
                        id="pwd" 
                        type="password" 
                        value={pwd} 
                        onChange={e => setPwd(e.target.value)} 
                        placeholder="Min 8 chars, mixed case, number, special char" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pwd2">Confirm new password</Label>
                      <Input id="pwd2" type="password" value={pwd2} onChange={e => setPwd2(e.target.value)} placeholder="Re-enter password" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button onClick={handleChangePassword} disabled={!isPwdValid}>
                      Change Password
                    </Button>
                  </div>
                </div>}
            </CardContent>
          </Card>

          {/* Legal Card */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Legal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://sugared-cactus-5d5.notion.site/Prodfolio-Privacy-Policy-241f710757778017aa6dc57283be68d7?pvs=74" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline underline-offset-4">
                  Privacy Policy
                </a>
                
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </TooltipProvider>;
};
export default Settings;