'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { useTranslations } from 'next-intl';

export function useFooterLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.footer');

  return [
    {
      title: t('walkthrough.title'),
      items: [
        {
          title: t('walkthrough.items.allEndings'),
          href: Routes.AllEndings,
          external: false,
        },
        {
          title: t('walkthrough.items.ending20'),
          href: Routes.Ending20,
          external: false,
        },
        {
          title: t('walkthrough.items.silasRoute'),
          href: Routes.SilasRoute,
          external: false,
        },
        {
          title: t('walkthrough.items.kyleRoute'),
          href: Routes.KyleRoute,
          external: false,
        },
        {
          title: t('walkthrough.items.miniGames'),
          href: Routes.MiniGames,
          external: false,
        },
      ],
    },
    {
      title: t('guides.title'),
      items: [
        {
          title: t('guides.items.all'),
          href: Routes.Guides,
          external: false,
        },
        {
          title: t('guides.items.download'),
          href: Routes.Download,
          external: false,
        },
        {
          title: t('guides.items.contentWarnings'),
          href: Routes.ContentWarnings,
          external: false,
        },
        {
          title: t('guides.items.disclaimer'),
          href: Routes.Disclaimer,
          external: false,
        },
      ],
    },
    {
      title: t('legal.title'),
      items: [
        {
          title: t('legal.items.privacyPolicy'),
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: t('legal.items.termsOfService'),
          href: Routes.TermsOfService,
          external: false,
        },
        {
          title: t('legal.items.cookiePolicy'),
          href: Routes.CookiePolicy,
          external: false,
        },
        {
          title: t('legal.items.disclaimer'),
          href: Routes.Disclaimer,
          external: false,
        },
      ],
    },
  ];
}
