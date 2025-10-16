import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function TermsOfService() {
  useSEO({
    title: "Terms of Service | Prodfolio",
    description: "Terms of Service for Prodfolio - Review our user agreement and service terms.",
    canonical: "https://www.prodfolio.io/terms",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="prodfolio-container py-16 md:py-24">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: January 2025
            </p>
          </header>

          <div className="space-y-12 text-foreground">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Prodfolio. These Terms of Service ("Terms") constitute a legally binding agreement between you and Prodfolio regarding your use of our platform and services. By accessing or using Prodfolio, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our services.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By creating an account, accessing, or using any part of Prodfolio's services, you acknowledge that you have read, understood, and agree to comply with these Terms of Service, as well as our Privacy Policy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Your continued use of the service after any changes indicates your acceptance of the updated Terms.
              </p>
            </section>

            {/* Use of the Service */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                Use of the Service
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Prodfolio grants you a limited, non-exclusive, non-transferable license to access and use our platform for creating and managing professional product management portfolios.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium mb-2">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>Use the service for any unlawful purpose or in violation of any applicable laws</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Distribute malware, spam, or engage in any harmful activities</li>
                <li>Reverse engineer, decompile, or attempt to extract the source code of our platform</li>
                <li>Use automated systems to access the service without our express written permission</li>
              </ul>
            </section>

            {/* Accounts and Security */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                Accounts and Security
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you create an account with Prodfolio, you are responsible for maintaining the security and confidentiality of your account credentials. You agree to notify us immediately of any unauthorized access or use of your account.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You are solely responsible for all activities that occur under your account. Prodfolio will not be liable for any loss or damage arising from your failure to maintain account security.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content, features, functionality, trademarks, service marks, logos, and trade dress of Prodfolio are owned by Prodfolio and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You may not copy, modify, distribute, sell, or lease any part of our services or software without our express written permission. Unauthorized use of Prodfolio's intellectual property may result in legal action.
              </p>
            </section>

            {/* User Content */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                User Content
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You retain all ownership rights to the portfolio content you create and upload to Prodfolio. By using our service, you grant Prodfolio a limited, worldwide, non-exclusive license to host, store, and display your content solely for the purpose of providing our services to you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You represent and warrant that you own or have the necessary rights to all content you upload, and that your content does not violate any third-party rights or applicable laws.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may terminate your account at any time by contacting us or through your account settings. Upon termination, your right to use the service will immediately cease.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Prodfolio reserves the right to suspend or terminate your account at any time, with or without notice, if we believe you have violated these Terms or engaged in conduct that we deem inappropriate or harmful to our platform or other users.
              </p>
            </section>

            {/* Disclaimer & Limitation of Liability */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                Disclaimer & Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Prodfolio is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Prodfolio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the service.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of Prodfolio shall be resolved in the courts located in Delaware, USA.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a 
                  href="mailto:hello@prodfolio.io" 
                  className="text-primary hover:underline font-medium"
                >
                  hello@prodfolio.io
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
