import Container from '@/components/layout/container';
import { FaqSection } from '@/components/orbofcreation/faq-section';
import {
  QuickWikiLinks,
  WikiRouteSidebar,
} from '@/components/orbofcreation/wiki-navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
  getLocalizedSiteDescription,
} from '@/data/orbofcreation/localized';
import { siteFacts } from '@/data/orbofcreation/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BadgeAlert,
  CalendarClock,
  ExternalLink,
  FlaskConical,
  Gamepad2,
  ShieldAlert,
  Wand2,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const keywordLinks = [
  ['Orb of Creation', '/'],
  ['Orb of Creation wiki', '/'],
  ['Orb of Creation guide', '/guides'],
  ['Orb of Creation play online', '/play-online'],
  ['Orb of Creation beginner guide', '/guides/beginner-guide'],
  ['Orb of Creation spells', '/spells'],
  ['Orb of Creation research', '/research'],
  ['Orb of Creation rituals guide', '/rituals'],
  ['Orb of Creation alchemy', '/guides/alchemy-druidry'],
  ['Orb of Creation New Game+', '/guides/new-game-plus'],
  ['Orb of Creation Steam', '/steam'],
  ['Orb of Creation itch.io', '/itch-io'],
  ['Orb of Creation Discord', '/discord'],
  ['Orb of Creation mobile', '/mobile'],
] as const;

const beginnerJourney = [
  {
    title: 'Launch the browser build',
    href: '/play-online',
    body: 'Use the self-hosted itch WebGL build for a fast first session.',
  },
  {
    title: 'Read the beginner route',
    href: '/guides/beginner-guide',
    body: 'Learn how to solve one bottleneck before buying broadly.',
  },
  {
    title: 'Tune spells and research',
    href: '/spells',
    body: 'Treat spells, recharge, power, and research as one loop.',
  },
  {
    title: 'Plan larger systems',
    href: '/rituals',
    body: 'Move into rituals, alchemy, druidry, and late commitments.',
  },
  {
    title: 'Choose the right version',
    href: '/steam',
    body: 'Use Steam 1.0 for the complete release and New Game+.',
  },
] as const;

const coreModules = [
  {
    title: 'Play and Version',
    icon: Gamepad2,
    body: 'Start in the browser, then decide whether the complete Steam 1.0 release is the better long-run home.',
    links: [
      ['Play online', '/play-online'],
      ['Steam 1.0', '/steam'],
      ['itch.io build', '/itch-io'],
    ],
  },
  {
    title: 'Spells and Research',
    icon: Wand2,
    body: 'Connect spell power, recharge, concepts, and expert research instead of clearing a flat checklist.',
    links: [
      ['Spells guide', '/spells'],
      ['Research guide', '/research'],
      ['Beginner guide', '/guides/beginner-guide'],
    ],
  },
  {
    title: 'Progression Systems',
    icon: FlaskConical,
    body: 'Use alchemy, druidry, rituals, and New Game+ when the early spell loop starts asking for bigger planning.',
    links: [
      ['Alchemy and Druidry', '/guides/alchemy-druidry'],
      ['Rituals', '/rituals'],
      ['New Game+', '/guides/new-game-plus'],
    ],
  },
  {
    title: 'Official and Safety',
    icon: ShieldAlert,
    body: 'Keep installs and community links official, especially when searches drift toward APK mirrors or save editors.',
    links: [
      ['Download guide', '/download'],
      ['Discord', '/discord'],
      ['Mobile safety', '/mobile'],
    ],
  },
] as const;

const homeTrailer = {
  title: 'Orb of Creation 1.0 official trailer',
  embedUrl: 'https://www.youtube-nocookie.com/embed/o1E1gSOUpPs?rel=0&hl=en',
  watchUrl: 'https://www.youtube.com/watch?v=o1E1gSOUpPs',
};

