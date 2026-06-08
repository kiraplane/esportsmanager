import { Routes } from '@/routes';
import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';
import { getCanonicalBaseUrl } from '../lib/urls/urls';

const coreRoutes = [
  Routes.Root,
  Routes.AllEndings,
  Routes.Ending20,
  Routes.SilasRoute,
  Routes.KyleRoute,
  Routes.MiniGames,
  Routes.ContentWarnings,
  Routes.Guides,
  Routes.Download,
  Routes.PrivacyPolicy,
  Routes.TermsOfService,
  Routes.CookiePolicy,
  Routes.Disclaimer,
];

const stableLastModified = new Date('2026-06-08T00:00:00.000Z');

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapList: MetadataRoute.Sitemap = [];
  const baseUrl = getCanonicalBaseUrl();

  routing.locales.forEach((locale) => {
    coreRoutes.forEach((route) => {
      const localizedRoute =
        locale === routing.defaultLocale ? route : `/${locale}${route}`;

      sitemapList.push({
        url: `${baseUrl}${localizedRoute}`,
        lastModified: stableLastModified,
        changeFrequency:
          route === Routes.Root || route === Routes.AllEndings
            ? 'daily'
            : 'weekly',
        priority:
          route === Routes.Root
            ? 1
            : route === Routes.AllEndings ||
                route === Routes.Ending20 ||
                route === Routes.Download
              ? 0.9
              : 0.8,
      });
    });
  });

  return sitemapList;
}
