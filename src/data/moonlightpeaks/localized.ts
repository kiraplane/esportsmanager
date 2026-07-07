import type { Locale } from 'next-intl';
import { featuredGuides, getGuide, guides, siteDescription } from './guides';
import { gameFacts, keywordMatrix } from './sources';
import type { GameFact, Guide, GuideFaq } from './types';

export interface HomeLinkCopy {
  title: string;
  body: string;
}

export interface HomeContent {
  badge: string;
  metadataTitle: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  scopeNote: string;
  siteShapeEyebrow: string;
  siteShapeTitle: string;
  siteShapeBody: string;
  systemsEyebrow: string;
  systemsTitle: string;
  systemsBody: string;
  coreGuidesEyebrow: string;
  coreGuidesTitle: string;
  allGuidesButton: string;
  currentFactsTitle: string;
  findPageTitle: string;
  primaryLinks: {
    beginner: HomeLinkCopy;
    platforms: HomeLinkCopy;
    romance: HomeLinkCopy;
    farming: HomeLinkCopy;
    magic: HomeLinkCopy;
  };
  secondaryLinks: {
    release: HomeLinkCopy;
    demo: HomeLinkCopy;
    switch: HomeLinkCopy;
    steamDeck: HomeLinkCopy;
    cheats: HomeLinkCopy;
    discord: HomeLinkCopy;
  };
  routeLabels: Record<string, string>;
  coreRouteItems: Array<{
    keyword: string;
    route: string;
    label: string;
    intent: string;
  }>;
  faq: GuideFaq[];
}

export interface GuidesIndexContent {
  badge: string;
  title: string;
  intro: string;
  readGuide: string;
  faq: GuideFaq[];
}

export interface GuideArticleUi {
  sectionsTitle: string;
  videoPrefix: string;
  videoSuffix: string;
  officialTitle: string;
  officialBody: string;
  officialLinkLabel: string;
  relatedTitle: string;
  faqTitle: string;
  categoryLabels: Record<Guide['category'], string>;
  difficultyLabels: Record<Guide['difficulty'], string>;
}

export function getLocalizedGuide(slug: string, _locale?: Locale | string) {
  return getGuide(slug);
}

export function getLocalizedGuides(_locale?: Locale | string) {
  return guides;
}

export function getLocalizedFeaturedGuides(_locale?: Locale | string) {
  return featuredGuides;
}

export function getLocalizedSiteDescription(_locale?: Locale | string) {
  return siteDescription;
}

export function getLocalizedGameFacts(_locale?: Locale | string): GameFact[] {
  return gameFacts;
}

export function getHomeContent(_locale?: Locale | string): HomeContent {
  const coreRouteItems = keywordMatrix
    .filter((item) => item.status === 'keep')
    .slice(0, 24)
    .map((item) => ({
      keyword: item.keyword,
      route: item.route,
      label: routeLabels[item.route] ?? item.route,
      intent: item.intent,
    }));

  return {
    badge: 'Independent Moonlight Peaks guide hub',
    metadataTitle:
      'Moonlight Peaks Wiki - Guides, Romance, Platforms and Farming',
    title: 'Moonlight Peaks',
    intro:
      'A cozy-gothic wiki for launch week: platforms, demo, first-week route, romance, gifts, farming, magic, Nokturna, Steam Deck, Switch, and safe cheats.',
    primaryCta: 'Start beginner guide',
    secondaryCta: 'Choose platform',
    scopeNote:
      'Updated for the July 2026 launch window with platform, romance, farming, magic, database, and tool coverage.',
    siteShapeEyebrow: 'Launch coverage',
    siteShapeTitle: 'Built around what new vampires search first',
    siteShapeBody:
      'The page set covers wiki, guides, release date, demo, platforms, Switch, Steam Deck, romance options, dateable characters, gifts, farming, magic, fishing, Nokturna, safe cheats, download, and Discord intent without inventing codes.',
    systemsEyebrow: 'Core loop',
    systemsTitle:
      'Farm by moonlight, build relationships, and use magic to reduce chores',
    systemsBody:
      'Moonlight Peaks mixes night farming, supernatural families, romance routes, spells, potions, shapeshifting, collecting, fishing, and Nokturna. The site prioritizes decisions players make in the first week.',
    coreGuidesEyebrow: 'Core guides',
    coreGuidesTitle: 'Choose the page by the decision in front of you',
    allGuidesButton: 'All guides',
    currentFactsTitle: 'Current official snapshot',
    findPageTitle: 'Keyword and page map',
    primaryLinks: {
      beginner: {
        title: 'Beginner Guide',
        body: 'First-week route for farm setup, social habits, spells, storage, and quest direction.',
      },
      platforms: {
        title: 'Platforms',
        body: 'Pick between Steam, Mac, Steam Deck, Switch, Switch 2, and Android.',
      },
      romance: {
        title: 'Romance',
        body: 'Plan dateables, families, gifts, heart events, and commitment timing.',
      },
      farming: {
        title: 'Farming',
        body: 'Use the night loop, enchanted crops, livestock, storage, and early money carefully.',
      },
      magic: {
        title: 'Magic',
        body: 'Turn spells, potions, and shapeshifting into practical farm infrastructure.',
      },
    },
    secondaryLinks: {
      release: {
        title: 'Release Date',
        body: 'Check why Steam shows Jul 6 while broader launch messaging uses Jul 7.',
      },
      demo: {
        title: 'Demo',
        body: 'Use the demo for controls and platform checks without overplanning carry-over.',
      },
      switch: {
        title: 'Switch',
        body: 'Compare Switch and Switch 2 release, price, demo, and physical-copy questions.',
      },
      steamDeck: {
        title: 'Steam Deck',
        body: 'Check controls, text readability, battery, and PC/Mac requirements.',
      },
      cheats: {
        title: 'Cheats Safety',
        body: 'Avoid fake codes and understand trainer, mod, and save risks.',
      },
      discord: {
        title: 'Discord',
        body: 'Use official community links and ask better support questions.',
      },
    },
    routeLabels,
    coreRouteItems,
    faq: [
      {
        question: 'Is this an official Moonlight Peaks website?',
        answer:
          'No. It is an independent guide hub. Use the official Moonlight Peaks site, Steam, Nintendo, Google Play, and publisher channels for official updates.',
      },
      {
        question: 'What should I read first?',
        answer:
          'Start with the beginner guide if you already own the game, or the platforms page if you are still choosing where to play.',
      },
      {
        question: 'Are there Moonlight Peaks codes?',
        answer:
          'No verified official redeem-code system was found. The cheats page explains trainer/mod risks without inventing codes.',
      },
      {
        question: 'Why are some pages marked as launch guidance?',
        answer:
          'The game just launched, so exact gift tables, fish lists, and card databases should be updated only after live-game data is stable.',
      },
    ],
  };
}

