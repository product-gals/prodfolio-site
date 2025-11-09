import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getArticleBySlug } from "@/data/helpArticles";
import { useSEO } from "@/hooks/useSEO";

export default function HelpArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useSEO({
    title: article ? `${article.title} - Prodfolio Help` : "Article Not Found - Prodfolio Help",
    description: article ? `Learn about ${article.title.toLowerCase()} in our comprehensive help guide.` : "The help article you're looking for could not be found.",
  });

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              We couldn't find the help article you're looking for.
            </p>
            <Button asChild>
              <Link to="/help">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Help Center
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Simple markdown-style formatting
  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      // H2 headers
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-semibold text-foreground mt-8 mb-4">
            {line.replace('## ', '')}
          </h2>
        );
      }
      
      // Bold text
      const boldFormatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      // Links
      const linkFormatted = boldFormatted.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>');
      
      // List items
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="text-muted-foreground ml-6 mb-2" dangerouslySetInnerHTML={{ __html: linkFormatted.replace('- ', '') }} />
        );
      }
      
      // Empty lines
      if (line.trim() === '') {
        return <div key={index} className="h-4" />;
      }
      
      // Regular paragraphs
      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: linkFormatted }} />
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/help">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Help Center
            </Link>
          </Button>

          {/* Article header */}
          <div className="mb-8">
            <div className="text-sm text-primary font-medium mb-2">{article.category}</div>
            <h1 className="text-4xl font-bold text-foreground mb-4">{article.title}</h1>
          </div>

          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            {formatContent(article.content)}
          </article>

          {/* Footer CTA */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">Was this article helpful?</p>
            <Button variant="outline" asChild>
              <Link to="mailto:support@prodfolio.io">Contact Support</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
