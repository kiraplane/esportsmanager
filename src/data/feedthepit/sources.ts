import type { DataSource, GameFact, KeywordMatrixItem } from './types';

export const checkedAt = '2026-07-06';

export const siteFacts = {
  siteName: 'Feed The Pit',
  domain: 'https://www.feedthepit.wiki',
  canonicalHost: 'www.feedthepit.wiki',
  gameName: 'Feed The Pit',
  creator: 'Curious Fox Sox',
  browserCreator: 'mooncrustgames',
  officialSteamUrl: 'https://store.steampowered.com/app/3278290/Feed_The_Pit/',
  officialItchUrl: 'https://mooncrustgames.itch.io/feed-the-pit',
  officialDiscordUrl: 'https://discord.gg/WMdgNGB9Zc',
  officialYouTubeUrl: 'https://www.youtube.com/@CuriousFoxSox',
  supportEmail: 'hello@feedthepit.wiki',
  officialCoverImage: '/feedthepit/feed-the-pit-header.jpg',
  officialHeroImage: '/feedthepit/screenshots/feed-the-pit-investigation.jpg',
  officialScreenshot: '/feedthepit/screenshots/feed-the-pit-cards.jpg',
  browserGameUrl: '/games/feed-the-pit/index.html',
  genre: 'Story-driven investigative horror',
  releaseSnapshot:
    'Steam lists Feed The Pit as released on Jun 30, 2026. Act 1 is available at launch, with Acts 2 and 3 planned as free updates.',
  browserSnapshot:
    'The play-online route offers a short dark incremental browser experience. Keep it separate from the full Steam story campaign.',
  positioning:
    'A player-first Feed The Pit wiki for investigation cards, monster survival, walkthroughs, endings, achievements, Steam setup, safe download help, and browser play.',
} as const;

export const siteDescription =
  'Feed The Pit wiki for guides, cards, monsters, endings, Steam, download help, and browser play.';

export const gameFacts: GameFact[] = [
  {
    label: 'Steam game',
    value:
      'Curious Fox Sox story-driven investigative horror where magical cards narrow down targets in Carrister Valley while a mission monster hunts you.',
  },
  {
    label: 'Current release',
    value:
      'Act 1 launched on Steam on Jun 30, 2026. Acts 2 and 3 are planned as free future updates.',
  },
  {
    label: 'Browser play here',
    value:
      'The play-online page offers a short dark incremental browser experience. Treat it as quick play, not the full Steam story campaign.',
  },
  {
    label: 'Main guide clusters',
    value:
      'Beginner route, investigation cards, monster behavior notes, Act 1 walkthrough, ending guidance, achievements, rendering fixes, Steam, download, Discord, and mobile safety.',
  },
];

export const sourceList: DataSource[] = [
  {
    type: 'official',
    label: 'Steam store page',
    url: siteFacts.officialSteamUrl,
    checkedAt,
    confidence: 'high',
    note: 'Used for official title, developer, publisher, release date, Act 1 status, future Acts 2 and 3 wording, gameplay premise, tags, achievements, price snapshot, and system requirements.',
  },
  {
    type: 'official',
    label: 'Steam community hub and achievements',
    url: 'https://steamcommunity.com/app/3278290',
    checkedAt,
    confidence: 'medium',
    note: 'Used for community walkthrough demand, player playtime signals, achievement names, rendering issue demand, and early post-launch questions.',
  },
  {
    type: 'official',
    label: 'mooncrustgames itch.io browser build',
    url: siteFacts.officialItchUrl,
    checkedAt,
    confidence: 'high',
    note: 'Used for the self-hosted play-online page, browser-game description, 3-layer demo length, screenshots, tags, author, and HTML5 platform details.',
  },
  {
    type: 'official',
    label: 'Curious Fox Sox YouTube',
    url: siteFacts.officialYouTubeUrl,
    checkedAt,
    confidence: 'medium',
    note: 'Used for official trailer selection and official/community link cross-checks.',
  },
  {
    type: 'youtube',
    label: 'Feed The Pit Act 1 trailer',
    url: 'https://www.youtube.com/watch?v=tE6LWsWcoJ4',
    checkedAt,
    confidence: 'high',
    note: 'Official trailer from Curious Fox Sox, used as homepage and Steam-page visual context.',
  },
  {
    type: 'youtube',
    label: 'Feed The Pit full walkthrough and ending',
    url: 'https://www.youtube.com/watch?v=ujGtbuhPpo8',
    checkedAt,
    confidence: 'medium',
    note: 'Current launch-week walkthrough result used only as a cross-check for Act 1 walkthrough and ending-intent pages.',
  },
  {
    type: 'youtube',
    label: 'Feed The Pit Act 1 ending showcase',
    url: 'https://www.youtube.com/watch?v=MFydx2AjAdg',
    checkedAt,
    confidence: 'medium',
    note: 'Current launch-week ending/walkthrough result used as a source lead, not as transcript material.',
  },
  {
    type: 'serper',
    label: 'Google suggest fallback',
    url: 'https://suggestqueries.google.com/',
    checkedAt,
    confidence: 'medium',
    note: 'Serper and DataForSEO keys were not configured locally, so long-tail candidates were gathered from Google suggest, normal search, Steam, YouTube, and official pages.',
  },
];

