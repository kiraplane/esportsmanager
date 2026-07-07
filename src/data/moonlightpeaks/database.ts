export type DatabaseCategory =
  | 'characters'
  | 'families'
  | 'locations'
  | 'items';

export type VerificationStatus =
  | 'official'
  | 'confirmed'
  | 'reported'
  | 'wiki-data'
  | 'datamined'
  | 'unverified';

export type RomanceStatus = 'romanceable' | 'not-romanceable' | 'tbc';

export interface DatabaseSourceRef {
  label: string;
  url: string;
  kind: 'official' | 'wiki' | 'competitor' | 'community';
}

export interface DatabaseCategoryMeta {
  category: DatabaseCategory;
  title: string;
  shortTitle: string;
  description: string;
  route: string;
  sourceNote: string;
}

export interface DatabaseCrawlAudit {
  source: string;
  url: string;
  checkedAt: string;
  totals: string;
  usefulBuckets: string[];
  appliedAs: string;
}

export interface CharacterEntry {
  slug: string;
  name: string;
  shortName: string;
  species: string;
  family: string;
  pronouns?: string;
  birthday?: string;
  livesIn?: string;
  occupation?: string;
  romanceStatus: RomanceStatus;
  verification: VerificationStatus;
  imageStatus: 'portrait-listed' | 'icon-listed' | 'none';
  imageFile?: string;
  summary: string;
  notes: string[];
  sourcePages: string[];
}

export interface FamilyEntry {
  slug: string;
  name: string;
  inclination: string;
  verification: VerificationStatus;
  summary: string;
  knownMembers: string[];
  watchNotes: string[];
  sourcePages: string[];
}

export interface LocationEntry {
  slug: string;
  name: string;
  kind: string;
  verification: VerificationStatus;
  summary: string;
  relatedCharacters: string[];
  sourcePages: string[];
}

export interface ItemEntry {
  slug: string;
  name: string;
  category: string;
  verification: VerificationStatus;
  summary: string;
  trackerGroup: string;
  sourcePages: string[];
}

export const databaseSources: DatabaseSourceRef[] = [
  {
    label: 'Official Moonlight Peaks website',
    url: 'https://www.moonlightpeaks.com/',
    kind: 'official',
  },
  {
    label: 'Official Steam listing',
    url: 'https://store.steampowered.com/app/2209900/Moonlight_Peaks/',
    kind: 'official',
  },
  {
    label: 'Moonlight Peaks wiki.gg',
    url: 'https://moonlightpeaks.wiki.gg/',
    kind: 'wiki',
  },
  {
    label: 'Moonlight Peaks Fandom wiki',
    url: 'https://moonlightpeaks.fandom.com/wiki/Moonlight_Peaks_Wiki',
    kind: 'wiki',
  },
  {
    label: 'MoonlightPeaksWiki.com competitor',
    url: 'https://moonlightpeakswiki.com/',
    kind: 'competitor',
  },
  {
    label: 'Reddit early-player Q&A',
    url: 'https://www.reddit.com/r/cozygames/comments/1tc0nyk/i_played_the_first_20_days_of_moonlight_peaks/',
    kind: 'community',
  },
];

export const databaseCrawlAudits: DatabaseCrawlAudit[] = [
  {
    source: 'wiki.gg MediaWiki allpages + selected raw infoboxes',
    url: 'https://moonlightpeaks.wiki.gg/api.php',
    checkedAt: '2026-07-07',
    totals: '443 page titles crawled',
    usefulBuckets: [
      '26 character/profile leads',
      '10 family/place-family leads',
      '26 location/shop/landmark leads',
      '381 item/system/category leads',
    ],
    appliedAs:
      'Seeded character fields, family groupings, location rows, item tracker groups, and image-file availability flags.',
  },
  {
    source: 'Fandom MediaWiki allpages',
    url: 'https://moonlightpeaks.fandom.com/wiki/Moonlight_Peaks_Wiki',
    checkedAt: '2026-07-07',
    totals: '125 page titles crawled',
    usefulBuckets: [
      'characters and families',
      'animals, crops, fish, recipes, tools',
      'systems such as energy, friendship, quests, seasons, weather',
    ],
    appliedAs:
      'Cross-checked entity names and future expansion buckets; sparse pages stay marked as wiki-data or unverified.',
  },
  {
    source: 'MoonlightPeaksWiki.com sitemap and tool pages',
    url: 'https://moonlightpeakswiki.com/sitemap.xml',
    checkedAt: '2026-07-07',
    totals: '375 sitemap URLs crawled',
    usefulBuckets: [
      '119 character URLs',
      '10 family URLs',
      '15 location URLs',
      '19 item URLs',
      '12 tools/tool-category URLs',
    ],
    appliedAs:
      'Benchmarked database taxonomy and rebuilt the useful tool set as platform picker, romance tracker, item tracker, and manual farming calculator.',
  },
];

export const databaseCategoryMeta: Record<
  DatabaseCategory,
  DatabaseCategoryMeta
