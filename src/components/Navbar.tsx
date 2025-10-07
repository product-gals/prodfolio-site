import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="prodfolio-container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-2xl text-navy">
              Prodfolio
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Button asChild variant="outline">
              <a href="https://app.prodfolio.io/login">Log In</a>
            </Button>
            <Button asChild>
              <a href="https://app.prodfolio.io/signup">Start your portfolio</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-navy-light"
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
        <div className="md:hidden border-t border-gray-200 py-2">
          <div className="prodfolio-container space-y-2">
            <Button asChild variant="outline" className="w-full">
              <a href="https://app.prodfolio.io/login">Log In</a>
            </Button>
            <Button asChild className="w-full">
              <a href="https://app.prodfolio.io/signup">Start your portfolio</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
