import prodfolioIcon from "@/assets/prodfolio-icon.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-br from-primary via-primary/80 to-secondary text-primary-foreground">
      <div className="prodfolio-container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/90">
              <li>
                <a href="https://app.prodfolio.io/signup" className="hover:text-primary-foreground hover:underline transition-all">
                  Get Started
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-primary-foreground hover:underline transition-all">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          
          {/* Learn */}
          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/90">
              <li>
                <a href="/resources" className="hover:text-primary-foreground hover:underline transition-all">
                  Resources
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/theproductpivot" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground hover:underline transition-all">
                  Podcast
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/90">
              <li>
                <a href="/partnerships" className="hover:text-primary-foreground hover:underline transition-all">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="mailto:hello@prodfolio.io" className="hover:text-primary-foreground hover:underline transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/90">
              <li>
                <a href="https://sugared-cactus-5d5.notion.site/Prodfolio-Privacy-Policy-241f710757778017aa6dc57283be68d7" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground hover:underline transition-all">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-primary-foreground hover:underline transition-all">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img 
                src={prodfolioIcon} 
                alt="Prodfolio Icon" 
                className="h-10 w-10"
              />
              <div className="text-left">
                <span className="font-bold text-xl text-primary-foreground block">Prodfolio</span>
                <p className="text-xs font-semibold tracking-wide">SHOW YOUR WORK. OWN YOUR IMPACT.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-base mb-4 font-medium">Made with 💙 by PMs, for PMs</p>
            <a href="https://www.linkedin.com/company/prodfoliohq" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary-foreground hover:underline transition-all">
              Follow us on LinkedIn
            </a>
            <p className="text-xs text-primary-foreground/70 mt-4">
              Prodfolio™ is a product of Just Fractional, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
