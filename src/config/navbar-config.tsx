'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Compass,
  Download,
  Gamepad2,
  MessageCircle,
  Sparkles,
  Wand2,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('play.title'),
      href: Routes.Play,
      external: false,
      icon: <Gamepad2 className="size-4" />,
    },
    {
      title: t('guides.title'),
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
    },
    {
      title: t('spells.title'),
      href: Routes.Spells,
      external: false,
      icon: <Wand2 className="size-4" />,
    },
    {
      title: t('research.title'),
      href: Routes.Research,
      external: false,
      icon: <Compass className="size-4" />,
    },
    {
      title: t('steam.title'),
      href: Routes.Steam,
      external: false,
      icon: <Sparkles className="size-4" />,
    },
    {
      title: t('download.title'),
      href: Routes.Download,
      external: false,
      icon: <Download className="size-4" />,
    },
    {
      title: t('discord.title'),
      href: Routes.Discord,
      external: false,
      icon: <MessageCircle className="size-4" />,
    },
  ];
}
