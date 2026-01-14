import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Upload, Sparkles, Share2, FileText, Target, TrendingUp, MessageSquare, FolderOpen, GraduationCap, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const heroAnimation = useScrollAnimation();
  const stepsAnimation = useScrollAnimation();
  const signalAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  useSEO({
    title: "How Prodfolio Works | Build Your PM Portfolio in Under an Hour",
    description: "Learn how to build your product manager portfolio with Prodfolio. Import your resume, use the SIGNAL framework, and share your professional portfolio link.",
    canonical: "https://prodfolio.io/how-it-works",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Build a PM Portfolio with Prodfolio",
      "description": "Step-by-step guide to creating your product manager portfolio",
      "totalTime": "PT1H",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Import your experience",
          "text": "Upload your resume or connect LinkedIn to extract your roles and achievements"
        },
        {
          "@type": "HowToStep",
          "name": "Build with SIGNAL",
          "text": "Use guided prompts to create compelling case studies"
        },
        {
          "@type": "HowToStep",
          "name": "Share and stand out",
          "text": "Get your personalized portfolio link and share it with hiring managers"
        }
      ]
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
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
            From blank page to portfolio
            <br />
            <span className="text-navy">in under an hour</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
            No design skills needed. No weeks of tweaking. Just your experience and our guided framework.
          </p>
          <Button
            asChild
            className="px-8 py-6 h-auto text-lg bg-white text-navy hover:bg-white/90 shadow-xl font-semibold rounded-xl transition-all hover:scale-105"
          >
            <a href="https://app.prodfolio.io/sign-up">Try It Free</a>
          </Button>
        </div>
      </section>

      {/* 3 Steps */}
      <section
        ref={stepsAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 bg-white/10 backdrop-blur-sm ${stepsAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
              Three steps to stand out
            </h2>
            <p className="text-lg text-navy/80 max-w-2xl mx-auto">
              We've done the hard work of figuring out what makes a PM portfolio great. You just fill in your story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step 1 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/40 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center border-2 border-primary/30">
                    <Upload className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-coral rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-3">Import your experience</h3>
                <p className="text-navy/70 leading-relaxed mb-4">
                  Upload your resume or connect your LinkedIn profile. Our AI extracts your roles, companies, and achievements—giving you a foundation to build on.
                </p>
                <ul className="space-y-2 text-sm text-navy/70">
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    PDF, DOCX, or LinkedIn import
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    AI extracts key details automatically
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/40 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center border-2 border-primary/30">
                    <Sparkles className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-coral rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-3">Build with SIGNAL</h3>
                <p className="text-navy/70 leading-relaxed mb-4">
                  Our guided framework walks you through each case study section. No more staring at a blank page wondering what to write.
                </p>
                <p className="text-sm text-navy/60 italic">
                  Situation → Impact → Growth → Narrative → Artifacts → Learnings
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/40 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center border-2 border-primary/30">
                    <Share2 className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-coral rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-3">Share and stand out</h3>
                <p className="text-navy/70 leading-relaxed mb-4">
                  Get your personalized portfolio link. Add it to your LinkedIn, include it in applications, share it with hiring managers.
                </p>
                <ul className="space-y-2 text-sm text-navy/70">
                  <li className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-primary" />
                    Shareable link: prodfolio.io/p/yourname
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    Custom domain available on Pro plan
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNAL Framework Deep Dive */}
      <section
        ref={signalAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 ${signalAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              The SIGNAL Framework
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Designed specifically for PM case studies. Each section has guided prompts to help you tell your story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="w-10 h-10 bg-coral rounded-lg flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Situation</h3>
              <p className="text-white/70 text-sm">
                Set the stage. What was the challenge or opportunity? Why did it matter?
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="w-10 h-10 bg-coral rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Insight</h3>
              <p className="text-white/70 text-sm">
                Show your discovery process. What research or data led to your approach?
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="w-10 h-10 bg-coral rounded-lg flex items-center justify-center mb-4">
                <FolderOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Goals</h3>
              <p className="text-white/70 text-sm">
                Define what success looks like. What were you trying to achieve?
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="w-10 h-10 bg-coral rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Navigation</h3>
              <p className="text-white/70 text-sm">
                Explain your approach. What decisions and trade-offs did you make?
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="w-10 h-10 bg-coral rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Achievement</h3>
              <p className="text-white/70 text-sm">
                Prove your impact. What metrics moved? What was the business outcome?
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="w-10 h-10 bg-coral rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Learnings</h3>
              <p className="text-white/70 text-sm">
                Reflect and grow. What would you do differently? What did you learn?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 bg-white/10 backdrop-blur-sm ${ctaAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container text-center max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-navy">
            See how fast it really is
          </h2>
          <p className="text-xl text-navy/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Start free. No credit card required. Your portfolio could be live in under an hour.
          </p>
          <Button
            asChild
            className="px-8 py-6 h-auto text-lg bg-primary text-white hover:bg-primary/90 shadow-xl font-semibold rounded-xl transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            <a href="https://app.prodfolio.io/sign-up">
              Start Your Portfolio Free
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
