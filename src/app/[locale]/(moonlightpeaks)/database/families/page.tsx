import { DatabaseCategoryPage } from '@/components/moonlightpeaks/database-pages';
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
    title: 'Moonlight Peaks Families Database - Ambrosia, Logan, Webb, Hosu',
    description:
      'Track Moonlight Peaks families, supernatural inclinations, known members, and local crest artwork for romance and town routing.',
    locale,
    pathname: '/database/families',
  });
}

export default async function FamilyDatabasePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <DatabaseCategoryPage category="families" locale={locale} />;
}
