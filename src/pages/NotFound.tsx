import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md mx-auto p-6">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist. It may have been moved or deleted.
        </p>
        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Return to Home
          </a>
          <div>
            <a 
              href="/p/demo" 
              className="text-primary hover:underline"
            >
              View Demo Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
