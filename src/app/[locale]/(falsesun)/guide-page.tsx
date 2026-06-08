import { GuideArticle } from '@/components/falsesun/guide-article';
import { getGuide } from '@/data/falsesun/guides';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

export function renderGuidePage(slug: string, pathname: string) {
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  return <GuideArticle guide={guide} pathname={pathname} />;
}

export function buildGuideMetadata(
  slug: string,
  locale: Locale,
  pathname: string
): Metadata {
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  return constructMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    locale,
    pathname,
    image: guide.coverImageUrl,
  });
}
