'use client';

import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

export function MainNav() {
  return (
    <div className="mx-4 hidden md:flex">
      <Link to="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <span>Some Url</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          to="/"
          className={cn(
            'transition-colors hover:text-foreground/80 text-foreground',
          )}
        >
          Docs
        </Link>
        <Link
          to="/"
          className={cn(
            'transition-colors hover:text-foreground/80 text-foreground',
          )}
        >
          Components
        </Link>
        <Link
          to="/"
          className={cn(
            'transition-colors hover:text-foreground/80 text-foreground',
          )}
        >
          Blocks
        </Link>
        <Link
          to="/"
          className={cn(
            'transition-colors hover:text-foreground/80 text-foreground',
          )}
        >
          Charts
        </Link>
      </nav>
    </div>
  );
}
