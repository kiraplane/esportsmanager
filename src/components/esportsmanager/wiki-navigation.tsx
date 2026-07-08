import { Badge } from '@/components/ui/badge';
import { getHomeContent } from '@/data/esportsmanager/localized';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BadgeDollarSign,
  BookOpen,
  ChevronDown,
  Compass,
  Database,
  Gamepad2,
  Menu,
  RadioTower,
  ShieldCheck,
  Swords,
  Trophy,
  UsersRound,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import type { ReactNode } from 'react';

interface SectionLink {
  href: string;
  label: string;
}

interface WikiNavLink {
  href: string;
  label: string;
}

interface WikiNavGroup {
  title: string;
  icon: typeof BookOpen;
  links: WikiNavLink[];
}

const wikiNavRoutes = [
  {
    title: 'Start Here',
    icon: Gamepad2,
    routes: [
      '/',
      '/guides',
      '/guides/beginner-guide',
      '/release-date',
      '/demo',
      '/review',
    ],
  },
  {
    title: 'Platforms',
    icon: Compass,
    routes: ['/platforms', '/steam-deck', '/download'],
  },
  {
    title: 'Roster',
    icon: UsersRound,
    routes: [
      '/guides/create-organization',
      '/guides/scouting-transfers',
      '/guides/contracts-budget',
      '/guides/training-morale',
    ],
  },
  {
    title: 'Match Day',
    icon: Swords,
    routes: [
      '/best-tactics',
      '/guides/tournaments-majors',
      '/guides/sponsors-brand',
    ],
  },
  {
    title: 'Data',
    icon: Database,
    routes: ['/emdb', '/discord'],
  },
  {
    title: 'Official & Safety',
    icon: ShieldCheck,
    routes: ['/mods-and-cheats', '/disclaimer'],
  },
] as const;

export function getWikiNavGroups(locale?: Locale): WikiNavGroup[] {
  const routeLabels = getHomeContent(locale).routeLabels;

  return wikiNavRoutes.map((group) => ({
    title: group.title,
    icon: group.icon,
    links: group.routes.map((route) => ({
      href: route,
      label: routeLabels[route] ?? route,
    })),
  }));
}

function isCurrentPath(currentPath: string | undefined, href: string) {
  if (!currentPath) {
    return false;
  }

  return currentPath === href;
}

function WikiNavLinkItem({
  currentPath,
  href,
  label,
}: {
  currentPath?: string;
  href: string;
  label: string;
}) {
  const isActive = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group flex min-w-0 items-center justify-between gap-3 rounded-md border px-3 py-2 text-sm leading-6 transition',
        isActive
          ? 'border-[#59D6FF] bg-[#59D6FF] font-semibold text-[#031018]'
          : 'border-[#1F3A4A] bg-[#061018] text-[#BED3E0] hover:border-[#59D6FF] hover:bg-[#143047] hover:text-[#F4FAFF]'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-[#031018]' : 'text-[#59D6FF]'
        )}
      />
    </LocaleLink>
  );
}

