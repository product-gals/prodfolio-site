import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useSEO } from "@/hooks/useSEO";

const Partnerships = () => {
  const heroAnimation = useScrollAnimation();
  const scrollRef = useScrollAnimation();
  const missionAnimation = useScrollAnimation();

  useSEO({
    title: "Product Management Partnerships | Collaborate with Prodfolio",
    description: "Partner with Prodfolio to elevate product professionals. Join our network of educators, recruiters, and product organizations.",
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
    <div className="min-h-screen gradient-mesh-bg" id="main-content" role="main">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-28 pb-8 px-4 ${heroAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container text-center max-w-[1200px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
            Partnerships
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Collaborating with organizations and leaders who share our mission to elevate product professionals.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section
        ref={scrollRef.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 ${scrollRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center text-white">
            Prodfolio's Partners
          </h2>

          <div className="space-y-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="glass-card p-6 flex items-start gap-6"
              >
                {/* Avatar/Logo */}
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                    <partner.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold mb-2 text-white">{partner.name}</h3>
                  <p className="text-white/80 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Placeholder for future partners */}
            <div className="glass-card p-8 border-dashed text-center">
              <p className="text-white/80">
                More partnerships coming soon. Interested in partnering with Prodfolio?{" "}
                <a
                  href="mailto:partnerships@prodfolio.io"
                  className="text-white hover:underline font-semibold"
                >
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        ref={missionAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-12 px-4 cta-glow-section ${missionAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-[600px] mx-auto">
          <div className="bg-[#9E85F9]/10 backdrop-blur-md rounded-2xl border border-[#9E85F9]/25 shadow-[0_8px_32px_rgba(158,133,249,0.2)] p-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-white mb-2">
              Our mission
            </h2>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md mx-auto">
              We believe every product professional deserves the tools and platform to showcase their impact.
              Through partnerships with educators, recruiters, and product-focused organizations, we're building
              an ecosystem that helps product people advance their careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="px-6 py-5 h-auto text-base bg-white text-primary font-semibold hover:bg-white/90 hover:scale-105 transition-all shadow-xl rounded-xl">
                <a href="/pricing">Start Building Your Portfolio</a>
              </Button>
              <Button variant="outline" asChild className="px-6 py-5 h-auto text-base border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl">
                <a href="/podcast">Listen to the Podcast</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnerships;
