import type { DataSource, GameFact, KeywordMatrixItem } from './types';

export const checkedAt = '2026-06-24';

export const siteFacts = {
  siteName: 'Orb of Creation',
  domain: 'https://www.orbofcreation.wiki',
  canonicalHost: 'www.orbofcreation.wiki',
  gameName: 'Orb of Creation',
  creator: 'MarpleGames',
  officialSteamUrl:
    'https://store.steampowered.com/app/1910680/Orb_of_Creation/',
  officialItchUrl: 'https://marple.itch.io/orb-of-creation',
  officialDiscordUrl: 'https://discord.gg/JpNRYUud57',
  patreonUrl:
    'https://www.patreon.com/marplegames?utm_source=orbofcreationwiki&utm_medium=site',
  supportEmail: 'hello@orbofcreation.wiki',
  officialCoverImage: '/orbofcreation/orb-of-creation-og.png',
  officialHeroImage: '/orbofcreation/orb-of-creation-logo.png',
  officialScreenshot: '/orbofcreation/orb-of-creation-screenshot.png',
  browserGameUrl: '/games/orb-of-creation/index.html',
  genre: 'Incremental puzzle strategy',
  releaseSnapshot:
    'Steam lists Orb of Creation as a full release on 23 Jun, 2026 after early access began on 31 Mar, 2022. The official itch.io build remains a browser-playable Dev 0.5.4 WebGL version.',
  positioning:
    'An unofficial player-first wiki for Orb of Creation guides, play online, spells, research, rituals, alchemy, New Game+, Steam, itch.io, Discord, and safe platform questions.',
} as const;

export const siteDescription =
  'Orb of Creation wiki with play online, beginner guide, spells, research, rituals, alchemy, New Game+, Steam, itch.io, Discord, and safe download help.';

export const gameFacts: GameFact[] = [
  {
    label: 'Game type',
    value:
      'Active incremental-puzzle strategy about rebuilding the world with magic, resources, upgrades, artifacts, alchemy, and rituals.',
  },
  {
    label: 'Official release',
    value:
      'Steam full release on 23 Jun, 2026; early access began on 31 Mar, 2022.',
  },
  {
    label: 'Playable here',
    value:
      'The play-online page self-hosts the official itch.io WebGL Dev 0.5.4 build with permission.',
  },
  {
    label: 'Main guide clusters',
    value:
      'Beginner route, spells, research, rituals, alchemy and druidry, New Game+, Steam, itch.io, Discord, mobile and APK safety.',
  },
];

export const sourceList: DataSource[] = [
  {
    type: 'official',
    label: 'Steam store page',
    url: siteFacts.officialSteamUrl,
    checkedAt,
    confidence: 'high',
    note: 'Used for official title, developer, publisher, release date, platform support, review snapshot, and feature wording.',
  },
  {
    type: 'official',
    label: 'Steam 1.0 announcement',
    url: 'https://steamcommunity.com/games/1910680/announcements/detail/688634814372254859',
    checkedAt,
    confidence: 'high',
    note: 'Confirms 1.0 release and official trailer signal.',
  },
  {
    type: 'official',
    label: 'Steam release-date announcement',
    url: 'https://steamcommunity.com/games/1910680/announcements/detail/701015907648930551',
    checkedAt,
    confidence: 'high',
    note: 'Confirms New Game+, randomized discovery, soft requirements, and revamped Druidry, Alchemy, and Rituals.',
  },
  {
    type: 'official',
    label: 'Official itch.io page',
    url: siteFacts.officialItchUrl,
    checkedAt,
    confidence: 'high',
    note: 'Used for browser-play build, Discord URL, creator page, itch theme colors, and legacy Dev 0.5.4 tips.',
  },
  {
    type: 'serper',
    label: 'Serper long-tail discovery',
    url: 'https://google.serper.dev/',
    checkedAt,
    confidence: 'medium',
    note: 'Balanced discovery on Orb of Creation, wiki, guide, and play online seeds. Used for candidate keywords, not batch rank verification.',
  },
  {
    type: 'wiki',
    label: 'Orb Of Creation Fandom',
    url: 'https://orb-of-creation.fandom.com/wiki/Orb_Of_Creation_Wiki',
    checkedAt,
    confidence: 'medium',
    note: 'Used as a competitor/source lead for systems such as technology, spells, artifacts, aspects, and concepts. Public pages do not copy database prose.',
  },
  {
    type: 'youtube',
    label: 'Orb of Creation beginner guide',
    url: 'https://www.youtube.com/watch?v=r6zTbEVlYR4',
    checkedAt,
    confidence: 'medium',
    note: 'Selected because Serper surfaced beginner guide demand and the guide topic directly matches early-game intent.',
  },
  {
    type: 'youtube',
    label: 'Orb of Creation official 1.0 trailer',
    url: 'https://www.youtube.com/watch?v=o1E1gSOUpPs',
    checkedAt,
    confidence: 'high',
    note: 'Steam embeds this as the 1.0 announcement trailer; used as official media context.',
  },
];

