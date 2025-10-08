import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useSEO } from "@/hooks/useSEO";

const Pricing = () => {
  const scrollRef = useScrollAnimation();

  useSEO({
    title: "Pricing - Prodfolio",
    description: "Choose the perfect plan to showcase your product management work and land your next role.",
    canonical: "https://prodfolio.io/pricing",
  });

  const plans = [
    {
      name: "Free",
      tagline: "Get started building your first portfolio.",
      price: "$0",
      features: [
        "1 portfolio",
        "Basic templates",
        "Public portfolio URL",
        "Mobile responsive design",
        "Case study templates",
        "Contact form integration"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      tagline: "Unlock advanced templates, AI and storytelling tools.",
      price: "$12",
      period: "/month",
      features: [
        "Unlimited portfolios",
        "Premium templates",
        "AI-powered writing assistant",
        "Custom domain support",
        "Advanced analytics",
        "Priority support",
        "Export to PDF"
      ],
      cta: "Start Free Trial",
      popular: true
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
            Start building your portfolio for free. Upgrade when you need advanced features to stand out.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section 
        ref={scrollRef.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 ${scrollRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative flex flex-col ${
                  plan.popular 
                    ? 'border-2 border-primary shadow-lg scale-105' 
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
                  <CardDescription className="text-base">{plan.tagline}</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild
                    variant={plan.popular ? "gradient" : "outlinePremium"}
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

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="prodfolio-container text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Prodfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
