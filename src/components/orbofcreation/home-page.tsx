import {
  AdsterraAdFrame,
  AdsterraNativeBanner,
} from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { FaqSection } from '@/components/orbofcreation/faq-section';
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
  BookOpen,
  Compass,
  Download,
  FlaskConical,
  Gamepad2,
  MessageCircle,
  Sparkles,
  Wand2,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const primaryIcons = {
  play: Gamepad2,
  beginner: BookOpen,
  spells: Wand2,
  research: Compass,
  steam: Sparkles,
} as const;

const secondaryIcons = {
  rituals: Sparkles,
  alchemy: FlaskConical,
  download: Download,
  discord: MessageCircle,
} as const;

export function OrbHomePage({ locale }: { locale?: Locale }) {
  const content = getHomeContent(locale);
  const featuredGuides = getLocalizedFeaturedGuides(locale);
  const gameFacts = getLocalizedGameFacts(locale);
  const siteDescription = getLocalizedSiteDescription(locale);

  const systemLinks = [
    {
      ...content.primaryLinks.spells,
      href: '/spells',
      icon: primaryIcons.spells,
    },
    {
      ...content.primaryLinks.research,
      href: '/research',
      icon: primaryIcons.research,
    },
    {
      ...content.primaryLinks.steam,
      href: '/steam',
      icon: primaryIcons.steam,
    },
  ];

  const secondaryLinks = [
    {
      ...content.secondaryLinks.rituals,
      href: '/rituals',
      icon: secondaryIcons.rituals,
    },
    {
      ...content.secondaryLinks.alchemy,
      href: '/guides/alchemy-druidry',
      icon: secondaryIcons.alchemy,
    },
    {
      ...content.secondaryLinks.download,
      href: '/download',
      icon: secondaryIcons.download,
    },
    {
      ...content.secondaryLinks.discord,
      href: '/discord',
      icon: secondaryIcons.discord,
    },
  ];

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
    ],
  };

  return (
    <div className="bg-[#111915] text-[#F3EDE1]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#4B6B66] border-b bg-[linear-gradient(135deg,#111915_0%,#1B2630_58%,#2F2532_100%)]">
        <Container className="relative px-4 py-8 md:py-10 lg:py-12">
          <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="min-w-0 max-w-4xl space-y-4">
              <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                {content.title}
              </h1>
              <p className="max-w-3xl text-base leading-7 text-[#CDEAE7] md:text-lg">
                {content.intro}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[#FFB68A] text-[#33241B] hover:bg-[#FFD0A8]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    {content.primaryCta}
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#FFB68A] bg-[#111915]/60 text-[#F3EDE1] hover:bg-[#263A34]"
                >
                  <LocaleLink href="/play-online">
                    <Gamepad2 className="size-4" />
                    {content.playCta}
                  </LocaleLink>
                </Button>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-[#CDEAE7]/85">
                {content.scopeNote}
              </p>
            </div>

            <div className="relative mx-auto w-full min-w-0 max-w-[360px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#4B6B66] bg-[#1B2630]">
                <Image
                  src={siteFacts.officialCoverImage}
                  alt="Orb of Creation icon"
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, 80vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <a
                  href={siteFacts.officialSteamUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="min-w-0 break-words rounded-lg border border-[#4B6B66] bg-[#1B2630] px-4 py-3 text-sm font-semibold text-[#FFB68A] transition hover:border-[#FFB68A]"
                >
                  Official Steam
                </a>
                <a
                  href={siteFacts.officialItchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="min-w-0 break-words rounded-lg border border-[#4B6B66] bg-[#1B2630] px-4 py-3 text-sm font-semibold text-[#FFB68A] transition hover:border-[#FFB68A]"
                >
                  Official itch.io
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {systemLinks.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#4B6B66] bg-[#1B2630]/88 p-4 backdrop-blur transition hover:border-[#FFB68A] hover:bg-[#263A34]"
              >
                <item.icon className="size-6 text-[#FFB68A]" />
                <h2 className="mt-3 font-display text-lg font-bold">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-[#CDEAE7]">
                  {item.body}
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <AdsterraNativeBanner className="border-[#4B6B66] border-b bg-[#111915]" />

      <section className="border-[#4B6B66] border-b bg-[#1B2630] py-12">
        <Container className="grid gap-6 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.18em] text-[#FFB68A]">
              {content.siteShapeEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              {content.siteShapeTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#CDEAE7]">
              {content.siteShapeBody}
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {secondaryLinks.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#4B6B66] bg-[#111915] p-5 transition hover:border-[#FFB68A]"
              >
                <item.icon className="size-7 text-[#97CBDB]" />
                <h3 className="mt-4 font-display text-xl font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#CDEAE7]">
                  {item.body}
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="space-y-6 px-4">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#FFB68A]">
              {content.systemsEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              {content.systemsTitle}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#CDEAE7]">
              {content.systemsBody}
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {content.coreRouteItems.map((item) => (
              <LocaleLink
                key={`${item.keyword}-${item.route}`}
                href={item.route}
                className="rounded-lg border border-[#4B6B66] bg-[#1B2630] p-4 transition hover:border-[#FFB68A]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="min-w-0 break-words text-xs uppercase tracking-[0.14em] text-[#97CBDB]">
                    {item.keyword}
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-[#FFB68A]" />
                </div>
                <h3 className="mt-3 font-display text-lg font-bold">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#CDEAE7]">
                  {item.intent}
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-[#4B6B66] border-y bg-[#1B2630] py-12">
        <Container className="space-y-6 px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-[#FFB68A]">
                {content.coreGuidesEyebrow}
              </p>
              <h2 className="mt-2 font-display text-3xl font-black">
                {content.coreGuidesTitle}
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-[#FFB68A] bg-[#111915] text-[#F3EDE1] hover:bg-[#263A34]"
            >
              <LocaleLink href="/guides">{content.allGuidesButton}</LocaleLink>
            </Button>
          </div>

          <AdsterraAdFrame
            slot="banner-728x90"
            className="rounded-lg border border-[#4B6B66] bg-[#111915] py-4"
            label
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredGuides.map((guide) => (
              <LocaleLink
                key={guide.slug}
                href={guide.path}
                className="overflow-hidden rounded-lg border border-[#4B6B66] bg-[#111915] transition hover:border-[#FFB68A]"
              >
                <div className="relative aspect-video border-[#4B6B66] border-b">
                  <Image
                    src={guide.coverImageUrl}
                    alt={`${guide.title} cover`}
                    fill
                    sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111915]/80 to-transparent" />
                </div>
                <div className="p-5">
                  <Badge className="bg-[#FFB68A] text-[#33241B]">
                    {guide.category}
                  </Badge>
                  <h3 className="mt-4 font-display text-xl font-bold">
                    {guide.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#CDEAE7]">
                    {guide.summary}
                  </p>
                </div>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-[#4B6B66] border-b bg-[#111915] py-12">
        <Container className="grid gap-4 px-4 md:grid-cols-2 xl:grid-cols-4">
          {gameFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-lg border border-[#4B6B66] bg-[#1B2630] p-5"
            >
              <h2 className="font-display text-lg font-bold text-[#FFB68A]">
                {fact.label}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#CDEAE7]">
                {fact.value}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-[#1B2630] py-12">
        <Container className="px-4">
          <FaqSection items={content.faq} />
        </Container>
      </section>
    </div>
  );
}
