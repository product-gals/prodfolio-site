import { NavLink, useLocation } from "react-router-dom";
import { FolderGit2, Settings as SettingsIcon, LogOut, Mail } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useMemo, useState } from "react";

const navigationItems = [
  { title: "Portfolios", url: "/app/portfolios", icon: FolderGit2 },
  { title: "Settings", url: "/app/settings", icon: SettingsIcon },
  { title: "Share feedback", url: "mailto:hello@prodfolio.io", icon: Mail, external: true },
];

export function AppSidebar({ onLogout }: { onLogout?: () => void }) {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path: string) => currentPath === path;
  const isCollapsed = state === "collapsed";

  const [email, setEmail] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get authenticated user (single source of truth)
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        
        if (authError) {
          console.error('Auth error in sidebar:', authError);
          return;
        }
        
        if (!user) {
          setEmail(null);
          return;
        }

        setEmail(user.email ?? null);
        const fullName = (user.user_metadata as any)?.full_name as string | undefined;
        setName(fullName ?? null);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    
    fetchUserData();
  }, []);

  const initials = useMemo(() => {
    if (name) return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
    if (email) return email[0]?.toUpperCase() ?? "U";
    return "U";
  }, [name, email]);

  return (
    <TooltipProvider>
      <Sidebar collapsible="icon" className="border-r bg-white z-40">
        {/* Brand Header */}
        <SidebarHeader className="border-b p-4">
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
            <div className={`flex items-center ${isCollapsed ? '' : 'gap-3'}`}>
              <img 
                src="/lovable-uploads/491b1878-6a3e-4b53-b89f-c9c3000f3a08.png" 
                alt="Prodfolio" 
                className="h-8 w-8 rounded-lg shadow-sm flex-shrink-0" 
              />
              {!isCollapsed && (
                <span className="font-semibold text-lg text-navy tracking-tight">Prodfolio</span>
              )}
            </div>
            {!isCollapsed && (
              <SidebarTrigger className="h-6 w-6 text-prodfolio-text-secondary hover:text-navy" />
            )}
          </div>
          {isCollapsed && (
            <div className="mt-3 flex justify-center">
              <SidebarTrigger className="h-6 w-6 text-prodfolio-text-secondary hover:text-navy" />
            </div>
          )}
        </SidebarHeader>

        {/* Navigation */}
        <SidebarContent className="py-4">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-4">
                {navigationItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={!item.external && isActive(item.url)} 
                      tooltip={isCollapsed ? item.title : undefined}
                      className="h-12"
                    >
                      {item.external ? (
                        <a
                          href={item.url}
                          className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} text-navy hover:bg-muted/60 rounded-md w-full`}
                        >
                          <item.icon className="h-5 w-5" />
                          {!isCollapsed && <span>{item.title}</span>}
                        </a>
                      ) : (
                        <NavLink
                          to={item.url}
                          end
                          className={({ isActive }) =>
                            `flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} w-full ${
                              isActive
                                ? "bg-primary/10 text-primary font-semibold rounded-md"
                                : "text-navy hover:bg-muted/60 rounded-md"
                            }`
                          }
                        >
                          <item.icon className="h-5 w-5" />
                          {!isCollapsed && <span>{item.title}</span>}
                        </NavLink>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* User Footer */}
        <SidebarFooter className="mt-auto border-t p-4">
          <div className={`${isCollapsed ? 'flex flex-col items-center space-y-3' : 'space-y-3'}`}>
            {/* User Avatar */}
            <div className={`${isCollapsed ? '' : 'flex items-center gap-3 rounded-md p-2 bg-muted/40'}`}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar className={`${isCollapsed ? 'h-10 w-10' : 'h-8 w-8'} flex-shrink-0 cursor-pointer`}>
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-navy text-white max-w-xs">
                  {isCollapsed ? (
                    <>
                      <p className="text-sm font-medium">{name ?? "Demo User"}</p>
                      <p className="text-xs opacity-80">{email ?? "demo@prodfolio.app"}</p>
                    </>
                  ) : (
                    <p className="text-xs">In beta we're unable to store files but in the future we will allow the option to upload a photo.</p>
                  )}
                </TooltipContent>
              </Tooltip>
              {!isCollapsed && (
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-navy truncate">{name ?? "Demo User"}</p>
                  <p className="text-xs text-prodfolio-text-tertiary truncate">{email ?? "demo@prodfolio.app"}</p>
                </div>
              )}
            </div>
            
            {/* Logout Button */}
            {onLogout && (
              <div className={isCollapsed ? 'flex justify-center' : ''}>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={onLogout} 
                      tooltip={isCollapsed ? "Log Out" : undefined} 
                      className={`text-navy hover:bg-red-50 hover:text-red-600 transition-colors ${isCollapsed ? 'justify-center h-10 w-10' : ''}`}
                    >
                      <LogOut className="h-4 w-4" />
                      {!isCollapsed && <span>Log Out</span>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </div>
            )}
          </div>
        </SidebarFooter>
      </Sidebar>
    </TooltipProvider>
  );
}
