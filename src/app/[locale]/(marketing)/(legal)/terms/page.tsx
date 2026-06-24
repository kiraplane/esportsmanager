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
    title: 'Terms of Service | Orb of Creation Wiki',
    description:
      'Terms for using Orb of Creation Wiki, an unofficial Orb of Creation guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#111915] py-12 text-[#F3EDE1]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#CDEAE7]">
          This site provides unofficial Orb of Creation guides, browser play
          access, source notes, and official-link guidance. It is not affiliated
          with, endorsed by, sponsored by, or operated by MarpleGames, Valve,
          Steam, or itch.io.
        </p>
        <p className="leading-8 text-[#CDEAE7]">
          Mechanics, spell names, and progression details can change after game
          updates. Treat guide pages as community-oriented guidance and verify
          important details in your current game version.
        </p>
        <p className="leading-8 text-[#CDEAE7]">
          Do not use this site to distribute unauthorized game files, unsafe
          APKs, modified clients, save editors, copied paid Steam files, or
          automation scripts.
        </p>
        <p className="leading-8 text-[#CDEAE7]">
          Questions about these terms can be sent to hello@orbofcreation.wiki.
        </p>
      </Container>
    </div>
  );
}
