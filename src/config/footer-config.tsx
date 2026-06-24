'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { useTranslations } from 'next-intl';

export function useFooterLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.footer');

  return [
    {
      title: t('play.title'),
      items: [
        {
          title: t('play.items.online'),
          href: Routes.Play,
          external: false,
        },
        {
          title: t('play.items.steam'),
          href: Routes.Steam,
          external: false,
        },
        {
          title: t('play.items.itchIo'),
          href: Routes.ItchIo,
          external: false,
        },
        {
          title: t('play.items.download'),
          href: Routes.Download,
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
          title: t('guides.items.beginner'),
          href: Routes.BeginnerGuide,
          external: false,
        },
        {
          title: t('guides.items.spells'),
          href: Routes.Spells,
          external: false,
        },
        {
          title: t('guides.items.research'),
          href: Routes.Research,
          external: false,
        },
        {
          title: t('guides.items.rituals'),
          href: Routes.Rituals,
          external: false,
        },
      ],
    },
    {
      title: t('official.title'),
      items: [
        {
          title: t('official.items.discord'),
          href: Routes.Discord,
          external: false,
        },
        {
          title: t('official.items.mobile'),
          href: Routes.Mobile,
          external: false,
        },
        {
          title: t('official.items.disclaimer'),
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
      ],
    },
  ];
}
