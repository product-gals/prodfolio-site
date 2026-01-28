import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import prodfolioLogoProd from "@/assets/prodfolio-logo-prod.png";
import prodfolioIcon from "@/assets/prodfolio-icon.png";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWhoItsForOpen, setIsWhoItsForOpen] = useState(false);
  const whoItsForRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (whoItsForRef.current && !whoItsForRef.current.contains(event.target as Node)) {
        setIsWhoItsForOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-navy focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:font-semibold">
      Skip to content
    </a>
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 bg-[#100D22]/80 backdrop-blur-md border-b border-white/20 ${
        isScrolled
          ? "shadow-lg"
          : "shadow-sm"
      }`}
      aria-label="Main navigation"
    >
      <div className="prodfolio-container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={prodfolioLogoProd} 
                alt="Prodfolio - Show Your Work. Own Your Impact." 
                className="h-16 md:h-20 hidden md:block drop-shadow-[0_0_20px_rgba(158,133,249,0.4)] transition-all hover:drop-shadow-[0_0_25px_rgba(158,133,249,0.6)]"
              />
              <img 
                src={prodfolioIcon} 
                alt="Prodfolio" 
                className="h-16 md:hidden drop-shadow-[0_0_20px_rgba(158,133,249,0.4)]"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="font-medium text-white hover:text-white/80 transition-colors"
            >
              Home
            </Link>

            {/* Who it's for Dropdown */}
            <div className="relative" ref={whoItsForRef}>
              <button
                onClick={() => setIsWhoItsForOpen(!isWhoItsForOpen)}
                onKeyDown={(e) => { if (e.key === 'Escape') setIsWhoItsForOpen(false); }}
                className="font-medium text-white hover:text-white/80 transition-colors flex items-center gap-1"
                aria-expanded={isWhoItsForOpen}
                aria-haspopup="true"
              >
                Who it's for
                <ChevronDown className={`w-4 h-4 transition-transform ${isWhoItsForOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {isWhoItsForOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#100D22]/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl py-2" role="menu">
                  <Link
                    to="/features"
                    className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsWhoItsForOpen(false)}
                    role="menuitem"
                  >
                    Product Managers
                  </Link>
                  <Link
                    to="/for-career-changers"
                    className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsWhoItsForOpen(false)}
                    role="menuitem"
                  >
                    Career Changers
                  </Link>
                  <Link
                    to="/for-hiring-managers"
                    className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsWhoItsForOpen(false)}
                    role="menuitem"
                  >
                    Hiring Managers
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/examples"
              className="font-medium text-white hover:text-white/80 transition-colors"
            >
              Portfolio Examples
            </Link>
            <Link
              to="/pricing"
              className="font-medium text-white hover:text-white/80 transition-colors"
            >
              Pricing
            </Link>

            <div className="flex items-center space-x-2 ml-4">
              <Button 
                asChild 
                variant="outline" 
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <a href="https://app.prodfolio.io/login" target="_blank" rel="noopener noreferrer">Log In</a>
              </Button>
              <Button
                asChild
                className="bg-white text-primary hover:bg-white/90 transition-all px-5 py-2.5 h-auto shadow-md shadow-white/10"
              >
                <a href="https://app.prodfolio.io/sign-up" target="_blank" rel="noopener noreferrer">Build your Prodfolio free</a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-white/80 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/20 py-3 bg-white/10 backdrop-blur-md">
          <div className="prodfolio-container space-y-2">
            <Link
              to="/"
              className="block py-2 font-medium text-white hover:text-white/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/examples"
              className="block py-2 font-medium text-white hover:text-white/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio Examples
            </Link>
            <Link
              to="/pricing"
              className="block py-2 font-medium text-white hover:text-white/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>

            {/* Who it's for Section */}
            <div className="pt-2 border-t border-white/10">
              <p className="py-2 text-white/60 text-sm font-medium">Who it's for</p>
              <Link
                to="/features"
                className="block py-2 pl-4 font-medium text-white hover:text-white/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Product Managers
              </Link>
              <Link
                to="/for-career-changers"
                className="block py-2 pl-4 font-medium text-white hover:text-white/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Career Changers
              </Link>
              <Link
                to="/for-hiring-managers"
                className="block py-2 pl-4 font-medium text-white hover:text-white/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hiring Managers
              </Link>
            </div>
            <Button asChild variant="ghost" className="w-full text-white hover:bg-white/10">
              <a href="https://app.prodfolio.io/login" target="_blank" rel="noopener noreferrer">Log In</a>
            </Button>
            <Button asChild className="w-full bg-white text-primary hover:bg-white/90 py-2.5 h-auto shadow-md shadow-white/10">
              <a href="https://app.prodfolio.io/sign-up" target="_blank" rel="noopener noreferrer">Build your Prodfolio free</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
