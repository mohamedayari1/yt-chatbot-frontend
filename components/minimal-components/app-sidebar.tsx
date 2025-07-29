'use client';


import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";

export default function AppSidebar() {
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>sdfqsdf</SidebarMenu>
      </SidebarHeader>
    </Sidebar>
  );
}
