import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Check, Tag, Linkedin, Globe, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aaronPhoto from "@/assets/aaron-kesler.png";
import p2pLogo from "@/assets/p2p-logo.png";

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
    logo: p2pLogo,
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
    <div className="min-h-screen gradient-mesh-bg" id="main-content" role="main">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-32 pb-8 px-4 ${heroAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-[900px] mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 text-white">
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
        <div className="prodfolio-container max-w-[900px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner) => (
              <article
                key={partner.id}
                className="bg-white rounded-2xl shadow-xl p-6 relative hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                {/* Exclusive Offer Badge */}
                {partner.promoCode && (
                  <div className="absolute -top-3 -right-3 bg-coral text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Tag className="w-3.5 h-3.5" />
                    {partner.promoDiscount}
                  </div>
                )}

                <div className="flex items-start gap-4">
                  {/* Photo/Logo */}
                  <div className="flex-shrink-0">
                    {partner.type === "individual" ? (
                      <div className="w-14 h-14 rounded-full bg-coral overflow-hidden ring-4 ring-coral/20">
                        {partner.photo ? (
                          <img src={partner.photo} alt={partner.name} className="w-full h-full object-cover" loading="eager" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-lg font-bold text-white">
                              {partner.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        {partner.logo ? (
                          <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain p-2" loading="eager" />
                        ) : (
                          <span className="text-base font-bold text-primary">
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
                    <p className="text-navy/70 text-sm mb-3 leading-relaxed">
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
                  <div className="mt-4 pt-4 border-t border-navy/10">
                    <div className="flex items-center gap-3">
                      <div className="bg-coral/10 border border-coral/20 rounded-lg px-4 py-2 flex-1">
                        <p className="text-navy/70 text-xs font-medium mb-0.5">{partner.promoDescription}</p>
                        <code className="text-coral font-mono text-sm font-bold tracking-wider">
                          {partner.promoCode}
                        </code>
                      </div>
                      <button
                        onClick={() => copyPromoCode(partner.promoCode!)}
                        className="bg-coral hover:bg-coral/90 text-white p-2.5 rounded-lg transition-colors flex-shrink-0"
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
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-8 px-4">
        <div className="prodfolio-container max-w-[600px] mx-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-navy mb-2">
              Become a Partner
            </h3>
            <p className="text-navy/70 mb-6 leading-relaxed max-w-md mx-auto">
              Passionate about helping PMs build great portfolios? We'd love to collaborate with coaches, communities, and organizations in the PM space.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-xl px-5 py-3 inline-flex items-center gap-2">
              <span className="text-navy font-medium text-sm">Click the chat icon to get started</span>
              <span className="text-lg">👉</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
