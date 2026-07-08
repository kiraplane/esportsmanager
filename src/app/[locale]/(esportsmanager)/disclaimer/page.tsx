import Container from '@/components/layout/container';
import { siteFacts } from '@/data/esportsmanager/sources';
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
    title: 'Disclaimer | Esports Manager 2026',
    description:
      'Disclaimer for Esports Manager 2026, an independent guide site.',
    locale,
    pathname: '/disclaimer',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#061018] py-12 text-[#F4FAFF]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Disclaimer</h1>
        <p className="leading-8 text-[#BED3E0]">
          Esports Manager 2026 Wiki is an independent guide site. It is not
          affiliated with, endorsed by, sponsored by, or operated by Neurona
          Games, indie.io, Valve, Steam, EMDB, Discord, Reddit, X, YouTube, or
          any official distribution platform.
        </p>
        <p className="leading-8 text-[#BED3E0]">
          Esports Manager 2026, its name, art, music, game files, code, real
          teams, player likenesses, and official materials belong to Neurona
          Games, indie.io, and the respective rights holders. This site does not
          redistribute paid game files, modified clients, APK mirrors, trainers,
          save editors, database exports, or unsafe downloads.
        </p>
        <p className="leading-8 text-[#BED3E0]">
          For official platform and purchase status, use{' '}
          <a
            href={siteFacts.officialSteamUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#59D6FF] underline underline-offset-4"
          >
            Steam
          </a>
          ,{' '}
          <a
            href={siteFacts.officialWebsiteUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#59D6FF] underline underline-offset-4"
          >
            the official website
          </a>
          , and official community links.
        </p>
      </Container>
    </div>
  );
}
