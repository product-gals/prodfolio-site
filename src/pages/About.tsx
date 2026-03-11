import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Coffee, Mic, Lightbulb, Users } from "lucide-react";
import meaganPhoto from "@/assets/meagan-photo.png";
import santianaPhoto from "@/assets/santiana-photo.png";
import emilyPhoto from "@/assets/emily-photo.jpeg";
import olympiaPhoto from "@/assets/olympia-todisco.jpeg";

const About = () => {
  const heroAnimation = useScrollAnimation();
  const storyAnimation = useScrollAnimation();
  const foundersAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  useSEO({
    title: "About Prodfolio | Built by PMs Who've Been There",
    description:
      "The story of how a coffee chat turned into the portfolio platform product managers actually needed. Built by PMs, for PMs.",
    canonical: "https://prodfolio.io/about",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Prodfolio",
      "alternateName": "Prodfolio Portfolio Platform",
      "url": "https://prodfolio.io",
      "logo": "https://prodfolio.io/favicon.svg",
      "description": "Portfolio platform for product managers to showcase their work, thinking, and impact.",
      "foundingDate": "2025-02",
      "founders": [
        {
          "@type": "Person",
          "name": "Meagan Glenn",
          "jobTitle": "Cofounder",
          "sameAs": "https://www.linkedin.com/in/meagan-glenn/",
          "url": "https://meaganglenn.me"
        },
        {
          "@type": "Person",
          "name": "Santiana Brace",
          "jobTitle": "Cofounder",
          "sameAs": "https://www.linkedin.com/in/santiana-brace/",
          "url": "https://app.prodfolio.io/p/santi-brace-2"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "email": "hello@prodfolio.io"
      },
      "sameAs": [
        "https://www.youtube.com/@TheProductPivot"
      ]
    },
    breadcrumbs: [
      { name: "Home", url: "https://prodfolio.io" },
      { name: "About", url: "https://prodfolio.io/about" },
    ],
  });

  return (
    <div className="min-h-screen gradient-mesh-bg" id="main-content" role="main">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-28 pb-8 px-4 ${heroAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container text-center max-w-[1200px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
            We built the thing <span className="gradient-text">we needed</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Prodfolio started because we got tired of watching talented product people undersell themselves - ourselves included.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section
        ref={storyAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-4 pb-12 px-4 ${storyAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-10">
            How a LinkedIn coffee chat became Prodfolio
          </h2>

          <div className="space-y-6">
            {/* Coffee Chat */}
            <div className="glass-card p-6">
              <div className="flex gap-4 items-start">
                <Coffee className="w-8 h-8 text-coral flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-white">It started with a coffee chat</h3>
                  <p className="text-white/80 leading-relaxed">
                    Meagan and Santiana met on LinkedIn in 2024 after Meagan helped Santi's friend with job searching.
                    They realized they'd been in the same PM circles but had never actually met. So they did what any
                    curious PMs would do - grabbed coffee.
                  </p>
                </div>
              </div>
            </div>

            {/* Podcast */}
            <div className="glass-card p-6">
              <div className="flex gap-4 items-start">
                <Mic className="w-8 h-8 text-coral flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-white">Then came the podcast</h3>
                  <p className="text-white/80 leading-relaxed">
                    That chat turned into a podcast - <strong className="text-white">The Product Pivot</strong> - where they interviewed PMs at every stage. Episode after episode, one theme kept coming up: PMs didn't know how to showcase their work.
                  </p>
                </div>
              </div>
            </div>

            {/* The Aha Moment */}
            <div className="glass-card p-6 border-l-4 border-l-coral">
              <div className="flex gap-4 items-start">
                <Lightbulb className="w-8 h-8 text-coral flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-white">The "aha" moment</h3>
                  <p className="text-white/80 leading-relaxed mb-3">
                    In October 2024, Meagan was job searching after working in product at a startup - but without a
                    product title on her resume. She tried building a portfolio in Notion but never felt confident sharing it with hiring
                    managers. <strong className="text-white">Something was missing.</strong>
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    So they started asking other PMs: do you struggle with showcasing your work? The answer was always the
                    same. <strong className="text-white">Yes.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Building Prodfolio */}
            <div className="glass-card p-6">
              <div className="flex gap-4 items-start">
                <Users className="w-8 h-8 text-coral flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-white">We built it together - with you</h3>
                  <p className="text-white/80 leading-relaxed">
                    In February 2025, Prodfolio was born — built alongside the PM community, not just for it. We talked to PMs about what they struggled with, hiring managers about what they actually looked for, and kept shipping until it clicked. Now PMs are landing interviews with portfolios they're proud to share. That's why we built this — and why we keep building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section
        ref={foundersAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-10 px-4 ${foundersAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[900px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 text-white">
              Meet the team
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We're not just building Prodfolio - we're using it, breaking it, and improving it every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Meagan */}
            <div className="glass-card p-5 text-center flex flex-col">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mx-auto mb-4">
                <img
                  src={meaganPhoto}
                  alt="Meagan Glenn, Cofounder of Prodfolio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">Meagan Glenn</h3>
              <p className="text-white font-semibold text-sm mb-3">Cofounder</p>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Fractional Head of Product, former career coach, startup PM, and podcast co-host. When she's not building Prodfolio, you'll find her on a hiking trail or planning her next adventure.
              </p>
              <div className="flex flex-col gap-2 items-center mt-auto">
                <Button asChild size="sm" className="bg-white text-navy hover:bg-white/90 font-semibold rounded-xl w-full">
                  <a href="https://meaganglenn.me" target="_blank" rel="noopener noreferrer">
                    See My Prodfolio
                  </a>
                </Button>
                <div className="flex gap-3 mt-1">
                  <a href="https://www.linkedin.com/in/meagan-glenn/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="https://www.tiktok.com/@itsmeag.glenn" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="TikTok">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.48a8.18 8.18 0 004.76 1.52V7.56a4.83 4.83 0 01-1-.87z"/></svg>
                  </a>
                  <a href="https://meaganglenn.substack.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Substack">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Santiana */}
            <div className="glass-card p-5 text-center flex flex-col">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mx-auto mb-4">
                <img
                  src={santianaPhoto}
                  alt="Santiana Brace, Cofounder of Prodfolio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">Santiana Brace</h3>
              <p className="text-white font-semibold text-sm mb-3">Cofounder</p>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                ProdOps Lead, PM, mentor, and podcast co-host who pivoted from QA into product. Mom of two who knows firsthand how hard it is to prove you belong. Expert at cutting through complexity to find the simplest path forward.
              </p>
              <div className="flex flex-col gap-2 items-center mt-auto">
                <Button asChild size="sm" className="bg-white text-navy hover:bg-white/90 font-semibold rounded-xl w-full">
                  <a href="https://app.prodfolio.io/p/santi-brace-2" target="_blank" rel="noopener noreferrer">
                    See My Prodfolio
                  </a>
                </Button>
                <div className="flex gap-3 mt-1">
                  <a href="https://www.linkedin.com/in/santiana-brace/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Olympia */}
            <div className="glass-card p-5 text-center flex flex-col">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mx-auto mb-4">
                <img
                  src={olympiaPhoto}
                  alt="Olympia Bardis, Product Advisor at Prodfolio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">Olympia Bardis</h3>
              <p className="text-white font-semibold text-sm mb-3">Product Advisor</p>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Senior PM at CNBC with deep expertise in subscription products, fintech, and digital consumer experiences. She's passionate about building user-centric products and is an active advocate for women in tech — and she brings all of that energy to helping shape Prodfolio.
              </p>
              <div className="flex flex-col gap-2 items-center mt-auto">
                <Button asChild size="sm" className="bg-white text-navy hover:bg-white/90 font-semibold rounded-xl w-full">
                  <a href="https://app.prodfolio.io/p/olympia-bardis" target="_blank" rel="noopener noreferrer">
                    See My Prodfolio
                  </a>
                </Button>
                <div className="flex gap-3 mt-1">
                  <a href="https://www.linkedin.com/in/olympiabardis/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Emily */}
            <div className="glass-card p-5 text-center flex flex-col">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mx-auto mb-4">
                <img
                  src={emilyPhoto}
                  alt="Emily Barba-Jaume, Operations Strategist at Prodfolio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">Emily Barba-Jaume</h3>
              <p className="text-white font-semibold text-sm mb-3">Operations Strategist</p>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                The person who keeps the wheels turning and the chaos manageable. With a background in workforce development, team management, and operational coordination, Emily makes sure Prodfolio runs smoothly so everyone else can focus on building. Off the clock? Iced coffee in hand, fur babies by her side.
              </p>
              <div className="flex flex-col gap-2 items-center mt-auto">
                <Button asChild size="sm" className="bg-white text-navy hover:bg-white/90 font-semibold rounded-xl w-full">
                  <a href="https://www.linkedin.com/in/emily-barba-jaume-054363224/" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </a>
                </Button>
                <div className="flex gap-3 mt-1">
                  <a href="https://www.linkedin.com/in/emily-barba-jaume-054363224/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-12 px-4 cta-glow-section ${ctaAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-6">
            Ready to tell your story?
          </h2>
          <Button asChild className="px-8 py-5 h-auto text-base bg-white text-primary font-semibold hover:bg-white/90 hover:scale-105 transition-all shadow-xl rounded-xl">
            <a href="https://app.prodfolio.io/sign-up">Start Your Portfolio Free</a>
          </Button>
          <p className="mt-4">
            <Link to="/quiz" className="text-sm text-white/60 hover:text-white/90 transition-colors underline underline-offset-2">
              Not sure where to start? Find out what kind of PM you are →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
