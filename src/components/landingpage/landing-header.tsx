'use-client';

import { Link } from '@tanstack/react-router';
import { useAuth } from '@hooks/authHook';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';
import { ModeSwitcher } from '@/components/mode-switcher';

export default function LandingHeader() {
  const user = useAuth();
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center gap-2 md:gap-4">
          <MainNav />
          <MobileNav />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            {!user?.email ? (
              <div className="flex gap-4 mr-2">
                <Link
                  to="/signup"
                  className="text-foreground transition-colors hover:text-foreground/80"
                >
                  Signup
                </Link>
                <Link
                  to="/login"
                  className="text-foreground transition-colors hover:text-foreground/80"
                >
                  Login
                </Link>
              </div>
            ) : (
              <>
                <Link
                  to="/management"
                  className="text-foreground transition-colors hover:text-foreground/80"
                >
                  Dashboard
                </Link>

                <Link
                  to="/signup"
                  className="text-foreground transition-colors hover:text-foreground/80"
                >
                  Signup
                </Link>
              </>
            )}

            <ModeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
