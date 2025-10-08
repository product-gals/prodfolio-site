import { BookOpen, FileText, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useSEO } from "@/hooks/useSEO";

const Resources = () => {
  const scrollRef = useScrollAnimation();

  useSEO({
    title: "Resources - Prodfolio",
    description: "Free resources to help you grow your product career and showcase your impact.",
    canonical: "https://prodfolio.io/resources",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="prodfolio-container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resources to help you grow your product career and showcase your impact.
          </p>
        </div>
      </section>

      {/* Guides & Templates */}
      <section 
        ref={scrollRef.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 ${scrollRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Guides & Templates</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Career and portfolio building resources for product professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Guide {i}</CardTitle>
                  <CardDescription>
                    Coming soon: Expert guidance on building and showcasing your product work.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full" disabled>
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Examples */}
      <section className="py-16 px-4 bg-muted/10">
        <div className="prodfolio-container">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Portfolio Examples</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Curated example portfolios from successful product professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Example {i}</CardTitle>
                  <CardDescription>
                    Coming soon: Real portfolio examples from product leaders across industries.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full" disabled>
                    View Portfolio
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-16 px-4">
        <div className="prodfolio-container">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Mic className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">The Product Pivot Podcast</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Real stories and insights from product professionals around the world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Episode {i}</CardTitle>
                  <CardDescription>
                    Coming soon: Conversations with product leaders sharing their career journeys.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full" disabled>
                    Listen Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="prodfolio-container text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to showcase your product work?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Start building your portfolio today and stand out in your next opportunity.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            <a href="https://app.prodfolio.io/signup">
              Start your portfolio
            </a>
          </Button>
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

export default Resources;
