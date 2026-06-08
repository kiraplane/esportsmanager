import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { endingChecklist } from '@/data/falsesun/endings';
import { featuredGuides, siteDescription } from '@/data/falsesun/guides';
import {
  checkedAt,
  contentWarnings,
  gameFacts,
  keywordMatrix,
  siteFacts,
} from '@/data/falsesun/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  Download,
  Film,
  HeartPulse,
  ListChecks,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';

const primaryLinks = [
  {
    title: 'All Endings',
    body: 'Track all 20 route slots with save points and confidence notes.',
    href: '/all-endings',
    icon: ListChecks,
  },
  {
    title: 'Ending 20',
    body: 'The rare chicken accident branch and retry loop.',
    href: '/ending-20',
    icon: Sparkles,
  },
  {
    title: 'Silas Route',
    body: 'Fear, confrontation, escape, and affection-chain branches.',
    href: '/silas-route',
    icon: HeartPulse,
  },
  {
    title: 'Mini-Games',
    body: 'Farm task saves, chicken retries, and safe no-mod advice.',
    href: '/mini-games',
    icon: Film,
  },
];

const secondaryLinks = [
  {
    title: 'Kyle Route',
    href: '/kyle-route',
    body: 'Farm aftermath and promise-to-return route notes.',
    icon: BookOpen,
  },
  {
    title: 'Download',
    href: '/download',
    body: 'Official itch.io, Android, Mac, Windows, and Linux guidance.',
    icon: Download,
  },
  {
    title: 'Content Warnings',
    href: '/content-warnings',
    body: 'Spoiler-light mature-audience and safety notes.',
    icon: ShieldAlert,
  },
];