export function OrbHomePage({ locale }: { locale?: Locale }) {
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
        logo: `${siteFacts.domain}/orbofcreation/orb-of-creation-og.png`,
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        author: {
          '@type': 'Organization',
          name: siteFacts.creator,
        },
        applicationCategory: 'Game',
        genre: ['Incremental', 'Puzzle', 'Strategy', 'Idle'],
        gamePlatform: ['Windows', 'macOS', 'Web Browser'],
        url: siteFacts.officialSteamUrl,
        sameAs: [siteFacts.officialSteamUrl, siteFacts.officialItchUrl],
      },
      {
        '@type': 'VideoObject',
        '@id': `${siteFacts.domain}/#official-trailer`,
        name: homeTrailer.title,
        thumbnailUrl: ['https://i.ytimg.com/vi/o1E1gSOUpPs/hq720.jpg'],
        uploadDate: '2026-06-23',
        url: homeTrailer.watchUrl,
        embedUrl: homeTrailer.embedUrl,
        author: {
          '@type': 'Organization',
          name: siteFacts.creator,
        },
      },
    ],
  };

  return (
    <div className="bg-[#111915] text-[#F3EDE1]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#4B6B66] border-b">
        <Image
          src="/orbofcreation/screenshots/orb-of-creation-spells.jpg"
          alt="Orb of Creation spellbook interface"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#111915]/82" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[#111915]/72" />

        <Container className="relative grid grid-cols-1 items-center gap-8 px-4 py-8 md:py-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:py-12 xl:grid-cols-[minmax(0,1fr)_520px]">
          <div className="min-w-0">
            <h1 className="max-w-4xl font-display text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              {content.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#CDEAE7] md:text-lg">
              {content.intro}
            </p>
            <div className="mt-6 grid max-w-full grid-cols-1 gap-3 sm:flex sm:flex-wrap">
              <Button
                asChild
                className="h-auto min-w-0 whitespace-normal bg-[#FFB68A] text-left text-[#33241B] leading-5 hover:bg-[#FFD0A8]"
              >
                <LocaleLink href="/guides/beginner-guide">
                  <span className="min-w-0 break-words">
                    {content.primaryCta}
                  </span>
                  <ArrowRight className="size-4 shrink-0" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto min-w-0 whitespace-normal border-white/60 bg-white/10 text-left text-white leading-5 hover:bg-white/20"
              >
                <LocaleLink href="/play-online">
                  <Gamepad2 className="size-4 shrink-0" />
                  {content.playCta}
                </LocaleLink>
              </Button>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-[#CDEAE7]/85">
              {content.scopeNote}
            </p>
            <div className="mt-4">
              <QuickWikiLinks locale={locale} />
            </div>
          </div>

          <aside
            aria-label="Orb of Creation official trailer"
            className="min-w-0 overflow-hidden rounded-lg border border-white/15 bg-[#1B2630]/88 shadow-2xl shadow-black/25 backdrop-blur"
          >
            <div className="aspect-video bg-black">
              <iframe
                className="block h-full w-full"
                src={homeTrailer.embedUrl}
                title={homeTrailer.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </aside>
        </Container>
      </section>

      <Container className="px-4 py-12">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <div className="min-w-0 space-y-12">
            <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-[#4B6B66] bg-[#1B2630] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFB68A]">
                      Current game status
                    </p>
                    <h2 className="mt-1 font-display text-xl font-bold text-white">
                      Official snapshot
                    </h2>
                  </div>
                  <a
                    href={siteFacts.officialSteamUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#CDEAE7] text-sm hover:text-[#FFB68A]"
                  >
                    Steam <ExternalLink className="size-3.5" />
                  </a>
                </div>
                <div className="mt-4 space-y-2">
                  {gameFacts.slice(0, 3).map((fact) => (
                    <div
                      key={fact.label}
                      className="grid grid-cols-[10px_minmax(0,1fr)] gap-3 rounded-md px-2 py-2"
                    >
                      <span className="mt-2 size-2 rounded-full bg-[#97CBDB]" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm text-white">
                          {fact.label}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-[#CDEAE7] text-xs leading-5">
                          {fact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#4B6B66] bg-[#1B2630] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#97CBDB]">
                  Start here
                </p>
                <h2 className="mt-1 font-display text-xl font-bold text-white">
                  Your first Orb of Creation run
                </h2>
                <div className="mt-4 space-y-2">
                  {beginnerJourney.map((step, index) => (
                    <LocaleLink
                      key={step.href}
                      href={step.href}
                      className="group grid grid-cols-[30px_minmax(0,1fr)_auto] gap-3 rounded-md border border-transparent px-2 py-2 transition hover:border-[#FFB68A]/45 hover:bg-[#263A34]"
                    >
                      <span className="flex size-7 items-center justify-center rounded-full border border-[#4B6B66] bg-[#111915] text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold text-sm text-white group-hover:text-[#FFB68A]">
                          {step.title}
                        </span>
                        <span className="mt-0.5 line-clamp-1 block text-[#CDEAE7] text-xs leading-5">
                          {step.body}
                        </span>
                      </span>
                      <ArrowRight className="mt-1 size-4 shrink-0 text-[#FFB68A]" />
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 gap-8 lg:grid-cols-[340px_minmax(0,1fr)]">
              <div>
                <Badge className="bg-[#FFB68A] text-[#33241B]">
                  Quick routes
                </Badge>
                <h2 className="mt-4 font-display text-3xl font-black text-white">
                  Choose the Orb of Creation page you need next.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#CDEAE7]">
                  The wiki is shaped around play online, Steam 1.0, spells,
                  research, rituals, alchemy, New Game+, official links, and
                  safe platform questions.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {keywordLinks.map(([label, href]) => (
                  <Button
                    key={label}
                    asChild
                    variant="outline"
                    className="h-auto whitespace-normal border-[#4B6B66] bg-[#1B2630] px-3 py-2 text-left text-[#F3EDE1] hover:border-[#FFB68A] hover:bg-[#263A34]"
                  >
                    <LocaleLink href={href}>{label}</LocaleLink>
                  </Button>
                ))}
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <Badge className="bg-[#97CBDB] text-[#10212A]">
                    Latest guides
                  </Badge>
                  <h2 className="mt-4 font-display text-3xl font-black text-white">
                    Start with these progression decisions
                  </h2>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#4B6B66] bg-[#1B2630] text-[#F3EDE1] hover:bg-[#263A34]"
                >
                  <LocaleLink href="/guides">
                    {content.allGuidesButton}
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
                {featuredGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={guide.path}
                    className="group overflow-hidden rounded-lg border border-[#4B6B66] bg-[#1B2630] transition hover:-translate-y-0.5 hover:border-[#FFB68A] hover:shadow-lg hover:shadow-[#FFB68A]/10"
                  >
                    <div className="relative aspect-video border-[#4B6B66] border-b">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-[#FFB68A] text-[#33241B]">
                        {guide.category}
                      </Badge>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-2xl font-bold text-white">
                        {guide.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#CDEAE7]">
                        {guide.summary}
                      </p>
                    </div>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {coreModules.map((module) => {
                const Icon = module.icon;

                return (
                  <article
                    key={module.title}
                    className="rounded-lg border border-[#4B6B66] bg-[#1B2630] p-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 items-center justify-center rounded-md bg-[#111915] text-[#FFB68A]">
                        <Icon className="size-5" />
                      </div>
                      <h2 className="font-display text-2xl font-bold text-white">
                        {module.title}
                      </h2>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#CDEAE7]">
                      {module.body}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {module.links.map(([label, href]) => (
                        <Button
                          key={href}
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-[#4B6B66] bg-[#111915] text-[#F3EDE1] hover:border-[#FFB68A] hover:bg-[#263A34]"
                        >
                          <LocaleLink href={href}>{label}</LocaleLink>
                        </Button>
                      ))}
                    </div>
                  </article>
                );
              })}
            </section>

            <section className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="rounded-lg border border-[#4B6B66] bg-[#1B2630] p-6">
                <div className="flex items-center gap-3">
                  <CalendarClock className="size-5 text-[#97CBDB]" />
                  <h2 className="font-display text-2xl font-bold text-white">
                    Player questions covered
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#CDEAE7]">
                  If you are deciding whether to play in the browser, continue
                  on Steam, join Discord, or check mobile safety, use these
                  status and setup pages before hunting for unsafe mirrors.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    ['Play online', '/play-online'],
                    ['Steam 1.0', '/steam'],
                    ['Download guide', '/download'],
                    ['Discord', '/discord'],
                    ['Mobile safety', '/mobile'],
                    ['Disclaimer', '/disclaimer'],
                  ].map(([label, href]) => (
                    <Button
                      key={href}
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-[#4B6B66] bg-[#111915] text-[#F3EDE1] hover:border-[#97CBDB] hover:bg-[#263A34]"
                    >
                      <LocaleLink href={href}>{label}</LocaleLink>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#FFB68A]/55 bg-[#2F2532] p-6">
                <div className="flex items-center gap-3">
                  <BadgeAlert className="size-5 text-[#FFB68A]" />
                  <h2 className="font-display text-2xl font-bold text-white">
                    Version clarity
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#FFDCC4]">
                  Browser play is the official itch WebGL Dev 0.5.4 build. Steam
                  is the current 1.0 release for New Game+, randomized
                  discovery, and current balance.
                </p>
                <Button
                  asChild
                  className="mt-5 bg-[#FFB68A] text-[#33241B] hover:bg-[#FFD0A8]"
                >
                  <LocaleLink href="/steam">Read Steam 1.0 notes</LocaleLink>
                </Button>
              </div>
            </section>

            <FaqSection
              className="border-[#4B6B66] bg-[#1B2630]"
              items={content.faq}
            />
          </div>

          <WikiRouteSidebar currentPath="/" locale={locale} />
        </div>
      </Container>
    </div>
  );
}
