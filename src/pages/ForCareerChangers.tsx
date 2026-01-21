import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Lightbulb, Target, CheckCircle, ArrowRight } from "lucide-react";

const ForCareerChangers = () => {
  const heroAnimation = useScrollAnimation();
  const whyAnimation = useScrollAnimation();
  const whatAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  useSEO({
    title: "PM Portfolio for Career Changers | Break Into Product Management | Prodfolio",
    description: "Transitioning to product management? Build a portfolio that proves you think like a PM—even without the title. Show hiring managers your product mindset.",
    canonical: "https://prodfolio.io/for-career-changers",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "PM Portfolio for Career Changers",
      "description": "Resources and tools for professionals transitioning into product management roles.",
      "url": "https://prodfolio.io/for-career-changers"
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9E85F9] via-[#C4B5FF] via-[#D6CEFF] to-[#B8A3FF]">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 ${heroAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container text-center max-w-[1200px] mx-auto">
          <p className="text-lg text-white/80 mb-4 font-medium">For Career Changers</p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
            You think like a PM.
            <br />
            <span className="text-navy">Now prove it.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
            Transitioning into product management? Your portfolio shows hiring managers what your resume can't: that you already have the mindset.
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
              variant="outline"
              className="px-8 py-6 h-auto text-lg border-white/40 bg-white/10 text-white hover:bg-white/20 font-medium rounded-xl"
            >
              <a href="/quiz">Take the Portfolio Quiz</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why You Don't Need a PM Title */}
      <section
        ref={whyAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 bg-white/10 backdrop-blur-sm ${whyAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
              You don't need a PM title to build a PM portfolio
            </h2>
            <p className="text-lg text-navy/80 max-w-2xl mx-auto">
              Hiring managers care about how you think, not what your business card says.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <article className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-navy mb-3">Side projects count</h3>
              <p className="text-navy/70 leading-relaxed">
                Built an app? Launched a community project? Led a volunteer initiative? These demonstrate real product thinking.
              </p>
            </article>

            <article className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-navy mb-3">Reframe your experience</h3>
              <p className="text-navy/70 leading-relaxed">
                Engineers solve problems. Marketers understand users. Designers ship experiences. You already have transferable PM skills.
              </p>
            </article>

            <article className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-navy mb-3">Show the mindset</h3>
              <p className="text-navy/70 leading-relaxed">
                PMs identify problems, prioritize solutions, and drive outcomes. Show how you've done this—in any role.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* What Career Changers Showcase */}
      <section
        ref={whatAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 ${whatAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                What career changers showcase
              </h2>
              <p className="text-lg text-white/80">
                Your portfolio isn't about PM experience. It's about PM thinking.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">Process over pedigree</h3>
                  <p className="text-navy/70">
                    Show how you approached a problem, not just that you solved it. Walk through your thinking, the trade-offs you considered, and why you made specific decisions.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">Transferable skills from your current role</h3>
                  <p className="text-navy/70">
                    Led cross-functional projects? Analyzed user data? Coordinated stakeholders? These are PM skills in action. Frame them that way.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">Product thinking from everyday decisions</h3>
                  <p className="text-navy/70">
                    Proposed a process improvement? Identified an unmet customer need? Prioritized competing demands? These stories prove you think like a PM.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">Side projects and passion work</h3>
                  <p className="text-navy/70">
                    Personal apps, volunteer tech projects, community initiatives: these demonstrate initiative and give you full ownership stories to tell.
                  </p>
                </div>
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
        <div className="prodfolio-container text-center max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            Turn your experience into opportunity
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            It counts more than you think. Let's turn it into a portfolio that gets you noticed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="px-8 py-6 h-auto text-lg bg-white text-navy hover:bg-white/90 shadow-xl font-semibold rounded-xl transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <a href="https://app.prodfolio.io/sign-up">
                Start Your Portfolio Free
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/70">
            No PM experience required. Seriously.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForCareerChangers;
