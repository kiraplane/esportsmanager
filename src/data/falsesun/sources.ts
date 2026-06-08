import type { DataSource, GameFact, KeywordMatrixItem } from './types';

export const checkedAt = '2026-06-08';

export const siteFacts = {
  siteName: 'The False Sun',
  domain: 'https://www.thefalsesun.wiki',
  canonicalHost: 'www.thefalsesun.wiki',
  gameName: 'The False Sun',
  creator: 'Oniray',
  officialItchUrl: 'https://oniray.itch.io/the-false-sun',
  supportEmail: 'hello@thefalsesun.wiki',
  officialCoverImage:
    'https://img.itch.zone/aW1nLzI3NTUxNjgxLmpwZw==/original/96%2Fy%2FZ.jpg',
  officialHeroImage:
    'https://img.itch.zone/aW1nLzI3NTY2NDg0LmpwZw==/original/X6dXMg.jpg',
  genre: 'Visual novel',
  releaseSnapshot:
    'Released visual novel on itch.io; official page showed Windows, macOS, Linux, and Android downloads when checked on 2026-06-08.',
  positioning:
    'A lightweight, spoiler-marked walkthrough and all endings guide for players stuck on routes, mini-games, and Ending 20.',
} as const;

export const gameFacts: GameFact[] = [
  {
    label: 'Game type',
    value:
      'Mature visual novel with romance, horror, cozy farm scenes, and route choices.',
  },
  {
    label: 'Known platforms',
    value: 'Windows, macOS, Linux, and Android on the official itch.io page.',
  },
  {
    label: 'Main search demand',
    value:
      'All endings, Ending 20, Silas route, Kyle route, mini-games, and safe download questions.',
  },
  {
    label: 'Content policy',
    value:
      'Spoiler-heavy walkthroughs are allowed; explicit adult material, unsafe APKs, and copied game text are not.',
  },
];

export const contentWarnings = [
  'Mature-audience game',
  'Physical and emotional violence',
  'Disturbing themes',
  'Flashing visual effects',
  'Sudden or loud sound effects',
  'Spoilers on walkthrough pages',
];

export const sources: DataSource[] = [
  {
    type: 'official',
    label: 'Official itch.io page',
    url: siteFacts.officialItchUrl,
    checkedAt,
    confidence: 'high',
    note: 'Used for title, creator, platform list, mature content warnings, genre tags, and download direction.',
  },
  {
    type: 'community',
    label: 'itch.io comment demand',
    url: 'https://oniray.itch.io/the-false-sun#comments',
    checkedAt,
    confidence: 'medium',
    note: 'Recent players asked about Ending 20, all endings, mini-game skipping, iOS support, and language availability.',
  },
  {
    type: 'transcript',
    label: 'PVpgRF8nC1M all endings transcript',
    url: 'https://sozai.app/transcript/he-just-wanted-love-finale-endings/',
    checkedAt,
    confidence: 'medium',
    note: 'Russian YouTube transcript used only as cross-check material for route order and ending clues.',
  },
  {
    type: 'transcript',
    label: '9iG-Ho_Uas8 walkthrough transcript',
    url: 'https://sozai.app/transcript/nashe-poslednee-leto-vmeste-false-sun-walkthrough/',
    checkedAt,
    confidence: 'medium',
    note: 'Russian YouTube transcript used to cross-check the low-chance chicken / Ending 20 clue.',
  },
];

export const keywordMatrix: KeywordMatrixItem[] = [
  {
    keyword: 'the false sun all endings',
    intent: 'Find every ending and avoid missing gallery slots.',
    route: '/all-endings',
    priority: 'P0',
    status: 'keep',
    evidence:
      'itch comments and YouTube transcripts both focus on all endings.',
    notes:
      'Primary page; label route notes as unofficial until each branch is replay-verified.',
  },
  {
    keyword: 'the false sun ending 20',
    intent: 'Solve the most confusing missing ending.',
    route: '/ending-20',
    priority: 'P0',
    status: 'keep',
    evidence: 'Recent itch comments ask how to get Ending 20.',
    notes:
      'Low-chance chicken/tutorial branch; include probability caveat and retry advice.',
  },
  {
    keyword: 'the false sun walkthrough',
    intent: 'General route help for stuck players.',
    route: '/guides',
    priority: 'P0',
    status: 'keep',
    evidence: 'SERP contains walkthrough and all-endings videos/transcripts.',
    notes: 'Homepage and guide index should answer this query quickly.',
  },
  {
    keyword: 'the false sun silas route',
    intent: 'Route choices centered on Silas.',
    route: '/silas-route',
    priority: 'P1',
    status: 'keep',
    evidence: 'Community reactions and videos focus heavily on Silas outcomes.',
    notes: 'Spoiler-marked route guide, not a character wiki page.',
  },
  {
    keyword: 'the false sun kyle route',
    intent: 'Find Kyle-related endings and safer route outcomes.',
    route: '/kyle-route',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Walkthrough transcript and community comments mention Kyle route outcomes.',
    notes: 'Smaller page than Silas, but useful for ending grouping.',
  },
  {
    keyword: 'the false sun mini games',
    intent:
      'Understand farm chores, tutorial mistakes, QR code, and skip questions.',
    route: '/mini-games',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Players mention mini-game difficulty and skip demand in comments.',
    notes:
      'Include safe advice only; do not provide modded clients or APK workarounds.',
  },
  {
    keyword: 'the false sun download android mac',
    intent: 'Find official download and troubleshoot platform availability.',
    route: '/download',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Official itch page lists Android/macOS/Windows/Linux; comments ask platform questions.',
    notes: 'Official itch link first; avoid APK mirrors.',
  },
  {
    keyword: 'the false sun book fandom',
    intent: 'Different work by R. Scott Bakker.',
    route: '/',
    priority: 'P2',
    status: 'ignore',
    evidence: 'Search results mix with Second Apocalypse wiki and Goodreads.',
    notes:
      'Do not build pages for the book/comic; mention this site covers the Oniray game only.',
  },
];
