import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote, Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  const heroAnimation = useScrollAnimation();
  const founderAnimation = useScrollAnimation();
  const missionAnimation = useScrollAnimation();
  const valuesAnimation = useScrollAnimation();

  useSEO({
    title: "About Prodfolio | Our Mission to Empower Product Managers",
    description: "Learn about Prodfolio's mission to help product managers showcase their work, tell their stories, and prove their impact through beautiful portfolios.",
    canonical: "https://prodfolio.io/about",
  });

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #FAF8F5 0%, #F5F3F0 100%)' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-32 pb-20 px-4 ${heroAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 text-foreground">
            About Prodfolio
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            Thousands of product managers use Prodfolio to showcase their work, tell their stories, and prove their impact.
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            We built Prodfolio because we believe every PM has a story worth telling — but most don't have the time, tools, or template to tell it well.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        ref={missionAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-4 ${missionAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Mission
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Show your work</h3>
              <p className="text-muted-foreground leading-relaxed">
                Give PMs a platform to showcase not just what they shipped, but how they think and the impact they made.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tell your story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Help product managers articulate their process, decisions, and learnings in a way that resonates with hiring managers.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Own your impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Make it easy for PMs to prove their value and stand out in competitive job markets with clear, compelling evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story Section */}
      <section 
        ref={founderAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-4 ${founderAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">Origin</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Why we built Prodfolio
            </h2>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-border/50 rounded-3xl p-10 md:p-16 shadow-sm">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-foreground">As a product manager, you've shipped features that moved metrics.</strong> You've made tough calls with incomplete data. You've influenced stakeholders, rallied teams, and turned ambiguous problems into clear solutions.
              </p>
              
              <p>
                But when it comes time to showcase that work — whether for a job search, promotion, or just personal reflection — you're stuck. Your resume is a list of bullet points. LinkedIn feels generic. Building a custom website takes weeks you don't have.
              </p>

              <p>
                <strong className="text-foreground">Meanwhile, designers and engineers have Dribbble and GitHub.</strong> They have public, shareable proof of their craft. Product managers have... nothing standardized.
              </p>

              <p>
                We built Prodfolio to fix that. A place where PMs can document their work, showcase their thinking, and build credibility — without needing to code, design from scratch, or spend weeks crafting the perfect narrative.
              </p>

              <p className="text-foreground font-semibold pt-4">
                Your work deserves to be seen. Your story deserves to be told. Your impact deserves to be proven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={valuesAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-4 ${valuesAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              What we believe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide how we build Prodfolio
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm border-l-4 border-primary rounded-2xl p-8 hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-3">PMs should own their narrative</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your career is more than a resume. You should have a platform to tell the full story — the context, the constraints, the decisions, and the outcomes.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border-l-4 border-primary rounded-2xl p-8 hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-3">Process matters as much as outcomes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Shipping is important, but how you got there — your thinking, trade-offs, and influence — is what makes you a great PM. Portfolios should reflect that.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border-l-4 border-primary rounded-2xl p-8 hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-3">Building your portfolio shouldn't take weeks</h3>
              <p className="text-muted-foreground leading-relaxed">
                You're busy shipping products. Creating a portfolio should be fast, guided, and painless — not a side project that never gets finished.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border-l-4 border-primary rounded-2xl p-8 hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-3">Community over competition</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're building for a community of product people who want to learn from each other, celebrate wins, and help the next generation of PMs grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Social Proof */}
      <section className="py-20 px-4 border-t border-border/50">
        <div className="prodfolio-container max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-10 md:p-16 border border-primary/20">
            <Quote className="w-12 h-12 text-primary mb-6 mx-auto" />
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl leading-relaxed text-foreground mb-6">
                "Portfolios reveal how PMs navigate complexity — how they think, influence without authority, and drive outcomes from discovery to launch. It's one of the clearest signals of how someone operates as a product person."
              </p>
              <footer className="text-muted-foreground">
                <cite className="not-italic font-semibold">Aaron K.</cite>
                <div className="text-sm">VP of Product</div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4" style={{ background: 'linear-gradient(135deg, #7B5FE6 0%, #9B7BFF 100%)' }}>
        <div className="prodfolio-container text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Ready to build your Prodfolio?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Start showcasing your product thinking and prove your impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="px-10 py-6 h-auto text-lg bg-white text-purple-900 hover:bg-white/90 shadow-xl"
              style={{ borderRadius: '12px' }}
            >
              <a href="https://app.prodfolio.io/signup">
                Get Started Free →
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="px-10 py-6 h-auto text-lg border-2 border-white text-white hover:bg-white/10"
              style={{ borderRadius: '12px' }}
            >
              <a href="/pricing">
                View Pricing
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/80">No credit card required. Get started in minutes.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