> = {
  characters: {
    category: 'characters',
    title: 'Moonlight Peaks Character Database',
    shortTitle: 'Characters',
    route: '/database/characters',
    description:
      'Residents, romance status, species, families, birthdays, jobs, portraits, and planning notes.',
    sourceNote:
      'Character fields are cross-checked from wiki.gg infoboxes, competitor character hubs, and public official/store facts where available.',
  },
  families: {
    category: 'families',
    title: 'Moonlight Peaks Family Database',
    shortTitle: 'Families',
    route: '/database/families',
    description:
      'The seven-family structure, known supernatural inclinations, members, and launch planning gaps.',
    sourceNote:
      'Family groupings use official seven-family framing plus wiki.gg/Fandom page names and competitor family pages.',
  },
  locations: {
    category: 'locations',
    title: 'Moonlight Peaks Location Database',
    shortTitle: 'Locations',
    route: '/database/locations',
    description:
      'Town hubs, shops, wild areas, family places, farm buildings, and datamined landmarks to verify in-game.',
    sourceNote:
      'Location names come from official descriptions, wiki.gg page titles, and competitor location hubs; datamined names stay marked as datamined.',
  },
  items: {
    category: 'items',
    title: 'Moonlight Peaks Item Database',
    shortTitle: 'Items',
    route: '/database/items',
    description:
      'Crops, flowers, tools, workstations, animals, resources, cooking outputs, and collection-tracker seeds.',
    sourceNote:
      'Item rows begin as a classified index from wiki.gg/Fandom page titles and competitor tracker categories; exact values wait for live-game verification.',
  },
};

