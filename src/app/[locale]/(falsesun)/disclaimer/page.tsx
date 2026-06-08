import Container from '@/components/layout/container';
import { siteFacts } from '@/data/falsesun/sources';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Disclaimer | The False Sun',
    description:
      'Disclaimer for The False Sun, an unofficial walkthrough and ending guide site.',
    locale,
    pathname: '/disclaimer',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#0A0F0C] py-12 text-[#F7E8C9]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Disclaimer</h1>
        <p className="leading-8 text-[#C7BAA7]">
          The False Sun is an unofficial fan walkthrough site. It is not
          affiliated with, endorsed by, sponsored by, or operated by Oniray,
          itch.io, or any official distribution platform.
        </p>
        <p className="leading-8 text-[#C7BAA7]">
          The False Sun, its story, art, characters, music, code, and official
          game files belong to their respective creator and rights holders. This
          site does not host or redistribute the game.
        </p>
        <p className="leading-8 text-[#C7BAA7]">
          Route notes are written from public source checks, community demand,
          and manual research. Some ending labels are unofficial route notes
          until direct replay verification is complete.
        </p>
        <p className="leading-8 text-[#C7BAA7]">
          For the official game page and downloads, use{' '}
          <a
            href={siteFacts.officialItchUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#D9B56A] underline underline-offset-4"
          >
            Oniray&apos;s itch.io page
          </a>
          .
        </p>
      </Container>
    </div>
  );
}
