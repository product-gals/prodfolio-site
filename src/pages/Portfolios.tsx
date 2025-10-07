import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import { Edit, ExternalLink, Layers, Trash2, Eye, MoreVertical, EyeOff, Globe, Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import PortfolioBuilder from "@/components/portfolio/PortfolioBuilder";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { resetEditorState } from "@/lib/resetEditorState";
import { supabase } from "@/integrations/supabase/client";
import emptyPortfolioIllustration from "@/assets/empty-portfolio-illustration.jpg";
import { useSEO } from "@/hooks/useSEO";
import { User } from "@supabase/supabase-js";
interface Portfolio {
  id: string;
  title: string;
  slug: string;
  status: 'live' | 'draft';
  updated_at: string;
  view_count: number;
  cover?: string;
  initials: string;
  publicUrl: string;
}
interface PortfoliosProps {
  user?: User | null;
}
export default function Portfolios({
  user
}: PortfoliosProps) {
  // SEO for portfolios dashboard
  useSEO({
    title: "My Portfolios | Prodfolio Dashboard",
    description: "Manage your product management portfolios. Create, edit, and publish portfolios to showcase your PM thinking and impact.",
    noindex: true // Private user dashboard
  });

  const navigate = useNavigate();
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirm, setConfirm] = useState<{
    mode: 'publish' | 'unpublish' | 'delete';
    id: string;
  } | null>(null);
  const defaultName = user?.user_metadata?.name || user?.email?.split('@')[0] || "User";

  // Show loading state if user is not yet available
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading user data...</p>
        </div>
      </div>
    );
  }

  // Load portfolios from database with single auth source
  useEffect(() => {
    let isMounted = true;
    
    const loadPortfolios = async () => {
      try {
        // Always get fresh user auth state
        const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
        
        if (authError) {
          console.error('Auth error in portfolios:', authError);
          if (isMounted) {
            setLoading(false);
            toast({
              title: 'Authentication Error',
              description: 'Please refresh and try again.',
              variant: 'destructive'
            });
          }
          return;
        }

        if (!authUser?.id) {
          if (isMounted) setLoading(false);
          return;
        }

        // Set timeout to prevent infinite loading
        const timeoutId = setTimeout(() => {
          if (isMounted) {
            setLoading(false);
            toast({
              title: 'Request Timeout',
              description: "Couldn't load portfolios. Please try again.",
              variant: 'destructive'
            });
          }
        }, 10000);
        
        const { data, error } = await supabase
          .from('portfolios')
          .select('*')
          .eq('owner_id', authUser.id)
          .order('updated_at', { ascending: false });
        
        clearTimeout(timeoutId);
        
        if (!isMounted) return;
        
        if (error) {
          throw error;
        }
        
        const mappedPortfolios = (data || []).map(p => {
          try {
            return {
              id: p.id,
              title: p.title || 'Untitled Portfolio',
              slug: p.slug,
              status: p.is_published ? 'live' as const : 'draft' as const,
              updated_at: p.updated_at,
              view_count: p.view_count || 0,
              cover: p.cover,
              initials: p.cover || defaultName.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase() || 'P',
              publicUrl: `${window.location.origin}/p/${p.slug}`
            };
          } catch (mapError) {
            console.error('Portfolio mapping error:', mapError);
            return null;
          }
        }).filter(Boolean);
        
        setPortfolios(mappedPortfolios as Portfolio[]);
      } catch (error: any) {
        console.error('Load portfolios error:', error);
        if (isMounted) {
          toast({
            title: 'Failed to load portfolios',
            description: error.message || 'Please refresh the page and try again.',
            variant: 'destructive'
          });
          setPortfolios([]);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    // Only load if we have a user
    if (user?.id) {
      loadPortfolios();
    } else {
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [user?.id, defaultName]);
  const handleConfirmAction = async () => {
    if (!confirm) return;
    try {
      if (confirm.mode === 'delete') {
        const {
          error
        } = await supabase.from('portfolios').delete().eq('id', confirm.id);
        if (error) throw error;
        setPortfolios(prev => prev.filter(p => p.id !== confirm.id));
        toast({
          title: 'Portfolio deleted'
        });
      } else {
        const isPublish = confirm.mode === 'publish';
        const {
          error
        } = await supabase.from('portfolios').update({
          is_published: isPublish
        }).eq('id', confirm.id);
        if (error) throw error;
        setPortfolios(prev => prev.map(p => p.id === confirm.id ? {
          ...p,
          status: isPublish ? 'live' : 'draft'
        } : p));
        toast({
          title: isPublish ? 'Portfolio published' : 'Portfolio unpublished'
        });
      }
    } catch (error) {
      console.error('Action failed:', error);
      toast({
        title: 'Action failed',
        description: 'Please try again.',
        variant: 'destructive'
      });
    }
    setConfirm(null);
  };
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"updated" | "az" | "views">("updated");
  const [statusFilter, setStatusFilter] = useState<"all" | "draft" | "live">("all");
  const displayed = useMemo(() => {
    const filtered = portfolios.filter(p => {
      const q = query.trim().toLowerCase();
      const titleMatch = !q || p.title.toLowerCase().includes(q);
      const matchesStatus = statusFilter === "all" || statusFilter === "draft" && p.status === "draft" || statusFilter === "live" && p.status === "live";
      return titleMatch && matchesStatus;
    });
    const sorted = filtered.slice().sort((a, b) => {
      if (sortBy === "az") return a.title.localeCompare(b.title);
      if (sortBy === "views") return b.view_count - a.view_count;
      const dA = new Date(a.updated_at).getTime();
      const dB = new Date(b.updated_at).getTime();
      return dB - dA; // last updated desc
    });
    return sorted;
  }, [portfolios, query, sortBy, statusFilter]);
  const initialBuilderData = useMemo(() => ({
    firstName: defaultName.split(" ")[0] || "Sarah",
    lastName: defaultName.split(" ")[1] || "Chen",
    linkedinProfile: "",
    summary: "",
    personalProject: {
      title: "",
      description: "",
      role: "",
      link: "",
      tags: []
    },
    skills: ["Product Strategy", "User Research"],
    tools: ["Figma", "Jira"],
    caseStudies: [{
      id: "cs1",
      title: "Product Feature Redesign: User Onboarding",
      description: "Led the redesign of the user onboarding flow and increased adoption by 45%.",
      metrics: [{
        text: "+45% Feature Adoption",
        type: "positive" as const
      }]
    }]
  }), [defaultName, user]);
  const firstName = defaultName.split(" ")[0] || "there";
  const handleDuplicate = async (id: string) => {
    try {
      const original = portfolios.find(p => p.id === id);
      if (!original) return;

      // Get original portfolio data from database
      const {
        data: originalData,
        error: fetchError
      } = await supabase.from('portfolios').select('*').eq('id', id).single();
      if (fetchError) throw fetchError;

      // Create duplicate
      const {
        data: duplicate,
        error: insertError
      } = await supabase.from('portfolios').insert({
        ...originalData,
        id: undefined,
        // Let database generate new ID
        title: `${originalData.title} (Copy)`,
        slug: `${originalData.slug}-copy-${Date.now()}`,
        is_published: false,
        view_count: 0,
        created_at: undefined,
        updated_at: undefined
      }).select().single();
      if (insertError) throw insertError;

      // Add to local state
      const newPortfolio = {
        id: duplicate.id,
        title: duplicate.title,
        slug: duplicate.slug,
        status: 'draft' as const,
        updated_at: duplicate.updated_at,
        view_count: 0,
        cover: duplicate.cover,
        initials: duplicate.cover || original.initials,
        publicUrl: `${window.location.origin}/p/${duplicate.slug}`
      };
      setPortfolios(prev => [newPortfolio, ...prev]);
      toast({
        title: "Portfolio duplicated"
      });
    } catch (error) {
      toast({
        title: "Duplication failed",
        description: "Please try again.",
        variant: 'destructive'
      });
    }
  };
  const handleCopyLink = (publicUrl: string) => {
    navigator.clipboard?.writeText(publicUrl).then(() => {
      toast({
        title: "Link copied to clipboard"
      });
    }).catch(() => {
      toast({
        title: "Failed to copy link",
        variant: 'destructive'
      });
    });
  };
  return <div className="space-y-6">
      {/* Welcome Header */}
      <PageHeader 
        title={
          <span>
            Welcome back, <button 
              onClick={() => navigate('/app/settings')} 
              className="text-prodfolio-purple hover:underline"
            >
              {firstName}
            </button> 👋
          </span>
        } 
        subtitle="This is your Prodfolio hub. Create a portfolio, make edits, and share your link with hiring managers — all from here." 
      />

      {/* Actions row */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-xl font-semibold text-prodfolio-text">Your Portfolios</h2>
        {portfolios.length > 0 && <Button onClick={() => {
        resetEditorState();
        navigate('/app/portfolios/new');
      }} size="lg" className="bg-primary hover:bg-primary/90">
            + Create Your Portfolio
          </Button>}
      </div>

      {/* Utilities */}
      {portfolios.length > 0 && <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search portfolios" className="md:w-[320px]" />
          <div className="flex items-center gap-3">
            <Select value={sortBy} onValueChange={v => setSortBy(v as any)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="updated">Last updated</SelectItem>
                <SelectItem value="az">A–Z</SelectItem>
                <SelectItem value="views">Most views</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={v => setStatusFilter(v as any)}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="live">Live</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>}

      {/* Content */}
      {loading ? <div data-testid="portfolios-spinner" className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading portfolios...</p>
        </div> : portfolios.length === 0 ? <div className="bg-white border rounded-2xl p-10 md:p-14 text-center shadow-sm">
          <img src={emptyPortfolioIllustration} alt="Illustration: person building a portfolio" className="mx-auto mb-6 h-32 w-32 rounded-2xl object-cover" loading="lazy" />
          <h3 className="text-xl font-semibold text-navy mb-2">No portfolios yet 👀</h3>
          <p className="text-prodfolio-text-secondary mb-6">Let's create your first portfolio in under 5 minutes</p>
          <Button onClick={() => {
        resetEditorState();
        navigate('/app/portfolios/new');
      }} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            ✨ Create Your Portfolio
          </Button>
          <p className="text-sm text-muted-foreground mt-4">Join other PMs using Prodfolio to stand out in their job search.</p>
        </div> : <div data-testid="portfolios-content" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayed.map(portfolio => <div key={portfolio.id} className="bg-white border rounded-2xl overflow-hidden shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg h-full flex flex-col">
              {/* Portfolio Cover */}
              <AspectRatio ratio={16 / 9}>
                <div className="relative h-full w-full bg-gradient-to-br from-navy to-prodfolio-purple">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/90 text-2xl font-semibold">
                      {portfolio.initials}
                    </span>
                  </div>
                </div>
              </AspectRatio>

              {/* Portfolio Info */}
              <div className="p-5 flex flex-col h-full">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy">{portfolio.title}</h3>
                    <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>Updated {new Date(portfolio.updated_at).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5" /> {portfolio.view_count}
                      </span>
                    </div>
                  </div>

                  {/* Kebab Menu */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44 z-50">
                      <DropdownMenuItem onClick={() => handleCopyLink(portfolio.publicUrl)}>
                        <Copy className="mr-2 h-4 w-4" /> Copy link
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDuplicate(portfolio.id)}>
                        <Layers className="mr-2 h-4 w-4" /> Duplicate
                      </DropdownMenuItem>
                      {portfolio.status === 'live' ? <DropdownMenuItem onClick={() => setConfirm({
                  mode: 'unpublish',
                  id: portfolio.id
                })}>
                          <EyeOff className="mr-2 h-4 w-4" /> Unpublish
                        </DropdownMenuItem> : <DropdownMenuItem onClick={() => setConfirm({
                  mode: 'publish',
                  id: portfolio.id
                })}>
                          <Globe className="mr-2 h-4 w-4" /> Publish
                        </DropdownMenuItem>}
                      <DropdownMenuItem onClick={() => setConfirm({
                  mode: 'delete',
                  id: portfolio.id
                })} className="text-destructive focus:text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Status Badge */}
                <div className="mt-3">
                  <span className={portfolio.status === 'live' ? 'bg-primary/10 text-primary border border-primary/20 text-[11px] px-2 py-0.5 rounded-full' : 'bg-muted text-navy border text-[11px] px-2 py-0.5 rounded-full'}>
                    {portfolio.status === 'live' ? 'Live' : 'Draft'}
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-auto pt-5 flex items-center justify-end gap-2">
                  <Button size="sm" onClick={() => navigate(`/app/builder?portfolioId=${portfolio.id}`)} className="btn-accent bg-[F6932B]">
                    <Edit className="mr-2 h-4 w-4" /> Edit
                  </Button>
                  {portfolio.status === 'live' && <Button size="sm" variant="outline" onClick={() => window.open(portfolio.publicUrl, '_blank')} className="btn-outline-accent">
                      <ExternalLink className="mr-2 h-4 w-4" /> View
                    </Button>}
                </div>
              </div>
            </div>)}
        </div>}

      {isBuilderOpen && <PortfolioBuilder initialData={initialBuilderData} onClose={() => setIsBuilderOpen(false)} onComplete={() => setIsBuilderOpen(false)} />}

      <Dialog open={!!confirm} onOpenChange={o => {
      if (!o) setConfirm(null);
    }}>
        <DialogContent className="rounded-2xl">
          <DialogHeader>
            <DialogTitle>
              {confirm?.mode === 'delete' ? 'Delete this portfolio?' : confirm?.mode === 'unpublish' ? 'Unpublish this portfolio?' : 'Publish this portfolio?'}
            </DialogTitle>
            <DialogDescription>
              {confirm?.mode === 'delete' ? 'This action cannot be undone. The portfolio will be permanently deleted.' : confirm?.mode === 'unpublish' ? 'Unpublishing will hide your portfolio from public view, but you can republish it anytime.' : 'Publishing will make your portfolio visible to anyone with the link.'}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirm(null)}>Cancel</Button>
            {confirm?.mode === 'delete' ? <Button variant="destructive" onClick={handleConfirmAction}>Delete</Button> : confirm?.mode === 'unpublish' ? <Button variant="destructive" onClick={handleConfirmAction}>Unpublish</Button> : <Button className="btn-accent" onClick={handleConfirmAction}>Publish</Button>}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>;
}