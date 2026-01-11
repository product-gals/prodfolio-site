import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Star } from "lucide-react";

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
      stage: "Senior PM"
    },
    {
      name: "Santiana Brace",
      role: "Co-founder, Prodfolio",
      description: "Product manager demonstrating the SIGNAL framework in action with detailed case studies and clear impact metrics.",
      highlight: "Strong process documentation",
      link: "https://app.prodfolio.io/p/santi-brace-2",
      stage: "Mid-level PM"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9E85F9] via-[#C4B5FF] via-[#D6CEFF] to-[#B8A3FF]">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 ${heroAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container text-center max-w-[1200px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
            See what's possible
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-4">
            Real portfolios from PMs at every stage. Get inspired, then build your own.
          </p>
          <p className="text-white/70">
            Each portfolio is unique—find the style that fits you.
          </p>
        </div>
      </section>

      {/* Featured Portfolios */}
      <section
        ref={galleryAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-12 px-4 ${galleryAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Featured Portfolios
            </h2>
            <p className="text-navy/70">
              Learn from PMs who are showcasing their work with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {featuredPortfolios.map((portfolio, index) => (
              <article
                key={index}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/40 hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-navy">{portfolio.name}</h3>
                    <p className="text-primary font-medium text-sm">{portfolio.role}</p>
                  </div>
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {portfolio.stage}
                  </span>
                </div>

                <p className="text-navy/70 mb-4 leading-relaxed">
                  {portfolio.description}
                </p>

                <div className="flex items-center gap-2 mb-6 text-sm">
                  <Star className="w-4 h-4 text-coral" />
                  <span className="text-navy/80 italic">{portfolio.highlight}</span>
                </div>

                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl inline-flex items-center justify-center gap-2"
                >
                  <a href={portfolio.link} target="_blank" rel="noopener noreferrer">
                    View Portfolio
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-navy mb-4">
              More examples coming soon
            </h3>
            <p className="text-navy/70 mb-6">
              We're building a gallery of PM portfolios across industries and career stages. Want to be featured?
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-semibold rounded-xl"
            >
              <a href="mailto:hello@prodfolio.io?subject=Feature my portfolio">
                Submit your portfolio
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What Makes a Great Portfolio */}
      <section className="py-12 px-4 bg-white/10 backdrop-blur-sm">
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              What makes a great PM portfolio?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3-4</div>
              <p className="text-navy/70 text-sm">Strong case studies showing range</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Process</div>
              <p className="text-navy/70 text-sm">Focus on how you think, not just results</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Metrics</div>
              <p className="text-navy/70 text-sm">Quantified impact with context</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Story</div>
              <p className="text-navy/70 text-sm">A narrative that connects your work</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 ${ctaAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container text-center max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            Ready to build yours?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Join the PMs who are showcasing their work with confidence. Start free, no design skills needed.
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
