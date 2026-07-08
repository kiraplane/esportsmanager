import Container from '@/components/layout/container';
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
    title: 'Terms of Service | Esports Manager 2026 Wiki',
    description:
      'Terms for using Esports Manager 2026 Wiki, an independent Esports Manager 2026 guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#061018] py-12 text-[#EAF7FF]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#A8C7D8]">
          This site provides independent Esports Manager 2026 guides, source
          notes, and official-link guidance. It is not affiliated with, endorsed
          by, sponsored by, or operated by Neurona Games, indie.io, Valve,
          Steam, Discord, Reddit, X, YouTube, or EMDB.
        </p>
        <p className="leading-8 text-[#A8C7D8]">
          Player data, tactics, contract values, patch behavior, EMDB entries,
          and platform support can change after game updates. Treat guide pages
          as community-oriented guidance and verify important details in your
          current game version.
        </p>
        <p className="leading-8 text-[#A8C7D8]">
          Do not use this site to distribute unauthorized game files, unsafe
          downloads, modified clients, copied roster databases, paid files,
          trainers, or automation scripts.
        </p>
        <p className="leading-8 text-[#A8C7D8]">
          Questions about these terms can be sent to hello@esportsmanager.wiki.
        </p>
      </Container>
    </div>
  );
}
