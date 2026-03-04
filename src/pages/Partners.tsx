import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, Tag, Linkedin, Globe } from "lucide-react";
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
  const ctaAnimation = useScrollAnimation();
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
    breadcrumbs: [
      { name: "Home", url: "https://prodfolio.io" },
      { name: "Partners", url: "https://prodfolio.io/partners" },
    ],
  });

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
            Prodfolio Partners
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Great portfolios start with great support. These are the people who get it.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section
        ref={partnersAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-8 px-4 ${partnersAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {partners.map((partner) => (
              <article
                key={partner.id}
                className="glass-card p-6 relative"
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
                          <img src={partner.photo} alt={`${partner.name}, Prodfolio partner`} className="w-full h-full object-cover" loading="eager" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-lg font-bold text-white">
                              {partner.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                        {partner.logo ? (
                          <img src={partner.logo} alt={`${partner.name} logo, Prodfolio partner organization`} className="w-full h-full object-contain p-2" loading="eager" />
                        ) : (
                          <span className="text-base font-bold text-white">
                            P2P
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-heading font-bold text-white mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-3 leading-relaxed">
                      {partner.description}
                    </p>

                    {/* Link buttons */}
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        Website
                      </a>
                      {partner.linkedin && (
                        <a
                          href={partner.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
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
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="bg-coral/10 border border-coral/20 rounded-lg px-4 py-2 flex-1">
                        <p className="text-white/70 text-xs font-medium mb-0.5">{partner.promoDescription}</p>
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
      <section
        ref={ctaAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-6 pb-12 px-4 cta-glow-section ${ctaAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-6">
            Become a Partner
          </h2>
          <p className="text-white/70 mb-6 leading-relaxed max-w-md mx-auto">
            Passionate about helping PMs build great portfolios? We'd love to collaborate with coaches, communities, and organizations in the PM space.
          </p>
          <Button
            asChild
            className="px-8 py-5 h-auto text-base bg-white text-primary font-semibold hover:bg-white/90 hover:scale-105 transition-all shadow-xl rounded-xl"
          >
            <a href="mailto:partnerships@prodfolio.io?subject=Partnership inquiry">
              Partner with us
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
