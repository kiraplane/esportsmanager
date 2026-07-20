import type { DataSource, GameFact, KeywordMatrixItem } from './types';

export const checkedAt = '2026-07-20';

export const siteFacts = {
  siteName: 'Esports Manager 2026',
  domain: 'https://www.esportsmanager.wiki',
  canonicalHost: 'www.esportsmanager.wiki',
  gameName: 'Esports Manager 2026',
  creator: 'Neurona Games',
  publisher: 'indie.io',
  officialWebsiteUrl: 'https://esportsmanager.gg/',
  officialSteamUrl:
    'https://store.steampowered.com/app/2749950/Esports_Manager_2026/',
  officialDiscordUrl: 'https://discord.com/invite/esportsmanager',
  officialRedditUrl: 'https://www.reddit.com/r/esportmanager/',
  officialTwitterUrl: 'https://x.com/esportsmanager',
  officialYouTubeUrl: 'https://www.youtube.com/@esportsmanager4805',
  emdbUrl: 'https://emdb.gg/',
  supportEmail: 'hello@esportsmanager.wiki',
  officialCoverImage: 'https://i.ytimg.com/vi/gxlDTRtBvOk/hq720.jpg',
  officialHeroImage: 'https://i.ytimg.com/vi/gxlDTRtBvOk/hq720.jpg',
  officialScreenshot: 'https://i.ytimg.com/vi/78ovz89_zaQ/hq720.jpg',
  genre: 'Esports strategy and management simulation',
  releaseSnapshot:
    'Steam lists Esports Manager 2026 as released on 6 Jul, 2026. The official site says the full release is out now, with Steam as the live PC storefront.',
  platformSnapshot:
    'Steam is the confirmed launch platform. The official roadmap says mobile and additional platforms are planned for Q4 2026, so current mobile searches should be answered as watch items, not download claims.',
  positioning:
    'A decision-first Esports Manager 2026 guide hub for new managers: first save, organization creation, scouting, contracts, training, tactics, tournaments, sponsors, EMDB, Steam, demo, and safe links.',
} as const;

export const siteDescription =
  'Esports Manager 2026 wiki for beginner guides, tactics, scouting, transfers, contracts, training, sponsors, EMDB, Steam, demo, and safe links.';

export const gameFacts: GameFact[] = [
  {
    label: 'Game identity',
    value:
      'Esports Manager 2026 is a single-player esports organization management sim about scouting players, negotiating contracts, building staff, setting training, managing sponsors, and reacting during live match simulation.',
  },
  {
    label: 'Launch status',
    value:
      'The game is out now on Steam after a July 6, 2026 release. Steam also exposes a playable demo and 21 achievements.',
  },
  {
    label: 'Confirmed platform',
    value:
      'Steam is the current confirmed full-release platform. Official roadmap copy mentions mobile and additional platforms for Q4 2026, so those pages should stay status-focused.',
  },
  {
    label: 'Data ecosystem',
    value:
      'The official site links EMDB.gg, a Steam-sign-in community database for editing teams, players, rosters, and exported data used by the game.',
  },
];

