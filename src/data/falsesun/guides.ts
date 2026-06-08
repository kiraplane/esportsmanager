import { endingChecklist, endingRules } from './endings';
import { checkedAt, siteFacts } from './sources';
import type { Guide, GuideVideo } from './types';

const videoCover = (id: string) => `https://i.ytimg.com/vi/${id}/hq720.jpg`;
const localGuideCover = (slug: string) => `/falsesun/guides/${slug}.png`;

const videos = {
  allEndings: {
    id: 'PVpgRF8nC1M',
    title: 'All endings walkthrough for The False Sun',
    channel: 'VikOchka',
    url: 'https://www.youtube.com/watch?v=PVpgRF8nC1M',
    thumbnailUrl: videoCover('PVpgRF8nC1M'),
    publishedAt: '2026-06-07',
    checkedAt,
  },
  ritsu: {
    id: '9iG-Ho_Uas8',
    title: 'The False Sun walkthrough, all endings part 2',
    channel: 'ritsu',
    url: 'https://www.youtube.com/watch?v=9iG-Ho_Uas8',
    thumbnailUrl: videoCover('9iG-Ho_Uas8'),
    publishedAt: '2026-06-07',
    checkedAt,
  },
} satisfies Record<string, GuideVideo>;

export const siteDescription =
  'The False Sun is an unofficial walkthrough hub for all endings, Ending 20, Silas and Kyle routes, mini-games, safe downloads, and mature-content warnings.';

