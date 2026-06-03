import { critters } from '@/data/clashofcritters/critters';
import { guides } from '@/data/clashofcritters/guides';
import { Routes } from '@/routes';
import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';
import { getCanonicalBaseUrl } from '../lib/urls/urls';

const coreRoutes = [
  Routes.Root,
  Routes.Codes,
  Routes.Download,
  Routes.TierList,
  Routes.Critters,
  Routes.Gameplay,
  Routes.BestTeam,
  Routes.Guides,
  Routes.PrivacyPolicy,
  Routes.TermsOfService,
  Routes.CookiePolicy,
  Routes.Disclaimer,
];

const guideRoutes = guides.map((guide) => `/guides/${guide.slug}`);
const heroRoutes = critters.map((hero) => `/heroes/${hero.slug}`);
const stableLastModified = new Date('2026-06-03T00:00:00.000Z');

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapList: MetadataRoute.Sitemap = [];
  const baseUrl = getCanonicalBaseUrl();

  routing.locales.forEach((locale) => {
    [...coreRoutes, ...guideRoutes, ...heroRoutes].forEach((route) => {
      const localizedRoute =
        locale === routing.defaultLocale ? route : `/${locale}${route}`;

      sitemapList.push({
        url: `${baseUrl}${localizedRoute}`,
        lastModified: stableLastModified,
        changeFrequency:
          route === Routes.Root || route === Routes.Codes ? 'daily' : 'weekly',
        priority:
          route === Routes.Root
            ? 1
            : route === Routes.Codes ||
                route === Routes.Download ||
                route === Routes.TierList
              ? 0.9
              : route.startsWith('/guides/') || route.startsWith('/heroes/')
                ? 0.85
                : 0.8,
      });
    });
  });

  return sitemapList;
}
