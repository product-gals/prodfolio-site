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
    if (tier === "free" || tier === "founding") return null;
    if (billingCycle === "annual") {
      return Math.floor(monthlyPrice * 0.8); // 20% discount
    }
    return monthlyPrice;
  };

  const plans = [
    {
      name: "Free",
      tagline: "7-day editing window; becomes read-only after.",
      price: "$0",
      features: [
        "One Prodfolio",
        "Basic colors",
        "Watermarked portfolio",
        "Quick examples"
      ],
      note: "Prodfolio domain included.",
      cta: "Start Free",
      popular: false,
      tier: "free"
    },
    {
      name: "Pro",
      tagline: "Unlock unlimited portfolios and advanced storytelling tools.",
      price: "$19",
      period: "/month",
      annualDiscount: "20% off annual",
      features: [
        "Unlimited Prodfolios",
        "Custom themes",
        "References",
        "AI to Case Study",
        "AI to Resume",
        "Prodfolio domain"
      ],
      note: "Includes 7-day free trial.",
      cta: "Start Free Trial",
      popular: true,
      tier: "pro"
    },
    {
      name: "Premium",
      tagline: "Everything in Pro plus advanced control and continuous updates.",
      price: "$39",
      period: "/month",
      annualDiscount: "20% off annual",
      features: [
        "Unlimited Prodfolios",
        "References",
        "AI to Case Study",
        "AI to Resume",
        "Password protection",
        "Custom themes",
        "Custom domain",
        "Analytics",
        "Access to all new features automatically"
      ],
      cta: "Upgrade to Premium",
      popular: false,
      tier: "premium"
    },
    {
      name: "Founding Member",
      tagline: "Limited to 50 members · Lifetime access",
      price: "$399",
      period: "one-time",
      badge: "Limited Offer",
      features: [
        "Everything in Pro",
        "Portfolio review (30 days)",
        "Direct Slack access to founders",
        "Monthly office hours",
        "Featured on site (optional)",
        "Lifetime access to all features"
      ],
      note: "Closes permanently at 50 members.",
      cta: "Claim Your Spot",
      popular: false,
      tier: "founding",
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #FAF8F5 0%, #F5F3F0 100%)' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="prodfolio-container text-center">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 text-foreground">
            Pricing
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Download the app to get started for free.
          </p>
          <p className="text-base text-muted-foreground/70 mb-12">
            No credit card required.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 border border-border/50 shadow-sm">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2.5 rounded-full transition-all duration-200 ${
                billingCycle === "monthly"
                  ? "bg-foreground text-background font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2.5 rounded-full transition-all duration-200 flex items-center gap-2 ${
                billingCycle === "annual"
                  ? "bg-foreground text-background font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                20% discount
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section 
        ref={scrollRef.ref as React.RefObject<HTMLElement>}
        className={`pb-24 px-4 ${scrollRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, index) => {
              const displayPrice = plan.tier === "free" || plan.tier === "founding" 
                ? plan.price 
                : `$${getPrice(parseInt(plan.price.replace('$', '')), plan.tier)}`;
              
              return (
                <Card 
                  key={index}
                  className={`relative flex flex-col bg-white/80 backdrop-blur-sm transition-all duration-200 hover:shadow-lg ${
                    plan.tier === "free"
                      ? 'border border-border/50'
                      : plan.highlight
                      ? 'border-[3px] border-foreground shadow-md'
                      : 'border-[3px] border-foreground'
                  }`}
                  style={{ borderRadius: '24px' }}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-coral text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="pb-6">
                    <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                    <div className="mt-4 mb-4">
                      <div className="text-5xl font-serif font-bold">{displayPrice}</div>
                      {plan.period && (
                        <div className="mt-2 text-sm text-muted-foreground">
                          {plan.tier === "founding" ? plan.period : `/${billingCycle === "monthly" ? "mo" : "mo"}`}
                          {billingCycle === "annual" && plan.tier !== "founding" && (
                            <div className="text-xs text-muted-foreground mt-1">billed annually</div>
                          )}
                        </div>
                      )}
                    </div>
                    <CardDescription className="text-sm leading-relaxed min-h-[3rem]">
                      {plan.tagline}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 pt-0">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                          <span className="text-sm leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.note && (
                      <p className="text-xs text-muted-foreground mt-4 leading-relaxed">{plan.note}</p>
                    )}
                  </CardContent>
                  
                  <CardFooter className="pt-6">
                    <Button 
                      asChild
                      variant={plan.tier === "free" ? "outline" : "default"}
                      className={`w-full h-12 font-medium ${
                        plan.tier !== "free" ? "bg-primary/10 text-primary hover:bg-primary/20 border-0" : ""
                      } ${
                        plan.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""
                      }`}
                      style={{ borderRadius: '12px' }}
                    >
                      <a href={plan.tier === "founding" ? "https://app.prodfolio.io/signup?plan=founding" : "https://app.prodfolio.io/signup"}>
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

      {/* Student Discount Section */}
      <section className="pb-24 px-4">
        <div className="prodfolio-container max-w-7xl">
          <div className="bg-white/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-2xl font-bold mb-2">Student Discount</h3>
              <p className="text-muted-foreground">
                Students get three months free and 50% off the Pro plan
              </p>
            </div>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="shrink-0 h-12 px-8"
              style={{ borderRadius: '12px' }}
            >
              <a href="https://app.prodfolio.io/signup?discount=student">
                Get started
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Mid-Page CTAs - Quiz & Resources */}
      <section className="py-20 px-4 bg-accent/30 border-y border-border">
        <div className="prodfolio-container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-2">Not sure where to start?</h2>
            <p className="text-muted-foreground">Get personalized guidance to build your perfect portfolio.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Quiz CTA */}
            <div className="bg-card border-2 border-accent rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Take the 3-Minute Portfolio Quiz</h3>
              <p className="text-muted-foreground mb-6">
                Discover what's holding your portfolio back — and how to fix it.
              </p>
              <Button variant="outline" asChild className="w-full">
                <a href="/quiz">Start the Quiz</a>
              </Button>
            </div>
            
            {/* Resources CTA */}
            <div className="bg-card border-2 border-accent rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Need Help Getting Started?</h3>
              <p className="text-muted-foreground mb-6">
                Access free templates, guides, and resources to jumpstart your portfolio.
              </p>
              <Button variant="outline" asChild className="w-full">
                <a href="/resources">Download Free Templates & Guides</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 px-4 gradient-mesh-bg border-t border-glass">
        <div className="prodfolio-container max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-16">
            Frequently asked questions
          </h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-bold mb-3">Can I switch plans later?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">What payment methods do you accept?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We accept all major credit cards and PayPal for your convenience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Is there a free trial for Pro?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes! Try Pro free for 14 days. No credit card required to start your trial.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Can I cancel anytime?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Absolutely. Cancel your subscription anytime from your account settings. No questions asked.
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
