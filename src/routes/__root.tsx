import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import TanstackQueryLayout from '../integrations/tanstack-query/layout';

import type { QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/ui/theme-provider';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Outlet />
      </ThemeProvider>

      <TanStackRouterDevtools />
      <TanstackQueryLayout />
    </>
  ),
});