export const guides: Guide[] = [
  {
    slug: 'all-endings',
    path: '/all-endings',
    title: 'The False Sun All Endings Guide',
    seoTitle: 'The False Sun All Endings Guide - 20 Ending Walkthrough',
    seoDescription:
      'Track all 20 The False Sun endings with route clusters, save points, Silas and Kyle branches, Ending 20 notes, and spoiler-safe walkthrough advice.',
    summary:
      'Start here if your gallery is stuck. This all endings guide groups the 20 slots by route, save point, and confidence instead of pretending every branch is already perfectly named.',
    category: 'Endings',
    difficulty: 'Spoiler Heavy',
    coverImageUrl: videos.allEndings.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'The False Sun all endings',
      'The False Sun walkthrough endings',
      'The False Sun ending 20',
    ],
    sourceNotes:
      'Built from official itch details, recent player demand, and two all-endings video cross-checks. Ending labels are route notes, not official gallery names.',
    video: videos.allEndings,
    tags: ['20 Endings', 'Walkthrough', 'Spoilers'],
    relatedRoutes: ['/ending-20', '/silas-route', '/kyle-route', '/mini-games'],
    body: [
      {
        heading: 'Use route clusters before hunting exact numbers',
        paragraphs: [
          'The False Sun is not a database game, so the best all endings guide is a save-file strategy. Your first job is to split the story into reusable branches: early bed scene, farm chore split, memory recovery, confrontation, escape, late affection route, and the low-chance farm accident.',
          'Do not replay from the beginning after every missing slot. Make named saves before choices that change the relationship tone, before farm work, before the pier, before the tree answer, before the dream questions, and before the final dream sequence.',
        ],
        bullets: endingRules,
      },
      {
        heading: 'Current 20-ending tracker',
        paragraphs: [
          'The table below is intentionally honest. It gives route focus and confidence, because community information is moving faster than stable English route documentation. Use it to decide what to test next, then mark your own gallery once you verify the exact slot.',
        ],
        bullets: endingChecklist.map(
          (item) =>
            `${item.number}. ${item.label}: ${item.routeFocus} (${item.confidence})`
        ),
      },
      {
        heading: 'Best save points for fast clean-up',
        paragraphs: [
          'Keep one early save before the tutorial and first farm work. Keep one save before you decide how much Silas handles on the farm. Keep one save before refusing or accepting the pier. Keep one save before the tree answer. Keep one save before the past-partner question and another before the final dream.',
          'The goal is to replay two or three scenes at a time. If you are missing only one late Silas ending, do not burn an hour rebuilding the whole route unless your early farm choices were wrong.',
        ],
      },
      {
        heading: 'What to do if you are stuck after 7 or 11 endings',
        paragraphs: [
          'Players getting stuck around 7 endings usually have only tested the obvious danger branches. Move into the warmer Silas route and the Kyle/farm branch. Players stuck around 11 endings usually need to test the late affection chain, the pier refusal chain, and the random-looking farm accident route.',
          'When a missing ending feels impossible, stop changing everything. Change one branch at a time and write down the save name, the choice changed, and the gallery result.',
        ],
      },
      {
        heading: 'Spoiler and source note',
        paragraphs: [
          'This page is spoiler-heavy by design. It avoids copying game script or transcript text and only records route logic. If a branch has low confidence, it is labeled as watch instead of being presented as settled truth.',
          `Official game and download details should always be checked on ${siteFacts.officialItchUrl}.`,
        ],
      },
    ],
    faq: [
      {
        question: 'How many endings does The False Sun have?',
        answer:
          'Community videos and player discussion point to 20 endings. This site tracks them as 20 route slots while exact English gallery names are still being verified.',
      },
      {
        question: 'Should I replay from the beginning for every ending?',
        answer:
          'No. Use save points before major forks. Most endings are easier to clean up by replaying a short route cluster.',
      },
      {
        question: 'Are the ending names official?',
        answer:
          'No. The labels here are route notes so players can navigate the branches without waiting for a fully verified official-name list.',
      },
    ],
  },
  {
    slug: 'ending-20',
    path: '/ending-20',
    title: 'The False Sun Ending 20 Guide',
    seoTitle: 'The False Sun Ending 20 Guide - Chicken Ending Route Notes',
    seoDescription:
      'How to approach The False Sun Ending 20, the low-chance chicken accident route, with retry advice, save points, and what not to change.',
    summary:
      'Ending 20 appears to be the rare farm/chicken accident branch. The right tactic is not a late-game route rebuild; it is a tight retry loop from the closest farm save.',
    category: 'Endings',
    difficulty: 'Spoiler Heavy',
    coverImageUrl: videos.ritsu.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'community_crosscheck',
    videoSearchQueries: [
      'The False Sun ending 20',
      'The False Sun chicken ending',
      'The False Sun all endings part 2',
    ],
    sourceNotes:
      'Cross-checked from itch player questions and a walkthrough transcript that describes a low-chance chicken accident leading to a hospital/city outcome.',
    video: videos.ritsu,
    tags: ['Ending 20', 'Chicken', 'Rare Branch'],
    relatedRoutes: ['/all-endings', '/mini-games', '/kyle-route', '/download'],
    body: [
      {
        heading: 'Why Ending 20 feels different',
        paragraphs: [
          'Most routes in The False Sun feel like they come from relationship tone: how much the protagonist trusts Silas, whether a scene escalates, and which late memory answers you choose. Ending 20 is strange because the useful clue points back to the farm instead of the final romance chain.',
          'Treat it as a rare chicken/farm accident branch. Make a save before the animal interaction, replay that short section, and keep Silas or Kyle choices unchanged until you know the farm state itself is not the blocker.',
        ],
      },
      {
        heading: 'Recommended retry loop',
        paragraphs: [
          'Start from the closest save before the chicken/farm mini-game section. Run the interaction normally, watch for the accident outcome, and return to the save if the branch does not trigger. If your save is after the animal setup, go earlier.',
          'Do not solve this by replaying the final dream chain over and over. The available evidence points to the farm accident itself, not a hidden dialogue answer at the end of the story.',
        ],
        bullets: [
          'Save before the chicken interaction, not after the result.',
          'Retry the same farm section several times before changing route tone.',
          'If nothing happens, move one save earlier and include the tutorial/farm setup.',
          'Track attempts so you know whether you tested 5, 10, or 20 loops.',
        ],
      },
      {
        heading: 'What the ending seems to show',
        paragraphs: [
          'The branch appears to lead into an injury aftermath where the protagonist cannot stay on the farm as planned. Kyle is mentioned as helping around the farm, and the route has a bittersweet return-next-summer shape rather than a direct Silas confrontation.',
          'Because the exact English gallery label still needs replay verification, this guide names the branch by its mechanic: the chicken accident route.',
        ],
      },
      {
        heading: 'Common mistakes',
        paragraphs: [
          'The most common mistake is assuming Ending 20 is a moral answer hidden in the final romance route. That sends players through long loops that never touch the rare farm trigger.',
          'The second mistake is saving too late. If the farm state is already decided, reloading that save can repeat the same result forever.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Ending 20 random?',
        answer:
          'Current community evidence suggests a low-chance branch, but the exact probability is not officially confirmed. Treat it as random until replay testing proves a deterministic setup.',
      },
      {
        question: 'Where should I save for Ending 20?',
        answer:
          'Save before the chicken/farm interaction. If that does not work, save earlier before the tutorial or farm setup begins.',
      },
      {
        question: 'Is Ending 20 a Silas ending?',
        answer:
          'It is better described as a farm accident / Kyle-adjacent aftermath branch, not a standard Silas affection ending.',
      },
    ],
  },
  {
    slug: 'silas-route',
    path: '/silas-route',
    title: 'The False Sun Silas Route Guide',
    seoTitle: 'The False Sun Silas Route Guide - Choices, Saves and Endings',
    seoDescription:
      'A spoiler-marked Silas route guide for The False Sun with save points, affection-chain choices, confrontation branches, and ending clean-up advice.',
    summary:
      'Silas has the densest route logic. The cleanest approach is to split his endings into fear, confrontation, escape, and affection-chain branches.',
    category: 'Route',
    difficulty: 'Spoiler Heavy',
    coverImageUrl: localGuideCover('silas-route'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'community_crosscheck',
    videoSearchQueries: [
      'The False Sun Silas route',
      'The False Sun all endings Silas',
      'The False Sun walkthrough Silas',
    ],
    sourceNotes:
      'Route notes are cross-checked from current all-endings videos and player demand. Adult context is intentionally kept non-explicit.',
    video: videos.allEndings,
    tags: ['Silas', 'Route', 'Save Points'],
    relatedRoutes: [
      '/all-endings',
      '/ending-20',
      '/kyle-route',
      '/content-warnings',
    ],
    body: [
      {
        heading: 'Split Silas into four route families',
        paragraphs: [
          'Trying to solve Silas as one route is messy. Treat him as four families: fear answers, confrontation answers, escape answers, and the late affection chain. Each family should have its own save file.',
          'This matters because one warm answer does not magically repair a route built on fear, and one escape answer will not test the late affection outcomes.',
        ],
      },
      {
        heading: 'Core save points',
        paragraphs: [
          'Make saves before the bed scene, before choosing how to answer fear, before recovering memories, before the weapon confrontation, before the pier, before the tree, before the past-partner question, before the dream follow-up, and before the final dream.',
          'Name saves by branch, not by slot number. A save called "tree-cute-before" is more useful than "ending test 12" when you return later.',
        ],
      },
      {
        heading: 'The affectionate route is fragile',
        paragraphs: [
          'The warmer Silas route seems to depend on several small reassuring choices. Give Silas farm work, avoid escalating the pier scene, choose the warm tree answer, reassure him around the relationship-history question, choose the gentle dream follow-up, initiate the later kiss, keep the morning playful, and stay after the final nightmare setup.',
          'If that sounds like a lot, it is. Do not test it from memory. Write each choice down as you go and keep a save before the chain begins.',
        ],
      },
      {
        heading: 'The confrontation route is a separate clean-up path',
        paragraphs: [
          'The weapon and memory route is where many darker endings split. Keep it separate from the affection chain. If you are testing fear, hesitation, violence, or legal aftermath branches, do not overwrite your warm-route save.',
          'This page avoids quoting the VN script directly, but the practical rule is simple: create a save before every answer that changes whether the protagonist resists, freezes, reassures, or runs.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there a good Silas ending?',
        answer:
          'There appears to be at least one more peaceful separation-style Silas branch, but it requires a specific warm route chain and should be treated as spoiler-heavy.',
      },
      {
        question: 'Why do small answers matter so much?',
        answer:
          'Visual novels often store relationship flags across scenes. The False Sun seems to use several small tone choices before late outcomes unlock.',
      },
      {
        question: 'Should I mix escape choices with affectionate choices?',
        answer:
          'Not when testing. Keep separate save lines so you can tell which family produced the missing ending.',
      },
    ],
  },
  {
    slug: 'kyle-route',
    path: '/kyle-route',
    title: 'The False Sun Kyle Route Guide',
    seoTitle:
      'The False Sun Kyle Route Guide - Farm, Hospital and Summer Ending',
    seoDescription:
      'Find Kyle-related route outcomes in The False Sun, including farm aftermath, hospital return, and the promise-to-return branch.',
    summary:
      'Kyle is not just background. His route value is in the aftermath branches: farm help, hospital recovery, and a cleaner promise to return next summer.',
    category: 'Route',
    difficulty: 'Intermediate',
    coverImageUrl: localGuideCover('kyle-route'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'community_crosscheck',
    videoSearchQueries: [
      'The False Sun Kyle ending',
      'The False Sun Kyle route',
      'The False Sun hospital ending',
    ],
    sourceNotes:
      'Kyle guide is based on current walkthrough cross-checks and should be updated after direct English replay verification.',
    video: videos.ritsu,
    tags: ['Kyle', 'Farm', 'Aftermath'],
    relatedRoutes: [
      '/all-endings',
      '/ending-20',
      '/mini-games',
      '/silas-route',
    ],
    body: [
      {
        heading: 'Kyle routes are aftermath routes',
        paragraphs: [
          'Do not look for Kyle like a full dating-sim route with a long separate arc. Current evidence points to Kyle mattering most when the protagonist cannot continue the same farm path and the story needs a grounded aftermath.',
          'That is why the Kyle page connects strongly to Ending 20 and hospital/farm outcomes.',
        ],
      },
      {
        heading: 'Where Kyle becomes important',
        paragraphs: [
          'Kyle is useful to track around injury, farm support, and promises about returning next summer. If your missing ending sounds calmer than the Silas confrontation branches, check Kyle-adjacent outcomes before replaying the darker route family.',
          'The chicken accident / Ending 20 route appears to lead toward a scenario where Kyle helps the grandfather and the protagonist leaves with a promise to come back.',
        ],
      },
      {
        heading: 'How to test Kyle-adjacent endings',
        paragraphs: [
          'Keep an early farm save, a save before animal/chicken interaction, and a save before any route that changes whether the protagonist can stay on the farm. Run these branches before rebuilding late Silas affection choices.',
          'If the gallery slot you are missing sits near the calmer aftermath endings, try Kyle and farm-state branches first.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Kyle have a full route?',
        answer:
          'Based on current public evidence, Kyle is better treated as an aftermath branch than a full separate route.',
      },
      {
        question: 'Is Kyle tied to Ending 20?',
        answer:
          'The available walkthrough evidence suggests Kyle is mentioned in the Ending 20 aftermath, so yes, this is one of the main places to check.',
      },
      {
        question: 'Should I replay Silas choices to find Kyle endings?',
        answer:
          'Not first. Start with farm state, accident, and aftermath branches before changing late Silas route choices.',
      },
    ],
  },
  {
    slug: 'mini-games',
    path: '/mini-games',
    title: 'The False Sun Mini-Games Guide',
    seoTitle:
      'The False Sun Mini-Games Guide - Farm Tasks, Chicken and QR Code',
    seoDescription:
      'The False Sun mini-games guide covering farm task saves, chicken retry logic, QR-code curiosity, and why mod or APK shortcuts are not worth using.',
    summary:
      'The mini-games matter because they can affect route cleanup and Ending 20 attempts. Treat farm tasks as save points, not filler.',
    category: 'Mini-Games',
    difficulty: 'Beginner',
    coverImageUrl: localGuideCover('mini-games'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'The False Sun mini games',
      'The False Sun chicken ending',
      'The False Sun farm tasks',
    ],
    sourceNotes:
      'Manual-data page built from official platform info, itch player comments requesting mini-game help, and ending-route cross-checks. No reliable dedicated mini-game video was selected.',
    tags: ['Mini-Games', 'Farm', 'Chicken'],
    relatedRoutes: [
      '/ending-20',
      '/all-endings',
      '/download',
      '/content-warnings',
    ],
    body: [
      {
        heading: 'Farm tasks are route state',
        paragraphs: [
          'The farm sections are not just pacing. They create useful save points and may affect route state. Before you rush through animal or chore interactions, make a save and name it clearly.',
          'This is especially important if you are hunting Ending 20, because the current best clue points toward the chicken/farm interaction rather than a late dialogue answer.',
        ],
      },
      {
        heading: 'Do not chase skip mods',
        paragraphs: [
          'Some players want to skip the mini-games, which is understandable when repeating routes. This site will not recommend modified clients, unsafe APKs, or script workarounds.',
          'The safer approach is save discipline: keep a save before the mini-game, test the branch, and reload only from the closest relevant point.',
        ],
      },
      {
        heading: 'Chicken retries for Ending 20',
        paragraphs: [
          'If you are only missing the chicken accident branch, turn the farm section into a retry loop. Do the same interaction multiple times before moving earlier in the story. If the result never changes, your save may be too late or the route state may already be locked.',
          'Write down attempt counts. A rare branch feels less maddening when you know you tested a real sample instead of vaguely trying "a bunch".',
        ],
      },
      {
        heading: 'QR code and curiosity interactions',
        paragraphs: [
          'Players have commented on the QR-code joke and other curiosity interactions. Treat those as flavor unless a repeatable ending link is confirmed. Do not confuse a joke interaction with a mandatory ending path without evidence.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I skip The False Sun mini-games?',
        answer:
          'There is no official skip flow confirmed on this site. Use saves and replays instead of modified clients or unsafe downloads.',
      },
      {
        question: 'Do mini-games affect endings?',
        answer:
          'At least one rare ending appears tied to a farm/chicken interaction, so mini-games should be treated as route-relevant until verified otherwise.',
      },
      {
        question: 'Should I scan the QR code?',
        answer:
          'Only scan codes if you are comfortable opening external links. It is not currently treated as required for the main ending tracker.',
      },
    ],
  },
  {
    slug: 'download',
    path: '/download',
    title: 'The False Sun Download Guide',
    seoTitle: 'The False Sun Download - Official itch.io, Android, Mac and PC',
    seoDescription:
      'Download The False Sun safely from the official itch.io page and understand Android, macOS, Windows, Linux, iOS, and APK risks.',
    summary:
      'Use the official itch.io page for The False Sun downloads. The site tracks platform availability and avoids APK mirror advice.',
    category: 'Download',
    difficulty: 'Beginner',
    coverImageUrl: localGuideCover('download'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'The False Sun download',
      'The False Sun Android',
      'The False Sun Mac not working',
    ],
    sourceNotes:
      'Official-only page. The itch.io page checked on 2026-06-08 listed Android, Windows/Linux, and macOS files; no YouTube video is used for download claims.',
    tags: ['Download', 'Android', 'Mac'],
    relatedRoutes: ['/content-warnings', '/all-endings', '/mini-games'],
    body: [
      {
        heading: 'Official download path',
        paragraphs: [
          `Download The False Sun from the official itch.io page by Oniray: ${siteFacts.officialItchUrl}. The page listed Android, Windows/Linux, and macOS builds when checked on 2026-06-08.`,
          'Use the creator page as the source of truth. A third-party mirror can be outdated, unsafe, or bundled with files that do not belong to the game.',
        ],
      },
      {
        heading: 'Android, Mac, Windows, and Linux',
        paragraphs: [
          'The official page lists an Android build and desktop builds for Windows/Linux and macOS. If a platform fails to open, check the itch page comments and update date before assuming your device is unsupported.',
          'On macOS, blocked app warnings can happen with indie downloads. Only adjust security settings if you are sure the file came from the official itch page.',
        ],
      },
      {
        heading: 'iOS and APK warnings',
        paragraphs: [
          'The official page did not list an iOS build at the time of this check. Avoid pages that promise an iPhone version, mod menu, or unofficial APK unless the creator links to them directly.',
          'APK mirrors are not a shortcut for a visual novel. They can break saves, include old builds, or add security risk to a game that already has an official Android file.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I download The False Sun?',
        answer:
          'Use Oniray’s official itch.io page. This site links to the official page and does not host game files.',
      },
      {
        question: 'Is The False Sun on Android?',
        answer:
          'Yes, the official itch.io page listed an Android build when checked on 2026-06-08.',
      },
      {
        question: 'Is there an iOS version?',
        answer:
          'The official page did not list iOS at the time of this check. Avoid unofficial iOS or APK claims unless the creator confirms them.',
      },
    ],
  },
  {
    slug: 'content-warnings',
    path: '/content-warnings',
    title: 'The False Sun Content Warnings',
    seoTitle:
      'The False Sun Content Warnings - Mature Visual Novel Safety Notes',
    seoDescription:
      'Read spoiler-light content warnings for The False Sun, including mature themes, violence, disturbing scenes, flashing effects, and sound warnings.',
    summary:
      'The False Sun is intended for mature audiences. Read this page before using the walkthrough if you need warning context without full ending spoilers.',
    category: 'Safety',
    difficulty: 'Beginner',
    coverImageUrl: localGuideCover('content-warnings'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'The False Sun content warnings',
      'The False Sun mature audiences',
    ],
    sourceNotes:
      'Official-only page. Warnings are based on the official itch.io mature-audience notice and tag list rather than creator videos or community retellings.',
    tags: ['Warnings', 'Mature', 'Spoiler Light'],
    relatedRoutes: ['/download', '/all-endings', '/silas-route'],
    body: [
      {
        heading: 'Spoiler-light warning summary',
        paragraphs: [
          'The official page presents The False Sun as a mature-audience visual novel and warns for physical and emotional violence, disturbing themes, flashing visual effects, and sudden or loud sound effects.',
          'This walkthrough site keeps explicit adult details out of public guide text. Route pages still contain major story spoilers, violence outcomes, and ending implications.',
        ],
      },
      {
        heading: 'Before reading ending pages',
        paragraphs: [
          'The all endings, Silas route, and Ending 20 pages are spoiler-heavy. If you only need a download or platform answer, stay on the download page first.',
          'If you are sensitive to flashing visuals or sudden audio, check the game settings and play in a comfortable environment before doing repeated ending runs.',
        ],
      },
      {
        heading: 'What this site will not publish',
        paragraphs: [
          'This site will not publish explicit adult scene walkthroughs, copied game script, unsafe APK instructions, or creator impersonation. The goal is route clarity, not replacing the game.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is The False Sun for mature audiences?',
        answer:
          'Yes. The official itch.io page marks the game as intended for mature audiences.',
      },
      {
        question: 'Are the walkthrough pages spoiler-free?',
        answer:
          'No. Ending and route pages are spoiler-heavy by nature. This content warnings page is the safer spoiler-light entry point.',
      },
      {
        question: 'Does this site include explicit adult content?',
        answer:
          'No. It focuses on route logic, endings, download safety, and content warnings without explicit adult scene descriptions.',
      },
    ],
  },
];

export const featuredGuides = guides.slice(0, 5);

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuideByPath(path: string) {
  return guides.find((guide) => guide.path === path);
}
