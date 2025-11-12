import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Coffee, Mic, Lightbulb, Users } from "lucide-react";
import meaganPhoto from "@/assets/meagan-photo.png";
import santianaPhoto from "@/assets/santiana-photo.png";

const About = () => {
  const heroAnimation = useScrollAnimation();
  const storyAnimation = useScrollAnimation();
  const foundersAnimation = useScrollAnimation();
  const missionAnimation = useScrollAnimation();

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
          "url": "https://prodfolio.io/meagan"
        },
        {
          "@type": "Person",
          "name": "Santiana Brace",
          "jobTitle": "Co-founder",
          "sameAs": "https://www.linkedin.com/in/santiana-brace/",
          "url": "https://prodfolio.io/santiana"
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
    <div className="min-h-screen bg-gradient-to-b from-[#9E85F9] via-[#C4B5FF] via-[#D6CEFF] to-[#B8A3FF]">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-[60px] px-4 ${heroAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
        aria-label="Hero introduction"
      >
        <div className="prodfolio-container text-center max-w-[1200px] mx-auto">
          <h1 className="text-6xl md:text-7xl font-heading font-bold mb-6 text-white">
            We built the thing we needed
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-body">
            Prodfolio started because two PMs got tired of watching talented product people undersell themselves —
            ourselves included.
          </p>
        </div>
      </section>

      {/* Origin Story - Flows on gradient */}
      <section
        ref={storyAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-[60px] pb-[60px] px-4 ${storyAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
        aria-labelledby="origin-story-heading"
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <h2 id="origin-story-heading" className="text-4xl md:text-5xl font-heading font-bold text-navy text-center mb-12">
            How a LinkedIn coffee chat became Prodfolio
          </h2>

          <div className="space-y-10 max-w-[900px] mx-auto">
            {/* Coffee Chat */}
            <article className="flex flex-col md:flex-row gap-6 items-start">
              <Coffee className="w-12 h-12 text-[#FF8B7B] flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-3xl font-heading font-bold mb-4 text-navy">It started with a coffee chat</h3>
                <p className="text-lg text-navy leading-[1.7] font-body">
                  Meagan and Santiana met on LinkedIn in 2024 after Meagan helped Santi's friend with job searching.
                  They realized they'd been in the same PM circles but had never actually met. So they did what any
                  curious PMs would do — grabbed coffee.
                </p>
              </div>
            </article>

            {/* Podcast */}
            <article className="flex flex-col md:flex-row gap-6 items-start">
              <Mic className="w-12 h-12 text-[#FF8B7B] flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-3xl font-heading font-bold mb-4 text-navy">Then came the podcast</h3>
                <p className="text-lg text-navy leading-[1.7] font-body">
                  During that chat, they bonded over a shared dream: starting a podcast. They also noticed a gap — there
                  weren't enough real, practical resources for people trying to break into product management.{" "}
                  <strong className="text-navy">The Product Pivot</strong> was born. Three seasons later, they're
                  still going strong.
                </p>
              </div>
            </article>

            {/* The Aha Moment */}
            <article className="flex flex-col md:flex-row gap-6 items-start">
              <Lightbulb className="w-12 h-12 text-[#FF8B7B] flex-shrink-0" aria-hidden="true" />
              <div className="border-l-4 border-l-[#FF8B7B] pl-6">
                <h3 className="text-3xl font-heading font-bold mb-4 text-navy">The "aha" moment</h3>
                <p className="text-lg text-navy leading-[1.7] font-body mb-4">
                  In October 2024, Meagan was job searching after working in product at a startup — but without a
                  product title on her resume. She tried building a portfolio in Notion and shared it with Santi for
                  feedback. Santi was kind about it, but Meagan still never felt confident sharing it with hiring
                  managers. <strong className="text-navy">Something was missing.</strong>
                </p>
                <p className="text-lg text-navy leading-[1.7] font-body">
                  So they started asking other PMs: do you struggle with showcasing your work? The answer was always the
                  same. <strong className="text-navy">Yes.</strong>
                </p>
              </div>
            </article>

            {/* Building Prodfolio */}
            <article className="flex flex-col md:flex-row gap-6 items-start">
              <Users className="w-12 h-12 text-[#FF8B7B] flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-3xl font-heading font-bold mb-4 text-navy">We built it together — with you</h3>
                <p className="text-lg text-navy leading-[1.7] font-body mb-4">
                  In February 2025, Prodfolio was born. Meagan and Santi talked to PMs about what they struggled with.
                  They talked to hiring managers about what they looked for. They shipped an MVP, ran a beta cohort,
                  collected feedback, improved the product, and now — here we are.
                </p>
                <p className="text-lg text-navy leading-[1.7] font-body">
                  Prodfolio isn't just a tool. It's proof that when you build something you actually need, other people
                  need it too.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section
        ref={foundersAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-[60px] px-4 ${foundersAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
        aria-labelledby="team-heading"
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 id="team-heading" className="text-4xl md:text-5xl font-heading font-bold mb-5 text-navy">
              Meet the PMs behind Prodfolio
            </h2>
            <p className="text-lg text-navy/80 max-w-2xl mx-auto font-body">
              We're not just building Prodfolio — we're using it, breaking it, and improving it every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Meagan */}
            <article className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(16,13,34,0.08)] max-w-[480px]">
              <div className="relative inline-block mb-6 w-full flex justify-center">
                <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src={meaganPhoto}
                    alt="Meagan Glenn, Co-founder of Prodfolio"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="240"
                    height="240"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-navy text-center">Meagan Glenn</h3>
              <p className="text-primary font-semibold mb-4 text-center font-body">Co-founder</p>
              <p className="text-navy/80 leading-relaxed mb-6 font-body">
                Product manager, podcast host, and career coach who's been helping PMs break into product for years.
                Believes every PM has a story worth telling — you just need the right format.
              </p>

              <div className="mb-4 text-center">
                <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  <a href="https://prodfolio.io/meagan" target="_blank" rel="noopener noreferrer">
                    See My Prodfolio →
                  </a>
                </Button>
              </div>

              <div className="flex justify-center gap-3">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="rounded-full text-navy/60 hover:text-navy hover:bg-navy/5 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <a href="https://www.linkedin.com/in/meagan-glenn/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
              </div>
            </article>

            {/* Santiana */}
            <article className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(16,13,34,0.08)] max-w-[480px]">
              <div className="relative inline-block mb-6 w-full flex justify-center">
                <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src={santianaPhoto}
                    alt="Santiana Brace, Co-founder of Prodfolio"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="240"
                    height="240"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-navy text-center">Santiana Brace</h3>
              <p className="text-primary font-semibold mb-4 text-center font-body">Co-founder</p>
              <p className="text-navy/80 leading-relaxed mb-6 font-body">
                Product manager and podcast host who knows firsthand how hard it is to showcase PM work. On a mission to
                make portfolio-building less painful and more strategic for every PM.
              </p>

              <div className="mb-4 text-center">
                <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  <a href="https://prodfolio.io/santiana" target="_blank" rel="noopener noreferrer">
                    See My Prodfolio →
                  </a>
                </Button>
              </div>

              <div className="flex justify-center gap-3">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="rounded-full text-navy/60 hover:text-navy hover:bg-navy/5 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <a href="https://www.linkedin.com/in/santiana-brace/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[60px] px-4 bg-gradient-to-b from-[#D6CEFF] via-[#B8A3FF] to-[#9E85F9] mb-[30px]" aria-label="Call to action">
        <div className="prodfolio-container text-center max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Ready to tell your story?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed font-body">
            Join the PMs who are finally showcasing their work with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="px-8 py-6 h-auto text-lg bg-white text-navy hover:bg-white/90 shadow-xl font-semibold rounded-xl transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              <a href="https://app.prodfolio.io/login">Start Your Portfolio Free</a>
            </Button>
            <Button
              asChild
              className="px-8 py-6 h-auto text-lg bg-[#FF8B7B] text-white hover:bg-[#FF8B7B]/90 shadow-xl font-semibold rounded-xl transition-colors focus:ring-2 focus:ring-[#FF8B7B] focus:ring-offset-2"
            >
              <a href="https://app.prodfolio.io/login">Log In</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/80 font-body">No credit card required. Get started in minutes.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
