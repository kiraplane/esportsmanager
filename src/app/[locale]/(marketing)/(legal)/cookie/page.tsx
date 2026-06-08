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
    title: 'Cookie Policy | The False Sun',
    description:
      'How The False Sun uses essential cookies, analytics, and similar technologies.',
    locale,
    pathname: '/cookie',
  });
}

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#0A0F0C] py-12 text-[#F7E8C9]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Cookie Policy</h1>
        <p className="leading-8 text-[#C7BAA7]">
          The False Sun uses essential cookies and similar technologies to keep
          the site working, remember basic preferences, and understand aggregate
          traffic patterns.
        </p>
        <p className="leading-8 text-[#C7BAA7]">
          Analytics or advertising partners may set limited cookies to measure
          page performance, ad delivery, referrers, and general device
          information. We use this data to improve guide pages and maintain the
          site.
        </p>
        <p className="leading-8 text-[#C7BAA7]">
          You can block or delete cookies in your browser settings. Some
          features, such as language preferences or consent choices, may not
          work as expected when cookies are disabled.
        </p>
        <p className="leading-8 text-[#C7BAA7]">
          Questions about this policy can be sent to hello@thefalsesun.wiki.
        </p>
      </Container>
    </div>
  );
}
