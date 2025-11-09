import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import prodfolioLogoNew from "@/assets/prodfolio-logo-new.png";
import prodfolioIcon from "@/assets/prodfolio-icon.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-500 border-b border-[#E2D9FF] ${
        isScrolled 
          ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]" 
          : "bg-white/85 backdrop-blur-[12px]"
      }`}
    >
      <div className="prodfolio-container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={prodfolioLogoNew} 
                alt="Prodfolio - Show Your Work. Own Your Impact." 
                className="h-12 md:h-14 hidden md:block"
              />
              <img 
                src={prodfolioIcon} 
                alt="Prodfolio" 
                className="h-14 md:hidden"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/about" 
              className="text-sm font-medium text-[#1A1A1A] hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/pricing" 
              className="text-sm font-medium text-[#1A1A1A] hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link 
              to="/resources" 
              className="text-sm font-medium text-[#1A1A1A] hover:text-primary transition-colors"
            >
              Resources
            </Link>
            <div className="flex items-center space-x-2 ml-4">
              <Button 
                asChild 
                variant="outline" 
                className="border-primary/30 text-[#1A1A1A] hover:bg-primary/5 hover:border-primary/50 transition-all"
              >
                <a href="https://app.prodfolio.io/login">Log In</a>
              </Button>
              <Button 
                asChild 
                className="btn-gradient hover:bg-white hover:text-primary hover:border-primary hover:border-2 transition-all"
              >
                <a href="https://app.prodfolio.io/signup">Start your portfolio</a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#3B2966] hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2D9FF] py-3 bg-white/95 backdrop-blur-[12px]">
          <div className="prodfolio-container space-y-2">
            <Link 
              to="/about" 
              className="block py-2 text-sm font-medium text-[#1A1A1A] hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/pricing" 
              className="block py-2 text-sm font-medium text-[#1A1A1A] hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/resources" 
              className="block py-2 text-sm font-medium text-[#1A1A1A] hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Button asChild variant="outline" className="w-full border-primary/30 hover:bg-primary/5">
              <a href="https://app.prodfolio.io/login">Log In</a>
            </Button>
            <Button asChild className="w-full btn-gradient">
              <a href="https://app.prodfolio.io/signup">Start your portfolio</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