export function getGuidesIndexContent(
  _locale?: Locale | string
): GuidesIndexContent {
  return {
    badge: 'Moonlight Peaks guides',
    title: 'Moonlight Peaks Guide Hub',
    intro:
      'Choose a guide by intent: beginner route, release and demo status, platform picker, Switch, Steam Deck, romance, characters, gifts, farming, magic, Nokturna, fishing, cheats, download, or Discord.',
    readGuide: 'Read guide',
    faq: [
      {
        question: 'Which Moonlight Peaks guide should I read first?',
        answer:
          'Read the beginner guide if you are starting a save. Read platforms first if you are deciding between Steam, Switch, Switch 2, Steam Deck, Mac, and Android.',
      },
      {
        question: 'Are these guides based on the full game or demo?',
        answer:
          'They prioritize official launch information and current player demand, with demo notes kept separate when exact live-game data is still being verified.',
      },
      {
        question: 'Will you add full gift, fish, and Nokturna databases?',
        answer:
          'Yes when live-game data is stable enough. At launch, decision guides are safer than thin or copied tables.',
      },
    ],
  };
}

export function getGuideArticleUi(_locale?: Locale | string): GuideArticleUi {
  return {
    sectionsTitle: 'Sections',
    videoPrefix: 'Walkthrough cross-check:',
    videoSuffix: 'use it as supporting context, not a required script.',
    officialTitle: 'Official links',
    officialBody:
      'Use the official website and storefronts for current Moonlight Peaks platform, patch, demo, and purchase status.',
    officialLinkLabel: 'Open official Steam page',
    relatedTitle: 'Related pages',
    faqTitle: 'FAQ',
    categoryLabels: {
      Start: 'Start',
      Platform: 'Platform',
      Relationships: 'Relationships',
      Farming: 'Farming',
      Systems: 'Systems',
      Walkthrough: 'Walkthrough',
      Official: 'Official',
      Safety: 'Safety',
    },
    difficultyLabels: {
      Beginner: 'Beginner',
      Intermediate: 'Intermediate',
      Advanced: 'Advanced',
      Status: 'Status',
    },
  };
}

export const routeLabels: Record<string, string> = {
  '/': 'Moonlight Peaks Wiki',
  '/guides': 'Guide Hub',
  '/guides/beginner-guide': 'Beginner Guide',
  '/release-date': 'Release Date',
  '/demo': 'Demo Guide',
  '/platforms': 'Platforms',
  '/switch': 'Switch and Switch 2',
  '/steam-deck': 'Steam Deck',
  '/romance': 'Romance Guide',
  '/characters': 'Characters',
  '/database': 'Database',
  '/database/characters': 'Character DB',
  '/database/families': 'Family DB',
  '/database/locations': 'Location DB',
  '/database/items': 'Item DB',
  '/tools': 'Tools',
  '/tools/platform-picker': 'Platform Picker',
  '/tools/romance-tracker': 'Romance Tracker',
  '/tools/item-tracker': 'Item Tracker',
  '/tools/farming-profit-calculator': 'Farming Calculator',
  '/gifts': 'Gift Guide',
  '/farming': 'Farming Guide',
  '/magic': 'Magic and Spells',
  '/nokturna': 'Nokturna Guide',
  '/walkthrough': 'Walkthrough',
  '/guides/fishing-guide': 'Fishing Guide',
  '/cheats': 'Cheats Safety',
  '/download': 'Download Guide',
  '/discord': 'Discord Guide',
  '/disclaimer': 'Disclaimer',
};
