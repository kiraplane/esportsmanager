'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BadgeDollarSign,
  BookOpen,
  CalendarClock,
  Database,
  Download,
  Gamepad2,
  MessageCircle,
  ShieldAlert,
  Swords,
  Trophy,
  UsersRound,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('guides.title'),
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'Guide hub',
          description: 'All Esports Manager 2026 decision guides.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner guide',
          description:
            'First-save route for staff, scouting, contracts, and training.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Create organization',
          description:
            'Difficulty, starting roster, staff, sponsors, and setup.',
          href: Routes.CreateOrganization,
          external: false,
          icon: <UsersRound className="size-4" />,
        },
        {
          title: 'Should you buy?',
          description: 'Buyer-focused review and demo checklist.',
          href: Routes.Review,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
      ],
    },
    {
      title: t('romance.title'),
      href: Routes.ScoutingTransfers,
      external: false,
      icon: <UsersRound className="size-4" />,
      items: [
        {
          title: 'Scouting and transfers',
          description: 'Find role fits without breaking wages.',
          href: Routes.ScoutingTransfers,
          external: false,
          icon: <UsersRound className="size-4" />,
        },
        {
          title: 'Contracts and budget',
          description: 'Plan wages, transfer cash, and operating room.',
          href: Routes.ContractsBudget,
          external: false,
          icon: <BadgeDollarSign className="size-4" />,
        },
        {
          title: 'Training and morale',
          description: 'Build skills without crushing the roster.',
          href: Routes.TrainingMorale,
          external: false,
          icon: <Trophy className="size-4" />,
        },
      ],
    },
    {
      title: t('tools.title'),
      href: Routes.BestTactics,
      external: false,
      icon: <Swords className="size-4" />,
      items: [
        {
          title: 'Best tactics',
          description: 'Map, role, morale, economy, and patch-aware tactics.',
          href: Routes.BestTactics,
          external: false,
          icon: <Swords className="size-4" />,
        },
        {
          title: 'Tournaments and majors',
          description: 'Plan events around readiness, morale, and sponsors.',
          href: Routes.TournamentsMajors,
          external: false,
          icon: <Trophy className="size-4" />,
        },
        {
          title: 'Sponsors and brand',
          description:
            'Use sponsorships and brand growth without overextending.',
          href: Routes.SponsorsBrand,
          external: false,
          icon: <BadgeDollarSign className="size-4" />,
        },
      ],
    },
    {
      title: t('platforms.title'),
      href: Routes.Platforms,
      external: false,
      icon: <Gamepad2 className="size-4" />,
      items: [
        {
          title: 'Release date',
          description: 'Steam launch, price status, demo, and roadmap watch.',
          href: Routes.ReleaseDate,
          external: false,
          icon: <CalendarClock className="size-4" />,
        },
        {
          title: 'Demo guide',
          description: 'What to test before buying.',
          href: Routes.Demo,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Platforms',
          description: 'Steam, mobile roadmap, and platform status.',
          href: Routes.Platforms,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Steam Deck',
          description: 'Readability, keyboard, SteamOS, and settings notes.',
          href: Routes.SteamDeck,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
      ],
    },
    {
      title: t('database.title'),
      href: Routes.Emdb,
      external: false,
      icon: <Database className="size-4" />,
      items: [
        {
          title: 'EMDB guide',
          description:
            'Steam sign-in, roster edits, exports, and custom data safety.',
          href: Routes.Emdb,
          external: false,
          icon: <Database className="size-4" />,
        },
        {
          title: t('download.title'),
          description: 'Steam download, demo, and unsafe mirror warnings.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
        {
          title: t('discord.title'),
          description:
            'Official Discord, Reddit, X, YouTube, and support links.',
          href: Routes.Discord,
          external: false,
          icon: <MessageCircle className="size-4" />,
        },
        {
          title: 'Mods safety',
          description:
            'Custom databases versus cheats, cracks, and fake downloads.',
          href: Routes.ModsAndCheats,
          external: false,
          icon: <ShieldAlert className="size-4" />,
        },
      ],
    },
  ];
}
