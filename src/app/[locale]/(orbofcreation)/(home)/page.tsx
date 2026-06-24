import { OrbHomePage } from '@/components/orbofcreation/home-page';
import {
  getHomeContent,
  getLocalizedSiteDescription,
} from '@/data/orbofcreation/localized';
import { siteFacts } from '@/data/orbofcreation/sources';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const content = getHomeContent(locale);

  return constructMetadata({
    title: content.metadataTitle,
    description: getLocalizedSiteDescription(locale),
    locale,
    pathname: '/',
    image: siteFacts.officialCoverImage,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <OrbHomePage locale={locale} />;
}
