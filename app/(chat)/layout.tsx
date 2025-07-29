import AppSidebar from "@/components/minimal-components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-svh">
        <AppSidebar />
        {children}
      </div>
    </SidebarProvider>
  );
}
