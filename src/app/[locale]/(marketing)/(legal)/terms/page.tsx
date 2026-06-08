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
    title: 'Terms of Service | The False Sun',
    description:
      'Terms for using The False Sun, an unofficial walkthrough site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#0A0F0C] py-12 text-[#F7E8C9]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#C7BAA7]">
          This site provides unofficial walkthroughs for The False Sun, route
          notes, ending trackers, and download guidance. It is not affiliated
          with, endorsed by, sponsored by, or operated by Oniray or itch.io.
        </p>
        <p className="leading-8 text-[#C7BAA7]">
          Route details can change after updates or after direct replay
          verification. Ending labels and confidence notes should be treated as
          guidance, not official instructions.
        </p>
        <p className="leading-8 text-[#C7BAA7]">
          Do not use this site to distribute copied game files, unsafe APKs,
          modified clients, automation scripts, explicit adult content, or
          copied game script.
        </p>
        <p className="leading-8 text-[#C7BAA7]">
          Questions about these terms can be sent to hello@thefalsesun.wiki.
        </p>
      </Container>
    </div>
  );
}
