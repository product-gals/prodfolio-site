import { useState } from "react";
import { BookOpen, Mic, Download, ArrowRight } from "lucide-react";
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
    title: "Free Product Portfolio Resources | Guides & Templates - Prodfolio",
    description: "Download free product portfolio templates, PM interview prep kits, and case study guides. Build a standout portfolio today.",
    canonical: "https://prodfolio.io/resources",
  });

  const guides = [
    {
      title: "The Product Portfolio Blueprint",
      description: "A comprehensive guide to building a portfolio that showcases your impact and gets results.",
      preview: "Learn the exact framework used by top PMs to land their dream roles.",
    },
    {
      title: "20 Case Study Templates",
      description: "Ready-to-use templates for documenting your product wins with clear structure and storytelling.",
      preview: "Save hours with proven formats that highlight metrics and outcomes.",
    },
    {
      title: "PM Interview Prep Kit",
      description: "Portfolio-focused interview strategies and questions to confidently present your work.",
      preview: "Turn your portfolio into your strongest interview asset.",
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
      <section className="pt-32 pb-16 px-4">
        <div className="prodfolio-container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Free resources to help you grow your product career and showcase your impact.
          </p>
          
          {/* Quiz Teaser */}
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/quiz")}>
            <CardContent className="flex items-center justify-between p-6">
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-1">Take the 3-Minute Portfolio Quiz</h3>
                <p className="text-muted-foreground text-sm">Discover how to make your portfolio stand out</p>
              </div>
              <ArrowRight className="w-6 h-6 text-primary shrink-0" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guides & Templates */}
      <section 
        ref={scrollRef.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 bg-white ${scrollRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Guides & Templates</h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Proven frameworks and templates to build a portfolio that stands out
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {guides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    {guide.preview}
                  </p>
                  <Button 
                    className="w-full" 
                    onClick={() => handleDownloadClick(guide.title)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-muted-foreground mb-4">
              Want to put these guides into action?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" asChild>
                <a href="/pricing">View Plans & Pricing</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="/quiz">Take the Portfolio Quiz →</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast & Examples */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F7F7F9" }}>
        <div className="prodfolio-container">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mic className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Podcast & Examples</h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real stories from product professionals and curated portfolio examples
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Podcast Episodes */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">The Product Pivot Podcast</h3>
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Episode 1: From Engineer to PM</CardTitle>
                    <CardDescription>
                      Sarah Chen shares how she transitioned into product management and built her first portfolio.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Spotify Embed Placeholder */}
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                      <p className="text-muted-foreground">Coming Soon: Spotify Player</p>
                    </div>
                    <Button variant="ghost" className="w-full" disabled>
                      Listen on Spotify
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Episode 2: Breaking into Big Tech</CardTitle>
                    <CardDescription>
                      Alex Rodriguez on leveraging your portfolio to land interviews at top companies.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                      <p className="text-muted-foreground">Coming Soon: YouTube Player</p>
                    </div>
                    <Button variant="ghost" className="w-full" disabled>
                      Watch on YouTube
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Portfolio Examples */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Portfolio Examples</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Senior PM at Fintech Startup",
                    description: "See how Maria structured her portfolio to showcase B2B SaaS impact with clear metrics.",
                  },
                  {
                    title: "Junior PM Breaking In",
                    description: "David's portfolio that landed him his first PM role despite a non-traditional background.",
                  },
                  {
                    title: "Product Leader Portfolio",
                    description: "Executive-level portfolio example demonstrating strategic thinking and team leadership.",
                  },
                ].map((example, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{example.title}</CardTitle>
                      <CardDescription>{example.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full" disabled>
                        View Example (Coming Soon)
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-muted-foreground mb-4">
              Ready to create your own standout portfolio?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <a href="/pricing">Get Started with Prodfolio</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/">Learn More About Prodfolio</a>
              </Button>
            </div>
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
