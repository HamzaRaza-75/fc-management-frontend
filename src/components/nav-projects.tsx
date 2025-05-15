import { Link } from '@tanstack/react-router';
import type { LucideIcon } from 'lucide-react';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

export function NavProjects({
  reports,
}: {
  reports: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Reports</SidebarGroupLabel>
      <SidebarMenu>
        {reports.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <Link to={item.url}>
                {({ isActive }) => {
                  return (
                    <>
                      <item.icon />
                      <span className={isActive ? 'bg-red-400' : ''}>
                        {item.name}
                      </span>
                    </>
                  );
                }}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
