import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
      <div className="bg-[#100D22]/95 backdrop-blur-xl border-t border-white/15 px-4 py-3 flex items-center gap-3">
        <Button asChild className="flex-1 bg-white text-navy hover:bg-white/90 font-semibold py-3 h-auto rounded-xl shadow-lg text-sm">
          <a href="https://app.prodfolio.io/sign-up">
            Start Free
          </a>
        </Button>
        <Button asChild variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 py-3 h-auto rounded-xl text-sm">
          <Link to="/quiz">Quiz</Link>
        </Button>
        <button
          onClick={() => setIsDismissed(true)}
          className="text-white/50 hover:text-white/80 transition-colors p-1"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
