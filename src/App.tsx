
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import PortfolioView from "./pages/PortfolioView";
import CaseStudyView from "./pages/CaseStudyView";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Partnerships from "./pages/Partnerships";
import TermsOfService from "./pages/TermsOfService";
import Quiz from "./pages/Quiz";
import About from "./pages/About";

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
            <Route path="/resources" element={<Resources />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/quiz" element={<Quiz />} />
            
            {/* Public portfolio views */}
            <Route path="/p/:slug" element={<PortfolioView />} />
            <Route path="/p/:slug/case-study/:caseStudySlug" element={<CaseStudyView />} />
            
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
