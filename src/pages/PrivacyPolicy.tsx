import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useSEO({
    title: "Privacy Policy | Prodfolio",
    description: "Learn how Prodfolio collects, uses, and protects your data. We handle your information with care and never sell your data to third parties.",
    noindex: false,
  });

  return (
    <div className="min-h-screen flex flex-col gradient-mesh-bg">
      <Navbar />
      
      <main className="flex-1 py-20 px-4">
        <article className="prodfolio-container max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-navy">
              Privacy Policy
            </h1>
            <p className="text-lg text-navy/80">
              <strong>Last updated: November 16, 2025</strong>
            </p>
            <p className="text-lg text-navy/90 mt-4 max-w-2xl mx-auto">
              At Prodfolio, your privacy matters. We collect only the information we need to support your experience — and we handle it with care.
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-12">
            {/* What We Collect */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">What We Collect</h2>
              <p className="text-navy/90 mb-4"><strong>When you use Prodfolio, we collect:</strong></p>
              <ul className="space-y-2 text-navy/90">
                <li>Your name and email address</li>
                <li>Portfolio content you create (case studies, projects, descriptions)</li>
                <li>Basic usage information (what features you use, when you log in)</li>
                <li>Device information (browser type, operating system)</li>
                <li>Support messages and inquiries you send us</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">How We Use Your Information</h2>
              <p className="text-navy/90 mb-4"><strong>We use your information to:</strong></p>
              <ul className="space-y-2 text-navy/90">
                <li>Provide the Prodfolio service (store your portfolio, keep you logged in)</li>
                <li>Send you important emails (password resets, security alerts)</li>
                <li>Send you product updates and tips (only if you opt in)</li>
                <li>Improve our product</li>
                <li>Provide customer support</li>
                <li>Process payments (for paid plans)</li>
                <li>Prevent fraud and abuse</li>
              </ul>
              <p className="text-navy/90 mt-4 font-semibold">
                We never sell your data to third parties.
              </p>
            </section>

            {/* Legal Basis for Processing */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">Legal Basis for Processing</h2>
              <p className="text-navy/90 mb-4"><strong>We process your data based on:</strong></p>
              <ul className="space-y-2 text-navy/90">
                <li><strong>Consent:</strong> When you sign up and opt in to communications</li>
                <li><strong>Contract:</strong> To provide the Prodfolio service you signed up for</li>
                <li><strong>Legitimate Interest:</strong> To improve our product and prevent fraud</li>
              </ul>
              <p className="text-navy/90 mt-4">
                You can withdraw consent anytime by emailing hello@prodfolio.io or unsubscribing from emails.
              </p>
            </section>

            {/* Where We Store Your Data */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">Where We Store Your Data</h2>
              <p className="text-navy/90 mb-4"><strong>We use trusted service providers to operate Prodfolio:</strong></p>
              <ul className="space-y-2 text-navy/90">
                <li><strong>Supabase</strong> – database and authentication</li>
                <li><strong>Vercel</strong> – hosting and content delivery network (CDN)</li>
                <li><strong>Customer.io</strong> – email communications</li>
                <li><strong>Featurebase</strong> – customer support and messaging</li>
                <li><strong>Stripe</strong> – payment processing (for paid plans)</li>
                <li><strong>Slack</strong> – internal alerts for new sign-ups (name, email, plan, and ID only)</li>
                <li><strong>Zapier</strong> – workflow automation</li>
                <li><strong>Notion</strong> – internal operations and user organization tracking</li>
                <li><strong>Simple Analytics</strong> – privacy-friendly website analytics (see below)</li>
              </ul>
              <p className="text-navy/90 mt-4">
                These companies are required to protect your data and only use it to provide services to us.
              </p>
              <p className="text-navy/90 mt-4">
                <strong>Internal notifications:</strong> When you sign up, we receive a notification in our internal Slack workspace. This helps us provide timely support and onboard new users. Only our team sees these notifications, and this data is not used for marketing or shared with third parties.
              </p>
              <p className="text-navy/90 mt-4">
                Data is stored in the United States and European Union. For EU users, we ensure appropriate safeguards are in place for international data transfers (Standard Contractual Clauses).
              </p>
            </section>

            {/* Website Analytics */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">Website Analytics</h2>
              <p className="text-navy/90 mb-4">
                We use Simple Analytics to understand how visitors use our website and improve your experience.
              </p>
              <p className="text-navy/90 mb-2"><strong>What Simple Analytics collects:</strong></p>
              <ul className="space-y-2 text-navy/90 mb-4">
                <li>Pages you visit on Prodfolio</li>
                <li>How you found us (referral sources)</li>
                <li>General location (country-level only)</li>
                <li>Device type (mobile, desktop, tablet)</li>
                <li>Browser type</li>
              </ul>
              <p className="text-navy/90 mb-2"><strong>What Simple Analytics does NOT collect:</strong></p>
              <ul className="space-y-2 text-navy/90 mb-4">
                <li>No cookies</li>
                <li>No personal data</li>
                <li>No IP addresses</li>
                <li>No individual tracking</li>
                <li>No cross-site tracking</li>
                <li>No fingerprinting</li>
              </ul>
              <p className="text-navy/90 mb-4">
                Simple Analytics only provides us with aggregated, anonymous data. We can see that "50 people visited the pricing page today," but we can't see who you are or track your individual journey.
              </p>
              <p className="text-navy/90 mb-4">
                Because Simple Analytics respects your privacy by design, no cookie consent banner is required for analytics.
              </p>
              <p className="text-navy/90">
                Learn more at <a href="https://simpleanalytics.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">simpleanalytics.com/privacy-policy</a>
              </p>
            </section>

            {/* Cookies */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">Cookies</h2>
              <p className="text-navy/90 mb-4">
                <strong>We only use essential cookies needed to keep you logged in and keep the site secure. We don't use tracking or advertising cookies.</strong>
              </p>
              <p className="text-navy/90 mb-2">What we use:</p>
              <ul className="space-y-2 text-navy/90">
                <li>Authentication cookies (keeps you logged in)</li>
                <li>Security cookies (prevents abuse)</li>
              </ul>
              <p className="text-navy/90 mt-4">
                You can manage cookies through your browser settings, but disabling them will prevent you from using Prodfolio.
              </p>
            </section>

            {/* Your Rights */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">Your Rights</h2>
              <p className="text-navy/90 mb-4"><strong>You can:</strong></p>
              <ul className="space-y-2 text-navy/90">
                <li>Access your data through your account</li>
                <li>Update your information anytime</li>
                <li>Delete your account and all your data</li>
                <li>Opt out of marketing emails (unsubscribe link in every email)</li>
                <li>Request a copy of your data</li>
                <li>Object to certain types of processing</li>
              </ul>
              <p className="text-navy/90 mt-4">
                To exercise any of these rights, email us at hello@prodfolio.io
              </p>
            </section>

            {/* Additional Rights for International Users */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">Additional Rights for International Users</h2>
              
              <h3 className="text-2xl font-bold mb-3 text-navy">For Users in the European Union (GDPR)</h3>
              <p className="text-navy/90 mb-4"><strong>You have additional rights including:</strong></p>
              <ul className="space-y-2 text-navy/90">
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to rectification (correct inaccurate data)</li>
                <li>Right to restriction (limit how we process your data)</li>
                <li>Right to data portability (receive your data in a portable format)</li>
                <li>Right to object to processing based on legitimate interests</li>
                <li>Right to withdraw consent at any time</li>
                <li>Right to lodge a complaint with your local data protection authority</li>
              </ul>
              <p className="text-navy/90 mt-4">
                To exercise these rights, contact us at hello@prodfolio.io and we'll respond within 30 days.
              </p>

              <h3 className="text-2xl font-bold mb-3 mt-6 text-navy">For Users in California (CCPA)</h3>
              <p className="text-navy/90 mb-2">You have the right to:</p>
              <ul className="space-y-2 text-navy/90">
                <li>Know what personal information we collect and how we use it</li>
                <li>Delete your personal information</li>
                <li>Opt-out of the sale of personal information (note: we don't sell data)</li>
                <li>Non-discrimination for exercising your privacy rights</li>
              </ul>
              <p className="text-navy/90 mt-4">
                To exercise these rights, contact us at hello@prodfolio.io
              </p>
            </section>

            {/* Data Retention */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">Data Retention</h2>
              <p className="text-navy/90 mb-4">
                We keep your data while your account is active. After you delete your account:
              </p>
              <ul className="space-y-2 text-navy/90">
                <li>Your portfolio is removed from public view immediately</li>
                <li>All your data is permanently deleted within 30 days</li>
              </ul>
              <p className="text-navy/90 mt-4">
                Some information may be retained longer if required by law:
              </p>
              <ul className="space-y-2 text-navy/90">
                <li>Billing records: 7 years (tax and accounting requirements)</li>
                <li>Fraud prevention data: As required by law</li>
              </ul>
            </section>

            {/* Security */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">Security</h2>
              <p className="text-navy/90 mb-4"><strong>We use industry-standard security measures including:</strong></p>
              <ul className="space-y-2 text-navy/90">
                <li>Encryption in transit (HTTPS/TLS)</li>
                <li>Encryption at rest</li>
                <li>Secure authentication</li>
                <li>Regular security reviews</li>
              </ul>
              <p className="text-navy/90 mt-4">
                While no system is 100% secure, we take your data protection seriously.
              </p>
              <p className="text-navy/90 mt-4">
                If we experience a data breach affecting your information, we'll notify you promptly.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">Children's Privacy</h2>
              <p className="text-navy/90 mb-4">
                Prodfolio is not for anyone under 16. If you're under 16, please don't use our service.
              </p>
              <p className="text-navy/90">
                If we discover we've accidentally collected information from someone under 16, we'll delete it immediately.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">Changes to This Policy</h2>
              <p className="text-navy/90 mb-4">
                <strong>We may update this Privacy Policy as we add features or as legal requirements change. If we make significant changes, we'll notify you by:</strong>
              </p>
              <ul className="space-y-2 text-navy/90">
                <li>Email (if we have your address)</li>
                <li>A notice on our site</li>
              </ul>
              <p className="text-navy/90 mt-4">
                Continued use of Prodfolio after changes means you accept the updated policy. If you don't agree, you can delete your account anytime.
              </p>
              <p className="text-navy/90 mt-4">
                You can always find the current version at prodfolio.io/privacy.
              </p>
            </section>

            {/* Contact Us */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">Contact Us</h2>
              <p className="text-navy/90 mb-4">
                <strong>Questions about privacy? Email us anytime: hello@prodfolio.io</strong>
              </p>
              <p className="text-navy/90 mb-2">Data Controller:</p>
              <address className="text-navy/90 not-italic">
                Just Fractional LLC (d/b/a Prodfolio)<br />
                1780 Iowa Street, Unit 2020<br />
                Bellingham, WA 98229<br />
                Email: hello@prodfolio.io
              </address>
              <p className="text-navy/90 mt-4">
                We actually read our emails and typically respond within 1-2 business days. 💙
              </p>
            </section>

            {/* Footer */}
            <footer className="text-center pt-8 pb-4">
              <p className="text-navy/70 text-sm">
                <strong>Prodfolio™ is a product of Just Fractional LLC. All rights reserved.</strong>
              </p>
            </footer>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
