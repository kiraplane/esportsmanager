import { DatabaseLandingPage } from '@/components/moonlightpeaks/database-pages';
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
    title: 'Moonlight Peaks Database - Characters, Families, Locations, Items',
    description:
      'Browse Moonlight Peaks structured data for characters, families, locations, items, tools, and local artwork.',
    locale,
    pathname: '/database',
  });
}

export default async function DatabasePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <DatabaseLandingPage locale={locale} />;
}
