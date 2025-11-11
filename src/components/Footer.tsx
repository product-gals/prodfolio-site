import prodfolioIcon from "@/assets/prodfolio-icon.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <>
      {/* Pre-Footer CTA Block */}
      <section className="py-16 bg-gradient-to-br from-[#9E85F9] to-[#484689]">
        <div className="prodfolio-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your resume lists what you did.<br />
            Your Prodfolio shows how you think.
          </h2>
          <div className="flex justify-center mb-6">
            <Button 
              size="lg"
              className="bg-white text-[#3B2966] hover:bg-white/90 font-semibold"
              onClick={() => window.location.href = 'https://app.prodfolio.io/signup'}
            >
              Start Your Portfolio Free
            </Button>
          </div>
          <p className="text-white/90 text-sm">
            No credit card required • Build your first portfolio in under 30 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
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
            
            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4 text-[#3B2966]">Resources</h4>
              <ul className="space-y-2 text-sm text-[#6F6F7B]">
                <li>
                  <a href="https://www.youtube.com/@TheProductPivot/videos" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B2966] hover:underline transition-all">
                    Podcast
                  </a>
                </li>
                <li>
                  <a href="https://sugared-cactus-5d5.notion.site/The-SIGNAL-Framework-for-PM-Case-Studies-2a5f7107577780318be3e52f948684ed?pvs=74" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B2966] hover:underline transition-all">
                    SIGNAL Framework
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-[#3B2966]">Company</h4>
              <ul className="space-y-2 text-sm text-[#6F6F7B]">
                <li>
                  <a href="/about" className="hover:text-[#3B2966] hover:underline transition-all">
                    About
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
                  <a href="https://sugared-cactus-5d5.notion.site/Prodfolio-Privacy-Policy-241f710757778017aa6dc57283be68d7?pvs=74" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B2966] hover:underline transition-all">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-[#3B2966] hover:underline transition-all">
                    Terms
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
              <p className="text-base mb-2 font-medium text-[#3B2966]">Made with 💙 by PMs, for PMs</p>
              <a href="https://www.linkedin.com/company/prodfoliohq" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#6F6F7B] hover:text-[#3B2966] hover:underline transition-all mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Follow for PM career & portfolio tips
              </a>
              <p className="text-xs text-[#6F6F7B] mt-4">
                Prodfolio™ is a product of Just Fractional, LLC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
