
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Partnerships from "./pages/Partnerships";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import ForCareerChangers from "./pages/ForCareerChangers";
import Examples from "./pages/Examples";
import HowItWorks from "./pages/HowItWorks";
import ForHiringManagers from "./pages/ForHiringManagers";
import Features from "./pages/Features";

const queryClient = new QueryClient();

const App = () => {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Routes>
            <Route 
              path="/" 
              element={
                <div data-testid="main-app-container">
                  <Navbar />
                  <Landing />
                </div>
              }
            />
            
            {/* Marketing pages */}
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/podcast" element={<Resources />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/for-career-changers" element={<ForCareerChangers />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/for-hiring-managers" element={<ForHiringManagers />} />
            <Route path="/features" element={<Features />} />

            {/* 404 for all other routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
