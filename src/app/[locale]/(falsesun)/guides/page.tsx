import { FaqSection } from '@/components/falsesun/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guides } from '@/data/falsesun/guides';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'The False Sun Guides - All Endings, Routes and Download',
    description:
      'Browse The False Sun guides for all endings, Ending 20, Silas route, Kyle route, mini-games, safe downloads, and content warnings.',
    locale,
    pathname: '/guides',
    image: guides[0]?.coverImageUrl,
  });
}

export default function GuidesPage() {
  return (
    <div className="bg-[#0A0F0C] py-12 text-[#F7E8C9]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D9B56A] text-[#15110B]">Guides</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            The False Sun Guides
          </h1>
          <p className="text-lg leading-8 text-[#C7BAA7]">
            Route-first walkthrough pages for ending cleanup, Silas and Kyle
            branches, farm mini-games, official downloads, and mature-content
            warnings.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-[#493A34] bg-[#111612]"
            >
              <div className="relative aspect-video border-[#493A34] border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0C]/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#D9B56A] text-[#15110B]">
                  {guide.category}
                </Badge>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#D9B56A]/50 text-[#F7E8C9]"
                  >
                    {guide.difficulty}
                  </Badge>
                  {guide.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#493A34] text-[#F7E8C9]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold">
                  {guide.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#C7BAA7]">
                  {guide.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 bg-[#D9B56A] text-[#15110B] hover:bg-[#E7C77C]"
                >
                  <LocaleLink href={guide.path}>Read guide</LocaleLink>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <FaqSection
          items={[
            {
              question: 'Which The False Sun guide should I read first?',
              answer:
                'Start with the all endings guide. If you only miss one gallery slot, use Ending 20, Silas route, or Kyle route based on the missing branch.',
            },
            {
              question: 'Are these pages a traditional wiki?',
              answer:
                'No. The False Sun is better served by route walkthroughs and ending cleanup pages than by empty database pages.',
            },
            {
              question: 'Do the guides copy YouTube transcripts?',
              answer:
                'No. Videos are used as cross-check sources, while articles are written as practical route logic and save-point advice.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
