import { guides } from '@/data/esportsmanager/guides';
import { Routes } from '@/routes';
import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';
import { getCanonicalBaseUrl } from '../lib/urls/urls';

const coreRoutes = [
  Routes.Root,
  Routes.Guides,
  Routes.BeginnerGuide,
  Routes.CreateOrganization,
  Routes.ScoutingTransfers,
  Routes.ContractsBudget,
  Routes.TrainingMorale,
  Routes.BestTactics,
  Routes.TournamentsMajors,
  Routes.SponsorsBrand,
  Routes.ReleaseDate,
  Routes.Demo,
  Routes.Platforms,
  Routes.SteamDeck,
  Routes.Emdb,
  Routes.Review,
  Routes.ModsAndCheats,
  Routes.Download,
  Routes.Discord,
  Routes.PrivacyPolicy,
  Routes.TermsOfService,
  Routes.CookiePolicy,
  Routes.Disclaimer,
];

const guideRoutes = guides
  .map((guide) => guide.path)
  .filter((path) => !coreRoutes.includes(path as Routes));

const stableLastModified = new Date('2026-07-24T00:00:00.000Z');

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapList: MetadataRoute.Sitemap = [];
  const baseUrl = getCanonicalBaseUrl();
  const allRoutes = [...coreRoutes, ...guideRoutes];

  routing.locales.forEach((locale) => {
    allRoutes.forEach((route) => {
      const localizedRoute =
        locale === routing.defaultLocale ? route : `/${locale}${route}`;

      sitemapList.push({
        url: `${baseUrl}${localizedRoute}`,
        lastModified: stableLastModified,
        changeFrequency:
          route === Routes.Root ||
          route === Routes.Guides ||
          route === Routes.BestTactics ||
          route === Routes.Emdb ||
          route === Routes.ReleaseDate ||
          route === Routes.Platforms
            ? 'daily'
            : 'weekly',
        priority:
          route === Routes.Root
            ? 1
            : route === Routes.Guides ||
                route === Routes.BestTactics ||
                route === Routes.Emdb ||
                route === Routes.Platforms ||
                route === Routes.ReleaseDate ||
                route === Routes.BeginnerGuide ||
                route === Routes.Download
              ? 0.9
              : 0.8,
      });
    });
  });

  return sitemapList;
}
