import { ToolDetailPage } from '@/components/moonlightpeaks/tool-pages';
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
    title: 'Moonlight Peaks Item Tracker - Crops, Tools, Flowers, Resources',
    description:
      'Track Moonlight Peaks crops, flowers, tools, animals, resources, and recipes locally while your collection grows.',
    locale,
    pathname: '/tools/item-tracker',
  });
}

export default async function ItemTrackerPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <ToolDetailPage kind="item-tracker" locale={locale} />;
}
