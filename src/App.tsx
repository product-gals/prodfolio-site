
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Landing from "./pages/Landing";

import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import AuthModal from "./components/AuthModal";


import PortfolioView from "./pages/PortfolioView";
import PortfolioBuilder from "./components/portfolio/PortfolioBuilder";
import PortfolioPreview from "./pages/PortfolioPreview";
import AppLayout from "@/components/layout/AppLayout";
import Portfolios from "@/pages/Portfolios";


import EditPortfolio from "./pages/EditPortfolio";
import NewPortfolio from "./pages/NewPortfolio";
import CaseStudyView from "./pages/CaseStudyView";
import { supabase } from "@/integrations/supabase/client";
import { useAllowlistCheck } from "@/hooks/useAllowlistCheck";
import { useToast } from "@/hooks/use-toast";




const queryClient = new QueryClient();

// SECURITY: Removed hardcoded demo user - use proper authenticated sessions

// REMOVED: Unused demo builder data - demo functionality not implemented in UI

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [user, setUser] = useState(null);
  
  const { toast } = useToast();
  const { isAllowed, isChecking } = useAllowlistCheck(user);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Handle login state based on allowlist check
  useEffect(() => {
    if (!user) {
      setIsLoggedIn(false);
      return;
    }

    if (isChecking || isAllowed === null) {
      return;
    }

    if (isAllowed === true) {
      setIsLoggedIn(true);
    } else {
      toast({
        title: "Our beta is invite-only right now",
        description: "Join the waitlist: https://waitlist.prodfolio.io/",
        variant: "default"
      });
      supabase.auth.signOut();
      setIsLoggedIn(false);
    }
  }, [user, isAllowed, isChecking, toast]);
  
  // Open signup modal via query (?signup=true)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('signup') === 'true') {
        setAuthMode('signup');
        setIsAuthModalOpen(true);
      }
    } catch {}
  }, []);

  const handleLogin = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const handleSignup = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Routes>
            <Route 
              path="/" 
              element={
                <div data-testid="main-app-container">
                  <Navbar 
                    isLoggedIn={isLoggedIn}
                    onLogin={handleLogin}
                    onSignup={handleSignup}
                    onLogout={async () => { await supabase.auth.signOut(); handleLogout(); }}
                  />
                  {isLoggedIn 
                    ? <Navigate to="/app/portfolios" replace /> 
                    : <Landing onSignup={handleSignup} onLogin={handleLogin} />
                  }
                </div>
              }
            />
            
            {/* Legacy redirects */}
            <Route path="/dashboard" element={<Navigate to="/app/portfolios" replace />} />
            <Route path="/settings" element={<Navigate to="/app/settings" replace />} />
            {/* App area */}
            <Route path="/app" element={isLoggedIn ? <AppLayout onLogout={handleLogout} /> : <Navigate to="/" replace />}>
              <Route index element={<Navigate to="portfolios" replace />} />
              <Route path="portfolios" element={<Portfolios user={user || null} />} />
              <Route path="portfolios/new" element={<NewPortfolio />} />
              <Route path="builder" element={
                <EditPortfolio />
              } />
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* Block any /invite-only routes - redirect to home */}
            <Route path="/invite-only" element={<Navigate to="/" replace />} />
            <Route path="/invite-only/*" element={<Navigate to="/" replace />} />

            
            <Route path="/portfolio/preview/:draftId" element={<PortfolioPreview />} />
            <Route path="/p/:slug" element={<PortfolioView />} />
            <Route path="/p/:slug/case-study/:caseStudySlug" element={
              <CaseStudyView />
            } />
            
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AuthModal 
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
            mode={authMode}
            onSuccess={handleAuthSuccess}
          />
          
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
