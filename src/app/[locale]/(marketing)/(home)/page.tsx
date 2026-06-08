import { FalseSunHomePage } from '@/components/falsesun/home-page';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'The False Sun - Walkthrough, All Endings & Route Guide',
    description:
      'The False Sun guide with all endings, Ending 20, Silas route, Kyle route, mini-games, official download help, and mature-content warnings.',
    locale,
    pathname: '',
    image:
      'https://img.itch.zone/aW1nLzI3NTUxNjgxLmpwZw==/original/96%2Fy%2FZ.jpg',
  });
}

export default function HomePage() {
  return <FalseSunHomePage />;
}
