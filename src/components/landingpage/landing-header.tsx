'use-client';

import { Link } from '@tanstack/react-router';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';
import { ModeSwitcher } from '@/components/mode-switcher';

export default function LandingHeader() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center gap-2 md:gap-4">
          <MainNav />
          <MobileNav />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="flex gap-4 mr-2">
              <Link
                to="/signup"
                className="transition-colors hover:text-foreground/80 text-foreground"
              >
                Signup
              </Link>
              <Link
                to="/login"
                className="transition-colors hover:text-foreground/80 text-foreground"
              >
                Login
              </Link>
            </div>
            <ModeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
