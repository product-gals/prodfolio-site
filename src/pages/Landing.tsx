import { Button } from "@/components/ui/button";
import { Quote, TrendingUp, Repeat, Users } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import portfolioPreview from "@/assets/portfolio-preview.png";
const Landing = () => {
  const heroAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const insightsAnimation = useScrollAnimation();
  const audienceAnimation = useScrollAnimation();
  const howItWorksAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  // Enhanced SEO for the homepage
  useSEO({
    title: "PM Portfolio Builder | Create Your Product Manager Portfolio Free | Prodfolio",
    description: "Build your product manager portfolio in under an hour. Showcase your PM thinking, prove your impact, and stand out to hiring managers. Free to start, no design skills needed.",
    ogTitle: "Prodfolio — Build Your Product Portfolio in Minutes",
    ogDescription: "Showcase your product thinking and prove your impact with a professional portfolio. No design skills required.",
    ogImage: "https://prodfolio.io/social-share.png",
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
  return <main id="main-content" className="gradient-mesh-bg overflow-hidden">
      {/* Hero Section - Reduced padding, larger text */}
      <section ref={heroAnimation.ref as React.RefObject<HTMLElement>} className={`relative pt-16 pb-12 ${heroAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="prodfolio-container max-w-[1400px] relative z-10">
          <header className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg md:text-xl text-white/80 mb-4 font-medium tracking-wide uppercase">
              The portfolio platform built for product managers
            </p>
            <h1 className="text-6xl md:text-8xl font-heading font-bold leading-[1.1] tracking-tight mb-6 text-white">
              Show your work.
              <br />
              <span className="gradient-text">Own your impact.</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
              Build a portfolio that proves how you think - in hours, not weeks. Join the PMs who stand out.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6" aria-label="Primary call to action">
              <Button asChild size="lg" className="px-8 py-6 h-auto text-lg bg-white text-navy hover:bg-white/90 hover:scale-105 transition-all shadow-xl font-semibold">
                <a href="https://app.prodfolio.io/sign-up">
                  Start Your Portfolio Free
                </a>
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

      {/* Market Stats Bar - Opportunity-focused messaging */}
      <section ref={statsAnimation.ref as React.RefObject<HTMLElement>} className={`py-12 ${statsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="prodfolio-container max-w-[1400px]">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              Your work speaks louder than another application
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              The PMs who stand out are the ones who show their thinking—not just list their titles.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glass-pill text-center">
              <div className="text-3xl font-bold text-white mb-1">90%</div>
              <div className="text-sm text-white/80">of PMs don't have portfolios</div>
              <div className="text-xs text-white/70 mt-1">Cut through the noise</div>
            </div>
            <div className="glass-pill text-center">
              <div className="text-3xl font-bold text-white mb-1">&lt;1 hour</div>
              <div className="text-sm text-white/80">to build what sets you apart</div>
              <div className="text-xs text-white/70 mt-1">Not weeks of prompting</div>
            </div>
            <div className="glass-pill text-center">
              <div className="text-3xl font-bold text-white mb-1">+26%</div>
              <div className="text-sm text-white/80">growth in entry-level PM roles in the last 6 months</div>
              <div className="text-xs text-white/70 mt-1">Now's the time to break in</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Managers Section - Overlapping glass cards, reduced height */}
      <section ref={insightsAnimation.ref as React.RefObject<HTMLElement>} className={`py-16 ${insightsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="prodfolio-container max-w-[1400px]">
          <div className={`text-center mb-10 ${insightsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
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

      {/* Who Prodfolio is For - Audience Segmentation */}
      <section ref={audienceAnimation.ref as React.RefObject<HTMLElement>} className={`py-10 ${audienceAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="prodfolio-container max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Who Prodfolio is for
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Whether you're leveling up, making a move, or breaking in - we've got you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Product Managers */}
            <article className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg p-8 text-center hover:scale-[1.02] transition-transform">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/30">
                <TrendingUp className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Product Managers</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                You've shipped products, led teams, driven results. Document your impact and own your narrative for that next promotion or role.
              </p>
              <a href="/examples" className="inline-block mt-2 px-5 py-2 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all">
                See examples →
              </a>
            </article>

            {/* Aspiring Product Managers */}
            <article className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg p-8 text-center hover:scale-[1.02] transition-transform">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/30">
                <Repeat className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Aspiring Product Managers</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                No PM title yet? Showcase your product thinking and prove you have the mindset hiring managers are looking for.
              </p>
              <a href="/for-career-changers" className="inline-block mt-2 px-5 py-2 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all">
                Learn how →
              </a>
            </article>

            {/* Product Leaders & Teams */}
            <article className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg p-8 text-center hover:scale-[1.02] transition-transform">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/30">
                <Users className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Product Leaders & Teams</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Directors, PMMs, and designers - your work drives product success. Make your strategic impact visible.
              </p>
              <a href="/features" className="inline-block mt-2 px-5 py-2 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all">
                See features →
              </a>
            </article>
          </div>

          {/* Hiring Manager Banner */}
          <div className="max-w-3xl mx-auto mt-10">
            <a
              href="/for-hiring-managers"
              className="block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all group"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-white font-semibold text-lg">Hiring for product roles?</p>
                  <p className="text-white/70 text-sm">See how Prodfolio helps you evaluate candidates beyond the resume.</p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works - Variant-style Feature Sections with UI Mockups */}
      <section ref={howItWorksAnimation.ref as React.RefObject<HTMLElement>} className={`py-20 ${howItWorksAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="prodfolio-container max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              From blank page to portfolio in under an hour
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              No design skills needed. No weeks of prompting. Just your experience and our guided framework.
            </p>
          </div>

          {/* Feature 01 - Import */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-primary/40 text-white font-heading font-bold text-sm tracking-wide mb-3 px-3 py-1.5 rounded-full">01 — IMPORT</div>
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
                Import your experience in seconds
              </h3>
              <p className="text-navy/70 text-lg mb-6 leading-relaxed">
                Upload your resume. Our AI extracts information and experience, building the foundation for your portfolio.
              </p>
              <Button asChild size="lg" className="px-6 py-5 h-auto text-base bg-primary text-white hover:bg-primary/90 inline-flex items-center gap-2 rounded-xl font-semibold">
                <a href="https://app.prodfolio.io/sign-up">
                  Start importing <span aria-hidden="true">→</span>
                </a>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              {/* Import UI Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto lg:ml-auto transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-sm">Resume Upload</div>
                    <div className="text-xs text-gray-500">resume_sarah_chen.pdf</div>
                  </div>
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-sm text-gray-700">Basics filled in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-sm text-gray-700">About section created</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-sm text-gray-700">Professional summary written</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-sm text-gray-500">Adding experience...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 02 - Build */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
            <div className="order-2">
              <div className="inline-block bg-primary/40 text-white font-heading font-bold text-sm tracking-wide mb-3 px-3 py-1.5 rounded-full">02 — BUILD</div>
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
                Structure your story with SIGNAL
              </h3>
              <p className="text-navy/70 text-lg mb-6 leading-relaxed">
                Our guided framework walks you through each case study. No more staring at a blank page.
              </p>
              <Button asChild size="lg" className="px-6 py-5 h-auto text-base bg-primary text-white hover:bg-primary/90 inline-flex items-center gap-2 rounded-xl font-semibold">
                <a href="https://app.prodfolio.io/sign-up">
                  See the framework <span aria-hidden="true">→</span>
                </a>
              </Button>
            </div>
            <div className="order-1">
              {/* SIGNAL Framework UI Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto lg:mr-auto transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <div>
                    <div className="font-semibold text-gray-900">SIGNAL Framework</div>
                    <div className="text-xs text-gray-500">Case Study Builder</div>
                  </div>
                  <div className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">4/6 Complete</div>
                </div>
                <div className="space-y-2">
                  {[
                    { letter: 'S', label: 'Situation', status: 'complete', desc: 'Context & challenge' },
                    { letter: 'I', label: 'Insight', status: 'complete', desc: 'Key discovery' },
                    { letter: 'G', label: 'Goals', status: 'complete', desc: 'What you aimed for' },
                    { letter: 'N', label: 'Navigation', status: 'active', desc: 'How you got there' },
                    { letter: 'A', label: 'Achievement', status: 'pending', desc: 'Measurable outcomes' },
                    { letter: 'L', label: 'Learnings', status: 'pending', desc: 'Key takeaways' },
                  ].map((item) => (
                    <div key={item.letter} className={`flex items-center gap-3 p-2 rounded-lg ${item.status === 'active' ? 'bg-primary/10 border border-primary/30' : ''}`}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                        item.status === 'complete' ? 'bg-green-100 text-green-700' :
                        item.status === 'active' ? 'bg-primary text-white' :
                        'bg-gray-100 text-gray-400'
                      }`}>
                        {item.status === 'complete' ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                        ) : item.letter}
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-medium ${item.status === 'pending' ? 'text-gray-400' : 'text-gray-900'}`}>{item.label}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                      {item.status === 'active' && (
                        <div className="text-xs text-primary font-medium">Writing...</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature 03 - Share */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-primary/40 text-white font-heading font-bold text-sm tracking-wide mb-3 px-3 py-1.5 rounded-full">03 — SHARE</div>
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
                One link. Unlimited impact.
              </h3>
              <p className="text-navy/70 text-lg mb-6 leading-relaxed">
                Get your personalized portfolio link. Share it with hiring managers, add it to LinkedIn, and own your narrative with a professional presence.
              </p>
              <Button asChild size="lg" className="px-6 py-5 h-auto text-base bg-primary text-white hover:bg-primary/90 inline-flex items-center gap-2 rounded-xl font-semibold">
                <a href="https://app.prodfolio.io/sign-up">
                  Create your link <span aria-hidden="true">→</span>
                </a>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              {/* Share UI Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto lg:ml-auto transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-semibold text-gray-900">Share Settings</div>
                  <div className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">Live</div>
                </div>
                {/* Case Study Lock Toggle */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                      <span className="text-sm font-medium text-gray-900">Lock your case study</span>
                    </div>
                    {/* Toggle switch - ON state */}
                    <div className="w-11 h-6 bg-primary rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow"></div>
                    </div>
                  </div>
                </div>
                {/* Portfolio Link */}
                <div className="space-y-2">
                  <div className="text-xs text-gray-500">Your portfolio link</div>
                  <div className="bg-gray-50 rounded-lg p-3 flex items-center gap-2">
                    <div className="flex-1 text-sm text-gray-600 font-mono truncate">app.prodfolio.io/p/your-name</div>
                    <button className="px-3 py-1.5 bg-primary text-white text-xs font-medium rounded-lg hover:bg-primary/90">Copy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section - Single compact glass card */}
      <section ref={testimonialsAnimation.ref as React.RefObject<HTMLElement>} className={`py-8 ${testimonialsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="prodfolio-container max-w-[1400px]">
          <div className="max-w-[900px] mx-auto">
            <div className={`text-center mb-8 ${testimonialsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                What product managers are saying
              </h2>
            </div>
            
            <div className={`bg-white/15 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl ${testimonialsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <Carousel className="w-full" aria-label="Product manager testimonials">
                <CarouselContent>
                  {/* Testimonial 1 */}
                  <CarouselItem>
                    <div className="py-4 px-2">
                      <blockquote className="text-center space-y-6">
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                          "Building a portfolio or personal website from scratch would have taken me <strong>weeks or even months</strong> that I simply don't have as a busy PM. More importantly, Prodfolio <strong>understands what hiring managers and recruiters in product management are looking for</strong>."
                        </p>
                        <footer className="flex items-center justify-center gap-4 text-sm">
                          <cite className="font-semibold text-white not-italic">Senior Product Manager</cite>
                          <div className="w-px h-8 bg-white/30"></div>
                          <div className="text-white/70">Tech Industry</div>
                        </footer>
                      </blockquote>
                    </div>
                  </CarouselItem>

                  {/* Testimonial 2 */}
                  <CarouselItem>
                    <div className="py-4 px-2">
                      <blockquote className="text-center space-y-6">
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                          "I spent <strong>8-12 hours</strong> building a portfolio in Notion, and I still felt too nervous to share it with hiring managers. Generic tools just aren't built with PM storytelling in mind. <strong>Prodfolio gets what product managers actually need</strong>."
                        </p>
                        <footer className="flex items-center justify-center gap-4 text-sm">
                          <cite className="font-semibold text-white not-italic">Product Lead</cite>
                          <div className="w-px h-8 bg-white/30"></div>
                          <div className="text-white/70">Tech Industry</div>
                        </footer>
                      </blockquote>
                    </div>
                  </CarouselItem>

                  {/* Testimonial 3 */}
                  <CarouselItem>
                    <div className="py-4 px-2">
                      <blockquote className="text-center space-y-6">
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                          "I've used Wix, Squarespace, and Behance before. They were <strong>so time-consuming</strong>, and I had no idea how to structure a case study. I really like how Prodfolio's case study <strong>shows you exactly what to include</strong>—this is what you do, these are your metrics."
                        </p>
                        <footer className="flex items-center justify-center gap-4 text-sm">
                          <cite className="font-semibold text-white not-italic">Amy W.</cite>
                          <div className="w-px h-8 bg-white/30"></div>
                          <div className="text-white/70">Product Manager</div>
                        </footer>
                      </blockquote>
                    </div>
                  </CarouselItem>

                  {/* Testimonial 4 */}
                  <CarouselItem>
                    <div className="py-4 px-2">
                      <blockquote className="text-center space-y-6">
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                          "The product is really intuitive and has an <strong>amazing structure</strong> to help you along the setup process. I can see why it supports hiring managers, helps distinguish PM candidates, and improves the efficiency of the hiring process. As a candidate, I'm hoping it will also help me <strong>stand out in a sea of CVs</strong>."
                        </p>
                        <footer className="flex items-center justify-center gap-4 text-sm">
                          <cite className="font-semibold text-white not-italic">Evelyn</cite>
                          <div className="w-px h-8 bg-white/30"></div>
                          <div className="text-white/70">Product Manager</div>
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
      <section ref={ctaAnimation.ref as React.RefObject<HTMLElement>} className={`py-12 px-4 ${ctaAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="prodfolio-container max-w-[600px] mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-white mb-2 leading-tight">
              Your resume lists what you did.
              <br />
              Your Prodfolio shows how you think.
            </h2>
            <p className="text-white/70 mb-6">
              Build your first portfolio free - no card needed.
            </p>
            <Button asChild size="default" className="px-8 py-5 text-base bg-white text-primary font-semibold hover:bg-white/90 hover:scale-105 transition-all shadow-xl rounded-xl">
              <a href="https://app.prodfolio.io/sign-up">
                Start Your Portfolio Free
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>;
};
export default Landing;