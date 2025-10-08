import { Mic } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useSEO } from "@/hooks/useSEO";

const Partnerships = () => {
  const scrollRef = useScrollAnimation();

  useSEO({
    title: "Partnerships - Prodfolio",
    description: "Collaborating with organizations and leaders who share our mission to elevate product professionals.",
    canonical: "https://prodfolio.io/partnerships",
  });

  const partners = [
    {
      name: "Product Pivot Podcast",
      description: "A podcast co-hosted by Prodfolio founders, sharing real stories and insights from product professionals around the world.",
      icon: Mic
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="prodfolio-container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Partnerships
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with organizations and leaders who share our mission to elevate product professionals.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section 
        ref={scrollRef.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 ${scrollRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center border-t border-primary/20 pt-12">
            Prodfolio's Partners
          </h2>
          
          <div className="space-y-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 p-6 rounded-lg border border-border hover:border-primary/20 transition-colors bg-card"
              >
                {/* Avatar/Logo */}
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <partner.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Placeholder for future partners */}
            <div className="p-8 rounded-lg border border-dashed border-border text-center">
              <p className="text-muted-foreground">
                More partnerships coming soon. Interested in partnering with Prodfolio?{" "}
                <a 
                  href="mailto:partnerships@prodfolio.io" 
                  className="text-primary hover:underline font-medium"
                >
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-muted/10">
        <div className="prodfolio-container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe every product professional deserves the tools and platform to showcase their impact. 
            Through partnerships with educators, recruiters, and product-focused organizations, we're building 
            an ecosystem that helps product people advance their careers and share their stories.
          </p>
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

export default Partnerships;
