import { FaqSection } from '@/components/esportsmanager/faq-section';
import {
  QuickWikiLinks,
  WikiRouteSidebar,
} from '@/components/esportsmanager/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
  getLocalizedSiteDescription,
} from '@/data/esportsmanager/localized';
import { siteFacts } from '@/data/esportsmanager/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  BookOpen,
  CalendarClock,
  Database,
  Download,
  Gamepad2,
  RadioTower,
  ShieldCheck,
  Swords,
  Trophy,
  UsersRound,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const quickRouteGroups = [
  {
    title: 'Start',
    icon: BookOpen,
    body: 'Buy, demo, and first-save routing.',
    links: [
      ['Beginner', '/guides/beginner-guide'],
      ['Release', '/release-date'],
      ['Demo', '/demo'],
      ['Review', '/review'],
    ],
  },
  {
    title: 'Roster',
    icon: UsersRound,
    body: 'Build the team without breaking wages.',
    links: [
      ['Create org', '/guides/create-organization'],
      ['Scouting', '/guides/scouting-transfers'],
      ['Contracts', '/guides/contracts-budget'],
      ['Training', '/guides/training-morale'],
    ],
  },
  {
    title: 'Match day',
    icon: Swords,
    body: 'Prepare maps, tactics, and events.',
    links: [
      ['Best tactics', '/best-tactics'],
      ['Tournaments', '/guides/tournaments-majors'],
      ['Sponsors', '/guides/sponsors-brand'],
      ['Steam Deck', '/steam-deck'],
    ],
  },
  {
    title: 'Sources',
    icon: Database,
    body: 'Stay safe around data and communities.',
    links: [
      ['EMDB', '/emdb'],
      ['Discord', '/discord'],
      ['Download', '/download'],
      ['Safety', '/mods-and-cheats'],
    ],
  },
] as const;

const beginnerJourney = [
  {
    title: 'Confirm the version',
    href: '/release-date',
    body: 'Steam is live now; price, demo, reviews, and achievements change there first.',
  },
  {
    title: 'Try the demo deliberately',
    href: '/demo',
    body: 'Test menus, contracts, staff, sponsors, scouting, and one match before buying.',
  },
  {
    title: 'Create a stable org',
    href: '/guides/create-organization',
    body: 'Choose difficulty, keep the roster manageable, hire information-first staff, and avoid vanity spending.',
  },
  {
    title: 'Solve roster gaps',
    href: '/guides/scouting-transfers',
    body: 'Scout by role, wage, calendar, morale risk, and contract length instead of star name.',
  },
  {
    title: 'Prepare match day',
    href: '/best-tactics',
    body: 'Train a map pool, protect morale, and change one tactical variable at a time.',
  },
] as const;

const coreModules = [
  {
    title: 'Steam, Demo, And Platforms',
    icon: Gamepad2,
    body: 'Use official sources for launch status, price, demo access, mobile roadmap, and Steam Deck comfort.',
    links: [
      ['Release date', '/release-date'],
      ['Demo', '/demo'],
      ['Platforms', '/platforms'],
      ['Steam Deck', '/steam-deck'],
    ],
  },
  {
    title: 'Roster And Contracts',
    icon: UsersRound,
    body: 'Build a lineup that your budget, staff, and training plan can actually support.',
    links: [
      ['Create org', '/guides/create-organization'],
      ['Scouting', '/guides/scouting-transfers'],
      ['Contracts', '/guides/contracts-budget'],
      ['Training', '/guides/training-morale'],
    ],
  },
  {
    title: 'Tactics And Competition',
    icon: Trophy,
    body: 'Treat tactics as roster fit plus map prep, then enter tournaments when the calendar and morale line up.',
    links: [
      ['Best tactics', '/best-tactics'],
      ['Tournaments', '/guides/tournaments-majors'],
      ['Sponsors', '/guides/sponsors-brand'],
      ['Review', '/review'],
    ],
  },
  {
    title: 'Database And Safety',
    icon: ShieldCheck,
    body: 'Use EMDB and official links without falling for fake mobile downloads, cracks, or lookalike sign-in pages.',
    links: [
      ['EMDB', '/emdb'],
      ['Download', '/download'],
      ['Discord', '/discord'],
      ['Mods safety', '/mods-and-cheats'],
    ],
  },
] as const;

const homeTrailer = {
  title: 'Esports Manager 2026 launch trailer',
  embedUrl: 'https://www.youtube-nocookie.com/embed/gxlDTRtBvOk?rel=0&hl=en',
  watchUrl: 'https://www.youtube.com/watch?v=gxlDTRtBvOk',
  thumbnailUrl: 'https://i.ytimg.com/vi/gxlDTRtBvOk/hq720.jpg',
};

