import prodfolioIcon from "@/assets/prodfolio-icon.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-prodfolio-navy text-white">
      <div className="prodfolio-container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="https://app.prodfolio.io/signup" className="hover:text-white hover:underline transition-all">
                  Get Started
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-white hover:underline transition-all">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          
          {/* Learn */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Learn</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="/resources" className="hover:text-white hover:underline transition-all">
                  Resources
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/theproductpivot" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-all">
                  Podcast
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="/partnerships" className="hover:text-white hover:underline transition-all">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="mailto:hello@prodfolio.io" className="hover:text-white hover:underline transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="https://sugared-cactus-5d5.notion.site/Prodfolio-Privacy-Policy-241f710757778017aa6dc57283be68d7" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-all">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white hover:underline transition-all">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img 
                src={prodfolioIcon} 
                alt="Prodfolio Icon" 
                className="h-10 w-10"
              />
              <div className="text-left">
                <span className="font-bold text-xl text-white block">Prodfolio</span>
                <p className="text-xs font-semibold tracking-wide text-white/90">SHOW YOUR WORK. OWN YOUR IMPACT.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-base mb-4 font-medium text-white/90">Made with 💙 by PMs, for PMs</p>
            <a href="https://www.linkedin.com/company/prodfoliohq" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white hover:underline transition-all">
              Follow us on LinkedIn
            </a>
            <p className="text-xs text-white/60 mt-4">
              Prodfolio™ is a product of Just Fractional, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
