import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useSEO } from "@/hooks/useSEO";
import { useState } from "react";

const Pricing = () => {
  const scrollRef = useScrollAnimation();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  useSEO({
    title: "Product Portfolio Builder Pricing | Free & Pro Plans - Prodfolio",
    description: "Compare Prodfolio pricing plans — from Free to Premium. Build and showcase your product portfolio with AI-powered storytelling tools.",
    canonical: "https://prodfolio.io/pricing",
  });

  const getPrice = (monthlyPrice: number, tier: string) => {
    if (tier === "free") return null;
    if (billingCycle === "annual") {
      return Math.floor(monthlyPrice * 0.8); // 20% discount
    }
    return monthlyPrice;
  };

  const plans = [
    {
      name: "Free",
      tagline: "Build your first portfolio",
      price: "$0",
      monthlyPrice: 0,
      features: [
        "1 portfolio with unlimited edits",
        "Professional themes (5 options)",
        "3 AI-generated case studies",
        "3 AI resume uploads",
        "SIGNAL framework with guided prompts",
        "Public portfolio link",
        '"Built with Prodfolio" footer'
      ],
      cta: "Get Started Free",
      popular: false,
      tier: "free",
      monthlyLink: "https://app.prodfolio.io/sign-up",
      annualLink: "https://app.prodfolio.io/sign-up"
    },
    {
      name: "Pro",
      tagline: "Full access to Prodfolio",
      price: "$19",
      monthlyPrice: 19,
      features: [
        "Unlimited portfolios",
        "Unlimited AI case study generation",
        "Unlimited AI resume uploads",
        "Password-protected portfolios",
        "Custom domain (yourname.com)",
        "Custom themes & colors",
        "Analytics dashboard",
        "Remove Prodfolio branding",
        "Priority support"
      ],
      cta: "Get Pro",
      popular: true,
      tier: "pro",
      monthlyLink: "https://buy.stripe.com/00w00l5NefoxeGzgMTbfO01",
      annualLink: "https://buy.stripe.com/aFa28tcbC6S18ib2W3bfO02"
    }
  ];

  return (
    <div className="min-h-screen gradient-mesh-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-10 pb-4">
        <div className="prodfolio-container text-center">
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-4 text-navy">
            Invest in your PM career
          </h1>
          <p className="text-xl text-navy/80 mb-4">
            For less than the cost of a coffee per week, stand out in every application. Start free, no credit card required.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-navy/70">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-coral" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="font-medium text-navy">Join 100+ PMs showcasing their work</span>
          </div>
        </div>
      </section>

      {/* Founding Member Section - Featured */}
      <section className="pt-6 pb-6 relative overflow-hidden">
        <div className="prodfolio-container max-w-5xl relative z-10">
          <div className="relative bg-white/95 backdrop-blur-md border-2 border-primary/40 rounded-3xl p-6 md:p-10 shadow-xl">
            {/* Decorative Corner Badge */}
            <div className="absolute -top-3 -right-3 z-20">
              <div className="bg-coral text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl rotate-12 animate-pulse">
                LIMITED OFFER
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
                {/* Left Side - Info */}
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-3 text-navy">
                    Founding Member
                  </h2>

                  <p className="text-xl text-navy/80 mb-4">
                    Join the founding cohort shaping the future of Prodfolio together.
                  </p>

                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-6xl font-display font-bold text-navy">$14.50/mo</span>
                    <span className="text-xl text-navy/70">(50% off!)</span>
                  </div>

                  <div className="bg-primary/10 border-l-4 border-primary rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-sm leading-relaxed text-navy/80">
                      <strong className="text-navy">What makes this different:</strong> This isn't early access with bugs. The platform works. You get proximity — direct line to the founders, personalized support, and input on what we build next.
                    </p>
                  </div>
                </div>

                {/* Right Side - Features */}
                <div className="md:w-80 shrink-0">
                  <div className="bg-white/95 backdrop-blur-md border-2 border-primary/30 rounded-2xl p-5 shadow-xl">
                    <h3 className="font-bold text-lg mb-3 font-display text-navy">Everything in Pro, plus:</h3>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug text-navy"><strong>Portfolio review</strong> within 30 days</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug text-navy"><strong>Direct Slack access</strong> to founders</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug text-navy"><strong>Monthly AMAs</strong> with exclusive roadmap sessions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug text-navy"><strong>Featured on our site</strong> (optional)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug text-navy"><strong>Shape the roadmap</strong> with your feedback</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug text-navy"><strong>Founding Member badge</strong> on your portfolio</span>
                      </li>
                    </ul>

                    <Button
                      className="w-full mt-5 bg-primary hover:bg-primary/90 text-white font-display font-semibold text-base py-6 rounded-xl shadow-soft transition-all duration-200 hover:shadow-xl"
                      onClick={() => window.open('https://buy.stripe.com/8x29AVb7y7W5dCvcwDbfO06', '_blank')}
                    >
                      Become a Founding Member
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section
        ref={scrollRef.ref as React.RefObject<HTMLElement>}
        className={`pt-4 pb-8 ${scrollRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-display font-bold mb-3 text-navy">Standard Plans</h2>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-md border border-primary/20 rounded-full p-1.5 shadow-xl mb-4">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2.5 rounded-full transition-all duration-200 ${
                  billingCycle === "monthly"
                    ? "bg-primary text-white font-medium shadow-sm"
                    : "text-navy/70 hover:text-navy"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2.5 rounded-full transition-all duration-200 flex items-center gap-2 ${
                  billingCycle === "annual"
                    ? "bg-primary text-white font-medium shadow-sm"
                    : "text-navy/70 hover:text-navy"
                }`}
              >
                Annual
                <span className="text-xs bg-coral text-white px-2 py-0.5 rounded-full font-bold">
                  Save 20%
                </span>
              </button>
            </div>
            
            <p className="text-lg text-navy/80">Choose the plan that works best for you</p>
          </div>
          
          {/* Main Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto items-stretch">
            {plans.map((plan, index) => {
              const displayPrice = plan.tier === "free" 
                ? plan.price 
                : `$${getPrice(plan.monthlyPrice, plan.tier)}`;
              
              return (
                <Card 
                  key={index}
                  className={`relative flex flex-col bg-white/95 backdrop-blur-md border border-primary/20 hover-lift transition-all duration-300 ${
                    plan.popular
                      ? 'border-2 border-primary shadow-xl ring-2 ring-primary/20'
                      : ''
                  }`}
                  style={{ borderRadius: '24px' }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-auto">
                      <span className="bg-gradient-primary text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-soft animate-pulse">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-2 mb-2 min-h-[32px]">
                      <CardTitle className="text-xl font-display text-navy">{plan.name}</CardTitle>
                      {plan.tier === "free" && (
                        <span className="bg-coral/10 text-coral text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                          No credit card required
                        </span>
                      )}
                    </div>
                    <div className="mt-3 mb-2">
                      <div className="text-5xl font-display font-bold text-navy">{displayPrice}</div>
                      <div className="mt-2 min-h-[44px]">
                        {plan.tier !== "free" && (
                          <div className="text-sm text-navy/70">
                            per {billingCycle === "monthly" ? "month" : "month"}
                            {billingCycle === "annual" && (
                              <div className="text-xs text-navy/60 mt-1">billed annually</div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-sm leading-relaxed text-navy/70 min-h-[20px]">
                      {plan.tagline}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0 pb-4 flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm leading-snug text-navy">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="pt-0 pb-6 mt-auto">
                    <Button 
                      asChild
                      className={`w-full h-12 font-semibold transition-all duration-200 focus:outline-none focus:ring-0 ${
                        plan.popular 
                          ? "btn-coral hover:-translate-y-1" 
                          : plan.tier === "free"
                          ? "btn-outline-premium"
                          : "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-1"
                      }`}
                      style={{ borderRadius: '12px' }}
                    >
                      <a href={billingCycle === "annual" ? plan.annualLink : plan.monthlyLink} target="_blank" rel="noopener noreferrer">
                        {plan.cta}
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Money-Back Guarantee Section */}
      <section className="pt-4 pb-2">
        <div className="prodfolio-container max-w-4xl">
          <div className="bg-white/95 backdrop-blur-md border-2 border-primary/30 rounded-2xl p-5 shadow-lg text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-display font-bold text-navy">30-Day Money-Back Guarantee</h3>
            </div>
            <p className="text-lg text-navy/80 leading-relaxed">
              Try Prodfolio risk-free. If you're not satisfied within 30 days, we'll refund you, no questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-8 pb-10">
        <div className="prodfolio-container max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-center mb-6 text-navy">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl p-5 hover-lift shadow-xl">
              <h3 className="text-lg font-display font-bold mb-3 text-navy">Can I switch plans later?</h3>
              <p className="text-navy/80 leading-relaxed">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl p-5 hover-lift shadow-xl">
              <h3 className="text-lg font-display font-bold mb-3 text-navy">What payment methods do you accept?</h3>
              <p className="text-navy/80 leading-relaxed">
                We go through stripe, so we offer a lot of different payment options. Click on the preferred plan and see what options are available.
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl p-5 hover-lift shadow-xl">
              <h3 className="text-lg font-display font-bold mb-3 text-navy">Can I try before I buy?</h3>
              <p className="text-navy/80 leading-relaxed">
                Yes! Start with our Free plan to explore the platform. You can upgrade to paid plans anytime to unlock more features.
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl p-5 hover-lift shadow-xl">
              <h3 className="text-lg font-display font-bold mb-3 text-navy">Can I cancel anytime?</h3>
              <p className="text-navy/80 leading-relaxed">
                Absolutely. Cancel your subscription anytime from your account settings. We may reach out for feedback on how to improve :)
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl p-5 hover-lift shadow-xl">
              <h3 className="text-lg font-display font-bold mb-3 text-navy">What makes Prodfolio different from other portfolio tools?</h3>
              <p className="text-navy/80 leading-relaxed">
                We're built by PMs, for PMs. Every feature is designed around how you actually work and what hiring managers actually want to see. Plus, you're joining a community of product people who get it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
