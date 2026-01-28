import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Star } from "lucide-react";

import meaganPhoto from "@/assets/meagan-glenn.jpeg";
import santiPhoto from "@/assets/santiana-diaz.png";
import snehaPhoto from "@/assets/sneha-example.jpeg";
import olympiaPhoto from "@/assets/olympia-todisco-example.jpeg";

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
      description: "See a mix of B2B and B2C case studies.",
      highlight: "See how to: balance B2B and B2C case studies",
      link: "https://meaganglenn.me",
      stage: "B2C & B2B SaaS",
      photo: meaganPhoto
    },
    {
      name: "Santiana Brace",
      role: "Co-founder, Prodfolio",
      description: "See the SIGNAL framework in action from a PM that transitioned from QA into product.",
      highlight: "See how to: turn side projects into case studies",
      link: "https://app.prodfolio.io/p/santi-brace-2",
      stage: "B2B SaaS",
      photo: santiPhoto
    },
    {
      name: "Sneha Shah",
      role: "Product Manager",
      description: "See a customized, well-organized portfolio. Designed to stand out.",
      highlight: "See how to: quantify impact with clear metrics",
      link: "https://app.prodfolio.io/p/sneha-shah",
      stage: "Insurance",
      photo: snehaPhoto
    },
    {
      name: "Olympia Bardis",
      role: "Senior Product Manager",
      description: "A product leader showing a career narrative across multiple case studies.",
      highlight: "See how to: incorporate visuals into your case studies",
      link: "https://app.prodfolio.io/p/olympia-bardis",
      stage: "Fintech",
      photo: olympiaPhoto
    }
  ];

  return (
    <div className="min-h-screen gradient-mesh-bg" id="main-content" role="main">
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
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-[1.02] hover:-translate-y-1 flex flex-col"
              >
                {/* Header with avatar and badge */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={portfolio.photo}
                    alt={portfolio.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-heading font-bold text-navy">{portfolio.name}</h3>
                        <p className="text-navy/70 text-sm">{portfolio.role}</p>
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

                {/* Highlight and CTA - pushed to bottom together */}
                <div className="mt-auto">
                  {/* Highlight tag */}
                  <div className="flex items-center gap-2 mb-5 bg-primary/10 rounded-lg px-3 py-2">
                    <Star className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-navy/80 text-sm font-medium">{portfolio.highlight}</span>
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className="w-full !bg-coral text-white hover:!bg-coral/90 font-semibold rounded-xl inline-flex items-center justify-center gap-2"
                  >
                    <a href={portfolio.link} target="_blank" rel="noopener noreferrer">
                      View Portfolio
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* "You here?" CTA Card - standalone row */}
          <div className="max-w-md mx-auto">
            <article className="bg-white/95 backdrop-blur-md border border-white/40 rounded-2xl px-6 py-5 text-center hover:bg-white transition-all group">
              <h3 className="text-lg font-heading font-bold text-navy mb-1">
                You here?
              </h3>
              <p className="text-navy/70 text-sm mb-3 leading-relaxed">
                Want to be featured? We're building a gallery of PM portfolios across industries and career stages.
              </p>
              <div className="bg-primary text-white rounded-lg px-4 py-2 inline-flex items-center gap-2">
                <span className="font-medium text-sm">Click the chat icon to submit yours</span>
                <span className="text-lg">👉</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* What Makes a Great Portfolio */}
      <section className="py-12 px-4">
        <div className="prodfolio-container max-w-[1000px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              What makes a great PM portfolio?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-5 text-center shadow-lg">
              <div className="text-3xl font-bold text-navy mb-2">1-3</div>
              <div className="text-sm text-navy/70">Strong case studies</div>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-lg">
              <div className="text-2xl font-bold text-navy mb-2">Process</div>
              <div className="text-sm text-navy/70">How you think</div>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-lg">
              <div className="text-2xl font-bold text-navy mb-2">Metrics</div>
              <div className="text-sm text-navy/70">Quantified impact</div>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-lg">
              <div className="text-2xl font-bold text-navy mb-2">Story</div>
              <div className="text-sm text-navy/70">Connected narrative</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-12 px-4 ${ctaAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[600px] mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-white mb-2">
              Ready to build yours?
            </h2>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              Join the PMs showcasing their work with confidence. Start free, no design skills needed.
            </p>
            <Button
              asChild
              className="px-8 py-5 h-auto text-base bg-white text-primary font-semibold hover:bg-white/90 hover:scale-105 transition-all shadow-xl rounded-xl"
            >
              <a href="https://app.prodfolio.io/sign-up">Start Your Portfolio Free</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Examples;