export function FalseSunHomePage() {
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
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        author: {
          '@type': 'Person',
          name: siteFacts.creator,
        },
        applicationCategory: 'Game',
        genre: ['Visual Novel', 'Horror', 'Romance'],
        gamePlatform: ['Windows', 'macOS', 'Linux', 'Android'],
        url: siteFacts.officialItchUrl,
      },
    ],
  };

  return (
    <div className="bg-[#0A0F0C] text-[#F7E8C9]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#493A34] border-b bg-[linear-gradient(135deg,#0A0F0C_0%,#111612_58%,#201418_100%)]">
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#D9B56A]/30" />

        <Container className="relative px-4 py-14 md:py-20 lg:min-h-[560px] lg:py-24">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-[#D9B56A] text-[#15110B]">
              Unofficial walkthrough guide
            </Badge>
            <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
              The False Sun Walkthrough & All Endings Guide
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#E1D2B9] md:text-xl">
              A lightweight guide hub for all 20 endings, Ending 20, Silas and
              Kyle route cleanup, farm mini-games, safe downloads, and
              spoiler-marked mature-content notes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#D9B56A] text-[#15110B] hover:bg-[#E7C77C]"
              >
                <LocaleLink href="/all-endings">
                  Open all endings
                  <ArrowRight className="size-4" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#E7C77C] bg-[#0A0F0C]/50 text-[#F7E8C9] hover:bg-[#1B231D]"
              >
                <LocaleLink href="/ending-20">Solve Ending 20</LocaleLink>
              </Button>
            </div>
            <p className="text-sm leading-6 text-[#C7BAA7]">
              Checked {checkedAt}. This fan site covers Oniray&apos;s visual
              novel, not the unrelated book/comic search results using the same
              phrase.
            </p>
          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {primaryLinks.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#493A34] bg-[#111612]/90 p-4 backdrop-blur transition hover:border-[#D9B56A] hover:bg-[#182019]"
              >
                <item.icon className="size-6 text-[#D9B56A]" />
                <h2 className="mt-3 font-display text-lg font-bold">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-[#C7BAA7]">
                  {item.body}
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-[#493A34] border-b bg-[#111612] py-12">
        <Container className="grid gap-6 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.18em] text-[#D9B56A]">
              Site shape
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              This is a walkthrough site, not a database wiki
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#C7BAA7]">
              The False Sun does not need codes, tier lists, hero databases, or
              empty character pages. The highest-value pages are route
              decisions, ending cleanup, platform questions, and content
              warnings.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {secondaryLinks.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#493A34] bg-[#0D1310] p-5 transition hover:border-[#D9B56A]"
              >
                <item.icon className="size-7 text-[#6EA69A]" />
                <h3 className="mt-4 font-display text-xl font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#C7BAA7]">
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
            <p className="font-semibold uppercase tracking-[0.18em] text-[#D9B56A]">
              Ending tracker
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              Start with clusters, then clean up exact gallery slots
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#C7BAA7]">
              Current tracker labels are route notes rather than official ending
              names. That keeps the guide useful while the community is still
              verifying exact English gallery labels.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {endingChecklist.slice(0, 8).map((ending) => (
              <LocaleLink
                key={ending.number}
                href={ending.pageHref ?? '/all-endings'}
                className="rounded-lg border border-[#493A34] bg-[#111612] p-4 transition hover:border-[#D9B56A]"
              >
                <div className="flex items-center justify-between gap-3">
                  <Badge
                    variant="outline"
                    className="border-[#D9B56A]/60 text-[#F7E8C9]"
                  >
                    #{ending.number}
                  </Badge>
                  <span className="text-xs uppercase tracking-[0.14em] text-[#6EA69A]">
                    {ending.confidence}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold">
                  {ending.label}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#C7BAA7]">
                  {ending.routeFocus}
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-[#493A34] border-y bg-[#111612] py-12">
        <Container className="space-y-6 px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.18em] text-[#D9B56A]">
                Core guides
              </p>
              <h2 className="mt-2 font-display text-3xl font-black">
                Read the page that matches the missing slot
              </h2>
            </div>
            <Button asChild variant="outline">
              <LocaleLink href="/guides">All guides</LocaleLink>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredGuides.map((guide) => (
              <LocaleLink
                key={guide.slug}
                href={guide.path}
                className="overflow-hidden rounded-lg border border-[#493A34] bg-[#0D1310] transition hover:border-[#D9B56A]"
              >
                <div className="relative aspect-video border-[#493A34] border-b">
                  <Image
                    src={guide.coverImageUrl}
                    alt={`${guide.title} cover`}
                    fill
                    sizes="(min-width: 1280px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0C]/80 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-[#D9B56A] text-[#15110B]">
                    {guide.category}
                  </Badge>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold">
                    {guide.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#C7BAA7]">
                    {guide.summary}
                  </p>
                </div>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-6 px-4 lg:grid-cols-2">
          <div className="rounded-lg border border-[#493A34] bg-[#111612] p-6">
            <h2 className="font-display text-2xl font-bold">Current facts</h2>
            <div className="mt-5 grid gap-3">
              {gameFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-md border border-[#493A34] bg-[#0D1310] p-4"
                >
                  <h3 className="font-semibold text-[#F7E8C9]">{fact.label}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#C7BAA7]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#493A34] bg-[#111612] p-6">
            <h2 className="font-display text-2xl font-bold">
              Search demand handled
            </h2>
            <div className="mt-5 grid gap-3">
              {keywordMatrix
                .filter((item) => item.status === 'keep')
                .slice(0, 6)
                .map((item) => (
                  <LocaleLink
                    key={item.keyword}
                    href={item.route}
                    className="rounded-md border border-[#493A34] bg-[#0D1310] p-4 transition hover:border-[#D9B56A]"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        variant="outline"
                        className="border-[#D9B56A]/60 text-[#F7E8C9]"
                      >
                        {item.priority}
                      </Badge>
                      <span className="text-sm font-semibold">
                        {item.keyword}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#C7BAA7]">
                      {item.intent}
                    </p>
                  </LocaleLink>
                ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-[#493A34] border-t bg-[#111612] py-12">
        <Container className="px-4">
          <div className="rounded-lg border border-[#6F3A42] bg-[#201418] p-6">
            <h2 className="font-display text-2xl font-bold">
              Before you open route spoilers
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {contentWarnings.map((warning) => (
                <Badge
                  key={warning}
                  variant="outline"
                  className="border-[#E7C77C]/50 text-[#F7E8C9]"
                >
                  {warning}
                </Badge>
              ))}
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#C7BAA7]">
              This site is unofficial, spoiler-marked, and written for route
              clarity. It does not host game files, copy scripts, publish
              explicit adult scene walkthroughs, or recommend unsafe APKs.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
