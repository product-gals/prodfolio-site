import { Mic } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const Resources = () => {
  useSEO({
    title: "Resources for Product Managers | Free Templates, Quiz & Stories – Prodfolio",
    description: "Explore free product management templates, portfolio examples, and real stories from PMs. Build your portfolio and stand out with Prodfolio.",
    canonical: "https://prodfolio.io/resources",
  });

  return (
    <div className="min-h-screen gradient-mesh-bg">
      <Navbar />
      
      <main className="py-20 px-4">
        <div className="prodfolio-container max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-navy">
              Stories from Product People
            </h1>
            <p className="text-lg text-navy/90 max-w-2xl mx-auto">
              Real conversations and examples from PMs using portfolios to get noticed.
            </p>
          </header>

          <div className="space-y-8">
            {/* Podcast Episode 1 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h3 className="text-2xl font-bold mb-3 text-navy">Episode Title 1</h3>
              <p className="text-navy/80 mb-6">
                Brief description of what this episode covers and key insights shared.
              </p>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/Zg4SOZexDUE?si=MnYPuagGsubDQK2W" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </section>

            {/* Podcast Episode 2 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h3 className="text-2xl font-bold mb-3 text-navy">Episode Title 2</h3>
              <p className="text-navy/80 mb-6">
                Brief description of what this episode covers and key insights shared.
              </p>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/Kw9ssA8sSsI?si=9I1h8ArlpIYEwplB" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </section>

            {/* Podcast Episode 3 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h3 className="text-2xl font-bold mb-3 text-navy">Episode Title 3</h3>
              <p className="text-navy/80 mb-6">
                Brief description of what this episode covers and key insights shared.
              </p>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/4ZLUXW06jbg?si=iTOltfTykoUEZm8Y" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
