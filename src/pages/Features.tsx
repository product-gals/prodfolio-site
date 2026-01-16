import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  FileText,
  Palette,
  Share2,
  Shield,
  BarChart3,
  Upload,
  Clock,
  CheckCircle,
  Zap,
  Lock,
  Globe
} from "lucide-react";

const Features = () => {
  const heroAnimation = useScrollAnimation();
  const aiAnimation = useScrollAnimation();
  const frameworkAnimation = useScrollAnimation();
  const customizeAnimation = useScrollAnimation();
  const shareAnimation = useScrollAnimation();
  const compareAnimation = useScrollAnimation();

  useSEO({
    title: "Prodfolio Features | AI Portfolio Builder for Product Managers",
    description: "Build your PM portfolio with AI-powered case studies, the SIGNAL framework, custom themes, and secure sharing. See all Prodfolio features.",
    canonical: "https://prodfolio.io/features",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Prodfolio Features",
      "description": "Explore all features of Prodfolio - the portfolio platform built for product managers.",
      "url": "https://prodfolio.io/features"
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9E85F9] via-[#C4B5FF] to-white">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-16 pb-20 px-4 ${heroAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container text-center max-w-[1200px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
            Everything you need to
            <br />
            <span className="text-navy">showcase your PM work</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            From AI-powered case studies to NDA-safe sharing, Prodfolio has the tools you need to build a portfolio that stands out.
          </p>

          {/* Feature Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <a href="#ai-powered" className="flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-colors">
              <Sparkles className="w-4 h-4" />
              AI-Powered
            </a>
            <a href="#framework" className="flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-colors">
              <FileText className="w-4 h-4" />
              SIGNAL Framework
            </a>
            <a href="#customize" className="flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-colors">
              <Palette className="w-4 h-4" />
              Customization
            </a>
            <a href="#share" className="flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-colors">
              <Share2 className="w-4 h-4" />
              Sharing & Privacy
            </a>
          </div>

          <Button asChild size="lg" className="px-8 py-6 h-auto text-lg bg-white text-navy hover:bg-white/90 shadow-xl font-semibold">
            <a href="https://app.prodfolio.io/sign-up">
              Start Building Free
            </a>
          </Button>
        </div>
      </section>

      {/* Feature 1: AI-Powered (Left image, Right text) */}
      <section
        id="ai-powered"
        ref={aiAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-4 bg-white ${aiAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left - Visual */}
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-coral/10 rounded-3xl p-8 border border-primary/20">
                  {/* Mock UI */}
                  <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy">AI Case Study Generator</p>
                        <p className="text-xs text-navy/60">Analyzing your document...</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-primary/20 rounded-full w-full animate-pulse" />
                      <div className="h-3 bg-primary/15 rounded-full w-4/5" />
                      <div className="h-3 bg-primary/10 rounded-full w-3/5" />
                    </div>
                    <div className="flex gap-2 pt-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">✓ Impact extracted</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">✓ Context identified</span>
                    </div>
                  </div>
                </div>
                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-coral/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
              </div>
            </div>

            {/* Right - Text */}
            <div className="flex-1 order-1 lg:order-2">
              <div className="flex items-center gap-2 text-primary font-medium mb-4">
                <Sparkles className="w-5 h-5" />
                AI-Powered
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                Turn your docs into case studies in minutes
              </h2>
              <p className="text-lg text-navy/70 mb-6 leading-relaxed">
                Upload your PRDs, product briefs, or project plans and let AI get you started. You guide the process—we do the heavy lifting.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-navy/80">Automatic data extraction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-navy/80">Smart suggestions for case study structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-navy/80">Unlimited AI generations on paid plans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: SIGNAL Framework (Right image, Left text) */}
      <section
        id="framework"
        ref={frameworkAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-4 bg-gradient-to-b from-white to-primary/5 ${frameworkAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left - Text */}
            <div className="flex-1">
              <div className="flex items-center gap-2 text-primary font-medium mb-4">
                <FileText className="w-5 h-5" />
                SIGNAL Framework
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                Guided prompts that structure your story
              </h2>
              <p className="text-lg text-navy/70 mb-6 leading-relaxed">
                Our proprietary SIGNAL framework walks you through each case study step-by-step, ensuring you capture what hiring managers actually want to see.
              </p>

              {/* SIGNAL Breakdown */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-primary/10">
                  <p className="font-bold text-primary">S</p>
                  <p className="text-sm text-navy/80">Situation</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-primary/10">
                  <p className="font-bold text-primary">I</p>
                  <p className="text-sm text-navy/80">Insight</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-primary/10">
                  <p className="font-bold text-primary">G</p>
                  <p className="text-sm text-navy/80">Goals</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-primary/10">
                  <p className="font-bold text-primary">N</p>
                  <p className="text-sm text-navy/80">Navigation</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-primary/10">
                  <p className="font-bold text-primary">A</p>
                  <p className="text-sm text-navy/80">Achievement</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-primary/10">
                  <p className="font-bold text-primary">L</p>
                  <p className="text-sm text-navy/80">Learnings</p>
                </div>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="flex-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-coral/10 to-primary/10 rounded-3xl p-8 border border-coral/20">
                  {/* Mock Case Study Editor */}
                  <div className="bg-white rounded-2xl shadow-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-primary font-semibold mb-1">SITUATION</p>
                        <div className="h-2 bg-navy/10 rounded w-full" />
                        <div className="h-2 bg-navy/10 rounded w-4/5 mt-1" />
                      </div>
                      <div>
                        <p className="text-xs text-primary font-semibold mb-1">ACHIEVEMENT</p>
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">+45% conversion</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">$2M revenue</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-primary font-semibold mb-1">LEARNINGS</p>
                        <div className="h-2 bg-navy/10 rounded w-3/4" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Customization (Left image, Right text) */}
      <section
        id="customize"
        ref={customizeAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-4 bg-white ${customizeAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left - Visual */}
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-coral/10 rounded-3xl p-8 border border-primary/20">
                  {/* Theme Selector Mock */}
                  <div className="bg-white rounded-2xl shadow-xl p-6">
                    <p className="text-sm font-semibold text-navy mb-4">Choose your theme</p>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary to-coral border-2 border-primary shadow-lg" />
                      <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-navy to-primary/80 border border-navy/20" />
                      <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700" />
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm font-semibold text-navy mb-2">Accent color</p>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary border-2 border-primary shadow-md" />
                        <div className="w-8 h-8 rounded-full bg-coral border border-coral/50" />
                        <div className="w-8 h-8 rounded-full bg-green-500 border border-green-500/50" />
                        <div className="w-8 h-8 rounded-full bg-blue-500 border border-blue-500/50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div className="flex-1 order-1 lg:order-2">
              <div className="flex items-center gap-2 text-primary font-medium mb-4">
                <Palette className="w-5 h-5" />
                Customization
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                Make it yours with themes and branding
              </h2>
              <p className="text-lg text-navy/70 mb-6 leading-relaxed">
                Choose from professional themes, custom colors, and Pro users can even add custom domains. Want to show your personality? Add your headshot and a personal video.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-navy/80">5+ professional themes included free</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-navy/80">Custom colors and accent options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-navy/80">Personal headshot and intro video</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-coral flex-shrink-0 mt-1" />
                  <span className="text-navy/80"><strong>Pro:</strong> Custom domain (yourname.com)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Sharing & Privacy (Right image, Left text) */}
      <section
        id="share"
        ref={shareAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-4 bg-gradient-to-b from-white to-primary/5 ${shareAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left - Text */}
            <div className="flex-1">
              <div className="flex items-center gap-2 text-primary font-medium mb-4">
                <Shield className="w-5 h-5" />
                Sharing & Privacy
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                Share confidently, even with NDAs
              </h2>
              <p className="text-lg text-navy/70 mb-6 leading-relaxed">
                We built Prodfolio knowing most PM work is confidential. Password-protect your portfolio, share selectively, and use our NDA-safe frameworks.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-navy/80">Password-protected portfolios</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-navy/80">NDA-safe case study templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Share2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-navy/80">Easy LinkedIn and resume integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-coral flex-shrink-0 mt-1" />
                  <span className="text-navy/80"><strong>Coming soon:</strong> Portfolio analytics</span>
                </li>
              </ul>
            </div>

            {/* Right - Visual */}
            <div className="flex-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-coral/10 to-primary/10 rounded-3xl p-8 border border-coral/20">
                  {/* Share Settings Mock */}
                  <div className="bg-white rounded-2xl shadow-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <p className="font-semibold text-navy">Share Settings</p>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Live</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Lock className="w-5 h-5 text-primary" />
                          <span className="text-sm text-navy">Password Protection</span>
                        </div>
                        <div className="w-10 h-6 bg-primary rounded-full relative">
                          <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow" />
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-navy/60 mb-2">Your portfolio link</p>
                        <div className="flex items-center gap-2">
                          <code className="flex-1 text-sm text-primary bg-primary/5 px-3 py-2 rounded">
                            prodfolio.io/p/your-name
                          </code>
                          <button className="p-2 bg-primary text-white rounded-lg text-xs">
                            Copy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section
        ref={compareAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-4 bg-navy ${compareAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Why Prodfolio vs. the alternatives?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Notion is great for docs. Webflow is great for designers. Here's why Prodfolio is built for PMs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-white/60 font-normal">Feature</th>
                  <th className="text-center py-4 px-4">
                    <span className="text-primary font-bold">Prodfolio</span>
                  </th>
                  <th className="text-center py-4 px-4 text-white/60">Notion + Super</th>
                  <th className="text-center py-4 px-4 text-white/60">Webflow</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4">PM-specific templates</td>
                  <td className="text-center py-4 px-4 text-green-400">✓</td>
                  <td className="text-center py-4 px-4 text-white/40">—</td>
                  <td className="text-center py-4 px-4 text-white/40">—</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4">AI case study generation</td>
                  <td className="text-center py-4 px-4 text-green-400">✓</td>
                  <td className="text-center py-4 px-4 text-white/40">—</td>
                  <td className="text-center py-4 px-4 text-white/40">—</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4">Guided SIGNAL framework</td>
                  <td className="text-center py-4 px-4 text-green-400">✓</td>
                  <td className="text-center py-4 px-4 text-white/40">—</td>
                  <td className="text-center py-4 px-4 text-white/40">—</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4">NDA-safe guidance</td>
                  <td className="text-center py-4 px-4 text-green-400">✓</td>
                  <td className="text-center py-4 px-4 text-white/40">—</td>
                  <td className="text-center py-4 px-4 text-white/40">—</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4">Time to build</td>
                  <td className="text-center py-4 px-4 text-green-400">&lt;1 hour</td>
                  <td className="text-center py-4 px-4 text-white/60">Days</td>
                  <td className="text-center py-4 px-4 text-white/60">Weeks</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4">Design skills needed</td>
                  <td className="text-center py-4 px-4 text-green-400">None</td>
                  <td className="text-center py-4 px-4 text-white/60">Some</td>
                  <td className="text-center py-4 px-4 text-white/60">Extensive</td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Starting price</td>
                  <td className="text-center py-4 px-4 text-green-400">Free</td>
                  <td className="text-center py-4 px-4 text-white/60">$22/mo</td>
                  <td className="text-center py-4 px-4 text-white/60">$14/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary to-coral">
        <div className="prodfolio-container text-center max-w-[800px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to build your portfolio?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join product managers who've discovered the portfolio advantage. Start free—no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="px-8 py-6 h-auto text-lg bg-white text-navy hover:bg-white/90 shadow-xl font-semibold"
            >
              <a href="https://app.prodfolio.io/sign-up">
                Start Your Portfolio Free
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 h-auto text-lg border-white text-white hover:bg-white/10 font-semibold"
            >
              <a href="/pricing">
                View Pricing
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
