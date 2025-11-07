import { useState } from "react";
import { BookOpen, Mic, Download, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useSEO } from "@/hooks/useSEO";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Resources = () => {
  const scrollRef = useScrollAnimation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  useSEO({
    title: "Resources for Product Managers | Free Templates, Quiz & Stories – Prodfolio",
    description: "Explore free product management templates, portfolio examples, and real stories from PMs. Build your portfolio and stand out with Prodfolio.",
    canonical: "https://prodfolio.io/resources",
  });

  const guides = [
    {
      title: "The Product Portfolio Blueprint",
      description: "A comprehensive guide to building a portfolio that showcases your impact and gets results.",
      benefit: "Learn frameworks used by top PMs.",
    },
    {
      title: "20 Case Study Templates",
      description: "Ready-to-use templates for documenting your product wins with clear structure and storytelling.",
      benefit: "Save hours with proven structures.",
    },
    {
      title: "PM Interview Prep Kit",
      description: "Portfolio-focused interview strategies and questions to confidently present your work.",
      benefit: "Turn your wins into interview stories.",
    },
  ];

  const handleDownloadClick = (resourceTitle: string) => {
    setSelectedResource(resourceTitle);
    setModalOpen(true);
  };

  const handleLeadSubmit = async (name: string, email: string) => {
    // Here you would typically send this to your backend/database
    console.log("Lead captured:", { name, email, resource: selectedResource });
    
    toast({
      title: "Success!",
      description: "Your download will start shortly. Check your email for the resource.",
    });
    
    // In a real implementation, you would trigger the actual download here
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-[#FAF8FF] to-[#F4F2FF]">
        <div className="prodfolio-container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Curated tools, templates, and stories to help you grow your product career and showcase your impact.
          </p>
        </div>
      </section>

      {/* Quiz Promo Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#F4F2FF] to-white">
        <div className="prodfolio-container max-w-4xl mx-auto">
          <Card 
            className="border-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden shadow-lg"
            style={{ 
              borderColor: '#D7C8FF',
              backgroundColor: 'white',
              boxShadow: '0 10px 40px -10px rgba(155, 123, 255, 0.2)'
            }}
            onClick={() => navigate("/quiz")}
          >
            <div className="absolute top-6 right-6 text-[#9B7BFF] opacity-20">
              <Sparkles className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <CardContent className="p-12 md:p-16 text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Take the 3-Minute Portfolio Quiz
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Discover what's holding your portfolio back — and how to fix it.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#9B7BFF] to-[#B59CFF] hover:opacity-90 transition-opacity text-white px-8 py-6 text-lg shadow-md"
              >
                Start the Quiz
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guides & Templates */}
      <section 
        ref={scrollRef.ref as React.RefObject<HTMLElement>}
        className={`py-28 px-4 ${scrollRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        style={{ backgroundColor: '#FAF9FF' }}
      >
        <div className="prodfolio-container max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold text-[#9B7BFF] uppercase tracking-wide mb-3">
              Trusted by PMs leveling up their storytelling
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Guides & Templates</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Proven frameworks to help you build a standout portfolio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {guides.map((guide, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 flex flex-col shadow-md bg-white"
                style={{ 
                  borderColor: '#E2D9FF',
                  boxShadow: '0 4px 20px -4px rgba(155, 123, 255, 0.15)'
                }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold mb-2">{guide.title}</CardTitle>
                  <CardDescription className="text-base mb-3">{guide.description}</CardDescription>
                  <p className="text-sm text-[#9B7BFF] font-medium">{guide.benefit}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <Button 
                    variant="outline"
                    className="w-full border-[#9B7BFF] text-[#9B7BFF] hover:bg-[#9B7BFF] hover:text-white transition-all duration-300" 
                    onClick={() => handleDownloadClick(guide.title)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Free PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/30 rounded-lg p-6 text-center border border-border">
            <p className="text-muted-foreground text-lg mb-4">
              Want to see how these templates come to life?
            </p>
            <Button variant="ghost" asChild className="text-primary hover:text-primary/90">
              <a href="/quiz" className="flex items-center gap-2 mx-auto">
                Take the Quiz
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

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
              <CardContent className="p-6">
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
              <CardContent className="p-6">
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
          </div>

          {/* Portfolio Examples */}
          <div className="mb-12 space-y-6">
            <div className="relative mb-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E2D9FF]"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#F6F4FF] px-4 text-sm font-semibold text-[#9B7BFF] uppercase tracking-wide">
                  Featured Portfolio Examples
                </span>
              </div>
            </div>
            
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 shadow-md bg-white" style={{ borderColor: '#E2D9FF' }}>
              <CardHeader>
                <CardTitle className="text-xl">Senior PM at Fintech Startup</CardTitle>
                <CardDescription className="text-base">
                  See how Maria structured her portfolio to showcase B2B SaaS impact with clear metrics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full hover:bg-muted transition-colors" disabled>
                  View Example (Coming Soon)
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 shadow-md bg-white" style={{ borderColor: '#E2D9FF' }}>
              <CardHeader>
                <CardTitle className="text-xl">Junior PM Breaking In</CardTitle>
                <CardDescription className="text-base">
                  David's portfolio that landed him his first PM role despite a non-traditional background.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full hover:bg-muted transition-colors" disabled>
                  View Example (Coming Soon)
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Explore More CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-[#9B7BFF] text-white hover:bg-[#8A6AEE] transition-all duration-300 px-8 shadow-md hover:shadow-lg"
            >
              Explore More Stories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
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

      <LeadCaptureModal 
        open={modalOpen}
        onOpenChange={setModalOpen}
        resourceTitle={selectedResource}
        onSubmit={handleLeadSubmit}
      />

      <Footer />
    </div>
  );
};

export default Resources;
