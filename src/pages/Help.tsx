import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, BookOpen, Users, Sparkles, Shield } from "lucide-react";

export default function Help() {
  const articles = [
    {
      category: "Getting Started",
      icon: BookOpen,
      items: [
        { title: "How to create your first Prodfolio", slug: "create-first-prodfolio" },
        { title: "Understanding Prodfolio templates", slug: "understanding-templates" },
        { title: "Quick start guide for PMs", slug: "quick-start-guide" },
      ]
    },
    {
      category: "Features",
      icon: Sparkles,
      items: [
        { title: "Using AI to generate case studies", slug: "ai-case-studies" },
        { title: "Adding testimonials and references", slug: "testimonials-references" },
        { title: "Password protection for NDA work", slug: "password-protection" },
        { title: "Custom themes and branding", slug: "custom-themes" },
      ]
    },
    {
      category: "Best Practices",
      icon: Users,
      items: [
        { title: "How to tell a compelling product story", slug: "compelling-story" },
        { title: "Showcasing impact and metrics", slug: "showcasing-impact" },
        { title: "What hiring managers look for", slug: "hiring-manager-tips" },
      ]
    },
    {
      category: "Account & Privacy",
      icon: Shield,
      items: [
        { title: "Managing your subscription", slug: "manage-subscription" },
        { title: "Privacy and data security", slug: "privacy-security" },
        { title: "Sharing settings explained", slug: "sharing-settings" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How can we help you?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers, learn best practices, and get the most out of Prodfolio
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search help articles..."
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.category} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {category.category}
                  </h2>
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/help/${item.slug}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Still need help? We're here for you.
          </p>
          <Button variant="outline" asChild>
            <Link to="mailto:support@prodfolio.io">Contact Support</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
