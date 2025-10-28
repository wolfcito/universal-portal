'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import LogoImage from '@/app/icon.png';

const routes = [
  { href: '/', label: 'Home' },
  { href: '/spray', label: 'Spray' },
  { href: '/eligibility', label: 'Eligibility' },
  { href: '/quests', label: 'Quests' },
  { href: '/claim', label: 'Claim' },
  { href: '/admin', label: 'Admin' },
  { href: '/metrics', label: 'Metrics' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10 overflow-hidden">
            <Image
              src={LogoImage}
              alt="Universal Portal logo"
              fill
              sizes="40px"
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Universal Portal
            </span>
            <span className="text-base font-bold">Growth Campaign Engine</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
          {routes.map((route) => {
            const isActive =
              route.href === '/'
                ? pathname === '/'
                : pathname.startsWith(route.href);
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  'rounded-full px-4 py-2 transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                )}
              >
                {route.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/demo"
            className="hidden rounded-full border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted md:inline-flex"
          >
            Showtime
          </Link>
        </div>
      </div>
    </header>
  );
}
