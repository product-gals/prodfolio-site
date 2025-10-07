import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PortfolioBuilder from '@/components/portfolio/PortfolioBuilder';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const emptyInitial = {
  firstName: '',
  lastName: '',
  linkedinProfile: '',
  summary: '',
  tagline: '',
  location: '',
  personalProject: { title: '', description: '', role: '', link: '', tags: [], show: true },
  skills: [],
  tools: [],
  caseStudies: [],
};

export default function EditPortfolio() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const portfolioId = searchParams.get('portfolioId');
  
  const [initialData, setInitialData] = useState(emptyInitial);
  const [loading, setLoading] = useState(!!portfolioId);

  useEffect(() => {
    document.title = portfolioId ? 'Edit Portfolio | Prodfolio' : 'Create New Portfolio | Prodfolio';
  }, [portfolioId]);

  useEffect(() => {
    const loadPortfolio = async () => {
      if (!portfolioId) {
        setLoading(false);
        return;
      }

      try {
        const { data: portfolio, error } = await supabase
          .from('portfolios')
          .select('*')
          .eq('id', portfolioId)
          .single();

        if (error) {
          console.error('Error loading portfolio:', error);
          toast({
            title: 'Error loading portfolio',
            description: 'Portfolio not found or access denied.',
            variant: 'destructive'
          });
          navigate('/app/portfolios');
          return;
        }

        // Transform database data to builder format
        const builderData = {
          firstName: portfolio.title?.split(' ')[0] || '',
          lastName: portfolio.title?.split(' ').slice(1).join(' ') || '',
          linkedinProfile: portfolio.contact_linkedin || '',
          summary: portfolio.tldr || '',
          tagline: '',
          location: '',
          personalProject: {
            title: '',
            description: '',
            role: '',
            link: '',
            tags: [],
            show: true
          },
          skills: [],
          tools: [],
          caseStudies: Array.isArray(portfolio.case_studies) ? portfolio.case_studies : [],
          contactEmail: portfolio.contact_email || '',
          resumeUrl: portfolio.resume_url || ''
        };

        setInitialData(builderData);
      } catch (error) {
        console.error('Error loading portfolio:', error);
        toast({
          title: 'Error loading portfolio',
          description: 'Something went wrong loading your portfolio.',
          variant: 'destructive'
        });
        navigate('/app/portfolios');
      } finally {
        setLoading(false);
      }
    };

    loadPortfolio();
  }, [portfolioId, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <PortfolioBuilder
      initialData={initialData}
      mode={portfolioId ? "edit" : "new"}
      onClose={() => navigate('/app/portfolios')}
      onComplete={() => navigate('/app/portfolios')}
    />
  );
}