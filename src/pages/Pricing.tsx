import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useSEO } from "@/hooks/useSEO";

const Pricing = () => {
  const scrollRef = useScrollAnimation();

  useSEO({
    title: "Product Portfolio Builder Pricing | Free & Pro Plans - Prodfolio",
    description: "Compare Prodfolio pricing plans — from Free to Premium. Build and showcase your product portfolio with AI-powered storytelling tools.",
    canonical: "https://prodfolio.io/pricing",
  });

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
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 px-4 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #7B5FE6 0%, #9B7BFF 100%)',
        }}
      >
        <div className="prodfolio-container text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Choose your plan
          </h1>
          {/* Gradient divider */}
          <div className="w-32 h-1 mx-auto mb-8 rounded-full bg-white/40"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Start building your portfolio for free. Upgrade to unlock AI-powered storytelling tools and advanced features.
          </p>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10"></div>
      </section>

      {/* Pricing Cards */}
      <section 
        ref={scrollRef.ref as React.RefObject<HTMLElement>}
        className={`py-24 px-4 gradient-mesh-bg ${scrollRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative flex flex-col transition-all duration-200 ${
                  plan.popular 
                    ? 'border-2 border-primary shadow-glass md:scale-105 hover:shadow-glass' 
                    : 'glass-card'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base min-h-[3rem]">{plan.tagline}</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <div className="mt-1">
                        <span className="text-muted-foreground">{plan.period}</span>
                        {plan.annualDiscount && (
                          <div className="text-xs text-primary mt-1">{plan.annualDiscount}</div>
                        )}
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {plan.tier !== "free" && <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />}
                        {plan.tier === "free" && <span className="w-5 h-5 shrink-0" />}
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.note && (
                    <p className="text-xs text-muted-foreground mt-4 italic">{plan.note}</p>
                  )}
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild
                    variant={
                      plan.tier === "free" 
                        ? "outline" 
                        : plan.popular 
                        ? "gradient" 
                        : "outlinePremium"
                    }
                    className="w-full"
                    size="lg"
                  >
                    <a href="https://app.prodfolio.io/signup">
                      {plan.cta}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
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
