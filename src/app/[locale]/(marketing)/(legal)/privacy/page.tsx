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
    title: 'Privacy Policy | The False Sun',
    description:
      'Privacy policy for The False Sun, an unofficial walkthrough site.',
    locale,
    pathname: '/privacy',
  });
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0A0F0C] py-12 text-[#F7E8C9]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Privacy Policy</h1>
        <p className="leading-8 text-[#C7BAA7]">
          The False Sun is an unofficial fan walkthrough site. We do not require
          accounts for browsing all endings, route guides, download help,
          mini-game notes, or content warnings.
        </p>
        <p className="leading-8 text-[#C7BAA7]">
          Standard analytics or hosting logs may record aggregate traffic data
          such as page views, referrers, device type, and approximate region. We
          use this to improve guides and fix broken pages.
        </p>
        <p className="leading-8 text-[#C7BAA7]">
          Remote media may be loaded from itch.io or YouTube when a page embeds
          official artwork or walkthrough video references.
        </p>
        <p className="leading-8 text-[#C7BAA7]">
          Privacy questions can be sent to hello@thefalsesun.wiki.
        </p>
      </Container>
    </div>
  );
}
