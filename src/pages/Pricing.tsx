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
      tagline: "Get started risk-free",
      price: "$0",
      monthlyPrice: 0,
      features: [
        "One Prodfolio",
        "Unlimited edits",
        "Publish one time",
        "Basic themes",
        "Watermarked portfolio",
        "Prodfolio domain"
      ],
      cta: "Get started",
      popular: false,
      tier: "free"
    },
    {
      name: "Starter",
      tagline: "For PMs ready to stand out",
      price: "$19",
      monthlyPrice: 19,
      features: [
        "Unlimited portfolios",
        "Unlimited AI case study generation",
        "Password-protected case studies",
        "Additional portfolio themes",
        "Headshot & personal video",
        "Quarterly update reminders",
        "No watermark"
      ],
      cta: "Get started",
      popular: true,
      tier: "starter"
    },
    {
      name: "Pro",
      tagline: "For PMs serious about their craft",
      price: "$29",
      monthlyPrice: 29,
      features: [
        "Everything in Starter",
        "Custom domain (yourname.com)",
        "Custom portfolio themes",
        "Analytics (Coming Soon)",
        "Priority support",
        "Early access to new features"
      ],
      cta: "Get started",
      popular: false,
      tier: "pro"
    }
  ];

  return (
    <div className="min-h-screen gradient-mesh-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-14 pb-6">
        <div className="prodfolio-container text-center">
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 text-foreground">
            Join the Community
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Build your first portfolio free—no credit card needed, just your story and our support.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-coral" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="font-medium">Trusted by 500+ product managers</span>
          </div>
        </div>
      </section>

      {/* Founding Member Offer - Highlighted Section */}
      <section className="pt-10 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="prodfolio-container max-w-5xl relative z-10">
          <div className="relative glass-card border-2 border-primary rounded-3xl p-8 md:p-12 shadow-glass overflow-hidden">
            {/* Decorative Corner Badge */}
            <div className="absolute top-0 right-0">
              <div className="relative">
                <div className="absolute top-6 right-6 bg-coral text-white px-6 py-2 rounded-full text-sm font-bold shadow-soft rotate-12 animate-pulse">
                  LIMITED OFFER
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
                {/* Left Side - Info */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-coral/10 text-coral border-2 border-coral/30 px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-coral"></span>
                    </span>
                    46 slots left
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                    Founding Member
                  </h2>
                  
                  <p className="text-xl text-muted-foreground mb-6">
                    Join the founding cohort shaping the future of PM portfolios—together
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span className="font-semibold">2 of 48 spots claimed</span>
                      <span>4% full</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-primary rounded-full transition-all duration-500" style={{ width: '4%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-6xl font-display font-bold text-foreground">$348</span>
                    <span className="text-xl text-muted-foreground">one-time · 2-year access</span>
                  </div>
                  
                  <div className="bg-primary/10 border-l-4 border-primary rounded-xl p-5 mb-6 backdrop-blur-sm">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <strong className="text-foreground">What makes this different:</strong> This isn't early access with bugs. The platform works. You get proximity — direct line to the founders, personalized support, and input on what we build next.
                    </p>
                  </div>
                </div>
                
                {/* Right Side - Features */}
                <div className="md:w-80 shrink-0">
                  <div className="glass-card border-2 border-primary/30 rounded-2xl p-6 shadow-soft">
                    <h3 className="font-bold text-lg mb-4 font-display">Everything in Pro, plus:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug"><strong>Portfolio review</strong> within 30 days</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug"><strong>Direct Slack access</strong> to founders</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug"><strong>Monthly AMAs</strong> with exclusive roadmap sessions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug"><strong>Featured on our site</strong> (optional)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug"><strong>2-year access</strong> to all features</span>
                      </li>
                    </ul>
                    
                    <Button 
                      asChild
                      size="lg"
                      className="btn-coral w-full mt-6 h-14 text-base font-semibold hover:shadow-xl"
                      style={{ borderRadius: '12px' }}
                    >
                      <a href="https://buy.stripe.com/8x29AVb7y7W5dCvcwDbfO06" target="_blank" rel="noopener noreferrer">
                        Claim Your Founding Spot →
                      </a>
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      Once we hit 48, this tier closes permanently.
                    </p>
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
        className={`pt-12 pb-12 ${scrollRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-6xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-display font-bold mb-4">Standard Plans</h2>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 glass-card rounded-full p-1.5 shadow-soft mb-6">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2.5 rounded-full transition-all duration-200 ${
                  billingCycle === "monthly"
                    ? "bg-primary text-primary-foreground font-medium shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2.5 rounded-full transition-all duration-200 flex items-center gap-2 ${
                  billingCycle === "annual"
                    ? "bg-primary text-primary-foreground font-medium shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
                <span className="text-xs bg-coral text-white px-2 py-0.5 rounded-full font-bold">
                  Save 20%
                </span>
              </button>
            </div>
            
            <p className="text-lg text-muted-foreground">Choose the plan that works best for you</p>
          </div>
          
          {/* Main Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => {
              const displayPrice = plan.tier === "free" 
                ? plan.price 
                : `$${getPrice(plan.monthlyPrice, plan.tier)}`;
              
              return (
                <Card 
                  key={index}
                  className={`relative flex flex-col glass-card hover-lift transition-all duration-300 ${
                    plan.popular
                      ? 'border-2 border-primary shadow-glass ring-2 ring-primary/20 scale-105'
                      : 'border-glass'
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
                   
                   <CardHeader className="pb-5">
                    <CardTitle className="text-xl mb-2 font-display">{plan.name}</CardTitle>
                    <div className="mt-4 mb-4">
                      <div className="text-5xl font-display font-bold text-foreground">{displayPrice}</div>
                      {plan.tier !== "free" && (
                        <div className="mt-2 text-sm text-muted-foreground">
                          per {billingCycle === "monthly" ? "month" : "month"}
                          {billingCycle === "annual" && (
                            <div className="text-xs text-muted-foreground mt-1">billed annually</div>
                          )}
                        </div>
                      )}
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {plan.tagline}
                    </CardDescription>
                  </CardHeader>
                   
                   <CardContent className="flex-1 pt-0">
                     <ul className="space-y-2.5">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className={`text-sm leading-snug ${feature === "Everything in Starter" ? "font-bold" : ""}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                   
                   <CardFooter className="pt-5">
                    <Button 
                      asChild
                      className={`w-full h-12 font-semibold transition-all duration-200 ${
                        plan.popular 
                          ? "btn-coral hover:-translate-y-1" 
                          : plan.tier === "free"
                          ? "btn-outline-premium"
                          : "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-1"
                      }`}
                      style={{ borderRadius: '12px' }}
                    >
                      <a href="https://app.prodfolio.io/signup">
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

      {/* FAQ Section */}
      <section className="pt-12 pb-12">
        <div className="prodfolio-container max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-center mb-10">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            <div className="glass-card border-glass-light rounded-xl p-6 hover-lift">
              <h3 className="text-lg font-display font-bold mb-3">Can I switch plans later?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.
              </p>
            </div>
            <div className="glass-card border-glass-light rounded-xl p-6 hover-lift">
              <h3 className="text-lg font-display font-bold mb-3">What payment methods do you accept?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We go through stripe, so we offer a lot of different payment options. Click on the preferred plan and see what options are available.
              </p>
            </div>
            <div className="glass-card border-glass-light rounded-xl p-6 hover-lift">
              <h3 className="text-lg font-display font-bold mb-3">Can I try before I buy?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes! Start with our Free plan to explore the platform. You can upgrade to paid plans anytime to unlock more features.
              </p>
            </div>
            <div className="glass-card border-glass-light rounded-xl p-6 hover-lift">
              <h3 className="text-lg font-display font-bold mb-3">Can I cancel anytime?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Absolutely. Cancel your subscription anytime from your account settings. We may reach out for feedback on how to improve :)
              </p>
            </div>
            <div className="glass-card border-glass-light rounded-xl p-6 hover-lift">
              <h3 className="text-lg font-display font-bold mb-3">What makes Prodfolio different from other portfolio tools?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're built by PMs, for PMs. Every feature is designed around how you actually work and what hiring managers actually want to see. Plus, you're joining a community of product people who get it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="pt-12 pb-20">
        <div className="prodfolio-container max-w-4xl text-center">
          <div className="glass-card border-2 border-primary rounded-3xl p-10 md:p-14 shadow-glass">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Resumes show your experience.<br />Prodfolios show your thinking.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the community of product managers who are showcasing their work in a way that truly reflects how they think and the impact they make.
            </p>
            <Button 
              asChild
              size="lg"
              className="btn-coral h-14 px-8 text-lg font-semibold hover:shadow-xl"
              style={{ borderRadius: '12px' }}
            >
              <a href="https://app.prodfolio.io/signup">
                Start Building Your Prodfolio →
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
