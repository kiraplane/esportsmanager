import { checkedAt, siteDescription, siteFacts } from './sources';
import type { Guide, GuideVideo } from './types';

const videoCover = (id: string) => `https://i.ytimg.com/vi/${id}/hq720.jpg`;
const localCover = (name: string) => `/orbofcreation/${name}`;

const videos = {
  beginner: {
    id: 'r6zTbEVlYR4',
    title:
      'Get the right Start! + Tips and Tricks // Orb of Creation Beginners Guide',
    channel: 'YouTube guide creator',
    url: 'https://www.youtube.com/watch?v=r6zTbEVlYR4',
    thumbnailUrl: videoCover('r6zTbEVlYR4'),
    checkedAt,
  },
  officialOne: {
    id: 'o1E1gSOUpPs',
    title: 'Orb of Creation 1.0 trailer',
    channel: 'MarpleGames',
    url: 'https://www.youtube.com/watch?v=o1E1gSOUpPs',
    thumbnailUrl: videoCover('o1E1gSOUpPs'),
    publishedAt: '2026-06-23',
    checkedAt,
  },
  devLog: {
    id: '3JnCq0qXN28',
    title: 'Orb of Creation Development Log #9',
    channel: 'MarpleGames',
    url: 'https://www.youtube.com/watch?v=3JnCq0qXN28',
    thumbnailUrl: videoCover('3JnCq0qXN28'),
    checkedAt,
  },
  letsPlay: {
    id: '2E-DSqqDAdY',
    title:
      "Orb of Creation | Let's Play for the First Time in 2023 | Episode 1",
    channel: 'YouTube lets play creator',
    url: 'https://www.youtube.com/watch?v=2E-DSqqDAdY',
    thumbnailUrl: videoCover('2E-DSqqDAdY'),
    checkedAt,
  },
} satisfies Record<string, GuideVideo>;

