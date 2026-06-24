import Container from '@/components/layout/container';
import { FaqSection } from '@/components/orbofcreation/faq-section';
import { OrbGameFrame } from '@/components/orbofcreation/orb-game-frame';
import { MobileWikiNav } from '@/components/orbofcreation/wiki-navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getPlayOnlineContent } from '@/data/orbofcreation/localized';
import { siteFacts } from '@/data/orbofcreation/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  FlaskConical,
  Gamepad2,
  ShieldAlert,
  Sparkles,
  Wand2,
} from 'lucide-react';
import type { Locale } from 'next-intl';

const gameSrc = siteFacts.browserGameUrl;
const posterSrc = siteFacts.officialHeroImage;

const guideIcons = {
  wand: Wand2,
  book: BookOpen,
  flask: FlaskConical,
} as const;

export function OrbPlayOnlinePage({ locale }: { locale?: Locale }) {
  const content = getPlayOnlineContent(locale);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteFacts.domain}/play-online#webpage`,
        name: content.title,
        url: `${siteFacts.domain}/play-online`,
        description: content.metadataDescription,
        isPartOf: {
          '@id': `${siteFacts.domain}/#website`,
        },
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
        gamePlatform: ['Web Browser', 'Windows', 'macOS'],
        url: `${siteFacts.domain}/play-online`,
        sameAs: [siteFacts.officialSteamUrl, siteFacts.officialItchUrl],
      },
    ],
  };

  return (
    <div className="bg-[#111915] text-[#F3EDE1]">
      <JsonLd data={jsonLd} />

      <section className="border-[#4B6B66] border-b bg-[linear-gradient(135deg,#111915_0%,#1B2630_54%,#2F2532_100%)] py-10 md:py-14">
        <Container className="space-y-6 px-4">
          <header className="max-w-4xl space-y-4">
            <Badge className="bg-[#FFB68A] text-[#33241B]">
              {content.badge}
            </Badge>
            <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">
              {content.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[#CDEAE7] md:text-lg">
              {content.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#FFB68A] text-[#33241B] hover:bg-[#FFD0A8]"
              >
                <LocaleLink href="/guides/beginner-guide">
                  {content.beginnerButton}
                  <ArrowRight className="size-4" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#FFB68A] bg-[#111915]/50 text-[#F3EDE1] hover:bg-[#263A34]"
              >
                <LocaleLink href="/steam">{content.steamButton}</LocaleLink>
              </Button>
            </div>
            <MobileWikiNav currentPath="/play-online" locale={locale} />
          </header>

          <OrbGameFrame
            src={gameSrc}
            posterSrc={posterSrc}
            labels={{
              title: content.frameLabels.title,
              loading: content.frameLabels.loading,
              start: content.frameLabels.start,
              reset: content.frameLabels.reset,
              fullscreen: content.frameLabels.fullscreen,
              exitFullscreen: content.frameLabels.exitFullscreen,
              open: content.frameLabels.open,
            }}
          />
        </Container>
      </section>

      <section className="border-[#4B6B66] border-b bg-[#1B2630] py-12">
        <Container className="grid gap-4 px-4 md:grid-cols-3">
          <div className="rounded-lg border border-[#4B6B66] bg-[#111915] p-5">
            <Gamepad2 className="size-7 text-[#FFB68A]" />
            <h2 className="mt-4 font-display text-xl font-bold">
              {content.infoCards[0]?.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#CDEAE7]">
              {content.infoCards[0]?.body}
            </p>
          </div>
          <div className="rounded-lg border border-[#4B6B66] bg-[#111915] p-5">
            <Sparkles className="size-7 text-[#97CBDB]" />
            <h2 className="mt-4 font-display text-xl font-bold">
              {content.infoCards[1]?.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#CDEAE7]">
              {content.infoCards[1]?.body}
            </p>
          </div>
          <div className="rounded-lg border border-[#4B6B66] bg-[#111915] p-5">
            <ShieldAlert className="size-7 text-[#FFB68A]" />
            <h2 className="mt-4 font-display text-xl font-bold">
              {content.infoCards[2]?.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#CDEAE7]">
              {content.infoCards[2]?.body}
            </p>
            <LocaleLink
              href="/download"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#FFB68A] underline underline-offset-4"
            >
              {content.downloadGuide}
              <ArrowRight className="size-3" />
            </LocaleLink>
            <a
              href={siteFacts.officialItchUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#FFB68A] underline underline-offset-4"
            >
              {content.officialItch}
              <ExternalLink className="size-3" />
            </a>
          </div>
        </Container>
      </section>

      <section className="border-[#4B6B66] border-b bg-[#111915] py-12">
        <Container className="grid gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#FFB68A]">
              {content.howEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              {content.howTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#CDEAE7]">
              {content.howBody}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {content.howCards.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-[#4B6B66] bg-[#1B2630] p-5"
              >
                <h3 className="font-display text-xl font-bold">{item.label}</h3>
                <p className="mt-2 text-sm leading-7 text-[#CDEAE7]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="space-y-6 px-4">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#FFB68A]">
              {content.afterEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              {content.afterTitle}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.guideLinks.map((item) => {
              const Icon = guideIcons[item.icon];

              return (
                <LocaleLink
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-[#4B6B66] bg-[#1B2630] p-5 transition hover:border-[#FFB68A]"
                >
                  <Icon className="size-7 text-[#FFB68A]" />
                  <h3 className="mt-4 font-display text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#CDEAE7]">
                    {item.body}
                  </p>
                </LocaleLink>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-[#4B6B66] border-t bg-[#1B2630] py-12">
        <Container className="px-4">
          <FaqSection items={content.faq} />
        </Container>
      </section>
    </div>
  );
}
