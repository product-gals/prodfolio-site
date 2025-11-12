import { Mic, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useNavigate } from "react-router-dom";

const Resources = () => {
  const navigate = useNavigate();

  useSEO({
    title: "Resources for Product Managers | Free Templates, Quiz & Stories – Prodfolio",
    description: "Explore free product management templates, portfolio examples, and real stories from PMs. Build your portfolio and stand out with Prodfolio.",
    canonical: "https://prodfolio.io/resources",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Stories from Product People */}
      <section className="py-28 px-4" style={{ backgroundColor: "#F6F4FF" }}>
        <div className="prodfolio-container max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Stories from Product People</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Real conversations and examples from PMs using portfolios to get noticed.
            </p>
          </div>
          
          {/* Featured Podcast Episodes */}
          <div className="mb-16 space-y-8">
            <div className="flex items-center gap-2 mb-6">
              <Mic className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Featured Podcast Episodes</h3>
            </div>
            
            {/* Podcast Episode 1 */}
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 shadow-md bg-white" style={{ borderColor: '#E2D9FF' }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Episode Title 1</CardTitle>
                <CardDescription className="text-base">
                  Brief description of what this episode covers and key insights shared.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
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
              </CardContent>
            </Card>

            {/* Podcast Episode 2 */}
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 shadow-md bg-white" style={{ borderColor: '#E2D9FF' }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Episode Title 2</CardTitle>
                <CardDescription className="text-base">
                  Brief description of what this episode covers and key insights shared.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
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
              </CardContent>
            </Card>

            {/* Podcast Episode 3 */}
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 shadow-md bg-white" style={{ borderColor: '#E2D9FF' }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Episode Title 3</CardTitle>
                <CardDescription className="text-base">
                  Brief description of what this episode covers and key insights shared.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
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
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Transition Band */}
      <div className="h-24 bg-gradient-to-b from-[#F6F4FF] to-white"></div>

      {/* Final CTA Banner */}
      <section 
        className="relative py-24 md:py-32 text-white overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #9B7BFF 0%, #B59CFF 100%)',
        }}
      >
        <div className="prodfolio-container text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Ready to build your Prodfolio™?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              Start your free portfolio and showcase your product impact.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button asChild size="lg" className="px-8 bg-white text-purple-900 hover:bg-white/90 font-semibold shadow-xl">
                <a href="https://app.prodfolio.io/signup">Start Free</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 border-2 border-white text-white hover:bg-white/10">
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/80">No credit card required. Get started in minutes.</p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10"></div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
