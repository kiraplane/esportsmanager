import { OrbPlayOnlinePage } from '@/components/orbofcreation/play-online-page';
import { getPlayOnlineContent } from '@/data/orbofcreation/localized';
import { siteFacts } from '@/data/orbofcreation/sources';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = getPlayOnlineContent(locale);

  return constructMetadata({
    title: content.metadataTitle,
    description: content.metadataDescription,
    locale,
    pathname: '/play-online',
    image: siteFacts.officialCoverImage,
  });
}

export default async function PlayOnlinePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <OrbPlayOnlinePage locale={locale} />;
}
