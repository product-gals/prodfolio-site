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
      <section className="pt-32 pb-16 px-4">
        <div className="prodfolio-container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose your plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start building your portfolio for free. Upgrade to unlock AI-powered storytelling tools and advanced features.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section 
        ref={scrollRef.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 ${scrollRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative flex flex-col ${
                  plan.popular 
                    ? 'border-2 border-primary shadow-lg md:scale-105' 
                    : 'border border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
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
          
          {/* Quiz Section */}
          <div className="text-center mt-16 max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-4">
              Not sure which plan is right for you? Take the 3-Minute Portfolio Quiz to get a personalized recommendation.
            </p>
            <Button variant="outline" asChild>
              <a href="/quiz">Take the Quiz</a>
            </Button>
          </div>
          
          {/* Resources Link */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Need help getting started?
            </p>
            <Button variant="outline" asChild>
              <a href="/resources">Download Free Templates & Guides</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-muted/10">
        <div className="prodfolio-container max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I switch plans later?</h3>
              <p className="text-muted-foreground">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards and PayPal for your convenience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Is there a free trial for Pro?</h3>
              <p className="text-muted-foreground">
                Yes! Try Pro free for 14 days. No credit card required to start your trial.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-muted-foreground">
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
