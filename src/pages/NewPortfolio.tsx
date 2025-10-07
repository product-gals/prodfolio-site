import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PortfolioBuilder from '@/components/portfolio/PortfolioBuilder';
import { resetEditorState } from '@/lib/resetEditorState';

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

export default function NewPortfolio() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Create New Portfolio | Prodfolio';
    // Explicitly reset any cached editor state on entry
    resetEditorState();
  }, []);

  return (
    <PortfolioBuilder
      initialData={emptyInitial}
      mode="new"
      onClose={() => navigate('/app/portfolios')}
      onComplete={() => navigate('/app/portfolios')}
    />
  );
}