export const characters: CharacterEntry[] = [
  {
    slug: 'mina-ambrosia',
    name: 'Mina Ambrosia',
    shortName: 'Mina',
    species: 'Vampire',
    family: 'Ambrosia',
    pronouns: 'She/Her',
    birthday: 'Summer 16',
    livesIn: 'Town',
    occupation: 'Coffee & Coffins',
    romanceStatus: 'romanceable',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Mina Ambrosia.png',
    summary:
      'A cheerful vampire tied to Coffee & Coffins and the Ambrosia family conflict around Orlock, Evan, Samael, and Elvira.',
    notes: ['Gift preferences are still blank in wiki.gg data.'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Mina',
      'https://moonlightpeakswiki.com/characters',
    ],
  },
  {
    slug: 'evan-ambrosia',
    name: 'Evan Ambrosia',
    shortName: 'Evan',
    species: 'Vampire',
    family: 'Ambrosia',
    pronouns: 'They/Them',
    birthday: 'Autumn 25',
    livesIn: 'Town',
    occupation: 'Coffee & Coffins',
    romanceStatus: 'romanceable',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Evan Ambrosia.png',
    summary:
      'A relaxed vampire who helps run Coffee & Coffins with Mina and sits inside the Ambrosia family route.',
    notes: ['Gift preferences and heart-event order need live-game checks.'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Evan',
      'https://moonlightpeakswiki.com/characters',
    ],
  },
  {
    slug: 'orlock-ambrosia',
    name: 'Orlock Ambrosia',
    shortName: 'Orlock',
    species: 'Vampire',
    family: 'Ambrosia',
    pronouns: 'He/Him',
    birthday: 'Winter 16',
    livesIn: 'Town',
    occupation: '',
    romanceStatus: 'romanceable',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Orlock Ambrosia.png',
    summary:
      'A demanding Ambrosia vampire and early town contact whose family pressure connects to Mina and Evan.',
    notes: ['Exact route requirements should be verified in a full save.'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Orlock',
      'https://moonlightpeakswiki.com/characters',
    ],
  },
  {
    slug: 'samael-ambrosia',
    name: 'Samael Ambrosia',
    shortName: 'Samael',
    species: 'Vampire',
    family: 'Ambrosia',
    pronouns: 'He/Him',
    birthday: 'Winter 19',
    livesIn: 'Town',
    occupation: 'The Broken Lamp',
    romanceStatus: 'romanceable',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Samael Ambrosia.png',
    summary:
      'A brooding Ambrosia vampire associated with The Broken Lamp and Elvira, Orlock, Mina, and Evan.',
    notes: ['Known gift fields are not populated yet.'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Samael',
      'https://moonlightpeakswiki.com/characters',
    ],
  },
  {
    slug: 'elvira-ambrosia',
    name: 'Elvira Ambrosia',
    shortName: 'Elvira',
    species: 'Vampire',
    family: 'Ambrosia',
    pronouns: 'She/Her',
    birthday: 'Spring 24',
    livesIn: 'Town',
    occupation: '',
    romanceStatus: 'romanceable',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Elvira Ambrosia.jpg',
    summary:
      'An artistic Ambrosia vampire connected to Samael and the wider vampire family route.',
    notes: [
      'Profile data exists; exact gifts and schedule need live-game verification.',
    ],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Elvira',
      'https://moonlightpeakswiki.com/characters',
    ],
  },
  {
    slug: 'saga-logan',
    name: 'Saga Logan',
    shortName: 'Saga',
    species: 'Werewolf',
    family: 'Logan',
    pronouns: 'She/Her',
    birthday: 'Summer 27',
    livesIn: 'Town',
    romanceStatus: 'romanceable',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Saga Logan.png',
    summary:
      'A resourceful werewolf tied to the Logan family and repeatedly surfaced as a confirmed romance pick.',
    notes: [
      'Her gifts page exists elsewhere, but loved gifts are still not verified.',
    ],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Saga',
      'https://moonlightpeakswiki.com/characters',
      'https://moonlightpeakswiki.com/characters/saga/gifts',
    ],
  },
  {
    slug: 'ridge-logan',
    name: 'Ridge Logan',
    shortName: 'Ridge',
    species: 'Werewolf',
    family: 'Logan',
    pronouns: 'He/Him',
    birthday: 'Autumn 18',
    livesIn: 'Town',
    occupation: 'Howling Hammer',
    romanceStatus: 'romanceable',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Ridge Logan.png',
    summary:
      'A Logan werewolf carpenter connected to Howling Hammer and the family woodcraft route.',
    notes: [
      'Family relationships are available; route mechanics are still emerging.',
    ],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Ridge',
      'https://moonlightpeakswiki.com/characters',
    ],
  },
  {
    slug: 'brook-logan',
    name: 'Brook Logan',
    shortName: 'Brook',
    species: 'Werewolf',
    family: 'Logan',
    pronouns: 'He/Him',
    birthday: 'Summer 21',
    livesIn: 'Town',
    occupation: 'Mayor of Moonlight Peaks',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Brook Logan.png',
    summary:
      'A Logan werewolf listed as mayor and family anchor for Saga, Ridge, and Ludo.',
    notes: ['Romance status should remain TBC until a live route confirms it.'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Brook'],
  },
  {
    slug: 'ludo-logan',
    name: 'Ludo Logan',
    shortName: 'Ludo',
    species: 'Werewolf',
    family: 'Logan',
    pronouns: 'He/Him',
    birthday: 'Autumn 20',
    livesIn: 'Town',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'portrait-ludo-neutral.png',
    summary:
      'A younger Logan werewolf connected to Ridge, Brook, and Saga in the family tree.',
    notes: ['Use as family/context data until route details are confirmed.'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Ludo'],
  },
  {
    slug: 'luna-aranea',
    name: 'Luna Aranea',
    shortName: 'Luna',
    species: 'Witch',
    family: 'Webb / Aranea',
    pronouns: 'She/Her',
    livesIn: 'Moonlit Pines',
    romanceStatus: 'romanceable',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Luna Webb.png',
    summary:
      'A witch associated with farming and Moonlit Pines, with family links near the Webb witch line.',
    notes: [
      'The exact family label differs across sources, so keep it conservative.',
    ],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Luna',
      'https://moonlightpeakswiki.com/characters',
    ],
  },
  {
    slug: 'fiona-webb',
    name: 'Fiona Webb',
    shortName: 'Fiona',
    species: 'Witch',
    family: 'Webb',
    pronouns: 'She/Her',
    birthday: 'Winter 26',
    livesIn: 'Moonlit Pines',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Fiona Webb.png',
    summary:
      'A Webb witch tied to early delivery/mailbox guidance and the Moonlit Pines area.',
    notes: ['Marked TBC until romance and gift data are confirmed.'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Fiona',
      'https://moonlightpeakswiki.com/characters',
    ],
  },
  {
    slug: 'sabrina-webb',
    name: 'Sabrina Webb',
    shortName: 'Sabrina',
    species: 'Witch',
    family: 'Webb',
    pronouns: 'She/Her',
    birthday: 'Winter 23',
    livesIn: 'Town',
    occupation: 'Webb of Wonders',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Sabrina Webb.jpg',
    summary:
      'A Webb witch connected to Webb of Wonders and appearance-changing potion shopping.',
    notes: [
      'Shop inventory and gift reactions should be rechecked in the live build.',
    ],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Sabrina',
      'https://moonlightpeakswiki.com/characters',
    ],
  },
  {
    slug: 'noel-webb',
    name: 'Noel Webb',
    shortName: 'Noel',
    species: 'Witch',
    family: 'Webb',
    pronouns: 'He/Him',
    birthday: 'Spring 23',
    livesIn: 'Town',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Noel Webb.jpg',
    summary:
      'A flashy Webb resident connected to fishing and early player-facing challenge hooks.',
    notes: ['Fishing-rod flow should be verified before writing a step guide.'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Noel',
      'https://moonlightpeakswiki.com/characters',
    ],
  },
  {
    slug: 'kim-hosu',
    name: 'Kim Hosu',
    shortName: 'Kim',
    species: 'Mermaid',
    family: 'Hosu',
    pronouns: 'She/Her',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'icon-listed',
    imageFile: 'Kim (icon).png',
    summary:
      'A Hosu mermaid resident connected to Rei and Tae in the lake-family data.',
    notes: ['Page has image-link warnings and needs live verification.'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Kim',
      'https://moonlightpeakswiki.com/characters',
    ],
  },
  {
    slug: 'rei-hosu',
    name: 'Rei Hosu',
    shortName: 'Rei',
    species: 'Mermaid',
    family: 'Hosu',
    pronouns: 'She/Her',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Rei Hosu.png',
    summary: 'A Hosu mermaid listed alongside Kim and Tae in the family tree.',
    notes: ['Keep as database context until relationship details stabilize.'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Rei'],
  },
  {
    slug: 'tae-hosu',
    name: 'Tae Hosu',
    shortName: 'Tae',
    species: 'Mermaid',
    family: 'Hosu',
    pronouns: 'He/Him',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Tae Hosu.png',
    summary: 'A Hosu mermaid resident grouped with Kim and Rei.',
    notes: ['Exact role and route details are still thin.'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Tae'],
  },
  {
    slug: 'aras-khazan',
    name: 'Aras Khazan',
    shortName: 'Aras',
    species: 'Seer',
    family: 'Khazan',
    pronouns: 'He/Him',
    birthday: 'Autumn 8',
    livesIn: 'Town',
    occupation: 'Third Eye Threads',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Aras Khazan.png',
    summary:
      'A Khazan seer associated with Third Eye Threads and siblings Alina and Dragan.',
    notes: [
      'Treat family and shop data as strong; romance details remain TBC.',
    ],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Aras'],
  },
  {
    slug: 'alina-khazan',
    name: 'Alina Khazan',
    shortName: 'Alina',
    species: 'Seer',
    family: 'Khazan',
    pronouns: 'She/Her',
    birthday: 'Spring 10',
    livesIn: 'Town',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Alina Khazan.jpg',
    summary: 'A Khazan seer listed with Aras and Dragan in the family data.',
    notes: [
      'Use as resident database data; schedule and gifts are not stable yet.',
    ],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Alina'],
  },
  {
    slug: 'dragan-khazan',
    name: 'Dragan Khazan',
    shortName: 'Dragan',
    species: 'Seer',
    family: 'Khazan',
    pronouns: 'He/Him',
    birthday: 'Spring 28',
    livesIn: 'Town',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'portrait-listed',
    imageFile: 'Dragan Khazan.png',
    summary: 'A Khazan seer and sibling to Alina and Aras.',
    notes: [
      'Known page/title data is useful; route details need verification.',
    ],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Dragan'],
  },
  {
    slug: 'death',
    name: 'Death',
    shortName: 'Death',
    species: 'Other',
    family: 'Unknown',
    romanceStatus: 'romanceable',
    verification: 'confirmed',
    imageStatus: 'portrait-listed',
    imageFile: 'Death.jpg',
    summary:
      "A confirmed romanceable resident tied to the grave-lover theme and Death's Shack.",
    notes: ['Exact route requirements and gift data still need checking.'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Death',
      'https://moonlightpeakswiki.com/characters',
    ],
  },
  {
    slug: 'jada-henderson',
    name: 'Jada Henderson',
    shortName: 'Jada',
    species: 'Unknown',
    family: 'Henderson',
    pronouns: 'She/Her',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'icon-listed',
    imageFile: 'Jada (icon).png',
    summary:
      'A Henderson resident with icon-level data but limited confirmed role detail.',
    notes: ['Keep marked TBC until full profile data appears.'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Jada'],
  },
  {
    slug: 'persephone-henderson',
    name: 'Persephone Henderson',
    shortName: 'Persephone',
    species: 'Unknown',
    family: 'Henderson',
    pronouns: 'She/Her',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'icon-listed',
    imageFile: 'Persephone (icon).png',
    summary:
      'A Henderson resident with a lighter profile and icon-style artwork.',
    notes: ['No reliable gifts, birthday, or schedule data yet.'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Persephone'],
  },
  {
    slug: 'winston-henderson',
    name: 'Winston Henderson',
    shortName: 'Winston',
    species: 'Unknown',
    family: 'Henderson',
    pronouns: 'He/Him',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'icon-listed',
    imageFile: 'Winston (icon).png',
    summary: 'A Henderson resident whose known role details are still sparse.',
    notes: ['Use only as an index row until more confirmed details appear.'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Winston'],
  },
  {
    slug: 'count-dracula',
    name: 'Count Dracula',
    shortName: 'Dracula',
    species: 'Vampire',
    family: 'Dracula',
    romanceStatus: 'not-romanceable',
    verification: 'official',
    imageStatus: 'none',
    summary:
      "The player character's father and story pressure point, not a romance route.",
    notes: ['Official story context, not a dateable entry.'],
    sourcePages: [
      'https://www.moonlightpeaks.com/',
      'https://moonlightpeakswiki.com/characters',
    ],
  },
  {
    slug: 'albertus',
    name: 'Albertus',
    shortName: 'Albertus',
    species: 'Unknown',
    family: 'Unknown',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'none',
    summary:
      'A lightly documented resident who may become useful for future jobs, quests, or relationship expansion.',
    notes: ['Profile fields and romance status are not reliable enough yet.'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Albertus',
      'https://moonlightpeaks.fandom.com/wiki/Albertus',
    ],
  },
  {
    slug: 'balthasar-logan',
    name: 'Balthasar Logan',
    shortName: 'Balthasar',
    species: 'Werewolf',
    family: 'Logan',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'none',
    summary:
      'A lightly documented Logan-family resident kept as a watch row until profile details are stronger.',
    notes: [
      'Potential family member; do not treat as a confirmed romance route.',
    ],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Balthasar',
      'https://moonlightpeaks.fandom.com/wiki/Balthasar_Logan',
    ],
  },
  {
    slug: 'chester',
    name: 'Chester',
    shortName: 'Chester',
    species: 'Unknown',
    family: 'Unknown',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'none',
    summary:
      'A lightly documented resident pending stronger role, schedule, or shop detail.',
    notes: ['Keep as discovered data rather than a finished profile.'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Chester',
      'https://moonlightpeaks.fandom.com/wiki/Chester',
    ],
  },
  {
    slug: 'jarvis-spectra',
    name: 'Jarvis Spectra',
    shortName: 'Jarvis',
    species: 'Unknown',
    family: 'Spectra',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'none',
    summary:
      'A lightly documented Spectra resident with family and species details still to fill in.',
    notes: [
      'Family and species classification should be verified before use in guides.',
    ],
    sourcePages: [
      'https://moonlightpeaks.fandom.com/wiki/Jarvis_Spectra',
      'https://moonlightpeakswiki.com/characters',
    ],
  },
  {
    slug: 'pumpkin-head',
    name: 'Pumpkin Head',
    shortName: 'Pumpkin Head',
    species: 'Unknown',
    family: 'Unknown',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'none',
    summary:
      'A named resident likely useful for seasonal or town-context coverage.',
    notes: ['Treat role and relationship status as unverified.'],
    sourcePages: [
      'https://moonlightpeaks.fandom.com/wiki/Pumpkin_Head',
      'https://moonlightpeakswiki.com/characters',
    ],
  },
  {
    slug: 'mr-deyes',
    name: 'Mr. Deyes',
    shortName: 'Mr. Deyes',
    species: 'Unknown',
    family: 'Unknown',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'none',
    summary:
      'A named resident worth tracking for quests, shops, or resident interactions.',
    notes: ['No reliable birthday, family, or romance fields yet.'],
    sourcePages: ['https://moonlightpeaks.fandom.com/wiki/Mr._Deyes'],
  },
  {
    slug: 'hoodini',
    name: 'Hoodini',
    shortName: 'Hoodini',
    species: 'Unknown',
    family: 'Unknown',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'none',
    summary:
      'A lightly documented resident kept in the database for later playthrough checks.',
    notes: [
      'Could become a quest or resident row after more evidence appears.',
    ],
    sourcePages: ['https://moonlightpeaks.fandom.com/wiki/Hoodini'],
  },
  {
    slug: 'jacques',
    name: 'Jacques',
    shortName: 'Jacques',
    species: 'Unknown',
    family: 'Unknown',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'none',
    summary:
      'A lightly documented resident whose role details are still sparse.',
    notes: ['Keep in watch status until profile details are available.'],
    sourcePages: ['https://moonlightpeaks.fandom.com/wiki/Jacques'],
  },
  {
    slug: 'llemi',
    name: 'Llemi',
    shortName: 'Llemi',
    species: 'Unknown',
    family: 'Unknown',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'none',
    summary:
      'A lightly documented resident to revisit when more route or location context exists.',
    notes: ['No hard relationship claims yet.'],
    sourcePages: ['https://moonlightpeaks.fandom.com/wiki/Llemi'],
  },
  {
    slug: 'snek',
    name: 'Snek',
    shortName: 'Snek',
    species: 'Unknown',
    family: 'Unknown',
    romanceStatus: 'tbc',
    verification: 'wiki-data',
    imageStatus: 'none',
    summary:
      'A named entry that may become a future critter, resident, or quest index row.',
    notes: ['Classification is intentionally conservative.'],
    sourcePages: ['https://moonlightpeaks.fandom.com/wiki/Snek'],
  },
];

export const families: FamilyEntry[] = [
  {
    slug: 'ambrosia',
    name: 'Ambrosia',
    inclination: 'Vampires',
    verification: 'wiki-data',
    summary:
      'The vampire family cluster around Orlock, Mina, Evan, Samael, and Elvira.',
    knownMembers: ['Orlock', 'Mina', 'Evan', 'Samael', 'Elvira'],
    watchNotes: [
      'Check whether every Ambrosia romance route has separate gift data.',
    ],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Ambrosia_Family',
      'https://moonlightpeakswiki.com/families',
    ],
  },
  {
    slug: 'logan',
    name: 'Logan',
    inclination: 'Werewolves',
    verification: 'wiki-data',
    summary: 'The werewolf family connected to Saga, Ridge, Brook, and Ludo.',
    knownMembers: ['Saga', 'Ridge', 'Brook', 'Ludo', 'Balthasar'],
    watchNotes: [
      'Balthasar exists as a page/title but needs profile verification.',
    ],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Logan_Family',
      'https://moonlightpeakswiki.com/families/werewolves',
    ],
  },
  {
    slug: 'webb',
    name: 'Webb',
    inclination: 'Witches',
    verification: 'wiki-data',
    summary:
      'A witch family line tied to Sabrina, Fiona, Noel, and nearby Luna references.',
    knownMembers: ['Sabrina', 'Fiona', 'Noel', 'Luna'],
    watchNotes: ['Luna has Aranea/Webb naming friction across sources.'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Webb_Family',
      'https://moonlightpeakswiki.com/families/witches',
    ],
  },
  {
    slug: 'hosu',
    name: 'Hosu',
    inclination: 'Mermaids',
    verification: 'wiki-data',
    summary: 'The mermaid family currently linked to Kim, Rei, and Tae.',
    knownMembers: ['Kim', 'Rei', 'Tae'],
    watchNotes: [
      'Exact lake schedules and gift data still need launch verification.',
    ],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Hosu_Family',
      'https://moonlightpeakswiki.com/families',
    ],
  },
  {
    slug: 'khazan',
    name: 'Khazan',
    inclination: 'Seers',
    verification: 'wiki-data',
    summary: 'A seer family represented by Aras, Alina, and Dragan.',
    knownMembers: ['Aras', 'Alina', 'Dragan'],
    watchNotes: ['Third Eye Threads may become a useful shop/tool route.'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Khazan_Family'],
  },
  {
    slug: 'henderson',
    name: 'Henderson',
    inclination: 'Normies / unknown',
    verification: 'wiki-data',
    summary:
      'A non-supernatural or still-lightly documented family currently tied to Jada, Persephone, and Winston.',
    knownMembers: ['Jada', 'Persephone', 'Winston'],
    watchNotes: [
      'Keep inclination cautious until an official/source page confirms it.',
    ],
    sourcePages: [
      'https://moonlightpeaks.fandom.com/wiki/Henderson_Family',
      'https://moonlightpeakswiki.com/families',
    ],
  },
  {
    slug: 'dracula',
    name: 'Dracula',
    inclination: 'Vampire player line',
    verification: 'official',
    summary:
      "The player character is Dracula's child, which frames the story even when town family tables focus on residents.",
    knownMembers: ['Player character', 'Count Dracula'],
    watchNotes: ['Separate story family context from dateable town families.'],
    sourcePages: ['https://www.moonlightpeaks.com/'],
  },
];

export const locations: LocationEntry[] = [
  {
    slug: 'moonlight-peaks-town',
    name: 'Moonlight Peaks Town',
    kind: 'Town',
    verification: 'official',
    summary:
      'The central supernatural mountain town where residents, shops, families, and festivals cluster.',
    relatedCharacters: ['Most residents'],
    sourcePages: [
      'https://www.moonlightpeaks.com/',
      'https://moonlightpeaks.wiki.gg/wiki/Moonlight_Peaks_Town',
      'https://moonlightpeakswiki.com/locations',
    ],
  },
  {
    slug: 'your-farm',
    name: 'Your Farm',
    kind: 'Homestead',
    verification: 'official',
    summary:
      'The abandoned homestead restored into a night-farming base for crops, flowers, livestock, and machines.',
    relatedCharacters: ['Player character'],
    sourcePages: [
      'https://moonlightpeakswiki.com/locations/your-farm',
      'https://www.moonlightpeaks.com/',
    ],
  },
  {
    slug: 'your-cottage',
    name: 'Your Cottage',
    kind: 'Home',
    verification: 'reported',
    summary:
      'The player home and decoration space; storage behavior is an early-player FAQ worth verifying.',
    relatedCharacters: ['Player character'],
    sourcePages: [
      'https://moonlightpeakswiki.com/locations',
      'https://www.reddit.com/r/cozygames/comments/1tc0nyk/i_played_the_first_20_days_of_moonlight_peaks/',
    ],
  },
  {
    slug: 'coffee-and-coffins',
    name: 'Coffee & Coffins',
    kind: 'Shop',
    verification: 'wiki-data',
    summary: 'A town cafe associated with Mina and Evan Ambrosia.',
    relatedCharacters: ['Mina', 'Evan'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Coffee_%26_Coffins'],
  },
  {
    slug: 'the-broken-lamp',
    name: 'The Broken Lamp',
    kind: 'Shop / bar',
    verification: 'wiki-data',
    summary: 'A long-running town bar connected to Samael Ambrosia.',
    relatedCharacters: ['Samael'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/The_Broken_Lamp'],
  },
  {
    slug: 'howling-hammer',
    name: 'Howling Hammer',
    kind: 'Shop',
    verification: 'wiki-data',
    summary: 'A carpenter/workshop location tied to Ridge Logan.',
    relatedCharacters: ['Ridge'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Howling_Hammer'],
  },
  {
    slug: 'webb-of-wonders',
    name: 'Webb of Wonders',
    kind: 'Shop',
    verification: 'wiki-data',
    summary:
      'A magical shop associated with Sabrina and appearance-changing potion access.',
    relatedCharacters: ['Sabrina'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Webb_of_Wonders'],
  },
  {
    slug: 'third-eye-threads',
    name: 'Third Eye Threads',
    kind: 'Shop',
    verification: 'wiki-data',
    summary: 'A clothing or tailoring location tied to Aras Khazan.',
    relatedCharacters: ['Aras'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Third_Eye_Threads'],
  },
  {
    slug: 'luna-seed-stall',
    name: "Luna's Seed Stall",
    kind: 'Shop',
    verification: 'wiki-data',
    summary:
      'A seed-focused location name that likely supports farming progression.',
    relatedCharacters: ['Luna'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Luna%27s_Seed_Stall'],
  },
  {
    slug: 'moonlit-pines',
    name: 'Moonlit Pines',
    kind: 'Wilds',
    verification: 'datamined',
    summary:
      'A named wooded area suited to later forage, route, or event notes.',
    relatedCharacters: ['Fiona', 'Luna'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Moonlit_Pines',
      'https://moonlightpeakswiki.com/locations/landmarks',
    ],
  },
  {
    slug: 'howling-marshes',
    name: 'Howling Marshes',
    kind: 'Wilds',
    verification: 'datamined',
    summary:
      'A named landmark likely tied to werewolf or outdoor exploration themes.',
    relatedCharacters: ['Logan family'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Howling_Marshes',
      'https://moonlightpeakswiki.com/locations/landmarks',
    ],
  },
  {
    slug: 'misty-shores',
    name: 'Misty Shores',
    kind: 'Water',
    verification: 'datamined',
    summary:
      'A shore/water-area name that may connect to fishing, mermaids, or coastal gathering.',
    relatedCharacters: ['Hosu family'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Misty_Shores',
      'https://moonlightpeakswiki.com/locations/landmarks',
    ],
  },
  {
    slug: 'luna-bay',
    name: 'Luna Bay',
    kind: 'Water',
    verification: 'datamined',
    summary:
      'A bay location name to verify for fishing, mermaid, or event use.',
    relatedCharacters: ['Hosu family'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Luna_Bay',
      'https://moonlightpeakswiki.com/locations/landmarks',
    ],
  },
  {
    slug: 'pink-grove',
    name: 'Pink Grove',
    kind: 'Wilds',
    verification: 'datamined',
    summary:
      'A named grove that should be checked for flowers, forage, or event ties.',
    relatedCharacters: [],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Pink_Grove',
      'https://moonlightpeakswiki.com/locations/landmarks',
    ],
  },
  {
    slug: 'moonlight-tower',
    name: 'Moonlight Tower',
    kind: 'Landmark',
    verification: 'datamined',
    summary: 'A tower landmark with exact purpose still unknown.',
    relatedCharacters: [],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Moonlight_Tower',
      'https://moonlightpeakswiki.com/locations/landmarks',
    ],
  },
  {
    slug: 'ambrosia-graveyard',
    name: 'Ambrosia Graveyard',
    kind: 'Family place',
    verification: 'datamined',
    summary:
      'A vampire-family graveyard name that matches the cozy-gothic setting but still needs live-game detail.',
    relatedCharacters: ['Ambrosia family'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Ambrosia_Graveyard',
      'https://moonlightpeakswiki.com/locations/graveyard',
    ],
  },
  {
    slug: 'ambrosia-mansion',
    name: 'Ambrosia Mansion',
    kind: 'Family place',
    verification: 'datamined',
    summary: 'A likely vampire-family estate paired with Ambrosia Graveyard.',
    relatedCharacters: ['Ambrosia family'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Ambrosia_Mansion'],
  },
  {
    slug: 'deaths-shack',
    name: "Death's Shack",
    kind: 'Residence',
    verification: 'wiki-data',
    summary: 'A named place linked to Death and the grave-lover romance angle.',
    relatedCharacters: ['Death'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Death%27s_Shack'],
  },
  {
    slug: 'museum',
    name: 'Museum',
    kind: 'Collection',
    verification: 'reported',
    summary:
      'A collection location mentioned by an early player but not fully unlocked in that report.',
    relatedCharacters: [],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Museum',
      'https://www.reddit.com/r/cozygames/comments/1tc0nyk/i_played_the_first_20_days_of_moonlight_peaks/',
    ],
  },
  {
    slug: 'mines',
    name: 'Mines',
    kind: 'Underground',
    verification: 'reported',
    summary:
      'Underground resource areas with no combat expectation, useful for ore and machine progression.',
    relatedCharacters: [],
    sourcePages: [
      'https://moonlightpeakswiki.com/locations',
      'https://www.reddit.com/r/cozygames/comments/1tc0nyk/i_played_the_first_20_days_of_moonlight_peaks/',
    ],
  },
  {
    slug: 'town-square',
    name: 'Town Square',
    kind: 'Town hub',
    verification: 'reported',
    summary:
      'A town subarea likely used for navigation, shops, and resident routing.',
    relatedCharacters: ['Town residents'],
    sourcePages: ['https://moonlightpeakswiki.com/locations/town-square'],
  },
  {
    slug: 'the-forest',
    name: 'The Forest',
    kind: 'Wilds',
    verification: 'reported',
    summary:
      'An exploration area for gathering, travel, and later location-specific guides.',
    relatedCharacters: [],
    sourcePages: ['https://moonlightpeakswiki.com/locations/forest'],
  },
  {
    slug: 'the-lake',
    name: 'The Lake',
    kind: 'Water',
    verification: 'reported',
    summary:
      'A water location likely relevant to fishing, mermaids, and lake-side gathering.',
    relatedCharacters: ['Hosu family'],
    sourcePages: ['https://moonlightpeakswiki.com/locations/lake'],
  },
  {
    slug: 'the-pier',
    name: 'The Pier',
    kind: 'Water',
    verification: 'reported',
    summary:
      'A water-side location to check for fishing access, events, or resident schedules.',
    relatedCharacters: [],
    sourcePages: ['https://moonlightpeakswiki.com/locations/pier'],
  },
  {
    slug: 'silverveil-lake',
    name: 'Silverveil Lake',
    kind: 'Water',
    verification: 'wiki-data',
    summary: 'A lake area to check against fishing and mermaid routes.',
    relatedCharacters: ['Hosu family'],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Silverveil_Lake'],
  },
  {
    slug: 'bloom-boutique',
    name: 'Bloom Boutique',
    kind: 'Shop',
    verification: 'wiki-data',
    summary:
      'A shop entry that may connect to flowers, clothing, gifts, or decoration systems.',
    relatedCharacters: [],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Bloom_Boutique'],
  },
  {
    slug: 'yoga-shack',
    name: 'Yoga Shack',
    kind: 'Activity',
    verification: 'wiki-data',
    summary:
      'An activity or location entry kept separate from shops until more details are available.',
    relatedCharacters: [],
    sourcePages: ['https://moonlightpeaks.wiki.gg/wiki/Yoga_Shack'],
  },
  {
    slug: 'sabrinas-hidden-hollow',
    name: "Sabrina's Hidden Hollow",
    kind: 'Residence / hidden place',
    verification: 'wiki-data',
    summary:
      'A hidden-location entry that may connect to Sabrina, magic, or map progression.',
    relatedCharacters: ['Sabrina'],
    sourcePages: [
      'https://moonlightpeaks.wiki.gg/wiki/Sabrina%27s_Hidden_Hollow',
    ],
  },
];

export const items: ItemEntry[] = [
  ...[
    'Blood Grapes',
    'White Grapes',
    'Blood Tomato',
    'Void Radish',
    'Cruelcumber',
    'Moonfruit',
    'Red Corn',
    'Googly Garlic',
    'Glow Ginger',
    'Nightshade',
    'Mandrake',
    'Henbane',
    'Wily Wheat',
    'Wild Potato',
    'Pumpkin',
    'Carrot',
    'Eggplant',
    'Melon',
    'Strawberry',
    'Blackberry',
    'Raspberry',
    'Cranberry',
    'Lemon',
    'Blood Orange',
  ].map(
    (name): ItemEntry => ({
      slug: slugify(name),
      name,
      category: 'Crop / forage',
      verification: 'wiki-data',
      summary:
        'Indexed as a Moonlight Peaks crop or plant item; prices, seasons, growth days, and gift use still need live-game checks.',
      trackerGroup: 'Crops',
      sourcePages: [
        `https://moonlightpeaks.wiki.gg/wiki/${encodeWikiTitle(name)}`,
      ],
    })
  ),
  ...[
    'Black Rose',
    'White Rose',
    'Red Rose',
    'Pink Rose',
    'Yellow Rose',
    'Blue Rose',
    'Purple Rose',
    'Black Tulips',
    'White Tulips',
    'Red Tulips',
    'Pink Tulips',
    'Yellow Tulips',
    'Blue Moonlight Flower',
    'Purple Moonlight Flower',
    'Purple Lavender',
    'Red Lavender',
  ].map(
    (name): ItemEntry => ({
      slug: slugify(name),
      name,
      category: 'Flower',
      verification: 'wiki-data',
      summary:
        'Flower entry useful for gifting, flower arranging, decoration, or collection tracking once reactions are known.',
      trackerGroup: 'Flowers',
      sourcePages: [
        `https://moonlightpeaks.wiki.gg/wiki/${encodeWikiTitle(name)}`,
      ],
    })
  ),
  ...[
    'Rusty Shovel',
    'Rusty Watering Can',
    'Fishing Rod',
    'Copper Scythe',
    'Iron Axe',
    'Iron Pickaxe',
    'Keg',
    'Refiner',
    'Furnace',
    'Mill',
    'Workbench',
    'Cooking Station',
    'Cheese Press',
    'Bee House',
    'Herb Drying Rack',
    'Mana Extractor',
    'Seed Sequencer',
    'Jam Maker',
    'Loom',
  ].map(
    (name): ItemEntry => ({
      slug: slugify(name),
      name,
      category: 'Tool / workstation',
      verification: 'wiki-data',
      summary:
        'Tool or workstation entry. Use it for checklist tracking first, then add recipes, placement rules, and upgrades from your save.',
      trackerGroup: 'Tools',
      sourcePages: [
        `https://moonlightpeaks.wiki.gg/wiki/${encodeWikiTitle(name)}`,
      ],
    })
  ),
  ...[
    'Cheeken',
    'Cowcula',
    'Draculamb',
    'Piggoat',
    'Rabbicula',
    'Vampsters',
    'Soul Blobs',
    'Yabbis',
  ].map(
    (name): ItemEntry => ({
      slug: slugify(name),
      name,
      category: 'Animal / helper',
      verification: 'wiki-data',
      summary:
        'Magical animal or helper entry. Feed, product, and barn rules should be checked before optimization guides use exact values.',
      trackerGroup: 'Animals',
      sourcePages: [
        `https://moonlightpeaks.wiki.gg/wiki/${encodeWikiTitle(name)}`,
      ],
    })
  ),
  ...[
    'Copper Ore',
    'Iron Ore',
    'Gold Ore',
    'Copper Bar',
    'Iron Bar',
    'Gold Bar',
    'Wood',
    'Light Wood',
    'Planks',
    'Soft Planks',
    'Hardwood Planks',
    'Stone',
    'Refined Stone',
    'Fiber',
    'Fodder',
    'Mana',
    'Heart Stone',
  ].map(
    (name): ItemEntry => ({
      slug: slugify(name),
      name,
      category: 'Resource',
      verification: 'wiki-data',
      summary:
        'Resource entry for crafting, machines, upgrades, quests, or animal care; exact acquisition routes need live-game evidence.',
      trackerGroup: 'Resources',
      sourcePages: [
        `https://moonlightpeaks.wiki.gg/wiki/${encodeWikiTitle(name)}`,
      ],
    })
  ),
  ...[
    'Blood Grape Juice',
    'Blood Grape Jam',
    'White Wine',
    'Red Wine',
    'Moonshine',
    'Mana Wine',
    'Pumpkin Pie',
    'Red Velvet Cupcake',
    'Mana Moon Cupcake',
    'Mushroom Soup',
    "Farmer's Stew",
    'Fishy Soup',
    'Cheese Platter',
    'Coffee',
    'Iced Coffee',
    'Mana Coffee',
    'Ginger Tea',
    'Lavender Tea',
  ].map(
    (name): ItemEntry => ({
      slug: slugify(name),
      name,
      category: 'Cooking / processed',
      verification: 'wiki-data',
      summary:
        'Processed food or drink entry. Profit, recipe inputs, and gift value should be tested before using hard numbers.',
      trackerGroup: 'Recipes',
      sourcePages: [
        `https://moonlightpeaks.wiki.gg/wiki/${encodeWikiTitle(name)}`,
      ],
    })
  ),
];

export function getDatabaseCounts() {
  return {
    characters: characters.length,
    families: families.length,
    locations: locations.length,
    items: items.length,
  };
}

export function getDatabaseEntries(category: DatabaseCategory) {
  if (category === 'characters') {
    return characters;
  }
  if (category === 'families') {
    return families;
  }
  if (category === 'locations') {
    return locations;
  }
  return items;
}

export function getVerificationLabel(status: VerificationStatus) {
  const labels: Record<VerificationStatus, string> = {
    official: 'Official',
    confirmed: 'Confirmed',
    reported: 'Reported',
    'wiki-data': 'Wiki data',
    datamined: 'Datamined',
    unverified: 'Unverified',
  };

  return labels[status];
}

export function getRomanceLabel(status: RomanceStatus) {
  const labels: Record<RomanceStatus, string> = {
    romanceable: 'Romanceable',
    'not-romanceable': 'Not romanceable',
    tbc: 'TBC',
  };

  return labels[status];
}

export const platformOptions = [
  {
    id: 'steam',
    label: 'Steam',
    strengths: [
      'Fast updates',
      'PC and Mac',
      'Demo access',
      'Settings control',
    ],
  },
  {
    id: 'steam-deck',
    label: 'Steam Deck',
    strengths: ['Portable PC play', 'Cloud saves', 'Controller-first checks'],
  },
  {
    id: 'switch',
    label: 'Nintendo Switch',
    strengths: ['Handheld console', 'Couch play', 'Nintendo demo path'],
  },
  {
    id: 'switch-2',
    label: 'Nintendo Switch 2',
    strengths: [
      'Newer Nintendo hardware',
      'Couch and handheld',
      'Console-first path',
    ],
  },
  {
    id: 'android',
    label: 'Google Play / Android',
    strengths: [
      'Mobile-store path',
      'Google Play ecosystem',
      'Avoids APK mirrors',
    ],
  },
] as const;

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function encodeWikiTitle(value: string) {
  return value.replace(/ /g, '_').replace(/'/g, '%27');
}
