import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function TermsOfService() {
  useSEO({
    title: "Terms of Service | Prodfolio",
    description: "Terms of Service for Prodfolio. Learn about your rights and responsibilities when using our portfolio platform.",
    canonical: "https://prodfolio.io/terms",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service",
      "description": "Terms of Service for Prodfolio. Learn about your rights and responsibilities when using our portfolio platform.",
      "url": "https://prodfolio.io/terms",
      "dateModified": "2025-11-16",
      "publisher": {
        "@type": "Organization",
        "name": "Prodfolio",
        "url": "https://prodfolio.io"
      }
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen gradient-mesh-bg">
      <Navbar />
      
      <main className="py-20 px-4">
        <article className="prodfolio-container max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-navy">
              Terms of Service
            </h1>
            <p className="text-lg text-navy/80">
              <strong>Last updated: November 16, 2025</strong>
            </p>
            <p className="text-lg text-navy/90 mt-4 max-w-2xl mx-auto">
              Welcome to Prodfolio. By using our service, you agree to these terms.
            </p>
          </header>

          <div className="space-y-8">
            {/* Section 1 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">1. What Prodfolio Is</h2>
              <p className="text-navy/90">
                Prodfolio is a portfolio-building platform for product managers. We're still building and improving, so some features may be limited or in beta.
              </p>
            </section>

            {/* Section 2 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">2. Who Can Use Prodfolio</h2>
              <p className="text-navy/90 mb-4">
                You must be at least <strong>16 years old</strong> to use Prodfolio. By using our service, you confirm you meet this requirement and have the legal capacity to enter into these terms.
              </p>
              <p className="text-navy/90">
                If you're using Prodfolio on behalf of an organization, you represent that you have authority to bind that organization to these terms.
              </p>
            </section>

            {/* Section 3 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">3. Your Account</h2>
              <p className="text-navy/90 mb-4">When you sign up:</p>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4">
                <li>Provide accurate information</li>
                <li>Keep your account secure (use a strong password, don't share your login)</li>
                <li>You're responsible for activity on your account</li>
              </ul>
              <p className="text-navy/90 mt-4 font-semibold">
                If you notice unauthorized access, email us immediately at hello@prodfolio.io.
              </p>
            </section>

            {/* Section 4 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">4. Email Communications</h2>
              <p className="text-navy/90 mb-4">
                By creating a Prodfolio account, you agree to receive transactional emails necessary for account security, service delivery, and critical product updates. These include:
              </p>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li>Account notifications (password changes, security alerts)</li>
                <li>Billing and payment confirmations</li>
                <li>Critical service announcements that affect your portfolio or account functionality</li>
                <li>Bug fixes and security updates</li>
              </ul>
              <p className="text-navy/90 mb-4">
                We will also occasionally send emails about product updates, new features, and improvements that may enhance your Prodfolio experience. You can adjust your email preferences at any time in your account settings.
              </p>
              <p className="text-navy/90 mb-4">
                You may separately opt in to receive our newsletter containing PM career tips, portfolio examples, and Prodfolio community content. This is optional and can be managed independently from service-related emails.
              </p>
              <p className="text-navy/90">
                All marketing and promotional emails will include an unsubscribe link. Unsubscribing from these emails will not affect your ability to use Prodfolio or receive critical service-related communications.
              </p>
            </section>

            {/* Section 5 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">5. Acceptable Use</h2>
              <p className="text-navy/90 mb-4">Please use Prodfolio responsibly. Don't:</p>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4">
                <li>Post illegal, harmful, or abusive content</li>
                <li>Spam, harass, or impersonate others</li>
                <li>Try to hack or break the platform</li>
                <li>Upload malware or viruses</li>
                <li>Violate any laws</li>
                <li>Plagiarize or misrepresent others' work</li>
                <li>Create multiple accounts to abuse the service</li>
                <li>Use automated tools (bots, scrapers) without permission</li>
              </ul>
              <p className="text-navy/90 mt-4 font-semibold">
                We can remove content or suspend accounts that violate these rules. In serious cases (illegal activity, security threats), we may report violations to authorities.
              </p>
            </section>

            {/* Section 6 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">6. Your Content</h2>
              
              <h3 className="text-2xl font-bold mb-3 text-navy">You Own Your Work</h3>
              <p className="text-navy/90 mb-4">
                Any portfolios or content you create on Prodfolio belongs to you. You retain all ownership rights.
              </p>

              <h3 className="text-2xl font-bold mb-3 text-navy">License You Grant Us</h3>
              <p className="text-navy/90 mb-2">By uploading content, you give us permission to:</p>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li>Display it on the platform</li>
                <li>Store it securely</li>
                <li>Make technical adjustments (resize images, format text for mobile, etc.)</li>
                <li>Back it up for security</li>
              </ul>
              <p className="text-navy/90 mb-4">
                This license exists only so we can operate the platform. We don't use your work for anything else without asking.
              </p>

              <h3 className="text-2xl font-bold mb-3 text-navy">Marketing Use (With Permission)</h3>
              <p className="text-navy/90 mb-4">
                We'd love to showcase great portfolios as examples — but <strong>we'll always ask first</strong>. We will never use your content in marketing without your explicit consent.
              </p>

              <h3 className="text-2xl font-bold mb-3 text-navy">Content Deletion</h3>
              <p className="text-navy/90 mb-2">If you delete content:</p>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li>It's removed from public view immediately</li>
                <li>Permanently deleted within 30 days</li>
                <li>During the 30-day backup period, it won't be publicly accessible</li>
              </ul>
              <p className="text-navy/90">
                <strong>EU users:</strong> This is your right to erasure under GDPR. For immediate deletion of sensitive content, contact hello@prodfolio.io.
              </p>
            </section>

            {/* Section 7 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">7. Our Intellectual Property</h2>
              <p className="text-navy/90 mb-4">
                Our platform, design, code, templates, and frameworks (like SIGNAL) belong to us. You can use them on Prodfolio, but you can't:
              </p>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li>Copy, modify, or redistribute our code or design</li>
                <li>Use our name, logo, or trademarks without permission</li>
                <li>Reproduce our proprietary frameworks outside the platform</li>
              </ul>
              <p className="text-navy/90 mb-4">
                <strong>Prodfolio™</strong> is a trademark of Just Fractional LLC.
              </p>
              <p className="text-navy/90">
                <strong>Fair use:</strong> You're welcome to share screenshots of your portfolio on LinkedIn or in job applications — that's the point!
              </p>
            </section>

            {/* Section 8 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">8. Privacy & Data Collection</h2>
              <p className="text-navy/90 mb-4">
                Your privacy matters. Our <a href="/privacy" className="text-[#484689] hover:underline font-semibold">Privacy Policy</a> explains how we handle your data.
              </p>

              <h3 className="text-2xl font-bold mb-3 text-navy">What We Collect</h3>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li>Account information (name, email, password)</li>
                <li>Portfolio content</li>
                <li>Anonymous usage analytics (page views, referrals - no personal tracking)</li>
                <li>Technical data (browser, device type, error logs)</li>
                <li>Marketing emails (only if you opt in)</li>
              </ul>

              <h3 className="text-2xl font-bold mb-3 text-navy">Your Rights</h3>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li>Access all your data through your account</li>
                <li>Update your information anytime</li>
                <li>Delete your account and all data</li>
                <li>Opt out of marketing emails</li>
                <li>Request a copy of your data</li>
              </ul>
              <p className="text-navy/90 mb-4">
                <strong>EU users have additional rights under GDPR</strong> — see our Privacy Policy for details.
              </p>

              <h3 className="text-2xl font-bold mb-3 text-navy">Our Commitments</h3>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li>We never sell your data</li>
                <li>We use industry-standard security</li>
                <li>We only share data with trusted service providers (Supabase, Customer.io, Stripe, Zapier, Notion, Simple Analytics)</li>
                <li>We use privacy-first analytics (Simple Analytics) that doesn't track individuals or use tracking cookies</li>
                <li>We respond to privacy requests within 30 days</li>
              </ul>
              <p className="text-navy/90 font-semibold">
                For privacy questions, email hello@prodfolio.io
              </p>
            </section>

            {/* Section 9 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">9. Payments & Subscriptions</h2>
              
              <h3 className="text-2xl font-bold mb-3 text-navy">Pricing Plans</h3>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li><strong>Free:</strong> Basic features with watermark</li>
                <li><strong>Starter:</strong> $19/month - full features, no watermark</li>
                <li><strong>Pro:</strong> $29/month - advanced features, priority support</li>
                <li><strong>Founding Member:</strong> $348 one-time - two year access (limited availability)</li>
              </ul>
              <p className="text-navy/90 mb-4">
                Prices may change, but we'll notify existing subscribers before any increases.
              </p>

              <h3 className="text-2xl font-bold mb-3 text-navy">Billing</h3>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li>Processed securely through Stripe</li>
                <li>Billed monthly or annually (your choice)</li>
                <li>Failed payments may result in service interruption</li>
                <li>You're responsible for applicable taxes</li>
              </ul>

              <h3 className="text-2xl font-bold mb-3 text-navy">Cancellation</h3>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li>Cancel anytime through account settings or by emailing us</li>
                <li>Takes effect at end of current billing period</li>
                <li>You retain access to paid features until subscription expires</li>
                <li>After cancellation, your portfolio remains on Free plan (with watermark)</li>
              </ul>

              <h3 className="text-2xl font-bold mb-3 text-navy">Refunds & Money-Back Guarantee</h3>
              <p className="text-navy/90 mb-4">
                <strong>Try Prodfolio risk-free.</strong> If you're not satisfied within 30 days of your first purchase, we'll refund you, no questions asked.
              </p>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li><strong>All paid plans:</strong> Full refund within 30 days of initial purchase</li>
                <li><strong>After 30 days:</strong> No refunds for partial months, but you can cancel anytime</li>
                <li><strong>Cancellations:</strong> You retain access until the end of your billing period</li>
                <li>Email hello@prodfolio.io for refund requests</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">10. No Warranties</h2>
              <p className="text-navy/90 mb-4">
                Prodfolio is provided <strong>"as is"</strong> and <strong>"as available."</strong>
              </p>
              <p className="text-navy/90 mb-2">We can't guarantee:</p>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li>Uninterrupted or error-free service</li>
                <li>That it will meet all your needs</li>
                <li>That your portfolio will land you a job (though we hope it helps!)</li>
                <li>24/7 availability without maintenance</li>
                <li>Perfect functionality of all features</li>
              </ul>
              <p className="text-navy/90">
                <strong>That said:</strong> We're committed to fixing bugs, improving performance, and supporting you. If something's not working, email hello@prodfolio.io.
              </p>
            </section>

            {/* Section 11 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">11. Limitation of Liability</h2>
              <p className="text-navy/90 mb-4">
                To the fullest extent permitted by law, Prodfolio and Just Fractional LLC are <strong>not liable</strong> for:
              </p>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Lost profits, data, or opportunities</li>
                <li>Issues caused by third-party services</li>
                <li>Service interruptions, bugs, or errors</li>
                <li>Unauthorized access due to your failure to secure your account</li>
              </ul>
              <p className="text-navy/90 mb-2">
                <strong>Our total liability won't exceed the greater of:</strong>
              </p>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li>$100, or</li>
                <li>The amount you've paid us in the last 12 months</li>
              </ul>
              <p className="text-navy/90">
                Some jurisdictions don't allow these limitations, so they may not apply to you.
              </p>
            </section>

            {/* Section 12 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">12. Termination</h2>
              
              <h3 className="text-2xl font-bold mb-3 text-navy">You Can Leave Anytime</h3>
              <p className="text-navy/90 mb-2">To delete your account:</p>
              <ol className="space-y-2 text-navy/90 list-decimal list-inside ml-4 mb-4">
                <li>Email hello@prodfolio.io with "Delete My Account"</li>
                <li>We'll confirm your identity</li>
                <li>Your data will be permanently deleted within 30 days</li>
              </ol>
              <p className="text-navy/90 mb-2"><strong>What happens:</strong></p>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li>Portfolio removed from public view immediately</li>
                <li>All data deleted within 30 days</li>
                <li>You can request a data export before deletion</li>
                <li>Some data may be retained if legally required (billing records, fraud prevention)</li>
              </ul>

              <h3 className="text-2xl font-bold mb-3 text-navy">We Can Terminate Accounts That:</h3>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li>Violate these terms</li>
                <li>Engage in harmful, abusive, or illegal behavior</li>
                <li>Create security risks</li>
                <li>Remain inactive for extended periods (we'll notify you first)</li>
                <li>Fail to pay subscription fees (after notice)</li>
              </ul>
              <p className="text-navy/90 mb-2"><strong>Our process:</strong></p>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4">
                <li>Minor violations: Warning first, chance to fix</li>
                <li>Serious violations: Immediate termination</li>
                <li>We'll usually give you a chance to export your data first</li>
              </ul>
            </section>

            {/* Section 13 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">13. Third-Party Services</h2>
              <p className="text-navy/90 mb-4">
                We use third-party services (Supabase, Customer.io, Stripe) as data processors. They're contractually required to:
              </p>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li>Handle your data according to our instructions</li>
                <li>Comply with data protection laws (including GDPR)</li>
                <li>Only use your data to provide services to us</li>
              </ul>
              <p className="text-navy/90 mb-2"><strong>We're not responsible for:</strong></p>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4">
                <li>How these services operate outside their relationship with us</li>
                <li>Their independent terms and policies</li>
                <li>Service interruptions caused by third parties</li>
              </ul>
            </section>

            {/* Section 14 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">14. Governing Law & Disputes</h2>
              <p className="text-navy/90 mb-4">
                These Terms are governed by <strong>Washington State, USA</strong> law.
              </p>

              <h3 className="text-2xl font-bold mb-3 text-navy">Informal Resolution First</h3>
              <p className="text-navy/90 mb-4">
                If we have a dispute, let's try to work it out by emailing hello@prodfolio.io. Most issues can be resolved through friendly conversation.
              </p>

              <h3 className="text-2xl font-bold mb-3 text-navy">Formal Disputes</h3>
              <p className="text-navy/90 mb-4">
                If informal resolution doesn't work, disputes will be resolved in the courts of <strong>Whatcom County, Washington</strong>.
              </p>

              <h3 className="text-2xl font-bold mb-3 text-navy">Individual Disputes Only</h3>
              <p className="text-navy/90 mb-2">You agree to resolve disputes individually, not as part of a class action. This means:</p>
              <ul className="space-y-2 text-navy/90 list-disc list-inside ml-4 mb-4">
                <li>No class action lawsuits</li>
                <li>No joining claims with other users</li>
                <li>Individual claims only</li>
              </ul>

              <h3 className="text-2xl font-bold mb-3 text-navy">Time Limit</h3>
              <p className="text-navy/90">
                Any claim must be filed within <strong>one year</strong> of when it arose.
              </p>
            </section>

            {/* Section 15 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">15. General Terms</h2>
              <ul className="space-y-3 text-navy/90">
                <li><strong>Entire Agreement:</strong> These Terms and our Privacy Policy are the complete agreement between you and Prodfolio.</li>
                <li><strong>Severability:</strong> If any part is found invalid, the rest still applies.</li>
                <li><strong>No Waiver:</strong> If we don't enforce a right immediately, we haven't waived it.</li>
                <li><strong>Assignment:</strong> You can't transfer these Terms. We can assign them if Prodfolio is acquired or restructured.</li>
                <li><strong>Force Majeure:</strong> We're not liable for delays caused by events beyond our control (natural disasters, wars, pandemics, etc.).</li>
                <li><strong>Feedback:</strong> If you provide suggestions, we can use them without obligation to compensate you.</li>
                <li><strong>Data Protection:</strong> For EU users, these Terms and our Privacy Policy together form our GDPR commitment. Your data protection rights take precedence where applicable.</li>
              </ul>
            </section>

            {/* Section 16 */}
            <section className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold mb-4 text-navy">16. Contact Us</h2>
              <p className="text-navy/90 mb-4">
                Questions about these Terms? Email us: <a href="mailto:hello@prodfolio.io" className="text-primary hover:underline font-semibold">hello@prodfolio.io</a>
              </p>
              <p className="text-navy/90 mb-2"><strong>Mailing Address:</strong></p>
              <address className="text-navy/90 not-italic mb-4">
                Just Fractional LLC (d/b/a Prodfolio)<br />
                1780 Iowa Street, Unit 2020<br />
                Bellingham, WA 98229<br />
                Email: hello@prodfolio.io
              </address>
              <p className="text-navy/90">
                We're here to help. 💙
              </p>
            </section>

            {/* Footer */}
            <footer className="text-center pt-8 pb-4">
              <p className="text-navy/70 text-sm">
                <strong>Prodfolio™ is a trademark of Just Fractional LLC. All rights reserved.</strong>
              </p>
            </footer>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
