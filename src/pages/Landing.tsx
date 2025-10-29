import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Footer from "@/components/Footer";

const Landing = () => {
  const heroAnimation = useScrollAnimation();
  const howItWorksAnimation = useScrollAnimation();
  const insightsAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  // Enhanced SEO for the homepage
  useSEO({
    title: "Prodfolio — Build Your Product Portfolio in Minutes | Credibility Engine for PMs",
    description: "Build your product portfolio to showcase PM thinking and prove your impact. Trusted by product managers to stand out in job searches. Get started free - no credit card required.",
    ogTitle: "Prodfolio — Build Your Product Portfolio in Minutes",
    ogDescription: "Showcase your product thinking and prove your impact with a professional portfolio. No experience required.",
    ogImage: "https://prodfolio.io/og-image-prodfolio.png",
    ogType: "website",
    canonical: "https://prodfolio.io/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Prodfolio",
      "description": "A credibility engine for product people to build portfolios and showcase their PM thinking.",
      "url": "https://prodfolio.io",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "creator": {
        "@type": "Organization",
        "name": "Prodfolio"
      }
    }
  });
  return (
    <main>
      {/* Hero */}
      <section 
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-primary via-primary/80 to-secondary text-primary-foreground ${heroAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container relative">
          <header className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              A credibility engine for product people
            </h1>
            <p className="text-lg md:text-2xl mb-10 opacity-95 leading-relaxed">
              Build your product portfolio. Show how you think. Prove your impact.
            </p>
            <div className="flex justify-center gap-4" aria-label="Primary call to action">
              <Button asChild size="lg" variant="gradient" className="px-8">
                <a href="https://app.prodfolio.io/signup">Get started free</a>
              </Button>
              <Button asChild size="lg" variant="outlinePremium" className="px-8 bg-white/95 backdrop-blur-sm">
                <a href="https://app.prodfolio.io/login">Log in</a>
              </Button>
            </div>
            <p className="mt-4 text-sm opacity-90">No credit card required.</p>
          </header>
        </div>
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>
      </section>

      {/* How It Works Section */}
      <section 
        ref={howItWorksAnimation.ref as React.RefObject<HTMLElement>}
        className="py-24 md:py-30 section-light section-accent-border"
      >
        <div className="prodfolio-container">
        <div className={`text-center mb-16 ${howItWorksAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">How it works</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3">Showcase your expertise and land your next role with three simple steps.</p>
          <p className="text-sm text-muted-foreground/70 max-w-2xl mx-auto">
            Save hours of setup time with a guided process that makes portfolio building effortless.
          </p>
        </div>
        <div className={`grid md:grid-cols-3 gap-12 max-w-6xl mx-auto stagger-children ${howItWorksAnimation.isVisible ? 'visible' : ''}`}>
          <article className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 shadow-lg">
              <span className="text-white text-3xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Share your experience</h3>
            <p className="text-muted-foreground leading-relaxed">Answer quick guided prompts about your work — we'll help you uncover the PM thinking you already have.</p>
          </article>
          <article className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 shadow-lg">
              <span className="text-white text-3xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Build your story</h3>
            <p className="text-muted-foreground leading-relaxed">Turn your experience into compelling, proof-based case studies that highlight your real impact.</p>
          </article>
          <article className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 shadow-lg">
              <span className="text-white text-3xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Share and stand out</h3>
            <p className="text-muted-foreground leading-relaxed">Publish a professional portfolio you can share in minutes — and get noticed faster.</p>
          </article>
        </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section 
        ref={insightsAnimation.ref as React.RefObject<HTMLElement>}
        className="py-24 md:py-30 bg-white"
      >
        <div className="prodfolio-container">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 ${insightsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Great portfolios get noticed
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">Show your thinking, not just what you built.</p>
            </div>
            
            <div className={`grid md:grid-cols-2 gap-10 max-w-6xl mx-auto stagger-children ${insightsAnimation.isVisible ? 'visible' : ''}`}>
              <article className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10 relative hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -top-3 left-8">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                    <Quote className="w-3 h-3 text-primary" />
                  </div>
                </div>
                <div className="pt-6">
                  <div className="text-xs text-primary/80 font-medium mb-4 uppercase tracking-wide">
                    Hiring Manager Insight
                  </div>
                  <div className="flex items-start gap-4">
                    <img src="/lovable-uploads/0cae8eea-dd71-4a45-aafc-571da7eca51f.png" alt="Headshot of Aaron K., VP of Product" className="w-9 h-9 rounded-full object-cover flex-shrink-0" loading="lazy" decoding="async" />
                    <div className="flex-1">
                      <div className="border-l-2 border-primary/20 pl-4">
                        <p className="text-[15px] font-normal text-foreground mb-5 leading-[1.7] italic">
                          "<span className="font-semibold">Portfolios reveal how PMs navigate complexity — how they think, influence without authority, and drive outcomes from discovery to launch.</span> It's one of the clearest signals of how someone operates as a product person."
                        </p>
                        <p className="text-sm text-muted-foreground font-medium">
                          Aaron K., VP of Product
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              
              <article className="bg-white rounded-2xl p-8 shadow-lg border border-secondary/10 relative hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -top-3 left-8">
                  <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center border border-secondary/20">
                    <Quote className="w-3 h-3 text-secondary" />
                  </div>
                </div>
                <div className="pt-6">
                  <div className="text-xs text-secondary/80 font-medium mb-4 uppercase tracking-wide">
                    RECRUITER INSIGHT
                  </div>
                  <div className="flex items-start gap-4">
                    <img src="/lovable-uploads/56866b99-b328-4d88-9257-54008e00de28.png" alt="Headshot of Heidi R., TheProductRecruiter.com" className="w-9 h-9 rounded-full object-cover flex-shrink-0" loading="lazy" decoding="async" />
                    <div className="flex-1">
                      <div className="border-l-2 border-secondary/20 pl-4">
                        <p className="text-[15px] font-normal text-foreground mb-5 leading-[1.7] italic">
                          "A strong portfolio helps cut through the noise. Just like a UX designer's portfolio brings their process to life, <span className="font-semibold">a product manager's portfolio showcases how they define problems, apply thinking and the impact of what they shipped.</span>"
                        </p>
                        <p className="text-sm text-muted-foreground font-medium">
                          Heidi R., Practice Lead @ TheProductRecruiter.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsAnimation.ref as React.RefObject<HTMLElement>}
        className="py-24 md:py-30 section-light section-accent-border"
      >
        <div className="prodfolio-container">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 ${testimonialsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Real stories from product managers and aspiring product leaders just like you.
              </h2>
            </div>
            
            <div className={`grid md:grid-cols-3 gap-8 stagger-children ${testimonialsAnimation.isVisible ? 'visible' : ''}`}>
              {/* Real Testimonial */}
              <article className="bg-white rounded-2xl p-6 shadow-lg border border-primary/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-sm text-foreground leading-relaxed mb-6">
                    "Building a portfolio or personal website from scratch would have taken me weeks or even months that I simply don't have as a busy PM. More importantly, Prodfolio understands what hiring managers and recruiters in product management are looking for. I'm most excited about how Prodfolio helps me craft narratives around my product work; the templates are easy to use and optimized for storytelling."
                  </p>
                </div>
                <p className="text-sm text-muted-foreground font-medium pt-4 border-t border-border">
                  Senior Product Manager
                </p>
              </article>

              {/* Placeholder Testimonial 1 */}
              <article className="bg-white rounded-2xl p-6 shadow-lg border border-secondary/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col opacity-50">
                <div className="flex-1">
                  <Quote className="w-8 h-8 text-secondary/30 mb-4" />
                  <p className="text-sm text-foreground leading-relaxed mb-6">
                    Your testimonial could be here. Share your Prodfolio success story with us.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground font-medium pt-4 border-t border-border">
                  Future Testimonial
                </p>
              </article>

              {/* Placeholder Testimonial 2 */}
              <article className="bg-white rounded-2xl p-6 shadow-lg border border-primary/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col opacity-50">
                <div className="flex-1">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-sm text-foreground leading-relaxed mb-6">
                    Your testimonial could be here. Share your Prodfolio success story with us.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground font-medium pt-4 border-t border-border">
                  Future Testimonial
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        ref={ctaAnimation.ref as React.RefObject<HTMLElement>}
        className="py-24 md:py-32 bg-white"
      >
        <div className="prodfolio-container text-center">
          <div className={`max-w-3xl mx-auto ${ctaAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              Ready to build your Prodfolio™?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Join product leaders using Prodfolio to stand out and get hired.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" variant="gradient" className="px-8">
                <a href="https://app.prodfolio.io/signup">Get started free</a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">No credit card required.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
export default Landing;