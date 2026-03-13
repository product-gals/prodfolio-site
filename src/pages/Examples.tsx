import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { Link } from "react-router-dom";
import { ExternalLink, Star, Plus, CheckCircle, X } from "lucide-react";

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
    },
    breadcrumbs: [
      { name: "Home", url: "https://prodfolio.io" },
      { name: "Examples", url: "https://prodfolio.io/examples" },
    ],
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
        className={`pt-28 pb-2 px-4 ${heroAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container text-center max-w-[1200px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
            See <span className="gradient-text">what's possible</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-2">
            Real portfolios from PMs at every stage. Get inspired, then build your own.
          </p>
        </div>
      </section>

      {/* Featured Portfolios */}
      <section
        ref={galleryAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-4 pb-8 px-4 ${galleryAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredPortfolios.map((portfolio, index) => (
              <article
                key={index}
                className="glass-card p-6 hover:scale-[1.02] hover:-translate-y-1 flex flex-col"
              >
                {/* Header with avatar and badge */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={portfolio.photo}
                    alt={portfolio.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-white/20"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-heading font-bold text-white">{portfolio.name}</h3>
                        <p className="text-white/70 text-sm">{portfolio.role}</p>
                      </div>
                      <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                        {portfolio.stage}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 mb-4 leading-relaxed text-sm">
                  {portfolio.description}
                </p>

                {/* Highlight and CTA - pushed to bottom together */}
                <div className="mt-auto">
                  {/* Highlight tag */}
                  <div className="flex items-center gap-2 mb-5 bg-white/10 rounded-lg px-3 py-2 border border-white/15">
                    <Star className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-white/80 text-sm font-medium">{portfolio.highlight}</span>
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className="w-full bg-white text-navy hover:bg-white/90 font-semibold rounded-xl inline-flex items-center justify-center gap-2"
                  >
                    <a href={portfolio.link} target="_blank" rel="noopener noreferrer">
                      View Portfolio
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </article>
            ))}

            {/* "You here?" CTA Card - inline in grid */}
            <article className="bg-white/10 backdrop-blur-md border-2 border-dashed border-white/40 rounded-2xl px-6 py-5 text-center hover:bg-white/15 transition-all hover:border-white/60 group flex flex-col">
              <div className="flex-1 flex flex-col justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <Plus className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-1">
                  Your portfolio could be here
                </h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  Join the PMs showcasing their work. Start building for free — no design skills needed.
                </p>
              </div>
              <Button
                asChild
                className="bg-white text-navy hover:bg-white/90 font-semibold rounded-xl px-6 w-full"
              >
                <a href="https://app.prodfolio.io/sign-up">Get Started Free</a>
              </Button>
            </article>
          </div>

          {/* Before/After Comparison */}
          <div className="mt-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-8">
              The Prodfolio difference
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="glass-card p-6">
                <div className="text-coral font-heading font-bold text-sm mb-4 uppercase tracking-wide">Without a Portfolio</div>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                    <span>Spent weeks building in Notion or Squarespace</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                    <span>No structure for PM-specific case studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                    <span>Too nervous to share with hiring managers</span>
                  </li>
                </ul>
              </div>
              <div className="glass-card p-6">
                <div className="text-primary font-heading font-bold text-sm mb-4 uppercase tracking-wide">With Prodfolio</div>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Built and published in under an hour</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>SIGNAL framework structures every case study</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Confidently sharing on LinkedIn and in applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes a Great Portfolio */}
      <section className="pt-4 pb-6 px-4">
        <div className="prodfolio-container max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              What makes a great PM portfolio?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card p-5 text-center">
              <div className="text-3xl font-bold text-white mb-2">1-3</div>
              <div className="text-sm text-white/70">Strong case studies</div>
            </div>
            <div className="glass-card p-5 text-center">
              <div className="text-2xl font-bold text-white mb-2">Process</div>
              <div className="text-sm text-white/70">How you think</div>
            </div>
            <div className="glass-card p-5 text-center">
              <div className="text-2xl font-bold text-white mb-2">Metrics</div>
              <div className="text-sm text-white/70">Quantified impact</div>
            </div>
            <div className="glass-card p-5 text-center">
              <div className="text-2xl font-bold text-white mb-2">Story</div>
              <div className="text-sm text-white/70">Connected narrative</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-6 pb-12 px-4 cta-glow-section ${ctaAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-6">
            Ready to build yours?
          </h2>
          <Button
            asChild
            className="px-8 py-5 h-auto text-base bg-white text-primary font-semibold hover:bg-white/90 hover:scale-105 transition-all shadow-xl rounded-xl"
          >
            <a href="https://app.prodfolio.io/sign-up">Get Started Free</a>
          </Button>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Examples;
