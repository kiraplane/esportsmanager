import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { buildGuideMetadata, renderGuidePage } from '../guide-page';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildGuideMetadata('itch-io', locale, '/itch-io');
}

export default async function ItchIoPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return renderGuidePage('itch-io', '/itch-io', locale);
}
