import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { ToastContainer } from 'react-toastify';
import TanstackQueryLayout from '../integrations/tanstack-query/layout';

import type { QueryClient } from '@tanstack/react-query';
import type { AuthUser } from '@/context/authSlice';
import { ThemeProvider } from '@/components/ui/theme-provider';

interface MyRouterContext {
  queryClient: QueryClient;
  auth: AuthUser | null;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Outlet />
        <ToastContainer />
      </ThemeProvider>

      <TanStackRouterDevtools />
      <TanstackQueryLayout />
    </>
  ),
});
