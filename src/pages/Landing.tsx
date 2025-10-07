import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const Landing = () => {
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
  return <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-primary via-primary/80 to-secondary text-primary-foreground">
        <div className="prodfolio-container relative">
          <header className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              A credibility engine for product people
            </h1>
            <p className="text-lg md:text-2xl mb-10 opacity-95">
              Build your product portfolio. Show how you think. Prove your impact.
            </p>
            <div className="flex justify-center" aria-label="Primary call to action">
              <Button asChild size="lg" className="px-8">
                <a href="https://app.prodfolio.io/signup">Get started free</a>
              </Button>
            </div>
            <p className="mt-4 text-sm opacity-90">No credit card required.</p>
          </header>
        </div>
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="prodfolio-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How it works</h2>
            <p className="text-lg text-muted-foreground">Three simple steps to showcase your PM impact</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <article className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Share your experience</h3>
              <p className="text-muted-foreground">Answer guided prompts about your projects, decisions, and outcomes. We help you identify the PM thinking you already have.</p>
            </article>
            <article className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Build your story</h3>
              <p className="text-muted-foreground">Transform your experience into compelling case studies that highlight your problem-solving process and impact.</p>
            </article>
            <article className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Share and get noticed</h3>
              <p className="text-muted-foreground">Get a beautiful, shareable portfolio that clearly communicates your PM capabilities to hiring managers.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="prodfolio-container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Strong portfolios cut through the noise
              </h2>
              <p className="text-lg text-muted-foreground">Hiring managers want to see how you think — not just what you shipped.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10 relative hover:shadow-xl transition-all duration-300">
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
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary/10 relative hover:shadow-xl transition-all duration-300">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="prodfolio-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to build your product portfolio?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the waitlist and be among the first to create a portfolio that showcases your PM thinking and impact.
          </p>
          <Button asChild size="lg" className="px-8">
            <a href="https://app.prodfolio.io/signup">Get started free</a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">No credit card required.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gradient-to-br from-primary via-primary/80 to-secondary text-primary-foreground">
        <div className="prodfolio-container text-center">
          <p className="text-sm mb-3">Made with 💙 by PMs, for PMs</p>
          <div className="flex justify-center items-center space-x-4 text-xs text-primary-foreground/80">
            <a href="mailto:hello@prodfolio.io" className="hover:text-primary-foreground hover:underline transition-all">
              Contact us
            </a>
            <span className="text-primary-foreground/60">|</span>
            <a href="https://sugared-cactus-5d5.notion.site/Prodfolio-Privacy-Policy-241f710757778017aa6dc57283be68d7" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground hover:underline transition-all">
              Privacy
            </a>
            <span className="text-primary-foreground/60">|</span>
            <a href="https://www.linkedin.com/company/prodfoliohq" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground hover:underline transition-all">
              Follow us on LinkedIn
            </a>
            <span className="text-primary-foreground/60">|</span>
            <a href="https://www.linkedin.com/company/theproductpivot" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground hover:underline transition-all">
              Podcast
            </a>
          </div>
          <p className="text-xs text-primary-foreground/80 mt-3">
            Prodfolio™ is a product of Just Fractional, LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>;
};
export default Landing;