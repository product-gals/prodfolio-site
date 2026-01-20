import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Check, Tag, Linkedin, Globe, Handshake } from "lucide-react";
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
  promoCode?: string;
  promoDiscount?: string;
  promoDescription?: string;
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
    promoCode: "PRODFOLIO20",
    promoDiscount: "20% off",
    promoDescription: "Exclusive discount for Prodfolio users",
  },
];

const Partners = () => {
  const heroAnimation = useScrollAnimation();
  const partnersAnimation = useScrollAnimation();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyPromoCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  useSEO({
    title: "Prodfolio Partners | Product Management Community",
    description: "Great portfolios start with great support. Meet the product management leaders and organizations partnering with Prodfolio.",
    canonical: "https://prodfolio.io/partners",
  });

  return (
    <div className="min-h-screen gradient-mesh-bg">
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
        className={`py-8 px-4 ${partnersAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <article
                key={partner.id}
                className="bg-white rounded-2xl shadow-xl p-6 relative hover:shadow-2xl transition-all hover:scale-[1.02] hover:-translate-y-1 flex flex-col"
              >
                {/* Exclusive Offer Badge */}
                {partner.promoCode && (
                  <div className="absolute -top-3 -right-3 bg-coral text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Tag className="w-3.5 h-3.5" />
                    {partner.promoDiscount}
                  </div>
                )}

                <div className="flex items-start gap-4 flex-1">
                  {/* Photo/Logo */}
                  <div className="flex-shrink-0">
                    {partner.type === "individual" ? (
                      <div className="w-16 h-16 rounded-full bg-coral overflow-hidden ring-4 ring-coral/20">
                        {partner.photo ? (
                          <img src={partner.photo} alt={partner.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">
                              {partner.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        {partner.logo ? (
                          <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain p-2" />
                        ) : (
                          <span className="text-lg font-bold text-primary">
                            P2P
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-heading font-bold text-navy mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-navy/70 text-sm mb-4 leading-relaxed">
                      {partner.description}
                    </p>

                    {/* Link buttons */}
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-navy/5 hover:bg-navy/10 text-navy text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        Website
                      </a>
                      {partner.linkedin && (
                        <a
                          href={partner.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Promo Code Section */}
                {partner.promoCode && (
                  <div className="mt-5 pt-4 border-t border-navy/10">
                    <p className="text-navy/60 text-xs mb-2 font-medium">{partner.promoDescription}</p>
                    <div className="flex items-center gap-2">
                      <div className="bg-coral/10 border border-coral/20 rounded-lg px-4 py-2.5 flex-1 text-center">
                        <code className="text-coral font-mono text-sm font-bold tracking-wider">
                          {partner.promoCode}
                        </code>
                      </div>
                      <button
                        onClick={() => copyPromoCode(partner.promoCode!)}
                        className="bg-coral hover:bg-coral/90 text-white p-2.5 rounded-lg transition-colors"
                        aria-label="Copy promo code"
                      >
                        {copiedCode === partner.promoCode ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </article>
            ))}

            {/* "Become a Partner" CTA Card */}
            <article className="bg-white/10 backdrop-blur-md border-2 border-dashed border-white/40 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/15 transition-all hover:border-white/60 group">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Become a Partner
              </h3>
              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                Passionate about helping PMs build great portfolios? Let's work together.
              </p>
              <Button asChild className="bg-white text-navy hover:bg-white/90 font-semibold rounded-xl">
                <a href="mailto:hello@prodfolio.io?subject=Partnership inquiry">
                  Get in Touch
                </a>
              </Button>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
