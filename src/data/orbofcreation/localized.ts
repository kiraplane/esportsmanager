import type { Locale } from 'next-intl';
import { featuredGuides, getGuide, guides, siteDescription } from './guides';
import { gameFacts, keywordMatrix, siteFacts } from './sources';
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
  playCta: string;
  steamCta: string;
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
    play: HomeLinkCopy;
    beginner: HomeLinkCopy;
    spells: HomeLinkCopy;
    research: HomeLinkCopy;
    steam: HomeLinkCopy;
  };
  secondaryLinks: {
    rituals: HomeLinkCopy;
    alchemy: HomeLinkCopy;
    download: HomeLinkCopy;
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
  sourceTitle: string;
  sourceBody: string;
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

export interface PlayOnlineContent {
  metadataTitle: string;
  metadataDescription: string;
  badge: string;
  title: string;
  intro: string;
  beginnerButton: string;
  steamButton: string;
  frameLabels: {
    title: string;
    loading: string;
    start: string;
    reset: string;
    fullscreen: string;
    exitFullscreen: string;
    open: string;
  };
  infoCards: Array<{
    key: string;
    title: string;
    body: string;
  }>;
  downloadGuide: string;
  officialItch: string;
  howEyebrow: string;
  howTitle: string;
  howBody: string;
  howCards: Array<{
    label: string;
    body: string;
  }>;
  afterEyebrow: string;
  afterTitle: string;
  guideLinks: Array<{
    title: string;
    href: string;
    body: string;
    icon: 'wand' | 'book' | 'flask';
  }>;
  faq: GuideFaq[];
}

export function getOrbLocale(_locale?: Locale | string) {
  return 'en';
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
    .slice(0, 10)
    .map((item) => ({
      keyword: item.keyword,
      route: item.route,
      label: routeLabels[item.route] ?? item.route,
      intent: item.intent,
    }));

  return {
    badge: 'Unofficial Orb of Creation wiki',
    metadataTitle: 'Orb of Creation Wiki - guides and play free online',
    title: 'Orb of Creation',
    intro:
      'Guides for the active incremental-puzzle game about rebuilding the world with spells, research, alchemy, rituals, and New Game+ decisions.',
    primaryCta: 'Start with the beginner guide',
    playCta: 'Play online',
    steamCta: 'Steam 1.0',
    scopeNote:
      'This site covers the MarpleGames incremental game only. It does not provide APK mirrors, save editors, cheats, or unofficial game files.',
    siteShapeEyebrow: 'Launch coverage',
    siteShapeTitle: 'Built around what players search first',
    siteShapeBody:
      'The page set focuses on wiki, guide, play online, Steam, itch.io, Discord, research, spells, rituals, mobile, and APK safety needs without pretending every 1.0 randomized discovery has a fixed database entry.',
    systemsEyebrow: 'Systems',
    systemsTitle:
      'Spells, research, alchemy, druidry, and rituals work together',
    systemsBody:
      'Orb of Creation is strongest when you connect systems around one bottleneck. Use these pages to decide what to improve next instead of buying every available upgrade.',
    coreGuidesEyebrow: 'Core guides',
    coreGuidesTitle: 'Read by the problem you are trying to solve',
    allGuidesButton: 'All guides',
    currentFactsTitle: 'Current official snapshot',
    findPageTitle: 'Keyword and page map',
    primaryLinks: {
      play: {
        title: 'Play Online',
        body: 'Launch the authorized self-hosted itch WebGL build and understand browser save limits.',
      },
      beginner: {
        title: 'Beginner Guide',
        body: 'A first-hour route for spells, upgrades, bottlenecks, and the Steam 1.0 difference.',
      },
      spells: {
        title: 'Spells',
        body: 'Read spell power, recharge, soft requirements, and when to rebuild your setup.',
      },
      research: {
        title: 'Research',
        body: 'Use technology and expert payoffs to connect systems instead of clearing a checklist.',
      },
      steam: {
        title: 'Steam 1.0',
        body: 'Confirm the 23 Jun, 2026 full release, New Game+, and platform notes.',
      },
    },
    secondaryLinks: {
      rituals: {
        title: 'Rituals',
        body: 'Plan giant spell commitments around resource prep and payoff timing.',
      },
      alchemy: {
        title: 'Alchemy and Druidry',
        body: 'Turn surplus into useful materials and harvest plant value at the right moment.',
      },
      download: {
        title: 'Download',
        body: 'Use official Steam and itch.io paths while avoiding APK and mirror risks.',
      },
      discord: {
        title: 'Discord',
        body: 'Find the official community link and ask better version-specific questions.',
      },
    },
    routeLabels,
    coreRouteItems,
    faq: [
      {
        question: 'Is this an official Orb of Creation website?',
        answer:
          'No. It is an unofficial fan guide site. Official game pages are Steam and MarpleGames itch.io.',
      },
      {
        question: 'Can I play Orb of Creation online here?',
        answer:
          'Yes. The play-online page self-hosts the official itch.io WebGL build with permission.',
      },
      {
        question: 'Why not create a complete spell database immediately?',
        answer:
          'Steam 1.0 uses randomized discovery across spells, glyphs, concepts, artifacts, alchemy, and rituals. The safer launch choice is decision guides first, then database pages only after stronger data.',
      },
    ],
  };
}

export function getGuidesIndexContent(
  _locale?: Locale | string
): GuidesIndexContent {
  return {
    badge: 'Orb of Creation guides',
    title: 'Orb of Creation Guide Hub',
    intro:
      'Choose a guide by intent: first-hour progress, play online, spells, research, rituals, alchemy, New Game+, Steam, itch.io, Discord, or mobile safety.',
    readGuide: 'Read guide',
    faq: [
      {
        question: 'Which Orb of Creation guide should I read first?',
        answer:
          'Start with the beginner guide, then move to spells or research depending on the bottleneck you see in-game.',
      },
      {
        question: 'Are these guides for Steam 1.0 or the browser build?',
        answer:
          'Official release and systems pages prioritize Steam 1.0. The play-online and itch.io pages clearly mark the older browser build.',
      },
      {
        question: 'Will you add more database pages?',
        answer:
          'Yes, when reliable 1.0 data supports them. At launch, the site focuses on high-intent player decisions rather than thin tables.',
      },
    ],
  };
}

export function getGuideArticleUi(_locale?: Locale | string): GuideArticleUi {
  return {
    sourceTitle: 'How to use this guide',
    sourceBody:
      'Start with the decision near the top, then use the sections below to tune the system that is blocking your next discovery.',
    sectionsTitle: 'Sections',
    videoPrefix: 'Guide video:',
    videoSuffix: 'use it as a supporting watch link.',
    officialTitle: 'Official links',
    officialBody:
      'Use Steam for the current 1.0 release and MarpleGames itch.io for the official browser build and community links.',
    officialLinkLabel: 'Open official Steam page',
    relatedTitle: 'Related pages',
    faqTitle: 'FAQ',
    categoryLabels: {
      Start: 'Start',
      Systems: 'Systems',
      Progression: 'Progression',
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

export function getPlayOnlineContent(_locale?: Locale | string) {
  return playOnlineContent;
}

export const routeLabels: Record<string, string> = {
  '/': 'Orb of Creation Wiki',
  '/play-online': 'Play Orb of Creation Online',
  '/guides': 'Guide Hub',
  '/guides/beginner-guide': 'Beginner Guide',
  '/spells': 'Spells Guide',
  '/research': 'Research Guide',
  '/rituals': 'Rituals Guide',
  '/guides/alchemy-druidry': 'Alchemy and Druidry',
  '/guides/new-game-plus': 'New Game+',
  '/steam': 'Steam 1.0',
  '/download': 'Download Guide',
  '/itch-io': 'itch.io Guide',
  '/discord': 'Discord Guide',
  '/mobile': 'Mobile and APK Safety',
  '/disclaimer': 'Disclaimer',
};

const playOnlineContent: PlayOnlineContent = {
  metadataTitle: 'Orb of Creation Play Online - Browser Version',
  metadataDescription:
    'Play Orb of Creation online with the self-hosted itch WebGL build, then learn browser save limits and when Steam 1.0 is better.',
  badge: 'Self-hosted browser build',
  title: 'Orb of Creation Play Online',
  intro:
    'Launch the authorized WebGL browser build, then use the guide links below to understand spells, research, and the difference between itch Dev 0.5.4 and Steam 1.0.',
  beginnerButton: 'Beginner guide',
  steamButton: 'Steam 1.0 notes',
  frameLabels: {
    title: `${siteFacts.gameName} browser build`,
    loading: 'Loading Orb of Creation...',
    start: 'Run game',
    reset: 'Reload game',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit fullscreen',
    open: 'Open direct',
  },
  infoCards: [
    {
      key: 'build',
      title: 'Browser build',
      body: 'This is the official itch.io WebGL Dev 0.5.4 build, self-hosted with permission for quick play.',
    },
    {
      key: 'steam',
      title: 'Steam is current 1.0',
      body: 'Steam is the full release source for New Game+, randomized discovery, and current balance.',
    },
    {
      key: 'saves',
      title: 'Protect browser saves',
      body: 'Private browsing, cache cleanup, or school devices can remove local progress. Use export/import when available.',
    },
  ],
  downloadGuide: 'Read safe download guide',
  officialItch: 'Open official itch.io page',
  howEyebrow: 'Before you start',
  howTitle: 'Give the WebGL build time to load',
  howBody:
    'The Unity data file is large. If you see a dark or gray screen, wait before refreshing. Once loaded, use the toolbar to reload, fullscreen, or open the game directly.',
  howCards: [
    {
      label: 'Use desktop when possible',
      body: 'The interface depends on reading tooltips and managing systems, so desktop browsers are much more comfortable than phones.',
    },
    {
      label: 'Check the version',
      body: 'Browser play teaches the feel of Orb of Creation, but the complete Steam 1.0 release has newer systems and balance.',
    },
    {
      label: 'Read after hitting a wall',
      body: 'When progress slows, use the spells, research, rituals, or alchemy guides instead of randomly buying upgrades.',
    },
    {
      label: 'Avoid mirrors',
      body: 'Use this page, Steam, and official itch.io. Do not download APK mirrors or save editors.',
    },
  ],
  afterEyebrow: 'Next steps',
  afterTitle: 'Turn the first session into a better run',
  guideLinks: [
    {
      title: 'Beginner Guide',
      href: '/guides/beginner-guide',
      body: 'Start by solving one bottleneck at a time.',
      icon: 'book',
    },
    {
      title: 'Spells Guide',
      href: '/spells',
      body: 'Tune power, recharge, and spell roles.',
      icon: 'wand',
    },
    {
      title: 'Research Guide',
      href: '/research',
      body: 'Pick technology by payoff, not by order.',
      icon: 'book',
    },
    {
      title: 'Alchemy and Druidry',
      href: '/guides/alchemy-druidry',
      body: 'Convert materials and plan harvest windows.',
      icon: 'flask',
    },
  ],
  faq: [
    {
      question: 'Is the online version free?',
      answer:
        'The browser build comes from the official itch.io page. Use Steam for the complete paid 1.0 release.',
    },
    {
      question: 'Can I fullscreen the game?',
      answer:
        'Yes. Use the fullscreen button in the toolbar. On some mobile browsers, opening the game directly may be more reliable.',
    },
    {
      question: 'Does this page bypass official platforms?',
      answer:
        'No. It self-hosts the authorized browser build and links clearly to Steam and itch.io.',
    },
  ],
};