export const sourceList: DataSource[] = [
  {
    type: 'official',
    label: 'Steam store page',
    url: siteFacts.officialSteamUrl,
    checkedAt,
    confidence: 'high',
    note: 'Used for release date, developer, publisher, genre, features, demo, achievements, languages, system requirements, reviews, Steam links, and official community links.',
  },
  {
    type: 'official',
    label: 'Official Esports Manager website',
    url: siteFacts.officialWebsiteUrl,
    checkedAt,
    confidence: 'high',
    note: 'Used for visual direction, roadmap, feature clusters, official trailer, EMDB link, demo timeline, real organizations/player counts, and community links.',
  },
  {
    type: 'official',
    label: 'Steam Community launch and update surface',
    url: 'https://steamcommunity.com/app/2749950',
    checkedAt,
    confidence: 'medium',
    note: 'Used for launch messaging, current community pain points, custom database notes, requested bracket/simulation improvements, and feedback channels.',
  },
  {
    type: 'official',
    label: 'EMDB.gg',
    url: siteFacts.emdbUrl,
    checkedAt,
    confidence: 'medium',
    note: 'Used for the database status page. EMDB requires Steam sign-in and describes itself as a roster editor for Esports Manager 2026 data.',
  },
  {
    type: 'community',
    label: 'r/esportmanager',
    url: siteFacts.officialRedditUrl,
    checkedAt,
    confidence: 'medium',
    note: 'Used as a community-demand source for launch, bugs, achievements, AWP/role/tactics complaints, and feature questions.',
  },
  {
    type: 'competitor',
    label: 'Into Indie Games organization guide',
    url: 'https://intoindiegames.com/walkthroughs/tips-tricks/esports-manager-2026-how-to-build-your-own-esports-organization/',
    checkedAt,
    confidence: 'medium',
    note: 'Benchmarked for early route details: create a manager, choose difficulty, sign players, hire an analyst, tune finances, add sponsors, then schedule training.',
  },
  {
    type: 'youtube',
    label: 'Official launch trailer',
    url: 'https://www.youtube.com/watch?v=gxlDTRtBvOk',
    checkedAt,
    confidence: 'high',
    note: 'Current launch-cycle trailer from publisher indie.io, selected as the homepage trust video and visual source.',
  },
  {
    type: 'youtube',
    label: 'Official release date trailer',
    url: 'https://www.youtube.com/watch?v=78ovz89_zaQ',
    checkedAt,
    confidence: 'high',
    note: 'Used as a release/platform status source and cover source for release-date content.',
  },
  {
    type: 'youtube',
    label: 'Advanced tips video',
    url: 'https://www.youtube.com/watch?v=6IbPBJcfMf8',
    checkedAt,
    confidence: 'medium',
    note: 'Used as a current YouTube source lead for tactics and deeper management mistakes.',
  },
  {
    type: 'youtube',
    label: 'Gameplay / review videos',
    url: 'https://www.youtube.com/results?search_query=Esports+Manager+2026+gameplay+review',
    checkedAt,
    confidence: 'medium',
    note: 'Used only for current player-facing article selection. Public articles present original advice rather than transcript reuse.',
  },
  {
    type: 'manual_review',
    label: 'Google autocomplete direct request',
    url: 'https://suggestqueries.google.com/complete/search',
    checkedAt,
    confidence: 'medium',
    note: 'Direct autocomplete returned release date, reddit, price, demo, mobile, review, twitter/x, discord, guide, tips, and best tactics candidates.',
  },
  {
    type: 'manual_review',
    label: 'OpenClaw keyword API attempt',
    url: 'https://shipmanager-dun.vercel.app/api/keywords',
    checkedAt,
    confidence: 'watch',
    note: 'Attempted historical keyword lookup for Esports Manager terms. The local key/request failed, so the launch matrix uses autocomplete, live search, official pages, YouTube, Reddit, and competitor benchmarking.',
  },
];