export { siteDescription };

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    path: '/guides/beginner-guide',
    title: 'Orb of Creation Beginner Guide',
    seoTitle:
      'Orb of Creation Beginner Guide - First Hour, Spells and Upgrades',
    seoDescription:
      'Start Orb of Creation with a clear first-hour route: cast spells actively, read costs, buy upgrades with a purpose, and avoid scattered magic choices.',
    summary:
      'The clean beginner route is to play actively, read resource pressure, and make spells solve one bottleneck at a time instead of buying every shiny upgrade.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: videos.beginner.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Orb of Creation beginner guide',
      'Orb of Creation tips',
      'Orb of Creation guide',
    ],
    sourceNotes:
      'Built from official Steam/itch descriptions and current beginner-guide search demand. The selected YouTube guide is used as a route cross-check, not as transcript material.',
    video: videos.beginner,
    tags: ['Beginner', 'First Hour', 'Spells'],
    relatedRoutes: ['/play-online', '/spells', '/research', '/rituals'],
    body: [
      {
        heading: 'Start by solving one bottleneck at a time',
        paragraphs: [
          'Orb of Creation looks like an idle game at first, but the strongest early play is active and deliberate. Your spell bar is not just a set of buttons to mash. Treat each spell as a tool for the resource that is currently slowing the next upgrade.',
          'When a new option appears, read what it changes before buying it. A small spell-power gain, resource quality gain, or recharge improvement can matter more than a larger-looking number if it hits the exact bottleneck you are fighting.',
        ],
        bullets: [
          'Cast manually until you understand which resource is limiting progress.',
          'Buy upgrades that remove the current bottleneck before broad comfort upgrades.',
          'Use number keys for spells and QWER for other usable tools when the build exposes them.',
          'Pause before changing several systems at once, because mixed changes hide what worked.',
        ],
      },
      {
        heading: 'Do not treat every percentage as the same thing',
        paragraphs: [
          'The official itch notes call out a core idea that still matters: many modifiers stack additively inside their own family, while different modifier families can multiply the final result. That means two bonuses that look similar in the shop can have very different practical value.',
          'For a beginner, the exact math matters less than the habit. Ask whether the bonus improves the spell, the resource, the capacity, the quality, or the recharge loop. Pick the one that lets you afford the next meaningful discovery sooner.',
        ],
      },
      {
        heading: 'Use spells as experiments, not permanent commitments',
        paragraphs: [
          'The 1.0 discovery system can present different spells, glyphs, concepts, artifacts, alchemy, and rituals across runs. That is good news for new players because there is no single perfect opening you must copy forever.',
          'If a spell feels weak, test what it needs before abandoning it. Some spells need power. Some need recharge support. Some only become strong after a related resource or research choice. The game rewards noticing the connection rather than chasing a universal best button.',
        ],
        bullets: [
          'If a spell gives too little, check spell power and related resource quality.',
          'If a spell feels slow, check recharge and delayed chain options.',
          'If a spell is expensive, check soft requirements and resource conversion support.',
        ],
      },
      {
        heading: 'Push, then stabilize, then push again',
        paragraphs: [
          'A good early rhythm is push until a wall appears, stabilize the engine that feeds that wall, then push again. Do not spend ten minutes optimizing a resource you are not using. Do not ignore a resource that every next upgrade is asking for.',
          'As soon as research and system layers open, stop thinking of the game as linear. The strongest upgrade is often the one that joins two older layers together. A resource spell can feed alchemy. Alchemy can fix a material shortage. A research payoff can make a familiar spell worth revisiting.',
        ],
      },
      {
        heading: 'When to move from browser play to Steam',
        paragraphs: [
          'The play-online page is useful for trying the game quickly. The current Steam release is the official 1.0 version, while the public itch browser build is the older Dev 0.5.4 WebGL build. If you want the complete game, New Game+, and the full 1.0 discovery system, use Steam.',
          'If you are only learning the feel of spell casting and incremental pacing, the browser version is still valuable. Just avoid assuming every 0.5.4 detail is final for 1.0.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Orb of Creation an idle game?',
        answer:
          'It has incremental progression, but early progress is much stronger when you actively cast spells, inspect costs, and tune upgrades around bottlenecks.',
      },
      {
        question: 'What should I buy first?',
        answer:
          'Buy the upgrade that improves the resource, spell, capacity, or recharge loop blocking your next discovery. There is no single permanent best order because 1.0 can randomize discoveries.',
      },
      {
        question: 'Should I play the browser version or Steam first?',
        answer:
          'Use browser play for a quick test. Use Steam for the complete 1.0 release, New Game+, and current system balance.',
      },
    ],
  },
  {
    slug: 'play-online',
    path: '/play-online',
    title: 'Orb of Creation Play Online',
    seoTitle: 'Orb of Creation Play Online - Browser Version and Save Tips',
    seoDescription:
      'Play Orb of Creation online in your browser, learn what the self-hosted itch WebGL build includes, and know when to move to Steam 1.0.',
    summary:
      'Play the authorized browser build here, then use the guide links below the game to understand spells, research, and the Steam 1.0 differences.',
    category: 'Start',
    difficulty: 'Status',
    coverImageUrl: localCover('orb-of-creation-og.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Orb of Creation play online',
      'Orb of Creation online',
    ],
    sourceNotes:
      'The WebGL build is sourced from the official itch.io page. The user states permission was obtained for self-hosting.',
    tags: ['Play Online', 'Browser', 'itch.io'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/steam',
      '/itch-io',
      '/download',
    ],
    body: [
      {
        heading: 'What the online version is for',
        paragraphs: [
          'The online version is best for testing Orb of Creation quickly, learning the spell-casting feel, and deciding whether the full Steam release is for you. It runs inside the browser and keeps the page focused on the game rather than sending you through unrelated mirrors.',
          'The current self-hosted build is based on the official itch.io WebGL version. It is valuable, but it is not the same promise as the Steam 1.0 release.',
        ],
      },
      {
        heading: 'Browser saves need extra care',
        paragraphs: [
          'Browser games rely on local storage and browser data. Private browsing, storage cleaning extensions, school devices, or aggressive cache cleanup can remove progress. If you plan to play seriously, export saves when available and consider moving to the official Steam build.',
          'If the screen looks gray or slow after launch, wait before refreshing. The official itch comments include players confusing loading time with a broken build.',
        ],
      },
      {
        heading: 'When Steam is the better answer',
        paragraphs: [
          'Choose Steam when you want the complete 1.0 game, full progression, New Game+, and current balance. The Steam page lists Windows and macOS support and is the official release source from MarpleGames.',
          'Use this site as a companion: play a little, read the beginner and systems pages, then decide whether to continue in the browser or commit to Steam.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I play Orb of Creation online here?',
        answer:
          'Yes. The play-online page self-hosts the official itch.io WebGL build with permission.',
      },
      {
        question: 'Is the browser build the same as Steam 1.0?',
        answer:
          'No. The itch browser build is Dev 0.5.4, while Steam is the complete 1.0 release as of 23 Jun, 2026.',
      },
      {
        question: 'Why does the game take time to load?',
        answer:
          'The Unity WebGL data file is large. Wait through the initial load before refreshing or assuming it failed.',
      },
    ],
  },
  {
    slug: 'spells-guide',
    path: '/spells',
    title: 'Orb of Creation Spells Guide',
    seoTitle: 'Orb of Creation Spells Guide - Power, Recharge and Setup',
    seoDescription:
      'Understand Orb of Creation spells by role: resource spells, power scaling, recharge support, soft requirements, and when to rebuild a setup.',
    summary:
      'Spells are the engine of Orb of Creation. Build them around the current resource problem, then revisit them as research and artifacts change the math.',
    category: 'Systems',
    difficulty: 'Beginner',
    coverImageUrl: localCover('orb-of-creation-screenshot.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'Orb of Creation spells',
      'Orb of Creation guide spells',
    ],
    sourceNotes:
      'Written from official Steam/itch feature descriptions and search demand for spells.',
    tags: ['Spells', 'Power', 'Recharge'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/research',
      '/rituals',
      '/guides/alchemy-druidry',
    ],
    body: [
      {
        heading: 'Spells should have jobs',
        paragraphs: [
          'The easiest way to make spell choices less overwhelming is to assign each spell a job. One spell might create the resource you lack, another might improve a supporting resource, and another might turn a slow phase into a burst window.',
          'Avoid building a spell setup only because the numbers look large. Ask what the setup unlocks. If the answer is vague, wait until the bottleneck is clearer.',
        ],
      },
      {
        heading: 'Power, quality, and recharge solve different problems',
        paragraphs: [
          'Spell power helps a spell do more. Resource quality changes how valuable each unit of a resource is. Recharge support changes how often a strong effect can happen. Those levers can feel similar, but they answer different problems.',
          'If the next upgrade asks for too much of a resource, quality and generation can both help. If a powerful spell is sitting idle too long, recharge becomes the real bottleneck. If a spell fires often but barely moves the bar, power matters more.',
        ],
      },
      {
        heading: 'Soft requirements change how you evaluate new spells',
        paragraphs: [
          'The 1.0 Steam announcement says restrictive gates have been replaced with soft requirements. That means discovering a spell before meeting the ideal support requirement is not automatically useless. It may cost more or take longer, but it can still be part of a route.',
          'For players, the practical rule is simple: test whether the spell advances the current wall. If it does, keep supporting it. If it barely moves anything, park it until research, artifacts, or another system improves the context.',
        ],
      },
      {
        heading: 'Rebuild when the game gives you a new layer',
        paragraphs: [
          'Do not keep the same spell setup just because it carried the previous phase. Research, artifacts, alchemy, concepts, and rituals can change what a good spell does. A stale setup can look busy while secretly wasting your strongest new bonus.',
          'After every major unlock, read your spells again and ask what changed. The best habit is not finding one perfect build. It is noticing when the old build has finished its job.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are there best spells in Orb of Creation?',
        answer:
          'There are strong spell roles, but 1.0 discovery randomness means the best available choice depends on your run and current bottleneck.',
      },
      {
        question: 'What does recharge matter for?',
        answer:
          'Recharge matters when a spell is strong but too slow. If the spell fires often and still feels weak, improve power or resource context instead.',
      },
      {
        question: 'Should I rebuild spells often?',
        answer:
          'Rebuild after major research, artifact, alchemy, or ritual unlocks. Small upgrades do not always require a full reset.',
      },
    ],
  },
  {
    slug: 'research-guide',
    path: '/research',
    title: 'Orb of Creation Research Guide',
    seoTitle: 'Orb of Creation Research Guide - Technology and Expert Payoffs',
    seoDescription:
      'Use Orb of Creation research to connect systems instead of buying random upgrades. Learn how to evaluate technology, expert research, and soft requirements.',
    summary:
      'Research is where Orb of Creation starts joining old systems together. Pick research that changes the next wall, not research that merely sounds advanced.',
    category: 'Systems',
    difficulty: 'Intermediate',
    coverImageUrl: localCover('orb-of-creation-screenshot.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'Orb of Creation research',
      'Orb of Creation technology',
    ],
    sourceNotes:
      'Uses Steam 1.0 release notes and competitor wiki route evidence for technology/research demand.',
    tags: ['Research', 'Technology', 'Expert'],
    relatedRoutes: [
      '/spells',
      '/rituals',
      '/guides/new-game-plus',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Research is a bridge, not a checklist',
        paragraphs: [
          'New players often treat research as a list to clear from top to bottom. Orb of Creation is sharper than that. Research is strongest when it bridges the system you already have with the system that can solve your next wall.',
          'Before choosing, ask what the research makes possible. Does it improve a spell family, unlock a conversion route, support a ritual, or make an expert payoff reachable? If it only increases a number you are not using, it can wait.',
        ],
      },
      {
        heading: 'Expert research should change behavior',
        paragraphs: [
          'The Steam 1.0 release notes say every expert research has a unique payoff. That is a signal to read expert choices as build direction, not passive background upgrades.',
          'When an expert option appears, imagine how your play changes after buying it. If the answer is "cast the same spell and wait," it may not be the best first pick. If the answer is "now alchemy feeds my main resource" or "now this spell family scales differently," it is probably worth testing.',
        ],
      },
      {
        heading: 'Use soft requirements to test ahead',
        paragraphs: [
          'Soft requirements make research planning less brittle. If you discover something early, you can sometimes use it inefficiently before the perfect support exists. That can be useful when the payoff unlocks the next layer faster than waiting for a clean route.',
          'Do not force every early discovery. A soft requirement is an invitation to test, not a command to overpay forever.',
        ],
      },
      {
        heading: 'Record what each research solved',
        paragraphs: [
          'Because Orb of Creation can randomize discoveries, your best personal guide is a short note about what solved the wall. Write down the wall, the research, the supporting spell, and the result. That habit makes New Game+ and later runs much easier.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should I buy every research option immediately?',
        answer:
          'No. Prioritize research that changes your current bottleneck or opens a system connection you can use right away.',
      },
      {
        question: 'What is expert research for?',
        answer:
          'Expert research creates stronger build direction. Treat it as a choice that should change how your engine works.',
      },
      {
        question: 'Why does research feel different in 1.0?',
        answer:
          'The official release notes say expert research has unique payoffs and discoveries can be randomized, so static old orders are less reliable.',
      },
    ],
  },
  {
    slug: 'rituals-guide',
    path: '/rituals',
    title: 'Orb of Creation Rituals Guide',
    seoTitle: 'Orb of Creation Rituals Guide - Gigantic Spells and Timing',
    seoDescription:
      'Learn how to approach Orb of Creation rituals in 1.0: big spell timing, delayed payoff, resource prep, and when a ritual is worth the cost.',
    summary:
      'Rituals are not normal upgrades with a larger number. Treat them as giant spell commitments that need preparation and a clear payoff.',
    category: 'Systems',
    difficulty: 'Advanced',
    coverImageUrl: videos.devLog.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Orb of Creation rituals guide',
      'Orb of Creation rituals',
    ],
    sourceNotes:
      'Steam 1.0 release notes describe Rituals as gigantic, powerful spells with revamped decision-making.',
    video: videos.devLog,
    tags: ['Rituals', 'Late Game', 'Timing'],
    relatedRoutes: [
      '/spells',
      '/research',
      '/guides/alchemy-druidry',
      '/guides/new-game-plus',
    ],
    body: [
      {
        heading: 'Rituals need a reason before they need resources',
        paragraphs: [
          'A ritual should answer a specific problem: break a resource wall, convert a slow chain into a burst, or unlock a route that smaller spells cannot reach. If you start a ritual only because it is available, you risk spending a long setup window on the wrong payoff.',
          'Before committing, read the cost, the delay, and the expected output. Then check whether your current engine can actually feed that cost without starving the system you are trying to improve.',
        ],
      },
      {
        heading: 'Prepare the engine before the ritual window',
        paragraphs: [
          'Rituals become much better when your resource generation, quality, and conversion support are ready before the cast. If you build the support after starting the ritual, you may spend the whole window recovering instead of benefiting.',
          'This is where alchemy and druidry can matter. A plant loop, material conversion, or delayed resource chain can make a ritual possible without forcing your main spell setup to do everything.',
        ],
      },
      {
        heading: 'Do not confuse big with urgent',
        paragraphs: [
          'Rituals are dramatic, but dramatic does not always mean urgent. Sometimes the correct move is to buy one more research payoff, stabilize a resource, or improve spell recharge before starting the large cast.',
          'If a ritual fails to change the next wall, note why. Was the cost too high, the support too weak, or the payoff aimed at the wrong system? That answer makes the next attempt much stronger.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are rituals late-game only?',
        answer:
          'They are deeper system tools. The exact timing depends on your discoveries, but they should be treated as major commitments rather than routine clicks.',
      },
      {
        question: 'What changed about rituals in 1.0?',
        answer:
          'The official 1.0 notes say rituals were repurposed as gigantic, powerful spells with more interesting decisions.',
      },
      {
        question: 'Should I start every ritual as soon as possible?',
        answer:
          'No. Start a ritual when the support engine and payoff are clear.',
      },
    ],
  },
  {
    slug: 'alchemy-druidry',
    path: '/guides/alchemy-druidry',
    title: 'Orb of Creation Alchemy and Druidry Guide',
    seoTitle:
      'Orb of Creation Alchemy and Druidry Guide - Conversions and Plants',
    seoDescription:
      'Use Orb of Creation alchemy and druidry to solve material shortages, grow and harvest plants, and build delayed resource chains.',
    summary:
      'Alchemy and druidry are support systems with real identity in 1.0: one converts materials, the other grows and harvests plant value.',
    category: 'Systems',
    difficulty: 'Intermediate',
    coverImageUrl: localCover('orb-of-creation-screenshot.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: ['Orb of Creation alchemy', 'Orb of Creation druidry'],
    sourceNotes:
      'Based on Steam 1.0 notes that describe Druidry as growing/harvesting plants and Alchemy as converting materials.',
    tags: ['Alchemy', 'Druidry', 'Resources'],
    relatedRoutes: [
      '/rituals',
      '/research',
      '/spells',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Use alchemy when the resource shape is wrong',
        paragraphs: [
          'Alchemy is useful when you are producing value, but not in the form the next upgrade needs. Instead of forcing every spell to generate the exact missing material, look for a conversion route that turns surplus into progress.',
          'A good alchemy chain should reduce pressure. If it creates more waiting, more shortages, or more manual babysitting than the original problem, the chain is not ready yet.',
        ],
      },
      {
        heading: 'Use druidry when time can become value',
        paragraphs: [
          'The 1.0 notes frame druidry around growing and harvesting plants. That makes it a natural fit for delayed payoff, scaling, and planned harvest windows.',
          'Do not judge a plant loop only by the first tick. Ask how it behaves after support, quality, and related research improve. A slow loop can become strong if it feeds a ritual or a material conversion at the right moment.',
        ],
      },
      {
        heading: 'Combine them around one goal',
        paragraphs: [
          'The strongest alchemy and druidry setups usually point at one target: feed a ritual, unlock research, stabilize a material, or support a spell family. If you split them across too many goals, it becomes hard to know what is working.',
          'Pick one goal, tune the support system around it, and only then broaden into comfort upgrades.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is alchemy for in Orb of Creation?',
        answer:
          'Alchemy converts materials and can turn surplus resources into the resource shape your next wall needs.',
      },
      {
        question: 'What is druidry for?',
        answer:
          'Druidry focuses on growing and harvesting plants, often as delayed value or support for larger systems.',
      },
      {
        question: 'Should alchemy and druidry be upgraded together?',
        answer:
          'Upgrade them together when they support one plan. If they solve unrelated problems, prioritize the one connected to your current wall.',
      },
    ],
  },
  {
    slug: 'new-game-plus',
    path: '/guides/new-game-plus',
    title: 'Orb of Creation New Game+ Guide',
    seoTitle: 'Orb of Creation New Game+ Guide - Randomized Runs and Prestige',
    seoDescription:
      'Prepare for Orb of Creation New Game+: randomized challenges, prestige upgrades, discovery variance, and what to record before starting over.',
    summary:
      'New Game+ is where your run knowledge matters more than a fixed build order. Record what solved walls, then expect discoveries to change.',
    category: 'Progression',
    difficulty: 'Advanced',
    coverImageUrl: videos.officialOne.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Orb of Creation New Game Plus',
      'Orb of Creation 1.0',
    ],
    sourceNotes:
      'Steam release-date announcement confirms New Game+ with randomized challenges and prestige upgrades.',
    video: videos.officialOne,
    tags: ['New Game+', 'Prestige', '1.0'],
    relatedRoutes: [
      '/steam',
      '/research',
      '/rituals',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Finish with notes, not just power',
        paragraphs: [
          'Before starting New Game+, write down the systems that solved your hardest walls. Record the spell role, research payoff, artifact or concept support, and any alchemy or ritual chain that made the difference.',
          'Because 1.0 can randomize spells, glyphs, concepts, artifacts, alchemy, and rituals, the exact same route may not appear again. Your reusable skill is recognizing the shape of the solution.',
        ],
      },
      {
        heading: 'Prestige upgrades should support flexibility',
        paragraphs: [
          'A prestige choice that only improves one narrow plan can feel amazing when the same plan appears again, but weak when discoveries shift. Value upgrades that help you respond to different resource shapes and spell options.',
          'If a prestige upgrade makes early scouting, resource stability, or system transition easier, it can be more valuable than a larger number that only supports one old build.',
        ],
      },
      {
        heading: 'Randomized discovery rewards pattern recognition',
        paragraphs: [
          'The point of New Game+ is not memorizing a static shopping list. It is understanding what a run is asking for. If the game gives you strong conversion, look for material routes. If it gives strong recharge, look for spells with big effects. If it gives ritual support, prepare resources before the cast window.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Orb of Creation have New Game+?',
        answer:
          'Yes. The official Steam release-date announcement describes New Game+ with randomized challenges and prestige upgrades.',
      },
      {
        question: 'Are all New Game+ runs the same?',
        answer:
          'No. The announcement says discoveries can be randomized, making later runs differ from your first completion.',
      },
      {
        question: 'What should I do before starting New Game+?',
        answer:
          'Record what solved your major walls and which systems worked together. That knowledge transfers even when the exact options change.',
      },
    ],
  },
  {
    slug: 'steam-release',
    path: '/steam',
    title: 'Orb of Creation Steam Guide',
    seoTitle:
      'Orb of Creation Steam - 1.0 Release, Platforms and Official Page',
    seoDescription:
      'Find the official Orb of Creation Steam page, 1.0 release date, platform support, New Game+ notes, and how Steam differs from the browser build.',
    summary:
      'Steam is the official complete 1.0 release source for Orb of Creation, with Windows and macOS support listed on the store page.',
    category: 'Official',
    difficulty: 'Status',
    coverImageUrl: videos.officialOne.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: ['Orb of Creation Steam', 'Orb of Creation 1.0'],
    sourceNotes:
      'Uses the official Steam store page and Steam announcements checked on 2026-06-24.',
    video: videos.officialOne,
    tags: ['Steam', '1.0', 'Official'],
    relatedRoutes: [
      '/download',
      '/itch-io',
      '/guides/new-game-plus',
      '/play-online',
    ],
    body: [
      {
        heading: 'Use Steam for the current full release',
        paragraphs: [
          'The Steam page lists Orb of Creation by MarpleGames with a 23 Jun, 2026 release date and an early access date of 31 Mar, 2022. That makes Steam the current official source for the complete 1.0 release.',
          'If a guide, comment, or browser page talks about Dev 0.5.4, treat that as older context unless the specific mechanic still matches your 1.0 run.',
        ],
      },
      {
        heading: 'What 1.0 adds over older context',
        paragraphs: [
          'The official release-date announcement describes a complete game with a start and an end, New Game+, randomized challenges, prestige upgrades, randomized discovery options, soft requirements, and rebuilt Druidry, Alchemy, and Rituals.',
          'That is why this wiki avoids pretending there is one permanent old beta build order. The guide pages focus on decision logic that survives run variation.',
        ],
      },
      {
        heading: 'Platform notes',
        paragraphs: [
          'Steam currently lists Windows and macOS platform icons for Orb of Creation. The browser version here is a separate WebGL build from itch.io and is best treated as a way to try the game quickly.',
          'For purchases, reviews, soundtrack bundles, and the current 1.0 build, go through Steam rather than third-party mirrors.',
        ],
      },
    ],
    faq: [
      {
        question: 'When did Orb of Creation 1.0 release?',
        answer: 'Steam lists the full release date as 23 Jun, 2026.',
      },
      {
        question: 'Who made Orb of Creation?',
        answer: 'Steam lists MarpleGames as developer and publisher.',
      },
      {
        question: 'Is Steam different from browser play?',
        answer:
          'Yes. Steam is the complete 1.0 release; the browser build is the older official itch.io WebGL build.',
      },
    ],
  },
  {
    slug: 'download',
    path: '/download',
    title: 'Orb of Creation Download Guide',
    seoTitle:
      'Orb of Creation Download - Steam, itch.io and Safe Platform Help',
    seoDescription:
      'Download Orb of Creation safely through official Steam and itch.io pages, understand browser play, and avoid APK or mirror risks.',
    summary:
      'Use official channels only: Steam for the current 1.0 release and itch.io for the browser-play build. Avoid APK mirrors and save editors.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: localCover('orb-of-creation-og.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Orb of Creation download',
      'Orb of Creation Steam',
      'Orb of Creation itch io',
    ],
    sourceNotes:
      'Download guidance is based on official Steam and itch.io pages. No third-party mirrors are recommended.',
    tags: ['Download', 'Steam', 'Safety'],
    relatedRoutes: ['/steam', '/itch-io', '/mobile', '/play-online'],
    body: [
      {
        heading: 'Use the official channel that matches your goal',
        paragraphs: [
          'Use Steam when you want the complete 1.0 release, current balance, New Game+, soundtrack bundle options, and normal platform support. Use itch.io when you want the official browser-play page and legacy WebGL build context.',
          'This site does not host paid Steam files, modified builds, APK mirrors, or save editors. The self-hosted play page is only for the authorized WebGL browser build from itch.io.',
        ],
      },
      {
        heading: 'Avoid APK and mirror shortcuts',
        paragraphs: [
          'Serper discovery shows APK and mobile searches, but there is no reason to trust random files for a game that has official Steam and itch.io pages. APK mirrors can contain outdated builds, broken saves, injected ads, or malware.',
          'If you are on a phone or tablet, try the browser page first and expect limitations. For the current full release, use Steam on supported desktop platforms.',
        ],
      },
      {
        heading: 'Protect your save',
        paragraphs: [
          'Browser saves can disappear when local storage is cleared. Steam saves are usually a safer choice for long runs. If the game offers export/import in the build you are playing, keep a manual copy before experimenting with risky choices or device changes.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where should I download Orb of Creation?',
        answer:
          'Use the official Steam page for the current 1.0 release or the official Marple itch.io page for browser play.',
      },
      {
        question: 'Does this site provide an APK?',
        answer:
          'No. This site does not provide APKs, modded clients, mirrors, or save editors.',
      },
      {
        question: 'Can I play without downloading?',
        answer:
          'Yes. Use the play-online page for the official itch.io WebGL browser build.',
      },
    ],
  },
  {
    slug: 'itch-io',
    path: '/itch-io',
    title: 'Orb of Creation itch.io Guide',
    seoTitle: 'Orb of Creation itch.io - Official Browser Build and Dev 0.5.4',
    seoDescription:
      'Use the official Orb of Creation itch.io page for browser play, Discord, Patreon, and legacy Dev 0.5.4 context.',
    summary:
      'The itch.io page is the official browser-play source and community bridge, but its public WebGL build is older than Steam 1.0.',
    category: 'Official',
    difficulty: 'Status',
    coverImageUrl: localCover('orb-of-creation-og.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Orb of Creation itch io',
      'Orb Of Creation by Marple',
    ],
    sourceNotes:
      'Uses the official Marple itch.io page and its embedded WebGL build details.',
    tags: ['itch.io', 'Browser', 'Official'],
    relatedRoutes: ['/play-online', '/steam', '/discord', '/download'],
    body: [
      {
        heading: 'The itch.io page is still useful',
        paragraphs: [
          'The official itch.io page describes Orb of Creation as a magic-themed incremental about creating the world from nothing but magic. It also links the official Discord and Patreon pages.',
          'The embedded WebGL build is Dev 0.5.4, so treat it as a playable browser snapshot rather than the final 1.0 feature baseline.',
        ],
      },
      {
        heading: 'Why this site self-hosts the browser build',
        paragraphs: [
          'The user confirmed permission to self-host the itch WebGL build. Self-hosting keeps the play-online page fast, focused, and paired with guide links that explain how browser play differs from Steam.',
          'The page still points back to MarpleGames and official platforms. It is not a replacement for the Steam 1.0 release.',
        ],
      },
      {
        heading: 'What to check on itch.io',
        paragraphs: [
          'Use itch.io for creator context, browser play, comments, Discord link, and development history. Use Steam for the current full release, reviews, platform purchase, soundtrack bundle, and 1.0 update notes.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Orb of Creation on itch.io official?',
        answer:
          'Yes. The page is published by Marple and links to official community/support channels.',
      },
      {
        question: 'Is the itch build current?',
        answer:
          'The embedded public WebGL build is Dev 0.5.4, while Steam is the 1.0 release.',
      },
      {
        question: 'Can I support the developer from itch.io?',
        answer:
          'The itch page links to Patreon and official community channels.',
      },
    ],
  },
  {
    slug: 'discord',
    path: '/discord',
    title: 'Orb of Creation Discord Guide',
    seoTitle:
      'Orb of Creation Discord - Official Community Link and Update Tips',
    seoDescription:
      'Find the official Orb of Creation Discord link, what to ask there, and how to avoid confusing old beta advice with Steam 1.0.',
    summary:
      'Use Discord for current community discussion, but cross-check factual mechanics against the Steam 1.0 release and official announcements.',
    category: 'Official',
    difficulty: 'Status',
    coverImageUrl: localCover('orb-of-creation-og.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: ['Orb of Creation discord'],
    sourceNotes:
      'The official itch.io page links the Discord invite used here.',
    tags: ['Discord', 'Community', 'Official'],
    relatedRoutes: [
      '/steam',
      '/itch-io',
      '/guides/beginner-guide',
      '/download',
    ],
    body: [
      {
        heading: 'Use the official invite',
        paragraphs: [
          'The official itch.io page links the Orb of Creation Discord invite. Use that link instead of random reposts, expired invites, or communities that mix Orb of Creation with unrelated games.',
          'Discord is useful for patch discussion and player questions, but it is not a replacement for official release notes when a mechanic changes.',
        ],
      },
      {
        heading: 'Ask better questions',
        paragraphs: [
          'When asking for help, include your version, whether you are on Steam 1.0 or the browser build, your current bottleneck, and the systems you have unlocked. "What do I do next?" is hard to answer. "I need more material for this ritual and have these alchemy options" gets better help.',
        ],
      },
      {
        heading: 'Watch for old beta advice',
        paragraphs: [
          'Orb of Creation changed heavily across development. Advice from older videos, old comments, or archived wiki pages can still teach principles, but exact orders may be wrong for 1.0.',
          'If an answer mentions a fixed discovery or hard gate, compare it with the 1.0 notes about randomized discovery and soft requirements.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there an official Orb of Creation Discord?',
        answer:
          'Yes. The official itch.io page links a Discord invite for updates and discussion.',
      },
      {
        question: 'Should Discord advice override Steam notes?',
        answer:
          'No. Use Discord as a community signal, then cross-check current mechanics against official pages and your in-game version.',
      },
      {
        question: 'What should I include when asking for help?',
        answer:
          'Mention your version, current bottleneck, unlocked systems, and what you already tried.',
      },
    ],
  },
  {
    slug: 'mobile',
    path: '/mobile',
    title: 'Orb of Creation Mobile and APK Guide',
    seoTitle: 'Orb of Creation Mobile - Android, APK Safety and Browser Play',
    seoDescription:
      'Understand Orb of Creation mobile searches safely: browser play, Steam platform support, Android/APK risks, and why this site avoids mirrors.',
    summary:
      'There is mobile search demand, but the safe answer is browser play or official desktop channels, not APK mirrors.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: localCover('orb-of-creation-og.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'Orb of Creation mobile',
      'Orb of Creation android',
      'Orb of Creation apk',
    ],
    sourceNotes:
      'Created because Serper surfaced android, mobile, and APK demand. No APK source is treated as safe unless official sources add one.',
    tags: ['Mobile', 'APK Safety', 'Browser'],
    relatedRoutes: ['/play-online', '/download', '/steam', '/itch-io'],
    body: [
      {
        heading: 'The safe mobile answer is limited',
        paragraphs: [
          'Orb of Creation has browser-play demand and mobile searches, but the official current release path is Steam, while the official browser build comes from itch.io. This site does not recommend APK mirrors.',
          'On mobile, the browser version may load but can be uncomfortable because Unity WebGL, text, tooltips, and save handling are usually better on desktop.',
        ],
      },
      {
        heading: 'Why APK mirrors are not worth it',
        paragraphs: [
          'APK mirrors can be outdated, modified, broken, or unsafe. They can also confuse players by mixing old Dev builds with claims about the 1.0 Steam release.',
          'If MarpleGames publishes an official Android build in the future, this page should be updated to point to that official source. Until then, use browser play for quick testing and Steam for the full release.',
        ],
      },
      {
        heading: 'Use browser play carefully on phones',
        paragraphs: [
          'If you try the online version from a phone, keep expectations modest. Large WebGL files can load slowly, mobile browsers may clear storage, and small screens make tooltip-heavy incremental systems harder to inspect.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there an official Orb of Creation APK?',
        answer:
          'No official APK source was verified during this build pass. This site does not provide APK mirrors.',
      },
      {
        question: 'Can Orb of Creation run on mobile browsers?',
        answer:
          'The WebGL browser build may load on some mobile browsers, but desktop play is more reliable.',
      },
      {
        question: 'What should I use for the full game?',
        answer: 'Use the official Steam release for the complete 1.0 game.',
      },
    ],
  },
];

export const featuredGuides = guides.filter((guide) =>
  [
    'beginner-guide',
    'play-online',
    'spells-guide',
    'research-guide',
    'rituals-guide',
    'steam-release',
  ].includes(guide.slug)
);

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuideByPath(path: string) {
  return guides.find((guide) => guide.path === path);
}