export function WikiRouteSidebar({
  children,
  currentPath,
  locale,
  sectionLinks = [],
}: {
  children?: ReactNode;
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  const groups = getWikiNavGroups(locale);

  return (
    <aside className="sticky top-24 hidden w-[264px] shrink-0 self-start space-y-4 lg:block">
      <div className="space-y-4">
        <div className="rounded-lg border border-[#1F3A4A] bg-[#0E1B27] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#59D6FF]">
                Wiki Navigation
              </p>
              <h2 className="mt-1 font-display text-xl font-bold">
                Manager routes
              </h2>
            </div>
            <Compass className="size-5 text-[#74F2A7]" />
          </div>

          <div className="mt-4 space-y-4">
            {groups.map((group) => {
              const isGroupActive = group.links.some((link) =>
                isCurrentPath(currentPath, link.href)
              );

              return (
                <details
                  key={group.title}
                  open={isGroupActive}
                  className={cn(
                    'group rounded-md border p-3',
                    isGroupActive
                      ? 'border-[#59D6FF]/65 bg-[#59D6FF]/10'
                      : 'border-[#1F3A4A] bg-[#061018]'
                  )}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#F4FAFF] [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-2">
                      <group.icon className="size-4 shrink-0 text-[#59D6FF]" />
                      <span className="min-w-0 break-words">{group.title}</span>
                    </span>
                    <span className="ml-auto rounded-full bg-white/8 px-1.5 py-0.5 text-[10px] font-medium text-[#BED3E0]">
                      {group.links.length}
                    </span>
                    <ChevronDown className="size-4 shrink-0 text-[#74F2A7] transition group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 grid gap-2">
                    {group.links.map((link) => (
                      <WikiNavLinkItem
                        key={link.href}
                        currentPath={currentPath}
                        href={link.href}
                        label={link.label}
                      />
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </div>

        {sectionLinks.length > 0 ? (
          <details className="group rounded-lg border border-[#1F3A4A] bg-[#0E1B27] p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center gap-2">
                <BookOpen className="size-4 text-[#59D6FF]" />
                <span className="font-display text-lg font-bold">
                  On this page
                </span>
              </span>
              <ChevronDown className="size-4 shrink-0 text-[#74F2A7] transition group-open:rotate-180" />
            </summary>
            <div className="mt-3 grid gap-2 border-[#1F3A4A] border-t pt-3">
              {sectionLinks.slice(0, 6).map((section) => (
                <a
                  key={section.href}
                  href={section.href}
                  className="rounded-md border border-[#1F3A4A] bg-[#061018] px-3 py-2 text-sm leading-6 text-[#BED3E0] transition hover:border-[#59D6FF] hover:bg-[#143047] hover:text-[#F4FAFF]"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </details>
        ) : null}

        {children}
      </div>
    </aside>
  );
}

export function MobileWikiNav({
  currentPath,
  locale,
  sectionLinks = [],
}: {
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  const groups = getWikiNavGroups(locale);

  return (
    <details className="group rounded-lg border border-[#1F3A4A] bg-[#0E1B27] p-4 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
        <span className="flex min-w-0 items-center gap-2 font-display text-lg font-bold">
          <Menu className="size-5 shrink-0 text-[#59D6FF]" />
          Wiki Menu
        </span>
        <Badge className="bg-[#59D6FF] text-[#031018]">
          {groups.reduce((total, group) => total + group.links.length, 0)} links
        </Badge>
      </summary>

      {sectionLinks.length > 0 ? (
        <div className="mt-4 border-[#1F3A4A] border-t pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#74F2A7]">
            On this page
          </p>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {sectionLinks.slice(0, 6).map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="shrink-0 rounded-md border border-[#1F3A4A] bg-[#061018] px-3 py-2 text-sm text-[#BED3E0]"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-4 grid gap-4 border-[#1F3A4A] border-t pt-4">
        {groups.map((group) => {
          const isGroupActive = group.links.some((link) =>
            isCurrentPath(currentPath, link.href)
          );

          return (
            <details
              key={group.title}
              open={isGroupActive}
              className="group rounded-md border border-[#1F3A4A] bg-[#061018] p-3"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#F4FAFF] [&::-webkit-details-marker]:hidden">
                <span className="flex min-w-0 items-center gap-2">
                  <group.icon className="size-4 shrink-0 text-[#59D6FF]" />
                  <span className="min-w-0 break-words">{group.title}</span>
                </span>
                <span className="ml-auto rounded-full bg-white/8 px-1.5 py-0.5 text-[10px] font-medium text-[#BED3E0]">
                  {group.links.length}
                </span>
                <ChevronDown className="size-4 shrink-0 text-[#74F2A7] transition group-open:rotate-180" />
              </summary>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {group.links.map((link) => (
                  <WikiNavLinkItem
                    key={link.href}
                    currentPath={currentPath}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </details>
  );
}

export function QuickWikiLinks({
  className,
  links,
  locale,
}: {
  className?: string;
  links?: ReadonlyArray<readonly [string, string]>;
  locale?: Locale;
}) {
  const routeLabels = getHomeContent(locale).routeLabels;
  const defaultRoutes = [
    { href: '/guides/beginner-guide', label: 'Beginner', icon: BookOpen },
    { href: '/best-tactics', label: 'Tactics', icon: Swords },
    { href: '/guides/scouting-transfers', label: 'Scouting', icon: UsersRound },
    {
      href: '/guides/contracts-budget',
      label: 'Contracts',
      icon: BadgeDollarSign,
    },
    { href: '/guides/tournaments-majors', label: 'Tournaments', icon: Trophy },
    { href: '/emdb', label: 'EMDB', icon: Database },
    { href: '/discord', label: 'Discord', icon: RadioTower },
    { href: '/download', label: 'Download', icon: ShieldCheck },
  ];
  const quickRoutes = links
    ? links.map(([label, href]) => ({ href, label, icon: BookOpen }))
    : defaultRoutes;

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {quickRoutes.map((route) =>
        route.href.startsWith('http') ? (
          <a
            key={route.href}
            href={route.href}
            target="_blank"
            rel="noreferrer"
            aria-label={route.label}
            className="inline-flex h-auto items-center gap-1.5 rounded-md border border-[#1F3A4A] bg-[#061018]/80 px-2.5 py-1.5 text-[#F4FAFF] text-xs transition hover:border-[#59D6FF] hover:bg-[#143047] sm:text-sm"
          >
            <route.icon className="size-3.5 shrink-0 text-[#59D6FF]" />
            {route.label}
          </a>
        ) : (
          <LocaleLink
            key={route.href}
            href={route.href}
            aria-label={routeLabels[route.href] ?? route.label}
            className="inline-flex h-auto items-center gap-1.5 rounded-md border border-[#1F3A4A] bg-[#061018]/80 px-2.5 py-1.5 text-[#F4FAFF] text-xs transition hover:border-[#59D6FF] hover:bg-[#143047] sm:text-sm"
          >
            <route.icon className="size-3.5 shrink-0 text-[#59D6FF]" />
            {route.label}
          </LocaleLink>
        )
      )}
    </div>
  );
}
