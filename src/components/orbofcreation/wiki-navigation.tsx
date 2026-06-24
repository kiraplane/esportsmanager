import { Badge } from '@/components/ui/badge';
import { getHomeContent } from '@/data/orbofcreation/localized';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  Compass,
  Gamepad2,
  Menu,
  ShieldCheck,
  Wand2,
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
    routes: ['/', '/play-online', '/guides/beginner-guide', '/guides'],
  },
  {
    title: 'Core Systems',
    icon: Wand2,
    routes: [
      '/spells',
      '/research',
      '/rituals',
      '/guides/alchemy-druidry',
      '/guides/new-game-plus',
    ],
  },
  {
    title: 'Official & Safety',
    icon: ShieldCheck,
    routes: ['/steam', '/download', '/itch-io', '/discord', '/mobile'],
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
          ? 'border-[#FFB68A] bg-[#FFB68A] font-semibold text-[#33241B]'
          : 'border-[#4B6B66] bg-[#111915] text-[#CDEAE7] hover:border-[#FFB68A] hover:bg-[#263A34] hover:text-[#F3EDE1]'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-[#33241B]' : 'text-[#FFB68A]'
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
    <aside className="hidden w-[264px] shrink-0 space-y-4 lg:block">
      <div className="sticky top-24 space-y-4">
        <div className="rounded-lg border border-[#4B6B66] bg-[#1B2630] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FFB68A]">
                Wiki Navigation
              </p>
              <h2 className="mt-1 font-display text-xl font-bold">
                Orb routes
              </h2>
            </div>
            <Compass className="size-5 text-[#97CBDB]" />
          </div>

          <div className="mt-4 space-y-4">
            {groups.map((group) => (
              <div key={group.title}>
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#F3EDE1]">
                  <group.icon className="size-4 text-[#FFB68A]" />
                  {group.title}
                </div>
                <div className="grid gap-2">
                  {group.links.map((link) => (
                    <WikiNavLinkItem
                      key={link.href}
                      currentPath={currentPath}
                      href={link.href}
                      label={link.label}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {sectionLinks.length > 0 ? (
          <div className="rounded-lg border border-[#4B6B66] bg-[#1B2630] p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="size-4 text-[#FFB68A]" />
              <h2 className="font-display text-lg font-bold">On this page</h2>
            </div>
            <div className="mt-3 grid gap-2">
              {sectionLinks.slice(0, 6).map((section) => (
                <a
                  key={section.href}
                  href={section.href}
                  className="rounded-md border border-[#4B6B66] bg-[#111915] px-3 py-2 text-sm leading-6 text-[#CDEAE7] transition hover:border-[#FFB68A] hover:bg-[#263A34] hover:text-[#F3EDE1]"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
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
    <details className="group rounded-lg border border-[#4B6B66] bg-[#1B2630] p-4 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
        <span className="flex min-w-0 items-center gap-2 font-display text-lg font-bold">
          <Menu className="size-5 shrink-0 text-[#FFB68A]" />
          Wiki Menu
        </span>
        <Badge className="bg-[#FFB68A] text-[#33241B]">
          {groups.reduce((total, group) => total + group.links.length, 0)} links
        </Badge>
      </summary>

      {sectionLinks.length > 0 ? (
        <div className="mt-4 border-[#4B6B66] border-t pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#97CBDB]">
            On this page
          </p>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {sectionLinks.slice(0, 6).map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="shrink-0 rounded-md border border-[#4B6B66] bg-[#111915] px-3 py-2 text-sm text-[#CDEAE7]"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-4 grid gap-4 border-[#4B6B66] border-t pt-4">
        {groups.map((group) => (
          <div key={group.title}>
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#F3EDE1]">
              <group.icon className="size-4 text-[#FFB68A]" />
              {group.title}
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {group.links.map((link) => (
                <WikiNavLinkItem
                  key={link.href}
                  currentPath={currentPath}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}
