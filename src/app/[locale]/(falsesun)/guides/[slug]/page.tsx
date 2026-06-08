import { getGuide, guides } from '@/data/falsesun/guides';
import { routing } from '@/i18n/routing';
import { redirect } from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    guides.map((guide) => ({ locale, slug: guide.slug }))
  );
}

export default async function GuideSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);

  redirect(guide?.path ?? '/guides');
}
