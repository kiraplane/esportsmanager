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
    tactics: HomeLinkCopy;
    emdb: HomeLinkCopy;
    review: HomeLinkCopy;
  };
  secondaryLinks: {
    release: HomeLinkCopy;
    demo: HomeLinkCopy;
    steamDeck: HomeLinkCopy;
    scouting: HomeLinkCopy;
    contracts: HomeLinkCopy;
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
    .filter((item) => item.status === 'keep' || item.status === 'watch')
    .slice(0, 28)
    .map((item) => ({
      keyword: item.keyword,
      route: item.route,
      label: routeLabels[item.route] ?? item.route,
      intent: item.intent,
    }));

  return {
    badge: 'Independent Esports Manager 2026 guide hub',
    metadataTitle:
      'Esports Manager 2026 Wiki - Guides, Tactics, EMDB and Steam',
    title: 'Esports Manager 2026',
    intro:
      'A compact wiki for new managers: first save, organization setup, scouting, transfers, contracts, training, tactics, tournaments, sponsors, EMDB, Steam, demo, and safe links.',
    primaryCta: 'Start beginner guide',
    secondaryCta: 'Open tactics guide',
    scopeNote:
      'Updated for the July 2026 Steam launch with official store, EMDB, Discord, Reddit, YouTube, and current autocomplete demand.',
    siteShapeEyebrow: 'Launch coverage',
    siteShapeTitle: 'Built around the decisions new managers search first',
    siteShapeBody:
      'The page set covers wiki, guides, tips, release date, price, demo, mobile status, review, Discord, X, EMDB, scouting, contracts, training, tactics, sponsors, and safe download intent without inventing codes or fake tier lists.',
    systemsEyebrow: 'Management loop',
    systemsTitle:
      'Scout players, manage money, protect morale, and react in live matches',
    systemsBody:
      'Esports Manager 2026 is not a shooter you directly play. It is a dense organization sim where roster quality, contracts, staff, sponsors, training, map prep, morale, and match-day calls all compound.',
    coreGuidesEyebrow: 'Core guides',
    coreGuidesTitle: 'Choose the page by the decision in front of you',
    allGuidesButton: 'All guides',
    currentFactsTitle: 'Current game snapshot',
    findPageTitle: 'Keyword and page map',
    primaryLinks: {
      beginner: {
        title: 'Beginner Guide',
        body: 'First-save route for organization setup, staff, scouting, contracts, training, and early tournaments.',
      },
      platforms: {
        title: 'Platforms',
        body: 'Steam is live now; mobile and extra platforms stay watch items until official stores appear.',
      },
      tactics: {
        title: 'Best Tactics',
        body: 'Use role fit, map comfort, economy, morale, and patch state instead of copying one fake meta.',
      },
      emdb: {
        title: 'EMDB',
        body: 'Understand the community database/editor, Steam sign-in, exports, and custom data safety.',
      },
      review: {
        title: 'Should You Buy?',
        body: 'A buyer-focused read on who should buy now, who should wait, and what the demo proves.',
      },
    },
    secondaryLinks: {
      release: {
        title: 'Release Date',
        body: 'Out now on Steam after the July 6, 2026 launch, with demo and live store status.',
      },
      demo: {
        title: 'Demo',
        body: 'Use the demo to test menus, scouting, contracts, staff, sponsors, and match simulation.',
      },
      steamDeck: {
        title: 'Steam Deck',
        body: 'Check text readability, on-screen keyboard use, default graphics, and SteamOS notes.',
      },
      scouting: {
        title: 'Scouting',
        body: 'Filter by role, wage, age, morale risk, and calendar fit before sending offers.',
      },
      contracts: {
        title: 'Contracts',
        body: 'Keep wages, transfers, operating cash, and sponsor timing in separate lanes.',
      },
      discord: {
        title: 'Discord',
        body: 'Use official community links for bugs, support, patches, EMDB, Reddit, X, and YouTube.',
      },
    },
    routeLabels,
    coreRouteItems,
    faq: [
      {
        question: 'Is this an official Esports Manager 2026 website?',
        answer:
          'No. It is an independent guide hub. Use Steam, esportsmanager.gg, EMDB.gg, Discord, and publisher/developer channels for official status.',
      },
      {
        question: 'What should I read first?',
        answer:
          'Start with the beginner guide if you own or demo the game. Use release date, demo, platforms, and review pages if you are still deciding whether to buy.',
      },
      {
        question: 'Are there Esports Manager 2026 codes?',
        answer:
          'No verified redeem-code system was found. The launch site deliberately does not publish a fake codes page.',
      },
      {
        question: 'Why is there no full player database here?',
        answer:
          'The official site links EMDB.gg for community roster/database work. This site explains how to use that ecosystem safely instead of scraping or mirroring stale data.',
      },
    ],
  };
}

export function getGuidesIndexContent(
  _locale?: Locale | string
): GuidesIndexContent {
  return {
    badge: 'Esports Manager 2026 guides',
    title: 'Esports Manager 2026 Guide Hub',
    intro:
      'Choose a guide by intent: beginner route, organization creation, scouting and transfers, contracts and budget, training and morale, tactics, tournaments, sponsors, release status, demo, platforms, EMDB, review, safe downloads, or official community links.',
    readGuide: 'Read guide',
    faq: [
      {
        question: 'Which guide should I read first?',
        answer:
          'Read the beginner guide first, then create organization, scouting, contracts, and tactics depending on where your save is stuck.',
      },
      {
        question: 'Are the guides based on the full game or demo?',
        answer:
          'They use official full-release information, Steam launch data, EMDB status, current YouTube/gameplay sources, and demo context only where it still helps.',
      },
      {
        question: 'Will you add more database pages?',
        answer:
          'Only when data can be sourced safely. EMDB is the right home for editable roster data; this site focuses on decisions and safe workflows.',
      },
    ],
  };
}

export function getGuideArticleUi(_locale?: Locale | string): GuideArticleUi {
  return {
    sectionsTitle: 'Sections',
    videoPrefix: 'Source reference:',
    videoSuffix:
      'used for visual and version context while the guide stays original.',
    officialTitle: 'Official links',
    officialBody:
      'Use Steam, the official website, EMDB, and official community links for current Esports Manager 2026 purchase, demo, patch, and database status.',
    officialLinkLabel: 'Open official Steam page',
    relatedTitle: 'Related pages',
    faqTitle: 'FAQ',
    categoryLabels: {
      Start: 'Start',
      Roster: 'Roster',
      Finance: 'Finance',
      Tactics: 'Tactics',
      Competition: 'Competition',
      Platform: 'Platform',
      Database: 'Database',
      Community: 'Community',
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
  '/': 'Esports Manager 2026 Wiki',
  '/guides': 'Guide Hub',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/create-organization': 'Create Organization',
  '/guides/scouting-transfers': 'Scouting and Transfers',
  '/guides/contracts-budget': 'Contracts and Budget',
  '/guides/training-morale': 'Training and Morale',
  '/best-tactics': 'Best Tactics',
  '/guides/tournaments-majors': 'Tournaments and Majors',
  '/guides/sponsors-brand': 'Sponsors and Brand',
  '/release-date': 'Release Date',
  '/demo': 'Demo Guide',
  '/platforms': 'Platforms',
  '/steam-deck': 'Steam Deck',
  '/emdb': 'EMDB Database',
  '/review': 'Review',
  '/download': 'Safe Download',
  '/discord': 'Discord and Links',
  '/mods-and-cheats': 'Mods and Cheats Safety',
  '/disclaimer': 'Disclaimer',
};
