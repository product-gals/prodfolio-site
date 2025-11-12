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
  });

  return (
    <div className="min-h-screen gradient-mesh-bg">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-20 pb-8 px-4 ${heroAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 text-navy">
            We built the thing we needed
          </h1>
          <p className="text-xl md:text-2xl text-navy/90 leading-relaxed">
            Prodfolio started because two PMs got tired of watching talented product people undersell themselves —
            ourselves included.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section
        ref={storyAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-12 px-4 ${storyAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-white font-semibold mb-2">Origin Story</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-navy">
              How a LinkedIn coffee chat became Prodfolio
            </h2>
          </div>

          <div className="space-y-12">
            {/* Coffee Chat */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Coffee className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-navy">It started with a coffee chat</h3>
                <p className="text-lg text-navy/90 leading-relaxed">
                  Meagan and Santiana met on LinkedIn in 2024 after Meagan helped Santi's friend with job searching.
                  They realized they'd been in the same PM circles but had never actually met. So they did what any
                  curious PMs would do — grabbed coffee.
                </p>
              </div>
            </div>

            {/* Podcast */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Mic className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-navy">Then came the podcast</h3>
                <p className="text-lg text-navy/90 leading-relaxed">
                  During that chat, they bonded over a shared dream: starting a podcast. They also noticed a gap — there
                  weren't enough real, practical resources for people trying to break into product management.{" "}
                  <strong className="text-navy">The Product Pivot</strong> was born. Three seasons later, they're
                  still going strong.
                </p>
              </div>
            </div>

            {/* The Problem */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-navy">The "aha" moment</h3>
                <p className="text-lg text-navy/90 leading-relaxed">
                  In October 2024, Meagan was job searching after working in product at a startup — but without a
                  product title on her resume. She tried building a portfolio in Notion and shared it with Santi for
                  feedback. Santi was kind about it, but Meagan still never felt confident sharing it with hiring
                  managers. <strong className="text-navy">Something was missing.</strong>
                </p>
                <p className="text-lg text-navy/90 leading-relaxed mt-4">
                  So they started asking other PMs: do you struggle with showcasing your work? The answer was always the
                  same. <strong className="text-navy">Yes.</strong>
                </p>
              </div>
            </div>

            {/* Building Prodfolio */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-navy">We built it together — with you</h3>
                <p className="text-lg text-navy/90 leading-relaxed">
                  In February 2025, Prodfolio was born. Meagan and Santi talked to PMs about what they struggled with.
                  They talked to hiring managers about what they looked for. They shipped an MVP, ran a beta cohort,
                  collected feedback, improved the product, and now — here we are.
                </p>
                <p className="text-lg text-navy/90 leading-relaxed mt-4">
                  Prodfolio isn't just a tool. It's proof that when you build something you actually need, other people
                  need it too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section
        ref={foundersAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-12 px-4 ${foundersAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">The Team</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-navy">Meet the PMs behind Prodfolio</h2>
            <p className="text-lg text-navy/90 max-w-2xl mx-auto">
              We're not just building Prodfolio — we're using it, breaking it, and improving it every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Meagan */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 mx-auto">
                  <img
                    src={meaganPhoto}
                    alt="Meagan, Co-founder of Prodfolio"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-navy">Meagan Glenn</h3>
              <p className="text-primary font-semibold mb-4">Co-founder</p>
              <p className="text-navy/90 leading-relaxed mb-6">
                Product manager, podcast host, and career coach who's been helping PMs break into product for years.
                Believes every PM has a story worth telling — you just need the right format.
              </p>

              {/* Prodfolio Link - Featured */}
              <div className="mb-4">
                <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                  <a href="https://prodfolio.io/meagan" target="_blank" rel="noopener noreferrer">
                    See My Prodfolio →
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="rounded-full text-white/70 hover:text-white"
                >
                  <a href="https://linkedin.com/in/meagan" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="rounded-full text-white/70 hover:text-white"
                >
                  <a href="https://twitter.com/meagan" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </Button>
              </div>
            </div>

            {/* Santiana */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 mx-auto">
                  <img
                    src={santianaPhoto}
                    alt="Santiana, Co-founder of Prodfolio"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-navy">Santiana Brace</h3>
              <p className="text-primary font-semibold mb-4">Co-founder</p>
              <p className="text-navy/90 leading-relaxed mb-6">
                Product manager and podcast host who knows firsthand how hard it is to showcase PM work. On a mission to
                make portfolio-building less painful and more strategic for every PM.
              </p>

              {/* Prodfolio Link - Featured */}
              <div className="mb-4">
                <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                  <a href="https://prodfolio.io/santiana" target="_blank" rel="noopener noreferrer">
                    See My Prodfolio →
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="rounded-full text-white/70 hover:text-white"
                >
                  <a href="https://linkedin.com/in/santiana" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="rounded-full text-white/70 hover:text-white"
                >
                  <a href="https://twitter.com/santiana" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Optional: Add a "Want to chat?" callout */}
          <div className="mt-16 text-center">
            <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto shadow-xl">
              <p className="text-lg text-navy/90 mb-4">
                <strong className="text-navy">Have questions? Want to share feedback?</strong> We're always happy
                to chat with fellow PMs.
              </p>
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                <a href="mailto:hello@prodfolio.io">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        ref={missionAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-12 px-4 ${missionAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-navy">What we're building now</h2>
          <p className="text-xl text-navy/90 leading-relaxed mb-8">
            Prodfolio is the portfolio platform product managers deserve. It's guided, fast, and built around how PMs
            actually think — not how designers or engineers work.
          </p>
          <p className="text-xl text-navy/90 leading-relaxed">
            We're here to help you show your work, tell your story, and own your impact. Because you've done the hard
            work. Now let's make sure people see it.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="prodfolio-container text-center max-w-3xl mx-auto">
          <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-3xl p-12 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-navy">Ready to tell your story?</h2>
            <p className="text-xl text-navy/90 mb-10 leading-relaxed">
              Join the PMs who are finally showcasing their work with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                className="px-6 py-3 h-auto text-base bg-white text-[#100D22] hover:bg-white/90 shadow-xl"
                style={{ borderRadius: "12px" }}
              >
                <a href="https://app.prodfolio.io/signup">Get Started Free →</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-6 py-3 h-auto text-base border-2 border-white text-white hover:bg-white/10"
                style={{ borderRadius: "12px" }}
              >
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-navy/80">No credit card required. Get started in minutes.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
