import { Button } from "@/components/ui/button";
import { Quote, FileText, Zap, Users, Sparkles } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Landing = () => {
  const heroAnimation = useScrollAnimation();
  const howItWorksAnimation = useScrollAnimation();
  const insightsAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();
  
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      label: "Guided storytelling",
      icon: FileText,
      title: "Know exactly what to say",
      description: "Guided prompts help you uncover the PM thinking you already have. No more staring at a blank page wondering if you sound qualified enough—answer questions, we'll help you structure the story.",
      visual: "📝"
    },
    {
      label: "AI-powered tools",
      icon: Sparkles,
      title: "Finish in one focused session",
      description: "Go from rough notes to polished case study without weeks of design work. AI helps you articulate your impact while you stay in control of your narrative. Professional results, your authentic voice.",
      visual: "✨"
    },
    {
      label: "Built for PMs",
      icon: Users,
      title: "Showcase strategic thinking, not just delivery",
      description: "Templates designed for what hiring managers actually look for: how you define problems, navigate ambiguity, influence without authority, and drive measurable outcomes. Show you think like a PM.",
      visual: "👥"
    },
    {
      label: "Ship in minutes",
      icon: Zap,
      title: "From idea to published in one session",
      description: "No design skills needed. No technical setup. Create a professional portfolio you're proud to share—in the time it takes to watch a product demo. Start with a blank slate or use proven templates.",
      visual: "⚡"
    }
  ];

  // Enhanced SEO for the homepage
  useSEO({
    title: "Prodfolio — Build Your Product Portfolio in Minutes",
    description: "Build your product portfolio to showcase how you think, what you've shipped, and the impact you've made. Trusted by PMs at top companies. Get started free - no credit card required.",
    ogTitle: "Prodfolio — Build Your Product Portfolio in Minutes",
    ogDescription: "Showcase your product thinking and prove your impact with a professional portfolio. No design skills required.",
    ogImage: "https://prodfolio.io/og-image-prodfolio.png",
    ogType: "website",
    canonical: "https://prodfolio.io/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Prodfolio",
      "description": "Portfolio platform for product managers to showcase their work, thinking, and impact.",
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
        className={`relative overflow-hidden pt-20 pb-32 md:pt-28 md:pb-40 ${heroAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        style={{
          background: 'linear-gradient(180deg, #FAFAFA 0%, #F5F3FF 100%)',
        }}
      >
        <div className="prodfolio-container relative z-10">
          <header className="max-w-4xl mx-auto text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Used by PMs at Google, Amazon, Stripe, and 70+ others
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6 text-foreground">
              Show your work.
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Own your impact.</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Build a portfolio that proves how you think, what you've shipped, and the impact you've made—in one focused session, not weeks of design work.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8" aria-label="Primary call to action">
              <Button asChild size="lg" className="px-10 py-6 h-auto text-lg btn-gradient shadow-xl hover:scale-105 transition-transform">
                <a href="https://app.prodfolio.io/signup">
                  Start Your Portfolio Free
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-10 py-6 h-auto text-lg border-2 hover:bg-accent/50">
                <a href="#examples">See Example Portfolios</a>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              No credit card required • Free to start • 2-minute setup
            </p>
          </header>

          {/* Product Screenshot Mockup */}
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-xl shadow-2xl overflow-hidden border border-border/50 bg-card transform hover:scale-[1.02] transition-transform duration-300">
              {/* Browser Chrome */}
              <div className="bg-muted/50 border-b border-border/50 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background/80 rounded px-3 py-1 text-xs text-muted-foreground border border-border/50">
                    yourname.prodfolio.io
                  </div>
                </div>
              </div>
              
              {/* Portfolio screenshot example */}
              <div className="aspect-[16/10] bg-background relative overflow-hidden">
                <img 
                  src="/src/assets/portfolio-preview.png" 
                  alt="Example portfolio showing Sarah Chen's professional PM portfolio with summary, skills, and case studies" 
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </section>

      {/* Market Context Section */}
      <section className="py-20 md:py-24 bg-white border-y border-border/50">
        <div className="prodfolio-container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-6">
              The PM job market in 2025: More opportunities. More visibility needed.
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-3 text-base md:text-lg text-primary font-semibold">
              <span>24,320 PM roles</span>
              <span className="text-foreground font-normal">|</span>
              <span>+39% growth in entry-level roles</span>
              <span className="text-foreground font-normal">|</span>
              <span>+26% remote opportunities</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        ref={howItWorksAnimation.ref as React.RefObject<HTMLElement>}
        className="py-24 md:py-32"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',
        }}
      >
        <div className="prodfolio-container">
          <div className={`text-center mb-16 ${howItWorksAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Everything you need to showcase your work and stand out
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for how PMs work and how hiring managers hire
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className={`flex flex-wrap justify-center gap-2 mb-12 ${howItWorksAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200
                    ${activeTab === index 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{feature.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className={`max-w-5xl mx-auto ${howItWorksAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="bg-card border border-border rounded-2xl p-12 shadow-sm">
              {/* Visual Illustration */}
              <div className="flex justify-center mb-12">
                <div className="relative">
                  {/* Center circle with emoji */}
                  <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-6xl">
                    {features[activeTab].visual}
                  </div>
                  
                  {/* Decorative connecting elements */}
                  <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-24 h-24 rounded-xl bg-muted/50 border border-border flex items-center justify-center">
                    <Users className="w-10 h-10 text-muted-foreground/40" />
                  </div>
                  <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-24 h-24 rounded-xl bg-muted/50 border border-border flex items-center justify-center">
                    <FileText className="w-10 h-10 text-muted-foreground/40" />
                  </div>
                  
                  {/* Connecting lines */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5">
                    <div className="absolute left-0 right-0 top-0 border-t-2 border-dashed border-primary/20"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {features[activeTab].title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {features[activeTab].description}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center mt-12 ${howItWorksAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Button asChild size="lg" className="px-8">
              <a href="/resources">See Examples & Templates</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section 
        ref={insightsAnimation.ref as React.RefObject<HTMLElement>}
        className="py-24 md:py-30 bg-muted/30"
      >
        <div className="prodfolio-container">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 ${insightsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Designed for how hiring managers actually evaluate PMs
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">We asked VPs of Product and recruiters what they look for. Here's what they told us.</p>
            </div>
            
            <div className={`grid md:grid-cols-2 gap-10 max-w-6xl mx-auto stagger-children ${insightsAnimation.isVisible ? 'visible' : ''}`}>
              <article className="glass-card rounded-2xl p-8 relative">
                <div className="absolute -top-3 left-8">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                    <Quote className="w-3 h-3 text-primary" />
                  </div>
                </div>
                <div className="pt-6">
                  <div className="text-xs text-primary font-medium mb-4 uppercase tracking-wide">
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
              
              <article className="glass-card rounded-2xl p-8 relative">
                <div className="absolute -top-3 left-8">
                  <div className="w-6 h-6 bg-secondary/50 rounded-full flex items-center justify-center border border-secondary">
                    <Quote className="w-3 h-3 text-primary" />
                  </div>
                </div>
                <div className="pt-6">
                  <div className="text-xs text-primary font-medium mb-4 uppercase tracking-wide">
                    RECRUITER INSIGHT
                  </div>
                  <div className="flex items-start gap-4">
                    <img src="/lovable-uploads/56866b99-b328-4d88-9257-54008e00de28.png" alt="Headshot of Heidi R., TheProductRecruiter.com" className="w-9 h-9 rounded-full object-cover flex-shrink-0" loading="lazy" decoding="async" />
                    <div className="flex-1">
                      <div className="border-l-2 border-primary/20 pl-4">
                        <p className="text-[15px] font-normal text-foreground mb-5 leading-[1.7] italic">
                          "A strong portfolio helps cut through the noise. Just like a UX designer's portfolio brings their process to life, <span className="font-semibold">a product manager's portfolio showcases how they define problems, apply thinking and the impact of what they shipped.</span>"
                        </p>
                        <p className="text-sm text-muted-foreground font-medium">
                          Heidi R., Product Recruiter, Practice Lead
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            
            <div className={`text-center mt-12 ${insightsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <Button asChild size="lg" className="px-8 btn-gradient">
                <a href="https://app.prodfolio.io/signup">Build the portfolio hiring managers want to see</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsAnimation.ref as React.RefObject<HTMLElement>}
        className="py-24 md:py-32 bg-muted/20"
      >
        <div className="prodfolio-container">
          <div className="max-w-5xl mx-auto">
            <div className={`text-center mb-20 ${testimonialsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                What product managers are saying
              </h2>
            </div>
            
            <div className={`${testimonialsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <Carousel className="w-full">
                <CarouselContent>
                  {/* Real Testimonial */}
                  <CarouselItem>
                    <div className="py-12 px-4">
                      <blockquote className="text-center space-y-8">
                        <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-4xl mx-auto italic">
                          "Building a portfolio or personal website from scratch would have taken me weeks or even months that I simply don't have as a busy PM. More importantly, Prodfolio understands what hiring managers and recruiters in product management are looking for. I'm most excited about how Prodfolio helps me craft narratives around my product work; the templates are easy to use and optimized for storytelling."
                        </p>
                        <footer className="flex items-center justify-center gap-6 text-base">
                          <div className="text-right">
                            <cite className="font-semibold text-foreground not-italic">Senior Product Manager</cite>
                          </div>
                          <div className="w-px h-12 bg-border"></div>
                          <div className="text-left">
                            <div className="text-muted-foreground">Tech Industry</div>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </CarouselItem>

                  {/* Placeholder Testimonial 1 */}
                  <CarouselItem>
                    <div className="py-12 px-4">
                      <blockquote className="text-center space-y-8 opacity-40">
                        <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-4xl mx-auto">
                          "Your testimonial could be here. Share your Prodfolio success story with us and help other PMs discover how to showcase their work effectively."
                        </p>
                        <footer className="flex items-center justify-center gap-6 text-base">
                          <div className="text-right">
                            <cite className="font-semibold text-foreground not-italic">Your Name</cite>
                          </div>
                          <div className="w-px h-12 bg-border"></div>
                          <div className="text-left">
                            <div className="text-muted-foreground">Your Title</div>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </CarouselItem>

                  {/* Placeholder Testimonial 2 */}
                  <CarouselItem>
                    <div className="py-12 px-4">
                      <blockquote className="text-center space-y-8 opacity-40">
                        <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-4xl mx-auto">
                          "Your testimonial could be here. Share your Prodfolio success story with us and help other PMs discover how to showcase their work effectively."
                        </p>
                        <footer className="flex items-center justify-center gap-6 text-base">
                          <div className="text-right">
                            <cite className="font-semibold text-foreground not-italic">Your Name</cite>
                          </div>
                          <div className="w-px h-12 bg-border"></div>
                          <div className="text-left">
                            <div className="text-muted-foreground">Your Title</div>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                
                {/* Custom Navigation */}
                <div className="flex items-center justify-center gap-6 mt-12">
                  <CarouselPrevious className="relative static translate-y-0" />
                  <CarouselNext className="relative static translate-y-0" />
                </div>
              </Carousel>
            </div>

            <div className={`text-center mt-16 space-y-4 ${testimonialsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <Button asChild variant="outline" size="lg" className="px-8">
                <a href="https://forms.gle/your-form-link" target="_blank" rel="noopener noreferrer">Share Your Story</a>
              </Button>
              <p className="text-muted-foreground text-sm">
                Ready to start building? <a href="/pricing" className="text-primary hover:underline font-medium">View Plans & Pricing</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
export default Landing;