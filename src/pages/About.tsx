import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Coffee, Mic, Lightbulb, Users, Phone } from "lucide-react";
import meaganPhoto from "@/assets/meagan-photo.png";
import santianaPhoto from "@/assets/santiana-photo.png";

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
          "jobTitle": "Co-founder",
          "sameAs": "https://www.linkedin.com/in/meagan-glenn/",
          "url": "https://meaganglenn.me"
        },
        {
          "@type": "Person",
          "name": "Santiana Brace",
          "jobTitle": "Co-founder",
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
    }
  });

  return (
    <div className="min-h-screen gradient-mesh-bg">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 ${heroAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container text-center max-w-[1200px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
            We built the thing we needed
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Prodfolio started because two PMs got tired of watching talented product people undersell themselves - ourselves included.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section
        ref={storyAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-12 px-4 ${storyAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
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
                  <p className="text-white/80 leading-relaxed mb-3">
                    In February 2025, Prodfolio was born. We talked to PMs about what they struggled with. We talked to hiring managers about what they actually looked for. We shipped an MVP, ran a beta cohort, and kept iterating.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Now PMs are landing interviews with portfolios they're proud to share. That's why we built this - and why we keep building.
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
        className={`py-16 px-4 ${foundersAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[900px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 text-white">
              Meet the PMs behind Prodfolio
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We're not just building Prodfolio - we're using it, breaking it, and improving it every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Meagan */}
            <div className="glass-card p-6 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mx-auto mb-4">
                <img
                  src={meaganPhoto}
                  alt="Meagan Glenn, Co-founder of Prodfolio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">Meagan Glenn</h3>
              <p className="text-coral font-semibold text-sm mb-3">Co-founder</p>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Fractional Head of Product, former career coach, startup PM, and podcast co-host. When she's not building Prodfolio, you'll find her on a hiking trail or planning her next adventure.
              </p>
              <div className="flex gap-2 justify-center">
                <Button asChild size="sm" className="bg-white text-navy hover:bg-white/90 font-semibold rounded-xl">
                  <a href="https://meaganglenn.me" target="_blank" rel="noopener noreferrer">
                    See My Prodfolio
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl">
                  <a href="https://www.linkedin.com/in/meagan-glenn/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Santiana */}
            <div className="glass-card p-6 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mx-auto mb-4">
                <img
                  src={santianaPhoto}
                  alt="Santiana Brace, Co-founder of Prodfolio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">Santiana Brace</h3>
              <p className="text-coral font-semibold text-sm mb-3">Co-founder</p>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                PM and podcast co-host who pivoted into product and knows exactly how hard it is to prove you belong. Will ask "but why?" until she gets to the real problem.
              </p>
              <div className="flex gap-2 justify-center">
                <Button asChild size="sm" className="bg-white text-navy hover:bg-white/90 font-semibold rounded-xl">
                  <a href="https://app.prodfolio.io/p/santi-brace-2" target="_blank" rel="noopener noreferrer">
                    See My Prodfolio
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl">
                  <a href="https://www.linkedin.com/in/santiana-brace/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 ${ctaAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container text-center max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            Ready to tell your story?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Join the PMs who are finally showcasing their work with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="px-8 py-6 h-auto text-lg bg-white text-navy hover:bg-white/90 shadow-xl font-semibold rounded-xl transition-all hover:scale-105"
            >
              <a href="https://app.prodfolio.io/sign-up">Start Your Portfolio Free</a>
            </Button>
            <Button
              asChild
              className="px-8 py-6 h-auto text-lg bg-coral text-white hover:bg-coral/90 shadow-xl font-semibold rounded-xl transition-all hover:scale-105"
            >
              <a href="https://cal.com/meag.glenn/15min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Book a 15 min call
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/70">No credit card required. Get started in minutes.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
