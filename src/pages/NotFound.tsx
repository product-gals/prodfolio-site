import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  // SEO for 404 page
  useSEO({
    title: "Page Not Found (404) | Prodfolio",
    description: "The page you're looking for doesn't exist. Return to Prodfolio to build your product portfolio.",
    noindex: true
  });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col" id="main-content" role="main">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5 px-6 pt-28 pb-20">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy mb-6">
            Page could not be found
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Link
            to="/"
            className="inline-block text-primary hover:underline text-lg font-medium"
          >
            Go back home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