export const keywordMatrix: KeywordMatrixItem[] = [
  {
    keyword: 'Orb of Creation',
    intent: 'Head term, official game context, and player entry point.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Steam and itch.io are top organic results; Serper autocomplete shows the exact head term.',
    notes: 'Homepage should be a real wiki hub, not a thin landing page.',
  },
  {
    keyword: 'Orb of Creation wiki',
    intent:
      'Find systems, spells, research, rituals, and a structured guide index.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Serper autocomplete and related searches include wiki, wiki guide, Fandom, aspects, research, and spells.',
    notes:
      'Use homepage plus /guides and system guide pages rather than a large fake database.',
  },
  {
    keyword: 'Orb of Creation play online',
    intent: 'Launch the browser version directly.',
    route: '/play-online',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Serper autocomplete includes play online, play, online, and unblocked; organic results show itch.io and CrazyGames.',
    notes:
      'Self-host the authorized itch WebGL build and explain the Steam 1.0 difference.',
  },
  {
    keyword: 'Orb of Creation online',
    intent: 'Play in a browser and understand save/platform limitations.',
    route: '/play-online',
    priority: 'P0',
    status: 'keep',
    evidence: 'Related searches include Orb of creation online.',
    notes: 'Fold into the same canonical play-online page.',
  },
  {
    keyword: 'Orb of Creation guide',
    intent: 'General guide and progression help.',
    route: '/guides',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Autocomplete includes guide, guide reddit, beta guide, tips, walkthrough; YouTube has a beginner guide result.',
    notes:
      'Guide hub should route players by first-hour, systems, and release-platform questions.',
  },
  {
    keyword: 'Orb of Creation beginner guide',
    intent: 'First-hour route, spell setup, upgrades, and what to avoid.',
    route: '/guides/beginner-guide',
    priority: 'P0',
    status: 'keep',
    evidence: 'Serper top organic includes a YouTube beginner guide result.',
    notes: 'Launch as a hand-authored YouTube-supported guide.',
  },
  {
    keyword: 'Orb of Creation research',
    intent: 'Understand technology/research choices and expert payoffs.',
    route: '/research',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Related searches include research; Steam 1.0 notes mention expert research payoffs.',
    notes: 'Use a systems guide, not a complete research database at launch.',
  },
  {
    keyword: 'Orb of Creation spells',
    intent: 'Spell types, setup, power, recharge, and early casting logic.',
    route: '/spells',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Related searches include spells, and both Steam and itch descriptions center spell-casting.',
    notes: 'Core system article and homepage module.',
  },
  {
    keyword: 'Orb of Creation rituals guide',
    intent: 'Understand late large spells and ritual decision logic.',
    route: '/rituals',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Autocomplete/related searches include rituals guide; Steam 1.0 notes say rituals are gigantic, powerful spells.',
    notes: 'Launch as systems guide with 1.0 caveat.',
  },
  {
    keyword: 'Orb of Creation Steam',
    intent: 'Find official Steam page, release status, and 1.0 differences.',
    route: '/steam',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Autocomplete and related searches include Steam; Steam is the current official 1.0 release source.',
    notes: 'Dedicated official bridge page.',
  },
  {
    keyword: 'Orb of Creation itch io',
    intent:
      'Find the official free browser/itch page and understand old build status.',
    route: '/itch-io',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Related searches include itch io; itch page is browser playable.',
    notes: 'Bridge page should explain Dev 0.5.4 vs Steam 1.0.',
  },
  {
    keyword: 'Orb of Creation discord',
    intent: 'Join official community and update discussion.',
    route: '/discord',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Autocomplete and related searches include discord; itch page links official Discord.',
    notes: 'Official link page plus safe community expectations.',
  },
  {
    keyword: 'Orb of Creation mobile',
    intent: 'Check whether there is an official mobile version.',
    route: '/mobile',
    priority: 'P1',
    status: 'keep',
    evidence: 'Autocomplete includes android and mobile.',
    notes:
      'Answer conservatively: browser play may work, but official Steam is Windows/Mac and the site does not provide APK files.',
  },
  {
    keyword: 'Orb of Creation apk',
    intent: 'Find an APK or mobile mirror.',
    route: '/mobile',
    priority: 'P1',
    status: 'keep',
    evidence: 'Serper related searches include APK.',
    notes:
      'Safety page only. Do not host APK, mod APK, or mirror instructions.',
  },
  {
    keyword: 'Orb of Creation unblocked',
    intent: 'Play despite school/work network blocks.',
    route: '/play-online',
    priority: 'P2',
    status: 'watch',
    evidence: 'Autocomplete includes unblocked.',
    notes:
      'Do not market bypass behavior. The play page can mention official browser play and saves.',
  },
  {
    keyword: 'Orb of Creation save editor',
    intent: 'Modify saves or bypass progression.',
    route: '/guides',
    priority: 'P2',
    status: 'ignore',
    evidence: 'Related searches include save editor.',
    notes:
      'Do not build cheat/editor content. Keep progression advice legitimate.',
  },
  {
    keyword: 'Orb of creation Godfall',
    intent: 'Different game/item with same words.',
    route: '/',
    priority: 'P2',
    status: 'ignore',
    evidence: 'Serper top organic includes a Godfall Fextralife result.',
    notes: 'Clarify this site covers the MarpleGames incremental game only.',
  },
];
