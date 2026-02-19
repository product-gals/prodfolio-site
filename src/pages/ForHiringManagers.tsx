import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Clock, CheckCircle, Users, FileText, Target, Quote, Copy } from "lucide-react";
import { useState } from "react";

const ForHiringManagers = () => {
  const heroAnimation = useScrollAnimation();
  const benefitsAnimation = useScrollAnimation();
  const evaluateAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();
  const [copied, setCopied] = useState(false);

  useSEO({
    title: "Prodfolio for Hiring Managers | Evaluate PM Candidates Better",
    description: "See how product manager candidates actually think. Portfolios reveal what resumes and interviews can't. Encourage your candidates to share their thinking.",
    canonical: "https://prodfolio.io/for-hiring-managers",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Prodfolio for Hiring Managers",
      "description": "Resources for hiring managers evaluating product management candidates.",
      "url": "https://prodfolio.io/for-hiring-managers"
    }
  });

  const shareText = "We encourage candidates to share a portfolio showcasing their product thinking. You can build one for free at prodfolio.io";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen gradient-mesh-bg" id="main-content" role="main">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-28 pb-6 px-4 ${heroAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container text-center max-w-[1200px] mx-auto">
          <p className="text-lg text-white/80 mb-4 font-medium">For Hiring Managers</p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
            Skip the guesswork
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
            See real product thinking before the first interview.
          </p>
        </div>
      </section>

      {/* Why Portfolios Change Hiring */}
      <section
        ref={benefitsAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 ${benefitsAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Why portfolios change PM hiring
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              The best signal for PM capability isn't interview performance—it's seeing how they actually work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <article className="glass-card p-8">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">See authentic thinking</h3>
              <p className="text-white/70 leading-relaxed">
                Portfolios reveal how candidates identify problems, design solutions, and navigate trade-offs: the real work of product management.
              </p>
            </article>

            <article className="glass-card p-8">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Reduce interview guesswork</h3>
              <p className="text-white/70 leading-relaxed">
                Come to interviews with context. Ask deeper questions. Spend less time on basics and more on fit and collaboration style.
              </p>
            </article>

            <article className="glass-card p-8">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Compare candidates fairly</h3>
              <p className="text-white/70 leading-relaxed">
                Structured portfolios make it easier to compare candidates on substance, not just interview polish or presentation skills.
              </p>
            </article>
          </div>

          {/* Quote */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="glass-card p-8">
              <Quote className="w-8 h-8 text-primary/50 mb-4" />
              <p className="text-lg text-white/90 italic mb-4">
                "A strong portfolio helps cut through the noise. A product manager's portfolio showcases how they define problems, apply thinking and the impact of what they shipped."
              </p>
              <p className="text-white/70 font-medium">Heidi R., Product Recruiter</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Look For */}
      <section
        ref={evaluateAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-6 pb-6 px-4 ${evaluateAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              What to look for in a PM portfolio
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              The best portfolios demonstrate these PM capabilities through real examples.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="glass-card p-6 flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Process documentation</h3>
                <p className="text-white/70 text-sm">
                  How did they approach the problem? What methods did they use for discovery, validation, and prioritization?
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Strategic trade-offs</h3>
                <p className="text-white/70 text-sm">
                  What alternatives did they consider? How did they make decisions under uncertainty and constraints?
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Quantified impact with context</h3>
                <p className="text-white/70 text-sm">
                  Not just metrics, but what they mean. Before/after comparisons, timeframes, and why these outcomes mattered.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Communication clarity</h3>
                <p className="text-white/70 text-sm">
                  Can they explain complex topics clearly? Do they tailor their communication for different audiences?
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Honest reflection</h3>
                <p className="text-white/70 text-sm">
                  Do they acknowledge what didn't work? What would they do differently? Learning from failure shows maturity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Encourage Candidates CTA */}
      <section
        ref={ctaAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-6 pb-12 px-4 cta-glow-section ${ctaAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[600px] mx-auto">
          <div className="bg-[#9E85F9]/10 backdrop-blur-md rounded-2xl border border-[#9E85F9]/25 shadow-[0_8px_32px_rgba(158,133,249,0.2)] p-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-white mb-2">
              Encourage your candidates to use Prodfolio
            </h2>
            <p className="text-white/70 mb-6">
              Add this to your job postings or candidate communications. Candidates can create and publish a full portfolio for free.
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-left mb-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-navy/90 italic">
                    "We encourage candidates to share a portfolio showcasing their product thinking. You can build one for free at <a href="https://prodfolio.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">prodfolio.io</a>"
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyToClipboard}
                  className="flex-shrink-0 border-primary text-primary hover:bg-primary/10"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button
                asChild
                className="px-6 py-5 h-auto text-base bg-white text-primary font-semibold hover:bg-white/90 hover:scale-105 transition-all shadow-xl rounded-xl"
              >
                <a href="mailto:partnerships@prodfolio.io?subject=Partnership inquiry">
                  Partner with us
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-6 py-5 h-auto text-base bg-transparent border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl"
              >
                <a href="/examples">
                  See example portfolios
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForHiringManagers;
