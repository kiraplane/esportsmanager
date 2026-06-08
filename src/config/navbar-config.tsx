'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Download,
  HeartPulse,
  ListChecks,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('allEndings.title'),
      href: Routes.AllEndings,
      external: false,
      icon: <ListChecks className="size-4" />,
    },
    {
      title: t('ending20.title'),
      href: Routes.Ending20,
      external: false,
      icon: <Sparkles className="size-4" />,
    },
    {
      title: t('silasRoute.title'),
      href: Routes.SilasRoute,
      external: false,
      icon: <HeartPulse className="size-4" />,
    },
    {
      title: t('miniGames.title'),
      href: Routes.MiniGames,
      external: false,
      icon: <BookOpen className="size-4" />,
    },
    {
      title: t('guides.title'),
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
    },
    {
      title: t('download.title'),
      href: Routes.Download,
      external: false,
      icon: <Download className="size-4" />,
    },
    {
      title: t('contentWarnings.title'),
      href: Routes.ContentWarnings,
      external: false,
      icon: <ShieldAlert className="size-4" />,
    },
  ];
}
