import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import prodfolioLogoProd from "@/assets/prodfolio-logo-prod.png";
import prodfolioIcon from "@/assets/prodfolio-icon.png";
import BookCallModal from "@/components/BookCallModal";

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
      className={`sticky top-0 z-50 transition-all duration-500 bg-[#100D22]/80 backdrop-blur-md border-b border-white/20 ${
        isScrolled 
          ? "shadow-lg" 
          : "shadow-sm"
      }`}
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
              to="/about" 
              className="text-sm font-medium text-white hover:text-white/80 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/pricing" 
              className="text-sm font-medium text-white hover:text-white/80 transition-colors"
            >
              Pricing
            </Link>
            <Link 
              to="/podcast" 
              className="text-sm font-medium text-white hover:text-white/80 transition-colors"
            >
              Podcast
            </Link>
            <div className="flex items-center space-x-2 ml-4">
              <BookCallModal 
                trigger={
                  <Button 
                    variant="outline" 
                    className="border-white/40 bg-white/10 text-white hover:bg-white/20 transition-all inline-flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Book a 15 min call
                  </Button>
                }
              />
              <Button 
                asChild 
                variant="ghost" 
                className="text-white hover:bg-white/10 transition-all"
              >
                <a href="https://app.prodfolio.io/login">Log In</a>
              </Button>
              <Button 
                asChild 
                className="bg-white text-primary hover:bg-white/90 transition-all px-5 py-2.5 h-auto shadow-md shadow-white/10"
              >
                <a href="https://app.prodfolio.io/sign-up" target="_blank" rel="noopener noreferrer">Start your portfolio free</a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-white/80 transition-colors"
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
        <div className="md:hidden border-t border-white/20 py-3 bg-white/10 backdrop-blur-md">
          <div className="prodfolio-container space-y-2">
            <Link 
              to="/about" 
              className="block py-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/pricing" 
              className="block py-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/podcast" 
              className="block py-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Podcast
            </Link>
            <BookCallModal 
              trigger={
                <Button variant="outline" className="w-full border-white/40 bg-white/10 text-white hover:bg-white/20 inline-flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Book a 15 min call
                </Button>
              }
            />
            <Button asChild variant="ghost" className="w-full text-white hover:bg-white/10">
              <a href="https://app.prodfolio.io/login">Log In</a>
            </Button>
            <Button asChild className="w-full bg-white text-primary hover:bg-white/90 py-2.5 h-auto shadow-md shadow-white/10">
              <a href="https://app.prodfolio.io/sign-up" target="_blank" rel="noopener noreferrer">Start your portfolio free</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