export const keywordMatrix: KeywordMatrixItem[] = [
  {
    keyword: 'esports manager',
    intent: 'Head term and broad franchise/game identity.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence: 'User requirement plus official site and Steam store.',
    notes:
      'Homepage should clarify this is the 2026 PC management sim, not a real-world job page.',
  },
  {
    keyword: 'esports manager 2026',
    intent: 'Exact game head term.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence: 'User requirement, Steam, official site, YouTube, Reddit.',
    notes: 'Primary H1 and VideoGame schema target.',
  },
  {
    keyword: 'esports manager wiki',
    intent: 'Find a structured guide hub.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence: 'User requirement and wiki-site demand pattern.',
    notes:
      'Use homepage hub plus route sidebar rather than empty entity database pages.',
  },
  {
    keyword: 'esports manager 2026 wiki',
    intent: 'Find game-specific wiki coverage.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence: 'User requirement.',
    notes: 'Homepage keyword hub links all supported guide pages.',
  },
  {
    keyword: 'esports manager guide',
    intent: 'Browse guide articles.',
    route: '/guides',
    priority: 'P0',
    status: 'keep',
    evidence: 'User requirement.',
    notes: 'Guide index owns article discovery.',
  },
  {
    keyword: 'esports manager 2026 guide',
    intent: 'Find current game help.',
    route: '/guides',
    priority: 'P0',
    status: 'keep',
    evidence: 'Google suggest returned guide candidate.',
    notes: 'Index plus beginner and systems guides.',
  },
  {
    keyword: 'esports manager 2026 tips',
    intent: 'Learn practical mistakes and priority order.',
    route: '/guides/beginner-guide',
    priority: 'P0',
    status: 'keep',
    evidence: 'Google suggest returned tips; YouTube has current tips videos.',
    notes: 'Beginner guide carries broad tips and links to deeper pages.',
  },
  {
    keyword: 'esports manager 2026 best tactics',
    intent: 'Choose match/tactics approach.',
    route: '/best-tactics',
    priority: 'P0',
    status: 'keep',
    evidence: 'Google suggest returned best tactics and tactics variants.',
    notes:
      'Create a dedicated tactics page because it is a distinct player job.',
  },
  {
    keyword: 'esports manager 2026 release date',
    intent: 'Confirm launch timing and status.',
    route: '/release-date',
    priority: 'P0',
    status: 'keep',
    evidence: 'Google suggest, Steam release date, official launch page.',
    notes:
      'Answer out-now status, demo, launch discount, and roadmap separately.',
  },
  {
    keyword: 'esports manager 2026 demo',
    intent: 'Find demo scope and whether to try before buying.',
    route: '/demo',
    priority: 'P0',
    status: 'keep',
    evidence: 'Google suggest and Steam demo button.',
    notes: 'Explain what demo is good for without overclaiming carry-over.',
  },
  {
    keyword: 'esports manager 2026 price',
    intent: 'Check purchase and launch discount.',
    route: '/release-date',
    priority: 'P1',
    status: 'keep',
    evidence: 'Google suggest and Steam price surface.',
    notes:
      'Use store as source of truth; no static price table beyond status wording.',
  },
  {
    keyword: 'esports manager 2026 review',
    intent: 'Decide whether to buy.',
    route: '/review',
    priority: 'P1',
    status: 'keep',
    evidence: 'Google suggest, Steam reviews, YouTube reviews.',
    notes: 'Write a decision-first buyer page, not a scored review.',
  },
  {
    keyword: 'esports manager 2026 mobile',
    intent: 'Check mobile/additional platform status.',
    route: '/platforms',
    priority: 'P1',
    status: 'watch',
    evidence:
      'Google suggest plus official roadmap Q4 2026 mobile/multi-platform mention.',
    notes:
      'Do not publish fake download links. Platforms page owns this until official stores exist.',
  },
  {
    keyword: 'esports manager 2026 discord',
    intent: 'Find official community/support link.',
    route: '/discord',
    priority: 'P1',
    status: 'keep',
    evidence: 'Google suggest and official site/Steam community links.',
    notes: 'Useful for bug reports and EMDB questions.',
  },
  {
    keyword: 'esports manager 2026 twitter',
    intent: 'Find official X/news account.',
    route: '/discord',
    priority: 'P2',
    status: 'keep',
    evidence: 'Google suggest and official links.',
    notes: 'Community page can link X without a separate route.',
  },
  {
    keyword: 'esports manager 2026 x',
    intent: 'Find official X/news account.',
    route: '/discord',
    priority: 'P2',
    status: 'keep',
    evidence: 'Google suggest.',
    notes: 'Same canonical as community links.',
  },
  {
    keyword: 'emdb esports manager 2026',
    intent: 'Use community database/editor.',
    route: '/emdb',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Official site links EMDB; Steam Community references custom database upload from EMDB.',
    notes: 'Make a status/how-to page, not a scraped database.',
  },
  {
    keyword: 'esports manager 2026 scouting',
    intent: 'Find players and prospects.',
    route: '/guides/scouting-transfers',
    priority: 'P1',
    status: 'keep',
    evidence: 'Official features and Into Indie Games early org guide.',
    notes:
      'Autocomplete thin, but system is central enough for guide coverage.',
  },
  {
    keyword: 'esports manager 2026 contracts',
    intent: 'Negotiate players and wages.',
    route: '/guides/contracts-budget',
    priority: 'P1',
    status: 'keep',
    evidence: 'Official features and competitor guide.',
    notes: 'Combine contract, wage, transfer, and finance decisions.',
  },
  {
    keyword: 'esports manager salary',
    intent: 'Real-world career salary, not the game.',
    route: 'none',
    priority: 'P3',
    status: 'ignore',
    evidence: 'Google suggest returned salary alongside guide/tips.',
    notes: 'Do not build a career-salary page for this game wiki.',
  },
  {
    keyword: 'esports manager 2026 codes',
    intent: 'Possible redeem-code query.',
    route: 'none',
    priority: 'P3',
    status: 'ignore',
    evidence:
      'No autocomplete support; Steam PC management sim has no verified code system.',
    notes: 'Do not create a fake codes page.',
  },
  {
    keyword: 'esports manager 2026 mods',
    intent: 'Unsafe or custom-file confusion.',
    route: '/mods-and-cheats',
    priority: 'P2',
    status: 'watch',
    evidence:
      'No autocomplete support, but Steam Community mentions custom database/image folders.',
    notes:
      'Safety page should distinguish EMDB/custom data from cheats, cracks, or unsafe files.',
  },
];