export const keywordMatrix: KeywordMatrixItem[] = [
  {
    keyword: 'Feed The Pit',
    intent: 'Head term and game identity.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Steam is the official result and Google suggest returns the exact head term.',
    notes:
      'Homepage should explain both the Steam game and the browser play page without mixing them.',
  },
  {
    keyword: 'Feed The Pit wiki',
    intent:
      'Find a structured guide hub for mechanics, Act 1, endings, and platform questions.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence:
      'User requirement plus new-game SERP gap. No mature wiki exists yet.',
    notes: 'Launch as a compact wiki hub rather than a fake database.',
  },
  {
    keyword: 'Feed The Pit guide',
    intent: 'Beginner and general Act 1 help.',
    route: '/guides',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Steam Community surfaces walkthrough videos; YouTube has launch-week full-game guide videos.',
    notes: 'Guide index owns broad guide intent and links to focused articles.',
  },
  {
    keyword: 'Feed The Pit play online',
    intent: 'Play a browser version directly.',
    route: '/play-online',
    priority: 'P0',
    status: 'keep',
    evidence:
      'User requirement and Google suggest includes download/play-adjacent demand. itch provides an HTML5 build.',
    notes:
      'Use the authorized itch build and clearly mark it as the mooncrustgames browser companion.',
  },
  {
    keyword: 'Feed The Pit game',
    intent: 'Understand what the game is and where to play.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence: 'Google suggest returns "feed the pit game".',
    notes: 'Homepage and Steam page should answer this fast.',
  },
  {
    keyword: 'Feed The Pit Steam',
    intent: 'Official purchase, release, platform, and system requirements.',
    route: '/steam',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Google suggest returns "feed the pit steam"; Steam is official source.',
    notes: 'Use Steam page for current Act 1 and Vulkan requirement notes.',
  },
  {
    keyword: 'Feed The Pit download',
    intent: 'Safe install/download path.',
    route: '/download',
    priority: 'P0',
    status: 'keep',
    evidence: 'Google suggest returns "feed the pit download".',
    notes:
      'Recommend Steam for the full release and this site for authorized browser play only.',
  },
  {
    keyword: 'Feed The Pit release date',
    intent: 'Confirm launch status and future acts.',
    route: '/steam',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Google suggest returns release-date demand; Steam lists Jun 30, 2026.',
    notes: 'Fold into Steam page instead of making a thin separate route.',
  },
  {
    keyword: 'Feed The Pit beginner guide',
    intent: 'First mission, first decisions, and spoiler-light survival.',
    route: '/guides/beginner-guide',
    priority: 'P0',
    status: 'keep',
    evidence: 'Broad guide demand plus launch-week walkthrough videos.',
    notes: 'Article should be decision-first and spoiler-light.',
  },
  {
    keyword: 'Feed The Pit cards',
    intent: 'Understand magical card questions and map narrowing.',
    route: '/cards',
    priority: 'P1',
    status: 'keep',
    evidence: 'Steam description centers magical cards and limited hands.',
    notes: 'Core mechanic page; no fake full card database yet.',
  },
  {
    keyword: 'Feed The Pit monsters',
    intent: 'Survive mission nemesis behavior and learn safely.',
    route: '/monsters',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Steam describes a new monster each mission; YouTube/Steam reviews mention enemy uniqueness.',
    notes:
      'Use behavior-reading principles instead of unverified monster table.',
  },
  {
    keyword: 'Feed The Pit characters',
    intent:
      'Understand who matters in the investigation loop: targets, mission monsters, valley residents, and the pit itself.',
    route: '/guides/characters-guide',
    priority: 'P1',
    status: 'keep',
    evidence:
      'GSC shows clicked character demand, while Steam frames the game around wealthy targets, magical card hunts, mission monsters, and the pit.',
    notes:
      'Use role-based character guidance because official named-character data is still limited at Act 1 launch.',
  },
  {
    keyword: 'Feed The Pit walkthrough',
    intent: 'Act 1 route and what to do next.',
    route: '/walkthrough',
    priority: 'P1',
    status: 'keep',
    evidence:
      'YouTube search returns multiple launch-week full walkthrough videos.',
    notes: 'Use a spoiler-light main route plus related detailed guide links.',
  },
  {
    keyword: 'Feed The Pit Act 1',
    intent: 'Launch act coverage and what is included.',
    route: '/guides/act-1-walkthrough',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Steam says Act 1 is available at launch; YouTube has Act 1 walkthrough results.',
    notes:
      'Create standalone guide because Act 1 is the current content boundary.',
  },
  {
    keyword: 'Feed The Pit ending',
    intent: 'Ending explanation, spoiler choice, and completion route.',
    route: '/guides/ending-guide',
    priority: 'P1',
    status: 'keep',
    evidence: 'YouTube results explicitly include ending/walkthrough titles.',
    notes:
      'Keep spoilers clearly warned and avoid inventing unavailable Acts 2/3 outcomes.',
  },
  {
    keyword: 'Feed The Pit achievements',
    intent: 'Steam achievement list and practical unlock hints.',
    route: '/guides/achievements',
    priority: 'P1',
    status: 'keep',
    evidence: 'Steam lists 11 achievements and public stats.',
    notes:
      'Use names and visible descriptions only; mark secret/unclear items carefully.',
  },
  {
    keyword: 'Feed The Pit black screen',
    intent: 'Fix rendering, Vulkan, DirectX, and broken-texture problems.',
    route: '/guides/rendering-fixes',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Steam Community shows a rendering issues / black screen / broken textures thread.',
    notes:
      'Create a technical safety/help page based on official/community signals.',
  },
  {
    keyword: 'Feed The Pit Discord',
    intent: 'Find official community.',
    route: '/discord',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Steam has a Discord link; Curious Fox Sox YouTube/about snippets expose a Discord invite.',
    notes: 'Use official sources and warn against random reposted invites.',
  },
  {
    keyword: 'Feed The Pit itch.io',
    intent: 'Understand the browser build and author difference.',
    route: '/itch-io',
    priority: 'P1',
    status: 'keep',
    evidence: 'User requirement and mooncrustgames itch page.',
    notes:
      'Important because Steam and itch are different Feed The Pit experiences.',
  },
  {
    keyword: 'Feed The Pit mobile',
    intent: 'Check mobile/APK status.',
    route: '/mobile',
    priority: 'P2',
    status: 'watch',
    evidence:
      'No official mobile release found; download searches can drift unsafe.',
    notes: 'Publish safe platform status and APK warning.',
  },
  {
    keyword: 'Feed The Pit codes',
    intent: 'Redeem/gift codes.',
    route: '/codes',
    priority: 'P2',
    status: 'ignore',
    evidence:
      'No code system found in Steam or itch sources; not a Roblox/mobile gacha.',
    notes: 'Do not create a codes page.',
  },
  {
    keyword: 'Feed The Pit tier list',
    intent: 'Rank cards/monsters/items.',
    route: '/tier-list',
    priority: 'P2',
    status: 'watch',
    evidence: 'No current search support or stable data for a ranked list.',
    notes: 'Use cards and monsters guides first.',
  },
  {
    keyword: 'feed the pit duck game',
    intent: 'Unrelated/ambiguous social trend around duck/pit games.',
    route: '/',
    priority: 'P2',
    status: 'ignore',
    evidence:
      'Google suggest includes duck variants that do not match the Steam game or provided itch source.',
    notes: 'Avoid attracting unrelated traffic.',
  },
];
