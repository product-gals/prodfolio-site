import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Star, Plus } from "lucide-react";

const Examples = () => {
  const heroAnimation = useScrollAnimation();
  const galleryAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  useSEO({
    title: "PM Portfolio Examples | Product Manager Portfolio Samples | Prodfolio",
    description: "See real product manager portfolio examples built with Prodfolio. Get inspired by PMs at every career stage and build your own portfolio.",
    canonical: "https://prodfolio.io/examples",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "PM Portfolio Examples",
      "description": "A collection of product manager portfolio examples showcasing different styles and career stages.",
      "url": "https://prodfolio.io/examples"
    }
  });

  const featuredPortfolios = [
    {
      name: "Meagan Glenn",
      role: "Co-founder, Prodfolio",
      description: "Product manager and career coach showcasing a decade of PM experience with case studies spanning B2B and B2C products.",
      highlight: "Great example of storytelling and career narrative",
      link: "https://meaganglenn.me",
      stage: "Senior PM",
      initials: "MG",
      avatarBg: "bg-primary"
    },
    {
      name: "Santiana Brace",
      role: "Co-founder, Prodfolio",
      description: "Product manager demonstrating the SIGNAL framework in action with detailed case studies and clear impact metrics.",
      highlight: "Strong process documentation",
      link: "https://app.prodfolio.io/p/santi-brace-2",
      stage: "Mid-level PM",
      initials: "SB",
      avatarBg: "bg-coral"
    },
    {
      name: "Sneha Shah",
      role: "Product Manager",
      description: "A clean, well-organized portfolio showcasing product thinking and execution across multiple projects.",
      highlight: "Clear impact metrics",
      link: "https://app.prodfolio.io/p/sneha-shah",
      stage: "Mid-level PM",
      initials: "SS",
      avatarBg: "bg-[#6B8E8E]"
    },
    {
      name: "Olympia Bardis",
      role: "Product Manager",
      description: "Portfolio highlighting user-focused product development with compelling case studies and outcomes.",
      highlight: "Strong user empathy",
      link: "https://app.prodfolio.io/p/olympia-bardis",
      stage: "Mid-level PM",
      initials: "OB",
      avatarBg: "bg-[#8B7EC8]"
    }
  ];

  return (
    <div className="min-h-screen gradient-mesh-bg">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-16 pb-8 px-4 ${heroAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container text-center max-w-[1200px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
            See what's possible
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-2">
            Real portfolios from PMs at every stage. Get inspired, then build your own.
          </p>
        </div>
      </section>

      {/* Featured Portfolios */}
      <section
        ref={galleryAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-8 px-4 ${galleryAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1000px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {featuredPortfolios.map((portfolio, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-[1.02] hover:-translate-y-1"
              >
                {/* Header with avatar and badge */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${portfolio.avatarBg} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {portfolio.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-heading font-bold text-navy">{portfolio.name}</h3>
                        <p className="text-navy/60 text-sm">{portfolio.role}</p>
                      </div>
                      <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                        {portfolio.stage}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-navy/70 mb-4 leading-relaxed text-sm">
                  {portfolio.description}
                </p>

                {/* Highlight tag */}
                <div className="flex items-center gap-2 mb-5 bg-coral/10 rounded-lg px-3 py-2">
                  <Star className="w-4 h-4 text-coral flex-shrink-0" />
                  <span className="text-navy/80 text-sm">{portfolio.highlight}</span>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full bg-navy text-white hover:bg-navy/90 font-semibold rounded-xl inline-flex items-center justify-center gap-2"
                >
                  <a href={portfolio.link} target="_blank" rel="noopener noreferrer">
                    View Portfolio
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </article>
            ))}
          </div>

          {/* "You here?" CTA Card - standalone row */}
          <div className="max-w-md mx-auto">
            <article className="bg-white/10 backdrop-blur-md border-2 border-dashed border-white/40 rounded-2xl p-6 text-center hover:bg-white/15 transition-all hover:border-white/60 group">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <Plus className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                You here?
              </h3>
              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                Want to be featured? We're building a gallery of PM portfolios across industries and career stages.
              </p>
              <Button
                asChild
                className="bg-white text-navy hover:bg-white/90 font-semibold rounded-xl inline-flex items-center justify-center gap-2"
              >
                <a href="mailto:hello@prodfolio.io?subject=Feature my portfolio">
                  Submit Your Portfolio
                </a>
              </Button>
            </article>
          </div>
        </div>
      </section>

      {/* What Makes a Great Portfolio */}
      <section className="py-12 px-4">
        <div className="prodfolio-container max-w-[1000px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              What makes a great PM portfolio?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">1-3</div>
              <div className="text-sm text-white/80">Strong case studies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20">
              <div className="text-2xl font-bold text-white mb-2">Process</div>
              <div className="text-sm text-white/80">How you think</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20">
              <div className="text-2xl font-bold text-white mb-2">Metrics</div>
              <div className="text-sm text-white/80">Quantified impact</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20">
              <div className="text-2xl font-bold text-white mb-2">Story</div>
              <div className="text-sm text-white/80">Connected narrative</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-12 px-4 ${ctaAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container text-center max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
            Ready to build yours?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Join the PMs showcasing their work with confidence. Start free, no design skills needed.
          </p>
          <Button
            asChild
            className="px-8 py-6 h-auto text-lg bg-white text-navy hover:bg-white/90 shadow-xl font-semibold rounded-xl transition-all hover:scale-105"
          >
            <a href="https://app.prodfolio.io/sign-up">Start Your Portfolio Free</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Examples;
