import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import portfolioPreview from "@/assets/portfolio-preview.png";
const Landing = () => {
  const heroAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const insightsAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  // Enhanced SEO for the homepage
  useSEO({
    title: "Prodfolio — Build Your Product Portfolio in Minutes",
    description: "Build your product portfolio to showcase how you think, what you've shipped, and the impact you've made. Trusted by PMs at top companies. Get started free - no credit card required.",
    ogTitle: "Prodfolio — Build Your Product Portfolio in Minutes",
    ogDescription: "Showcase your product thinking and prove your impact with a professional portfolio. No design skills required.",
    ogImage: "https://prodfolio.io/og-image.png",
    ogType: "website",
    canonical: "https://prodfolio.io/",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "Prodfolio",
          "url": "https://prodfolio.io",
          "logo": "https://prodfolio.io/favicon.svg",
          "description": "Portfolio platform for product managers to showcase their work, thinking, and impact.",
          "foundingDate": "2025-02",
          "slogan": "Show your work. Own your impact.",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "email": "hello@prodfolio.io"
          }
        },
        {
          "@type": "SoftwareApplication",
          "name": "Prodfolio",
          "description": "Build your product portfolio in minutes. Showcase your PM work, prove your impact, and land your next role with confidence.",
          "url": "https://prodfolio.io",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": [
            {
              "@type": "Offer",
              "name": "Free Plan",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Basic features with watermark"
            },
            {
              "@type": "Offer",
              "name": "Starter Plan",
              "price": "19",
              "priceCurrency": "USD",
              "description": "Full features, no watermark"
            },
            {
              "@type": "Offer",
              "name": "Pro Plan",
              "price": "29",
              "priceCurrency": "USD",
              "description": "Advanced features, priority support"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "ratingCount": "50",
            "reviewCount": "50"
          }
        },
        {
          "@type": "WebSite",
          "name": "Prodfolio",
          "url": "https://prodfolio.io",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://prodfolio.io/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      ]
    }
  });
  return <main className="gradient-mesh-bg overflow-hidden">
      {/* Hero Section - Reduced padding, larger text */}
      <section ref={heroAnimation.ref as React.RefObject<HTMLElement>} className={`relative pt-16 pb-12 ${heroAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="prodfolio-container max-w-[1400px] relative z-10">
          <header className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight mb-6 text-white">
              Show your work.
              <br />
              <span className="gradient-text">Own your impact.</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
              Build a portfolio that proves how you think, what you've shipped, and the impact you've made—in one focused session.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6" aria-label="Primary call to action">
              <Button asChild size="lg" className="px-8 py-6 h-auto text-lg bg-white text-navy hover:bg-white/90 hover:scale-105 transition-all shadow-xl font-semibold">
                <a href="https://app.prodfolio.io/signup">
                  Start Your Portfolio Free
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-6 h-auto text-lg border-2 border-white text-white hover:bg-white/10">
                
              </Button>
            </div>
            
            
          </header>

          {/* Product Screenshot Mockup - 1.3x larger with float animation */}
          <div className="max-w-[1100px] mx-auto float-animation">
            <div className="glass-card relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              {/* Browser Chrome */}
              <div className="bg-white/10 border-b border-white/20 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/20 rounded px-3 py-1 text-xs text-white border border-white/30">
                    prodfolio.io/p/sarah-chen
                  </div>
                </div>
              </div>
              
              {/* Portfolio screenshot example */}
              <div className="bg-white/5 relative overflow-hidden">
                <img src={portfolioPreview} alt="Example portfolio showing Sarah Chen's professional PM portfolio with summary, skills, and case studies" className="w-full h-auto" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats Bar - Horizontal glass pills */}
      <section ref={statsAnimation.ref as React.RefObject<HTMLElement>} className={`py-8 ${statsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="prodfolio-container max-w-[1400px]">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glass-pill text-center">
              <div className="text-3xl font-bold text-white mb-1">24,320</div>
              <div className="text-sm text-white/80">PM roles available</div>
            </div>
            <div className="glass-pill text-center">
              <div className="text-3xl font-bold text-white mb-1">+39%</div>
              <div className="text-sm text-white/80">Growth in entry-level roles</div>
            </div>
            <div className="glass-pill text-center">
              <div className="text-3xl font-bold text-white mb-1">+26%</div>
              <div className="text-sm text-white/80">Remote opportunities</div>
            </div>
          </div>
          <p className="text-center text-xs text-white/60 mt-4 italic">*based on data from LinkedIn</p>
        </div>
      </section>

      {/* Hiring Managers Section - Overlapping glass cards, reduced height */}
      <section ref={insightsAnimation.ref as React.RefObject<HTMLElement>} className={`py-16 ${insightsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="prodfolio-container max-w-[1400px]">
          <div className={`text-center mb-10 ${insightsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Designed for how hiring managers evaluate PMs
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">We asked VPs of Product and recruiters what they look for.</p>
          </div>
          
          {/* Overlapping cards */}
          <div className="max-w-6xl mx-auto relative">
            <div className="grid md:grid-cols-2 gap-8 md:gap-6 md:items-stretch">
              {/* Card 1 */}
              <article className="glass-card p-8 relative hover:z-10 flex flex-col h-full">
                <div className="absolute -top-3 left-6">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center border border-white/40">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="pt-4 flex-1 flex flex-col">
                  <div className="flex items-start gap-4 flex-1">
                    <img src="/lovable-uploads/0cae8eea-dd71-4a45-aafc-571da7eca51f.png" alt="Aaron K., VP of Product" className="w-12 h-12 rounded-full object-cover flex-shrink-0" loading="lazy" />
                    <div className="flex-1 flex flex-col">
                      <p className="text-base text-white/95 mb-4 leading-relaxed italic flex-1">
                        "Portfolios reveal how PMs navigate complexity — <strong>how they think, influence without authority, and drive outcomes from discovery to launch.</strong>"
                      </p>
                      <p className="text-sm text-white/70 font-medium">
                        Aaron K., VP of Product
                      </p>
                    </div>
                  </div>
                </div>
              </article>
              
              {/* Card 2 */}
              <article className="glass-card p-8 relative hover:z-10 flex flex-col h-full">
                <div className="absolute -top-3 left-6">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center border border-white/40">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="pt-4 flex-1 flex flex-col">
                  <div className="flex items-start gap-4 flex-1">
                    <img src="/lovable-uploads/56866b99-b328-4d88-9257-54008e00de28.png" alt="Heidi R., Product Recruiter" className="w-12 h-12 rounded-full object-cover flex-shrink-0" loading="lazy" />
                    <div className="flex-1 flex flex-col">
                      <p className="text-base text-white/95 mb-4 leading-relaxed italic flex-1">
                        "A strong portfolio helps cut through the noise. <strong>A product manager's portfolio showcases how they define problems, apply thinking and the impact of what they shipped.</strong>"
                      </p>
                      <p className="text-sm text-white/70 font-medium">
                        Heidi R., Product Recruiter
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Single compact glass card */}
      <section ref={testimonialsAnimation.ref as React.RefObject<HTMLElement>} className={`py-8 ${testimonialsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="prodfolio-container max-w-[1400px]">
          <div className="max-w-[900px] mx-auto">
            <div className={`text-center mb-8 ${testimonialsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                What product managers are saying
              </h2>
            </div>
            
            <div className={`bg-white/15 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl ${testimonialsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <Carousel className="w-full">
                <CarouselContent>
                  {/* Testimonial 1 */}
                  <CarouselItem>
                    <div className="py-4 px-2">
                      <blockquote className="text-center space-y-6">
                        <p className="text-lg md:text-xl text-[#484689] leading-relaxed max-w-3xl mx-auto">
                          "Building a portfolio or personal website from scratch would have taken me weeks or even months that I simply don't have as a busy PM. More importantly, Prodfolio understands what hiring managers and recruiters in product management are looking for."
                        </p>
                        <footer className="flex items-center justify-center gap-4 text-sm">
                          <cite className="font-semibold text-[#100D22] not-italic">Senior Product Manager</cite>
                          <div className="w-px h-8 bg-[#100D22]/30"></div>
                          <div className="text-[#484689]">Tech Industry</div>
                        </footer>
                      </blockquote>
                    </div>
                  </CarouselItem>

                  {/* Testimonial 2 */}
                  <CarouselItem>
                    <div className="py-4 px-2">
                      <blockquote className="text-center space-y-6">
                        <p className="text-lg md:text-xl text-[#484689] leading-relaxed max-w-3xl mx-auto">
                          "I've used Wix, Squarespace, and Behance before. They were so time-consuming, and I had no idea how to structure a case study. I really like how Prodfolio's case study shows you exactly what to include—this is what you do, these are your metrics."
                        </p>
                        <footer className="flex items-center justify-center gap-4 text-sm">
                          <cite className="font-semibold text-[#100D22] not-italic">Amy W.</cite>
                          <div className="w-px h-8 bg-[#100D22]/30"></div>
                          <div className="text-[#484689]">Product Manager</div>
                        </footer>
                      </blockquote>
                    </div>
                  </CarouselItem>

                  {/* Testimonial 3 */}
                  <CarouselItem>
                    <div className="py-4 px-2">
                      <blockquote className="text-center space-y-6">
                        <p className="text-lg md:text-xl text-[#484689] leading-relaxed max-w-3xl mx-auto">
                          "I spent 8-12 hours building a portfolio in Notion, and I still felt too nervous to share it with hiring managers. Generic tools just aren't built with PM storytelling in mind. Prodfolio gets what product managers actually need."
                        </p>
                        <footer className="flex items-center justify-center gap-4 text-sm">
                          <cite className="font-semibold text-[#100D22] not-italic">Product Lead</cite>
                          <div className="w-px h-8 bg-[#100D22]/30"></div>
                          <div className="text-[#484689]">Tech Industry</div>
                        </footer>
                      </blockquote>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                
                {/* Navigation */}
                <div className="flex items-center justify-center gap-6 mt-6">
                  <CarouselPrevious className="relative static translate-y-0 bg-white/20 border-white/40 text-white hover:bg-white/30" />
                  <CarouselNext className="relative static translate-y-0 bg-white/20 border-white/40 text-white hover:bg-white/30" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Centered floating glass card */}
      <section ref={ctaAnimation.ref as React.RefObject<HTMLElement>} className={`py-8 pb-16 ${ctaAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="prodfolio-container max-w-[1400px]">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                Your resume lists what you did.
                <br />
                Your Prodfolio shows how you think.
              </h2>
              <p className="text-base text-[#484689] mb-6">
                Build your first portfolio free—no card needed.
              </p>
              <Button asChild size="default" className="px-8 py-3 text-base bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-all shadow-xl">
                <a href="https://app.prodfolio.io/signup">
                  Start Your Portfolio Free
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>;
};
export default Landing;