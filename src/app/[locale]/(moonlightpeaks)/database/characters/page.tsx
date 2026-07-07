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
    title: 'Moonlight Peaks Characters Database - Romance, Families, Birthdays',
    description:
      'Moonlight Peaks character database with species, family, romance status, birthdays, jobs, portraits, and local artwork.',
    locale,
    pathname: '/database/characters',
  });
}

export default async function CharacterDatabasePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <DatabaseCategoryPage category="characters" locale={locale} />;
}
