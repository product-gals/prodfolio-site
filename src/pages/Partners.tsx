import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aaronPhoto from "@/assets/aaron-kesler.png";

interface Partner {
  id: string;
  name: string;
  description: string;
  website: string;
  linkedin?: string;
  logo?: string;
  photo?: string;
  type: "individual" | "organization";
}

const partners: Partner[] = [
  {
    id: "aaron-kesler",
    name: "Aaron Kesler",
    description: "AI Product leader, storyteller & community builder - helping PMs think deeper, build smarter, and grow through honest product insights.",
    website: "https://kesler.io/links",
    linkedin: "https://www.linkedin.com/in/aaron-kesler/",
    photo: aaronPhoto,
    type: "individual",
  },
  {
    id: "path2product",
    name: "Path2Product",
    description: "Helping bridge the gap in product management experience for aspiring product managers.",
    website: "https://path2product.io/",
    linkedin: "https://www.linkedin.com/company/path2product/",
    type: "organization",
  },
];

const Partners = () => {
  const heroAnimation = useScrollAnimation();
  const partnersAnimation = useScrollAnimation();

  useSEO({
    title: "Prodfolio Partners | Product Management Community",
    description: "Great portfolios start with great support. Meet the product management leaders and organizations partnering with Prodfolio.",
    canonical: "https://prodfolio.io/partners",
  });

  return (
    <div className="min-h-screen bg-[#8B5CF6]">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-24 pb-8 px-4 ${heroAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-[900px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
            Prodfolio Partners
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Great portfolios start with great support. These are the people who get it.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section
        ref={partnersAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-12 px-4 ${partnersAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-[900px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-start gap-4">
                  {/* Photo/Logo placeholder */}
                  <div className="flex-shrink-0">
                    {partner.type === "individual" ? (
                      <div className="w-24 h-24 rounded-lg bg-[#4DD9E5] flex items-center justify-center overflow-hidden">
                        {partner.photo ? (
                          <img src={partner.photo} alt={partner.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-3xl font-bold text-white">
                            {partner.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="w-24 h-24 rounded-lg bg-white border-2 border-gray-100 flex items-center justify-center overflow-hidden">
                        {partner.logo ? (
                          <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain p-2" />
                        ) : (
                          <span className="text-2xl font-bold text-[#1a1a2e]">
                            P2P
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-[#1a1a2e] mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {partner.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                      >
                        Link <ExternalLink className="w-3 h-3" />
                      </a>
                      {partner.linkedin && (
                        <a
                          href={partner.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#0077B5] text-sm font-medium hover:underline"
                        >
                          LinkedIn <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Become a Partner CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
                Become a Partner
              </h2>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                Passionate about helping aspiring PMs build great portfolios? Let's work together.
              </p>
              <Button asChild className="bg-white text-[#8B5CF6] hover:bg-white/90 font-semibold">
                <a href="mailto:hello@prodfolio.io">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
