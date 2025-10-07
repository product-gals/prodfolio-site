import { Outlet, useLocation } from "react-router-dom";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../app-sidebar";

export default function AppLayout({ onLogout }: { onLogout?: () => void }) {
  const location = useLocation();
  const title =
    location.pathname.includes("analytics")
      ? "Analytics"
      : location.pathname.includes("settings")
      ? "Settings"
      : "Portfolios";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar onLogout={onLogout} />
        <SidebarInset className="flex-1 overflow-y-auto">
          <main className="px-6 py-8 md:px-8 bg-prodfolio-background-light min-h-screen w-full">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}