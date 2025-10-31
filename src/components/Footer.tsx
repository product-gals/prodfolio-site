import prodfolioIcon from "@/assets/prodfolio-icon.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-[#F6F4FF] text-[#3B2966]">
      <div className="prodfolio-container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-[#3B2966]">Product</h4>
            <ul className="space-y-2 text-sm text-[#6F6F7B]">
              <li>
                <a href="https://app.prodfolio.io/signup" className="hover:text-[#3B2966] hover:underline transition-all">
                  Get Started
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-[#3B2966] hover:underline transition-all">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          
          {/* Learn */}
          <div>
            <h4 className="font-semibold mb-4 text-[#3B2966]">Learn</h4>
            <ul className="space-y-2 text-sm text-[#6F6F7B]">
              <li>
                <a href="/resources" className="hover:text-[#3B2966] hover:underline transition-all">
                  Resources
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/theproductpivot" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B2966] hover:underline transition-all">
                  Podcast
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-[#3B2966]">Company</h4>
            <ul className="space-y-2 text-sm text-[#6F6F7B]">
              <li>
                <a href="/partnerships" className="hover:text-[#3B2966] hover:underline transition-all">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="mailto:hello@prodfolio.io" className="hover:text-[#3B2966] hover:underline transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-[#3B2966]">Legal</h4>
            <ul className="space-y-2 text-sm text-[#6F6F7B]">
              <li>
                <a href="https://sugared-cactus-5d5.notion.site/Prodfolio-Privacy-Policy-241f710757778017aa6dc57283be68d7" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B2966] hover:underline transition-all">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-[#3B2966] hover:underline transition-all">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#E2D9FF] pt-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img 
                src={prodfolioIcon} 
                alt="Prodfolio Icon" 
                className="h-10 w-10"
              />
              <div className="text-left">
                <span className="font-bold text-xl text-[#3B2966] block">Prodfolio</span>
                <p className="text-xs font-semibold tracking-wide text-[#6F6F7B]">SHOW YOUR WORK. OWN YOUR IMPACT.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-base mb-4 font-medium text-[#3B2966]">Made with 💙 by PMs, for PMs</p>
            <a href="https://www.linkedin.com/company/prodfoliohq" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6F6F7B] hover:text-[#3B2966] hover:underline transition-all">
              Follow us on LinkedIn
            </a>
            <p className="text-xs text-[#6F6F7B] mt-4">
              Prodfolio™ is a product of Just Fractional, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
