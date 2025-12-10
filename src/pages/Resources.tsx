import { Mic } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const Resources = () => {
  useSEO({
    title: "Podcast | Stories from Product People – Prodfolio",
    description: "Real conversations with product leaders about hiring, career growth, and the evolving product landscape. Listen to The Product Pivot podcast.",
    canonical: "https://prodfolio.io/podcast",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9E85F9] via-[#C4B5FF] via-[#D6CEFF] to-[#B8A3FF]">
      <Navbar />
      
      <main className="py-[60px] px-4">
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-white">
              Stories from Product People
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-body">
              Real conversations with product people about hiring and the product landscape today.
            </p>
          </header>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Podcast Episode 1 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h3 className="text-2xl font-heading font-bold mb-3 text-navy">The Power or Storytelling</h3>
              <p className="text-navy/80 mb-6 font-body">
                Insights from Heidi Ram, a Product Recruiter in the hiring space.
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
              <h3 className="text-2xl font-heading font-bold mb-3 text-navy">Why AI Should Be Boring</h3>
              <p className="text-navy/80 mb-6 font-body">
                Insights from Aaron Kesler, a VP of Product in the AI space who talks about breaking into product + giving yourself the title.
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
              <h3 className="text-2xl font-heading font-bold mb-3 text-navy">Is Product Management Evolving or Disappearing?</h3>
              <p className="text-navy/80 mb-6 font-body">
                Insights from Brody Clemmer, a Product Lead in the startup space. He talks about the evolution of product management and what the role may look like in the next few years.
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

            {/* Call-to-Action Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {/* Watch More Episodes */}
              <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40 hover:bg-white/40 transition-all duration-300">
                <h3 className="text-xl font-heading font-bold mb-3 text-navy">Watch More Episodes</h3>
                <p className="text-navy/80 mb-6 font-body">
                  Explore our full library of conversations with product leaders.
                </p>
                <a 
                  href="https://www.youtube.com/@TheProductPivot/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold font-body rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View All Episodes
                </a>
              </section>

              {/* Guest Inquiry */}
              <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40 hover:bg-white/40 transition-all duration-300">
                <h3 className="text-xl font-heading font-bold mb-3 text-navy">Share Your Insights</h3>
                <p className="text-navy/80 mb-6 font-body">
                  Interested in sharing your insights? We'd love to hear from you.
                </p>
                <a 
                  href="mailto:theproductpivot@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#FF8B7B] text-white font-semibold font-body rounded-lg hover:bg-[#FF8B7B]/90 transition-colors"
                >
                  Send Us a Message
                </a>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
