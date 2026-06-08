import { FaqSection } from '@/components/falsesun/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { contentWarnings, siteFacts } from '@/data/falsesun/sources';
import type { Guide } from '@/data/falsesun/types';
import { LocaleLink } from '@/i18n/navigation';
import {
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import Image from 'next/image';

const relatedRouteLabels: Record<string, string> = {
  '/all-endings': 'All Endings',
  '/ending-20': 'Ending 20',
  '/silas-route': 'Silas Route',
  '/kyle-route': 'Kyle Route',
  '/mini-games': 'Mini-Games',
  '/download': 'Download',
  '/content-warnings': 'Content Warnings',
  '/guides': 'All Guides',
  '/disclaimer': 'Disclaimer',
};

function getRelatedRouteLabel(route: string) {
  return (
    relatedRouteLabels[route] ??
    route
      .replace(/^\/+/, '')
      .split('/')
      .filter(Boolean)
      .map((segment) =>
        segment
          .split('-')
          .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
          .join(' ')
      )
      .join(' ')
  );
}

export function GuideArticle({
  guide,
  pathname,
}: {
  guide: Guide;
  pathname: string;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.summary,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    image: guide.coverImageUrl,
    mainEntityOfPage: `${siteFacts.domain}${pathname}`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteFacts.siteName,
      url: siteFacts.domain,
    },
  };

  return (
    <div className="bg-[#0A0F0C] py-10 text-[#F7E8C9]">
      <JsonLd data={jsonLd} />
      <Container className="grid gap-8 px-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="overflow-hidden rounded-lg border border-[#493A34] bg-[#111612]">
          <div className="relative aspect-[16/8] min-h-[260px] border-[#493A34] border-b">
            <Image
              src={guide.coverImageUrl}
              alt={`${guide.title} cover`}
              fill
              priority
              sizes="(min-width: 1024px) 860px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,12,0.1)_0%,rgba(10,15,12,0.76)_78%,rgba(10,15,12,0.94)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#D9B56A] text-[#15110B]">
                  {guide.category}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#E7C77C]/60 bg-[#0A0F0C]/60 text-[#F7E8C9]"
                >
                  {guide.difficulty}
                </Badge>
                {guide.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-[#E7C77C]/40 bg-[#0A0F0C]/50 text-[#F7E8C9]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="mt-5 max-w-4xl font-display text-4xl font-black leading-tight md:text-6xl">
                {guide.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#E1D2B9] md:text-lg">
                {guide.summary}
              </p>
            </div>
          </div>

          <div className="p-5 md:p-8">
            <section className="mb-8 rounded-lg border border-[#6F3A42] bg-[#201418] p-4">
              <div className="flex gap-3">
                <AlertTriangle className="mt-1 size-5 shrink-0 text-[#E7C77C]" />
                <div>
                  <h2 className="font-display text-xl font-bold">
                    Spoiler and mature-content note
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#D5C5AF]">
                    The False Sun is intended for mature audiences. Route pages
                    include story spoilers and may discuss violent or disturbing
                    outcomes without explicit adult scene detail.
                  </p>
                </div>
              </div>
            </section>

            {guide.video ? (
              <section className="mb-8 overflow-hidden rounded-lg border border-[#493A34] bg-black">
                <iframe
                  className="aspect-video w-full"
                  src={`https://www.youtube.com/embed/${guide.video.id}`}
                  title={guide.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <div className="bg-[#141916] px-4 py-3 text-sm leading-6 text-[#C7BAA7]">
                  Video cross-check:{' '}
                  <a
                    href={guide.video.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#E7C77C] underline underline-offset-4"
                  >
                    {guide.video.title}
                  </a>{' '}
                  by {guide.video.channel}. The article is hand-written and not
                  a transcript rewrite.
                </div>
              </section>
            ) : null}

            <div className="space-y-8">
              {guide.body.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display text-2xl font-bold text-[#F7E8C9]">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-4 text-base leading-8 text-[#C7BAA7]">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={`${section.heading}-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-4 grid gap-2 text-sm leading-7 text-[#D5C5AF]">
                      {section.bullets.map((bullet, index) => (
                        <li
                          key={`${section.heading}-bullet-${index}`}
                          className="rounded-md border border-[#493A34] bg-[#0D1310] px-3 py-2"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="mt-10 rounded-lg border border-[#493A34] bg-[#0D1310] p-5">
              <div className="flex gap-3">
                <ShieldCheck className="mt-1 size-5 shrink-0 text-[#6EA69A]" />
                <div>
                  <h2 className="font-display text-xl font-bold">
                    Source handling
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#C7BAA7]">
                    {guide.sourceNotes}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#C7BAA7]">
                    Official download and creator page:{' '}
                    <a
                      href={siteFacts.officialItchUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[#E7C77C] underline underline-offset-4"
                    >
                      Oniray on itch.io
                      <ExternalLink className="size-3" />
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <div className="mt-10">
              <FaqSection items={guide.faq} />
            </div>
          </div>
        </article>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-lg border border-[#493A34] bg-[#111612] p-5">
            <h2 className="font-display text-xl font-bold">Related pages</h2>
            <div className="mt-4 grid gap-2">
              {guide.relatedRoutes.map((route) => (
                <Button
                  key={route}
                  asChild
                  variant="outline"
                  className="h-auto justify-between border-[#493A34] bg-[#0A0F0C] py-3 text-left text-[#F7E8C9] hover:bg-[#182019]"
                >
                  <LocaleLink href={route}>
                    {getRelatedRouteLabel(route)}
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#493A34] bg-[#111612] p-5">
            <h2 className="font-display text-xl font-bold">
              Official warnings
            </h2>
            <ul className="mt-4 grid gap-2 text-sm text-[#C7BAA7]">
              {contentWarnings.slice(0, 5).map((warning) => (
                <li key={warning} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#D9B56A]" />
                  <span>{warning}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant="outline"
              className="mt-5 w-full border-[#493A34] bg-[#0A0F0C]"
            >
              <LocaleLink href="/content-warnings">Read warnings</LocaleLink>
            </Button>
          </div>
        </aside>
      </Container>
    </div>
  );
}
