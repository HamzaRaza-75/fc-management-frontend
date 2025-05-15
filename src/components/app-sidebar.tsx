import * as React from 'react';
import {
  BookOpen,
  Bot,
  CalendarDays,
  FileChartColumnIncreasing,
  GalleryVerticalEnd,
  House,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: {
    name: 'Acme Inc',
    logo: GalleryVerticalEnd,
    plan: 'Enterprise',
  },
  navMain: [
    {
      title: 'Clients',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'All Clients',
          url: '/management/clients',
        },
        {
          title: 'Create',
          url: '/management/client/create',
        },
      ],
    },
    {
      title: 'Users',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'All Users',
          url: '/management/users',
        },
      ],
    },
    {
      title: 'Tasks',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'All Tasks',
          url: '/management/tasks',
        },
        {
          title: 'Create Tasks',
          url: '/management/task/create',
        },
      ],
    },
    {
      title: 'Teams',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'All Teams',
          url: '/management/teams',
        },
        {
          title: 'Create Team',
          url: '/management/team/create',
        },
      ],
    },
    {
      title: 'Company',
      url: '#',
      icon: House,
      items: [
        {
          title: 'All Companies',
          url: '/management/companies',
        },
        {
          title: 'Add Company',
          url: '/management/company/create',
        },
      ],
    },
  ],
  reports: [
    {
      name: 'Tasks Reports',
      url: '#',
      icon: FileChartColumnIncreasing,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Attandance',
      url: '#',
      icon: CalendarDays,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher team={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects reports={data.reports} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