export function EsportsManagerHomePage({ locale }: { locale?: Locale }) {
  const content = getHomeContent(locale);
  const featuredGuides = getLocalizedFeaturedGuides(locale);
  const gameFacts = getLocalizedGameFacts(locale);
  const siteDescription = getLocalizedSiteDescription(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteFacts.domain}/#website`,
        name: siteFacts.siteName,
        url: siteFacts.domain,
        description: siteDescription,
      },
      {
        '@type': 'Organization',
        '@id': `${siteFacts.domain}/#organization`,
        name: siteFacts.siteName,
        url: siteFacts.domain,
        logo: `${siteFacts.domain}/android-chrome-512x512.png`,
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        author: {
          '@type': 'Organization',
          name: siteFacts.creator,
        },
        publisher: {
          '@type': 'Organization',
          name: siteFacts.publisher,
        },
        applicationCategory: 'Game',
        genre: ['Simulation', 'Strategy', 'Sports', 'Esports management'],
        gamePlatform: ['Windows', 'Steam', 'Steam Deck'],
        url: siteFacts.officialSteamUrl,
        sameAs: [
          siteFacts.officialWebsiteUrl,
          siteFacts.officialSteamUrl,
          siteFacts.officialDiscordUrl,
          siteFacts.officialRedditUrl,
          siteFacts.officialTwitterUrl,
          siteFacts.officialYouTubeUrl,
          siteFacts.emdbUrl,
        ],
      },
      {
        '@type': 'VideoObject',
        name: homeTrailer.title,
        thumbnailUrl: homeTrailer.thumbnailUrl,
        embedUrl: homeTrailer.embedUrl,
        uploadDate: '2026-07-06',
      },
    ],
  };

  return (
    <div className="bg-[#061018] text-[#F4FAFF]">
      <JsonLd data={jsonLd} />
      <section className="border-[#1F3A4A] border-b">
        <Container className="px-4 py-8 lg:py-10">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.76fr)]">
            <div className="min-w-0">
              <Badge className="bg-[#59D6FF] text-[#031018]">
                {content.badge}
              </Badge>
              <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-tight md:text-6xl">
                {content.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#BED3E0] md:text-lg">
                {content.intro}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-auto bg-[#59D6FF] px-4 py-3 text-[#031018] hover:bg-[#74F2A7]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    {content.primaryCta}
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto border-[#FF8A3D] bg-transparent px-4 py-3 text-[#F4FAFF] hover:bg-[#FF8A3D] hover:text-[#031018]"
                >
                  <LocaleLink href="/best-tactics">
                    {content.secondaryCta}
                  </LocaleLink>
                </Button>
              </div>
              <QuickWikiLinks
                className="mt-5"
                links={[
                  ['Steam', siteFacts.officialSteamUrl],
                  ['Demo', '/demo'],
                  ['EMDB', '/emdb'],
                  ['Discord', '/discord'],
                  ['Review', '/review'],
                  ['Safe links', '/download'],
                ]}
              />
              <p className="mt-4 text-sm leading-6 text-[#BED3E0]">
                {content.scopeNote}
              </p>
            </div>

            <div className="min-w-0 overflow-hidden rounded-lg border border-[#1F3A4A] bg-[#0E1B27] shadow-2xl shadow-black/30">
              <div className="relative aspect-video bg-black">
                <Image
                  src={homeTrailer.thumbnailUrl}
                  alt={homeTrailer.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={homeTrailer.embedUrl}
                  title={homeTrailer.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center justify-between gap-3 border-[#1F3A4A] border-t px-4 py-3 text-sm text-[#BED3E0]">
                <span>Official trailer and gameplay positioning</span>
                <a
                  href={homeTrailer.watchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#59D6FF] underline underline-offset-4"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8 lg:py-10">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-8">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {quickRouteGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.title}
                    className="rounded-lg border border-[#1F3A4A] bg-[#0E1B27] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-9 items-center justify-center rounded-md bg-[#59D6FF] text-[#031018]">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <h2 className="font-display text-xl font-bold">
                          {group.title}
                        </h2>
                        <p className="text-xs text-[#BED3E0]">{group.body}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.links.map(([label, href]) => (
                        <LocaleLink
                          key={href}
                          href={href}
                          className="rounded-md border border-[#1F3A4A] bg-[#061018] px-2.5 py-1.5 text-sm text-[#F4FAFF] transition hover:border-[#59D6FF] hover:text-[#59D6FF]"
                        >
                          {label}
                        </LocaleLink>
                      ))}
                    </div>
                  </div>
                );
              })}
            </section>

            <section className="rounded-lg border border-[#1F3A4A] bg-[#0E1B27] p-5 md:p-6">
              <div className="flex items-start gap-3">
                <RadioTower className="mt-1 size-5 shrink-0 text-[#74F2A7]" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#59D6FF]">
                    {content.siteShapeEyebrow}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    {content.siteShapeTitle}
                  </h2>
                  <p className="mt-3 max-w-4xl text-sm leading-7 text-[#BED3E0]">
                    {content.siteShapeBody}
                  </p>
                </div>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-5">
              {beginnerJourney.map((item, index) => (
                <LocaleLink
                  key={item.href}
                  href={item.href}
                  className="group rounded-lg border border-[#1F3A4A] bg-[#0E1B27] p-4 transition hover:border-[#59D6FF] hover:bg-[#102638] md:col-span-1"
                >
                  <span className="inline-flex size-7 items-center justify-center rounded-md bg-[#FF8A3D] text-sm font-bold text-[#031018]">
                    {index + 1}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-bold">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#BED3E0]">
                    {item.body}
                  </p>
                </LocaleLink>
              ))}
            </section>

            <section className="grid gap-4 lg:grid-cols-2">
              {coreModules.map((module) => {
                const Icon = module.icon;
                return (
                  <div
                    key={module.title}
                    className="rounded-lg border border-[#1F3A4A] bg-[#0E1B27] p-5"
                  >
                    <div className="flex gap-3">
                      <Icon className="mt-1 size-5 shrink-0 text-[#74F2A7]" />
                      <div>
                        <h2 className="font-display text-2xl font-bold">
                          {module.title}
                        </h2>
                        <p className="mt-2 text-sm leading-7 text-[#BED3E0]">
                          {module.body}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {module.links.map(([label, href]) => (
                        <LocaleLink
                          key={href}
                          href={href}
                          className="rounded-md border border-[#1F3A4A] bg-[#061018] px-3 py-2 text-sm text-[#F4FAFF] transition hover:border-[#59D6FF] hover:text-[#59D6FF]"
                        >
                          {label}
                        </LocaleLink>
                      ))}
                    </div>
                  </div>
                );
              })}
            </section>

            <section className="rounded-lg border border-[#1F3A4A] bg-[#0E1B27] p-5 md:p-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#59D6FF]">
                    {content.coreGuidesEyebrow}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    {content.coreGuidesTitle}
                  </h2>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#1F3A4A] bg-[#061018] text-[#F4FAFF] hover:border-[#59D6FF] hover:bg-[#143047]"
                >
                  <LocaleLink href="/guides">
                    {content.allGuidesButton}
                  </LocaleLink>
                </Button>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {featuredGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={guide.path}
                    className="group overflow-hidden rounded-lg border border-[#1F3A4A] bg-[#061018] transition hover:border-[#59D6FF]"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 1280px) 300px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <Badge className="bg-[#74F2A7] text-[#031018]">
                        {guide.category}
                      </Badge>
                      <h3 className="mt-3 font-display text-xl font-bold">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#BED3E0]">
                        {guide.summary}
                      </p>
                    </div>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="grid gap-4">
              <div className="rounded-lg border border-[#1F3A4A] bg-[#0E1B27] p-5">
                <div className="flex gap-3">
                  <BarChart3 className="mt-1 size-5 shrink-0 text-[#59D6FF]" />
                  <div className="min-w-0 flex-1">
                    <h2 className="font-display text-2xl font-bold">
                      {content.currentFactsTitle}
                    </h2>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {gameFacts.map((fact) => (
                        <div
                          key={fact.label}
                          className="rounded-md border border-[#1F3A4A] bg-[#061018] p-3"
                        >
                          <p className="text-sm font-semibold text-[#74F2A7]">
                            {fact.label}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#BED3E0]">
                            {fact.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-[#1F3A4A] bg-[#0E1B27] p-5">
                <div className="flex gap-3">
                  <BadgeDollarSign className="mt-1 size-5 shrink-0 text-[#FF8A3D]" />
                  <div className="min-w-0 flex-1">
                    <h2 className="font-display text-2xl font-bold">
                      {content.findPageTitle}
                    </h2>
                    <div className="mt-4 grid gap-2 md:grid-cols-2">
                      {content.coreRouteItems.map((item) =>
                        item.route === 'none' ? null : (
                          <LocaleLink
                            key={`${item.keyword}-${item.route}`}
                            href={item.route}
                            className="rounded-md border border-[#1F3A4A] bg-[#061018] p-3 text-sm transition hover:border-[#59D6FF]"
                          >
                            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                              <span className="font-semibold text-[#F4FAFF]">
                                {item.keyword}
                              </span>
                              <span className="text-[#59D6FF]">
                                {item.label}
                              </span>
                            </span>
                            <p className="mt-1 leading-6 text-[#BED3E0]">
                              {item.intent}
                            </p>
                          </LocaleLink>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <FaqSection items={content.faq} />
          </main>

          <WikiRouteSidebar currentPath="/" locale={locale}>
            <div className="rounded-lg border border-[#1F3A4A] bg-[#0E1B27] p-4">
              <div className="flex items-center gap-2">
                <CalendarClock className="size-4 text-[#74F2A7]" />
                <h2 className="font-display text-lg font-bold">
                  Launch Status
                </h2>
              </div>
              <p className="mt-2 text-sm leading-6 text-[#BED3E0]">
                Out now on Steam. Mobile and additional platforms are roadmap
                watch items until official store links appear.
              </p>
              <Button
                asChild
                className="mt-4 w-full bg-[#59D6FF] text-[#031018] hover:bg-[#74F2A7]"
              >
                <a
                  href={siteFacts.officialSteamUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download className="size-4" />
                  Steam page
                </a>
              </Button>
            </div>
          </WikiRouteSidebar>
        </div>
      </Container>
    </div>
  );
}
