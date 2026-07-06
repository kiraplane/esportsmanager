import { checkedAt, siteDescription, siteFacts } from './sources';
import type { Guide, GuideVideo } from './types';

const videoCover = (id: string) => `https://i.ytimg.com/vi/${id}/hq720.jpg`;
const localCover = (name: string) => `/feedthepit/${name}`;
const screenshotCover = (name: string) => `/feedthepit/screenshots/${name}`;
const itchCover = (name: string) => `/feedthepit/itch/${name}`;

const videos = {
  actOneTrailer: {
    id: 'tE6LWsWcoJ4',
    title: 'Feed The Pit - Act 1 Trailer',
    channel: 'Curious Fox Sox',
    url: 'https://www.youtube.com/watch?v=tE6LWsWcoJ4',
    thumbnailUrl: videoCover('tE6LWsWcoJ4'),
    publishedAt: '2026-06-26',
    checkedAt,
  },
  releaseDate: {
    id: 'NfYzw_t-nvk',
    title: 'Feed The Pit | Official Release Date Trailer',
    channel: 'The Horror Game Awards',
    url: 'https://www.youtube.com/watch?v=NfYzw_t-nvk',
    thumbnailUrl: videoCover('NfYzw_t-nvk'),
    publishedAt: '2026-06-25',
    checkedAt,
  },
  announcement: {
    id: 'RxKXaeGn1zo',
    title: 'Feed The Pit - Announcement Trailer',
    channel: 'Curious Fox Sox',
    url: 'https://www.youtube.com/watch?v=RxKXaeGn1zo',
    thumbnailUrl: videoCover('RxKXaeGn1zo'),
    checkedAt,
  },
  walkthrough: {
    id: 'ujGtbuhPpo8',
    title: 'FEED THE PIT Gameplay Walkthrough FULL GAME No Commentary + Ending',
    channel: 'Zhain Gaming',
    url: 'https://www.youtube.com/watch?v=ujGtbuhPpo8',
    thumbnailUrl: videoCover('ujGtbuhPpo8'),
    publishedAt: '2026-07-02',
    checkedAt,
  },
  endingShowcase: {
    id: 'MFydx2AjAdg',
    title: 'Feed The Pit: ACT 1 - Full GAME Walkthrough & Ending',
    channel: 'FoxPlay',
    url: 'https://www.youtube.com/watch?v=MFydx2AjAdg',
    thumbnailUrl: videoCover('MFydx2AjAdg'),
    publishedAt: '2026-07-02',
    checkedAt,
  },
} satisfies Record<string, GuideVideo>;

export { siteDescription };

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    path: '/guides/beginner-guide',
    title: 'Feed The Pit Beginner Guide',
    seoTitle: 'Feed The Pit Beginner Guide - Act 1 First Missions',
    seoDescription:
      'Start Feed The Pit Act 1 with a spoiler-light route for cards, map narrowing, monster pressure, items, ranking, and when to stop gambling.',
    summary:
      'Play Act 1 like an investigation first and a chase second: narrow the map cleanly, learn the monster, then spend items only when they protect the final answer.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: screenshotCover('feed-the-pit-investigation.jpg'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'Feed The Pit beginner guide',
      'Feed The Pit guide',
      'Feed The Pit Act 1 guide',
    ],
    sourceNotes:
      'Built from official Steam mechanics, Steam Community launch signals, and launch-week walkthrough demand.',
    tags: ['Beginner', 'Act 1', 'Cards'],
    relatedRoutes: ['/cards', '/monsters', '/walkthrough', '/steam'],
    body: [
      {
        heading: 'Treat the first run as a map-reading lesson',
        paragraphs: [
          'Feed The Pit punishes panic more than curiosity. Your first job is not to sprint through Carrister Valley; it is to understand how the card questions shrink the possible target area. Each card has a limited purpose, so burning the wrong question early can leave you with too many possible spaces and too little safety.',
          'Start by reading the card wording slowly. Ask what it removes from the map, not whether it feels powerful. A narrow question can be better than a dramatic one if it leaves a cleaner final set of locations.',
        ],
        bullets: [
          'Use broad information early when the map is still messy.',
          'Save precise cards for the point where only a few locations remain.',
          'Do not mark guesses as facts until a card result actually supports them.',
          'If the hand is awkward, choose the card that removes the most uncertainty.',
        ],
      },
      {
        heading: 'The monster is a rule to learn, not only a threat',
        paragraphs: [
          'Steam describes each mission as bringing a new monster whose behavior is initially unknown. That means the safest player is not always the fastest player. Watch how pressure begins, how the monster reacts to distance or choices, and which actions create the most danger.',
          'Do not spend every item the moment fear spikes. Hold a resource until you understand whether the monster punishes noise, line of sight, delay, route choice, or repeated mistakes. A saved item is often the difference between a final answer and a failed mission.',
        ],
      },
      {
        heading: 'Separate finding the target from surviving the return',
        paragraphs: [
          'A clean investigation has two phases. First, find the target location with the cards you are given. Second, survive the consequences of having that answer. Players get into trouble when they act as if the mission ends once the map looks solved.',
          'Before committing to the final location, check your item count, route back, and monster pressure. If you have enough information but no safety left, slow down and rebuild control before taking the final gamble.',
        ],
        bullets: [
          'Mark the likely spot, then plan the route before moving.',
          'Use items to protect the last dangerous stretch, not the first mild scare.',
          'Accept a lower rank if pushing for a perfect mission would throw the run.',
        ],
      },
      {
        heading: 'Use ranking as feedback, not as your first goal',
        paragraphs: [
          'Steam achievement data exposes rank-related goals such as S Rank and F Rank, but chasing ranks immediately can hide the actual lesson. Early clears should teach card order, monster reads, and item discipline.',
          'Once you can clear a mission reliably, start reducing wasted cards, unnecessary item use, and dead-end movement. That is the point where rank goals become useful instead of stressful.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should I play Feed The Pit blind?',
        answer:
          'Yes for story beats, but a spoiler-light guide is useful for learning card logic, mission pacing, and safe platform setup.',
      },
      {
        question: 'What should beginners focus on first?',
        answer:
          'Learn how cards narrow the map. Monster survival matters, but a sloppy investigation creates most beginner failures.',
      },
      {
        question: 'Is Act 1 the full game?',
        answer:
          'No. Steam says Act 1 is available at launch and Acts 2 and 3 are planned as free updates.',
      },
    ],
  },
  {
    slug: 'characters-guide',
    path: '/guides/characters-guide',
    title: 'Feed The Pit Characters Guide',
    seoTitle: 'Feed The Pit Characters Guide - Targets, Monsters, and Roles',
    seoDescription:
      'Understand Feed The Pit characters by role: wealthy targets, mission monsters, valley residents, the pit, and how each one changes Act 1 decisions.',
    summary:
      'Feed The Pit characters matter most by the job they create for you: identify a target, survive a monster, read the valley, and decide how far to serve the pit.',
    category: 'Mechanics',
    difficulty: 'Beginner',
    coverImageUrl: screenshotCover('feed-the-pit-investigation.jpg'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'Feed The Pit characters',
      'Feed The Pit Act 1 characters',
      'Feed The Pit monster guide',
    ],
    sourceNotes:
      'Added from GSC character-query demand and cross-checked against the Steam premise, Act 1 launch wording, and existing monster/card pages.',
    tags: ['Characters', 'Act 1', 'Monsters'],
    relatedRoutes: [
      '/monsters',
      '/cards',
      '/guides/beginner-guide',
      '/guides/act-1-walkthrough',
    ],
    body: [
      {
        heading: 'Read characters by the problem they create',
        paragraphs: [
          'Feed The Pit is not a party-RPG character roster. In Act 1, the useful way to think about characters is by role: a target you need to identify, a monster that pressures the mission, people and clues around Carrister Valley, and the pit that turns the whole investigation into a cost-benefit choice.',
          'That distinction matters because a fake character list would not help a run. A player-friendly guide should answer what each role changes in your decisions: which cards to spend, when to move, when to save an item, and when a clean answer is worth more than a perfect rank.',
        ],
      },
      {
        heading: 'Wealthy targets are your investigation objective',
        paragraphs: [
          'Steam describes the core loop as hunting wealthy individuals through a dangerous card game. Treat the target as a logic problem first. Your cards narrow down the map; the target is the final answer, not something you should guess early because a location looks suspicious.',
          'When you review a target lead, ask which card result supports it. If the answer is only "it feels right," keep narrowing. The strongest target read is one where every remaining card either confirms the location or removes the closest alternative.',
        ],
        bullets: [
          'Use broad cards while many locations are still possible.',
          'Save precise cards until the final candidates are small.',
          'Do not let monster pressure turn an unsupported guess into a decision.',
        ],
      },
      {
        heading: 'Mission monsters decide your safety rhythm',
        paragraphs: [
          'The monster role is different from the target role. Targets answer the card puzzle; monsters decide how safely you can keep solving it. Steam frames each mission around relentless horrors, so the right habit is to learn what kind of pressure the current monster creates before spending every escape tool.',
          'In practical terms, you should separate information turns from survival turns. If a monster forces you to move, protect the route first. If it mainly punishes delay, stop over-checking the map and commit once the evidence is good enough.',
        ],
        bullets: [
          'Track what triggered the danger before using an item.',
          'Keep one safety resource for the final route whenever possible.',
          'Use the monsters page for behavior-reading notes before chasing ranks.',
        ],
      },
      {
        heading: 'The pit is the pressure behind every choice',
        paragraphs: [
          'The pit is not just a title object. It is the reason you keep accepting dangerous hunts, and it is the force that makes efficient play feel morally uncomfortable. That is why a good Act 1 route should not only ask "can I clear this?" but also "what did I spend to clear this?"',
          'If you are learning the story, keep one run spoiler-light and treat rank goals as optional. If you are replaying, the pit becomes a planning constraint: fewer wasted cards, cleaner movement, and less panic spending make the same mission feel very different.',
        ],
      },
      {
        heading: 'What to update when new acts arrive',
        paragraphs: [
          'Act 1 is the public launch boundary right now, while Steam says Acts 2 and 3 are planned as free updates. When new acts release, this page should expand named-character coverage only where the game itself makes those names useful for choices, routes, endings, or monster behavior.',
          'Until then, this page should stay role-first. That keeps it useful for players searching "Feed The Pit characters" without pretending that a full cast database exists before the game exposes enough stable detail.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Feed The Pit have a full character list?',
        answer:
          'Not enough stable public Act 1 detail exists for a reliable full cast database. This guide tracks the important role types first: targets, monsters, valley clues, and the pit.',
      },
      {
        question: 'Are monsters characters or mechanics?',
        answer:
          'Both for guide purposes. A monster is a character-like threat, but the useful part is its behavior pattern and how it changes card timing, movement, and item use.',
      },
      {
        question: 'Will this page change after Acts 2 and 3?',
        answer:
          'Yes. Steam says Acts 2 and 3 will arrive as free updates, so named-character sections should be added only after those routes are public and source-checkable.',
      },
    ],
  },
  {
    slug: 'play-online',
    path: '/play-online',
    title: 'Feed The Pit Play Online',
    seoTitle: 'Feed The Pit Play Online - Browser Game',
    seoDescription:
      'Play Feed The Pit in your browser, learn the 3-layer incremental loop, and know when to switch to the Steam story campaign.',
    summary:
      'The play-online page gives you a short dark incremental about feeding a hungry pit, while Steam is the PC story campaign.',
    category: 'Browser',
    difficulty: 'Status',
    coverImageUrl: itchCover('feed-the-pit-browser-layer-one.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Feed The Pit play online',
      'Feed The Pit itch.io',
      'Feed The Pit browser game',
    ],
    sourceNotes:
      'The browser build is sourced from the mooncrustgames itch.io page. The user states permission was obtained for self-hosting.',
    tags: ['Play Online', 'Browser', 'itch.io'],
    relatedRoutes: [
      '/itch-io',
      '/download',
      '/steam',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'What you are playing on this page',
        paragraphs: [
          'The browser game is a dark incremental about keeping a hungry pit satisfied through escalating offerings, buildings, and short-run decisions.',
          'It is not the same experience as the Steam story campaign. Treat the browser version as quick play, and use Steam when you want the investigation cards, monsters, achievements, and act progression.',
        ],
      },
      {
        heading: 'Play slowly enough to read the pit',
        paragraphs: [
          'The itch description frames the pit as ancient, hungry, and talkative. That is not just flavor. The browser run works best when you read each request before buying the next upgrade. The moral cost and upgrade tree rise together, so mindless clicking makes the run harder to understand.',
          'Start with grain, watch what the pit asks for next, and add buildings when they solve a visible delay. The short demo structure means every layer has a purpose.',
        ],
        bullets: [
          'Use headphones if possible; the itch page recommends them.',
          'Expect roughly 20 to 25 minutes for the 3-layer demo.',
          'Stay in the same browser profile if you want local progress to persist.',
        ],
      },
      {
        heading: 'When Steam is the better answer',
        paragraphs: [
          'Choose Steam when you want the Act 1 story campaign: card-based investigation, Carrister Valley, mission monsters, achievements, and the future Acts 2 and 3 update path.',
          'Choose this page when your search intent is simply to play Feed The Pit online in a browser. The two experiences can sit beside each other, but they should not be treated as one shared set of mechanics.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I play Feed The Pit online here?',
        answer:
          'Yes. You can start a browser version here and use the notes on the page to understand its shorter incremental loop.',
      },
      {
        question: 'Is the browser version the Steam game?',
        answer:
          'No. The browser version is a short dark incremental. The Steam game is the PC investigative horror story campaign.',
      },
      {
        question: 'How long is the browser version?',
        answer:
          'The itch page describes it as a 3-layer demo that takes about 20 to 25 minutes and ends at THE RED.',
      },
    ],
  },
  {
    slug: 'cards-guide',
    path: '/cards',
    title: 'Feed The Pit Cards Guide',
    seoTitle: 'Feed The Pit Cards Guide - Map Questions and Final Guesses',
    seoDescription:
      'Understand Feed The Pit cards as investigation questions: broad narrowing, precise confirmation, bad hands, final guesses, and cEDH-style efficiency.',
    summary:
      'Cards are not attacks or collectibles first. They are questions that turn a large map into one possible target location before the monster and timer punish hesitation.',
    category: 'Mechanics',
    difficulty: 'Beginner',
    coverImageUrl: screenshotCover('feed-the-pit-cards.jpg'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'Feed The Pit cards',
      'Feed The Pit investigation cards',
      'Feed The Pit cEDH achievement',
    ],
    sourceNotes:
      'Written from official Steam card/map wording and public achievement names.',
    tags: ['Cards', 'Investigation', 'Map'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/monsters',
      '/guides/achievements',
      '/walkthrough',
    ],
    body: [
      {
        heading: 'Cards ask location questions',
        paragraphs: [
          'The Steam page explains the core loop clearly: each magical card asks a unique question about the target location. Your goal is to combine those answers until the map has only one sensible spot left.',
          'That makes every card a source of information. A card that feels weak can still be excellent if it removes several wrong regions. A flashy card can be wasteful if it only confirms something you already knew.',
        ],
      },
      {
        heading: 'Use broad cards before precise cards',
        paragraphs: [
          'Broad cards are strongest while the map is still open. They cut away big chunks of uncertainty and make the next card easier to evaluate. Precise cards are strongest after broad cards have created a small candidate set.',
          'If you reverse that order, you often spend a precise card on a question that cannot matter yet. Save confirmation tools for the moment when a single answer can decide between two or three locations.',
        ],
        bullets: [
          'Early hand: remove large regions or impossible traits.',
          'Middle hand: compare the strongest remaining candidates.',
          'Late hand: confirm the final location before committing.',
          'Emergency hand: choose the card that avoids total ambiguity.',
        ],
      },
      {
        heading: 'Bad hands are part of the design',
        paragraphs: [
          'Steam notes that card selection is limited and that you have to play the hand you are dealt. A bad hand does not always mean a failed mission. It means you need to ask a smaller question: which card creates the least-bad next step?',
          'When a hand cannot solve the map directly, use it to prepare the next decision. Mark what it rules out, keep the remaining candidates visible, and avoid turning an uncertain guess into a fake certainty.',
        ],
      },
      {
        heading: 'Efficient card play unlocks harder goals',
        paragraphs: [
          'The public achievement list includes cEDH, described as finding the target using two or fewer cards outside mission 1. Treat that as an advanced challenge, not a beginner standard.',
          'Once you can clear missions comfortably, replay with the goal of asking higher-value questions. If one card can remove three routes and another only confirms a hunch, take the route-removal card first.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are Feed The Pit cards random?',
        answer:
          'The official Steam page says no two investigations are the same and that card selection is limited, so you should expect changing hands and map logic.',
      },
      {
        question: 'What is the best card?',
        answer:
          'The best card is the one that removes the most uncertainty at that moment. Early broad cards and late precise cards solve different problems.',
      },
      {
        question: 'Should I guess early?',
        answer:
          'Only when monster pressure or item scarcity makes waiting worse than acting. Most runs are safer when you confirm the final area first.',
      },
    ],
  },
  {
    slug: 'monsters-guide',
    path: '/monsters',
    title: 'Feed The Pit Monsters Guide',
    seoTitle: 'Feed The Pit Monsters Guide - Survival and Behavior Reading',
    seoDescription:
      'Survive Feed The Pit monsters by reading behavior, controlling risk, saving items, and separating investigation choices from chase panic.',
    summary:
      'Every mission monster is a behavior puzzle. Watch what triggers danger, keep an escape route, and spend items only after you know what they are protecting.',
    category: 'Mechanics',
    difficulty: 'Intermediate',
    coverImageUrl: screenshotCover('feed-the-pit-monster.jpg'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'Feed The Pit monsters',
      'Feed The Pit enemies',
      'Feed The Pit Act 1 monsters',
    ],
    sourceNotes:
      'Based on official Steam monster description and Steam Community review signals about unique enemy behavior.',
    tags: ['Monsters', 'Survival', 'Act 1'],
    relatedRoutes: [
      '/cards',
      '/guides/act-1-walkthrough',
      '/guides/rendering-fixes',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Read the monster before solving too fast',
        paragraphs: [
          'Feed The Pit frames each mission monster as a nemesis whose behavior is initially mysterious. The first mistake is assuming every monster should be handled the same way. Sprinting, hiding, waiting, using items, or rushing cards may all be correct in different missions.',
          'Spend the first dangerous moments observing what changes. Does pressure rise when you stay still, when you move through an area, when you take too long, or when you interact with a mission object? That answer matters more than a memorized route.',
        ],
      },
      {
        heading: 'Keep a safe investigation rhythm',
        paragraphs: [
          'A good rhythm is card, map, movement, safety check. If you skip the safety check, the investigation slowly turns into a chase you did not plan for. If you over-check safety, the monster gets time to create a new problem.',
          'When a card answer changes the map, do not immediately run to the nearest possible spot. First ask whether that route exposes you to the monster behavior you just observed.',
        ],
        bullets: [
          'After every major card result, choose a fallback route.',
          'Avoid using all items before the final candidate area is known.',
          'If the monster punishes delay, favor clean answers over perfect rank.',
          'If the monster punishes movement, plan tighter loops before crossing open space.',
        ],
      },
      {
        heading: 'Items are for the failure point',
        paragraphs: [
          'Steam achievements reference using seven non-card items in a mission, so items clearly matter. The practical question is timing. Spending an item to remove mild pressure can leave you empty when the actual mission failure point arrives.',
          'Ask what would end the run right now. If the answer is a chase, hold tools for escape. If the answer is uncertainty, spend the card or item that gives information. If the answer is time, choose the shortest safe route instead of searching every corner.',
        ],
      },
      {
        heading: 'Do not turn monster notes into false certainty',
        paragraphs: [
          'Because Act 1 is new and future acts are pending, treat community monster names and behaviors as notes until they are verified across runs. It is better to publish survival rules that help every player than to list a shaky monster table that becomes wrong after an update.',
          'This site will expand monster-specific pages only when enough stable names, behaviors, screenshots, and player questions justify them.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does every Feed The Pit mission have a monster?',
        answer:
          'Steam describes every mission as bringing a new monster that acts as your nemesis for the day.',
      },
      {
        question: 'Can I memorize monster behavior?',
        answer:
          'You can learn patterns, but the safer habit is reading the current mission instead of assuming every enemy follows the same rule.',
      },
      {
        question: 'Will you add a monster database?',
        answer:
          'Only after stable Act 1 data supports it. For launch, survival rules are safer than unverified tables.',
      },
    ],
  },
  {
    slug: 'walkthrough-guide',
    path: '/walkthrough',
    title: 'Feed The Pit Walkthrough',
    seoTitle: 'Feed The Pit Walkthrough - Spoiler-Light Act 1 Route',
    seoDescription:
      'Use a spoiler-light Feed The Pit walkthrough for Act 1: card order, target narrowing, monster pressure, item timing, and when to switch to spoiler pages.',
    summary:
      'This walkthrough gives the route logic without turning the whole story into a checklist: solve the map, manage the mission monster, then choose how much spoiler detail you want.',
    category: 'Walkthrough',
    difficulty: 'Beginner',
    coverImageUrl: videos.walkthrough.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Feed The Pit walkthrough',
      'Feed The Pit full game walkthrough',
      'Feed The Pit Act 1 walkthrough',
    ],
    sourceNotes:
      'Selected because launch-week YouTube results directly match walkthrough and ending intent. The article is original route advice, not transcript material.',
    video: videos.walkthrough,
    tags: ['Walkthrough', 'Act 1', 'Spoiler-Light'],
    relatedRoutes: [
      '/guides/act-1-walkthrough',
      '/guides/ending-guide',
      '/cards',
      '/monsters',
    ],
    body: [
      {
        heading: 'Use this as the non-spoiler route',
        paragraphs: [
          'Feed The Pit is story-driven, so the best walkthrough is not a line-by-line script for a first playthrough. Start with the mission logic: read the card hand, remove impossible target spaces, watch the monster rule, and protect the final route.',
          'If you are stuck on a specific ending or completion route, move to the ending guide after you have at least one Act 1 clear. The game lands harder when you let the first run breathe.',
        ],
      },
      {
        heading: 'Mission loop',
        paragraphs: [
          'Begin each mission by scanning the full map before using cards. A card result is only useful if you know what it changed. After each card, update the remaining candidate spaces and stop yourself from chasing a hunch too early.',
          'Once the candidate set is small, plan movement as carefully as card play. The route that reaches a target fastest may not be the route that survives the monster.',
        ],
        bullets: [
          'Survey the map and identify candidate clusters.',
          'Use broad cards to remove large wrong areas.',
          'Save precise cards for late confirmation.',
          'Track monster pressure after each major action.',
          'Commit only when the final route is survivable.',
        ],
      },
      {
        heading: 'When to accept an imperfect clear',
        paragraphs: [
          'A perfect-looking route can become a lost mission if you keep optimizing after the danger has already shifted. If you have the answer, low safety, and a route home, take the clear. Rank goals can wait.',
          'Achievement hunting is a second-pass activity. First clears build the mental map you need for Top Tier, cEDH, item-use, and collection challenges later.',
        ],
      },
      {
        heading: 'What to read next',
        paragraphs: [
          'If the card logic is the problem, open the cards guide. If the chase is the problem, open the monsters guide. If you reached the credits or want to understand Act 1 boundaries, use the ending guide with spoilers enabled in your own head, not on your first run.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is this walkthrough spoiler-free?',
        answer:
          'It is spoiler-light. It focuses on mission logic and routes, while the ending guide handles heavier spoiler intent.',
      },
      {
        question: 'How long is Feed The Pit Act 1?',
        answer:
          'Early Steam Community playtime signals cluster around roughly 2 to 3 hours for Act 1, though your time depends on failures and exploration.',
      },
      {
        question: 'Should I watch a full walkthrough before playing?',
        answer:
          'Only if you are stuck or intentionally want spoilers. For a first run, use cards and monsters pages first.',
      },
    ],
  },
  {
    slug: 'act-1-walkthrough',
    path: '/guides/act-1-walkthrough',
    title: 'Feed The Pit Act 1 Walkthrough',
    seoTitle: 'Feed The Pit Act 1 Walkthrough - Current Launch Content',
    seoDescription:
      'Understand what Feed The Pit Act 1 includes at launch, how to approach missions, and what to expect before Acts 2 and 3 arrive.',
    summary:
      'Act 1 is the current Steam launch boundary. Clear it by mastering investigation flow, monster reads, and rank discipline before future free acts expand the story.',
    category: 'Walkthrough',
    difficulty: 'Intermediate',
    coverImageUrl: videos.endingShowcase.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Feed The Pit Act 1',
      'Feed The Pit Act 1 walkthrough',
      'Feed The Pit full game Act 1',
    ],
    sourceNotes:
      'Current Act 1 page based on Steam launch wording and launch-week Act 1 walkthrough results.',
    video: videos.endingShowcase,
    tags: ['Act 1', 'Walkthrough', 'Current'],
    relatedRoutes: ['/walkthrough', '/guides/ending-guide', '/steam', '/cards'],
    body: [
      {
        heading: 'Act 1 is the launch boundary',
        paragraphs: [
          'Steam states that Act 1 is available at launch and that Acts 2 and 3 will release as free updates in the coming months. That means every current story guide should be honest about the boundary: do not invent later-act answers and do not treat Act 1 speculation as finished lore.',
          'For players, the practical result is simple. Focus on understanding the current mission structure, achievements, and ending state. Future acts can be added later without rewriting your basic card and survival fundamentals.',
        ],
      },
      {
        heading: 'Clear missions by information quality',
        paragraphs: [
          'The Act 1 mission loop rewards good information. Each card should either remove a chunk of the map, confirm a near-final spot, or recover from a bad hand. If a card does none of those things, wait until another question matters more.',
          'When the monster pressure rises, reduce your ambition. A safe clear teaches more than a failed perfect route. Use S Rank and two-card challenges after you know how each mission breathes.',
        ],
      },
      {
        heading: 'Track story choices without over-reading them',
        paragraphs: [
          'Feed The Pit is clearly interested in E.C.C., faith, hierarchy, sacrifice, and what the player is willing to do for the pit. Act 1 sets up that story, but the future acts are not out yet.',
          'Keep notes on choices, names, and strange lines if you care about lore. Just avoid treating an unanswered Act 1 question as solved. The best guide stance is: here is what Act 1 confirms, here is what remains open.',
        ],
      },
      {
        heading: 'Post-clear checklist',
        paragraphs: [
          'After your first Act 1 clear, decide what kind of second pass you want. Completion players should open achievements. Story players should open the ending guide. Mechanical players should practice cards and monsters until ranks become consistent.',
        ],
        bullets: [
          'Review any failed card decisions while the mission is fresh.',
          'Note which monster behavior created the most danger.',
          'Check achievement names for optional challenges.',
          'Wait for official Acts 2 and 3 notes before chasing rumors.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are Acts 2 and 3 playable now?',
        answer:
          'No. Steam says Act 1 is available at launch and Acts 2 and 3 are planned as free updates in the coming months.',
      },
      {
        question: 'Does Act 1 have an ending?',
        answer:
          'Yes, launch-week walkthrough and ending results show current ending demand. Use the ending guide if you want spoiler-oriented help.',
      },
      {
        question: 'Will Act 1 guides change after updates?',
        answer:
          'They may. The site should re-check Steam news and community posts when future acts or rendering fixes ship.',
      },
    ],
  },
  {
    slug: 'ending-guide',
    path: '/guides/ending-guide',
    title: 'Feed The Pit Ending Guide',
    seoTitle: 'Feed The Pit Ending Guide - Act 1 Spoiler-Safe Notes',
    seoDescription:
      'Use the Feed The Pit ending guide when you are ready for Act 1 spoiler help, completion checks, and what not to assume before Acts 2 and 3.',
    summary:
      'The safest ending guide is spoiler-aware without pretending future acts are solved. Finish Act 1 once, then use this page to organize completion and unanswered story threads.',
    category: 'Walkthrough',
    difficulty: 'Advanced',
    coverImageUrl: videos.endingShowcase.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Feed The Pit ending',
      'Feed The Pit all endings',
      'Feed The Pit Act 1 ending',
    ],
    sourceNotes:
      'Launch-week ending videos confirm ending search demand. The page avoids fake future-act conclusions.',
    video: videos.endingShowcase,
    tags: ['Ending', 'Act 1', 'Spoilers'],
    relatedRoutes: ['/guides/act-1-walkthrough', '/walkthrough', '/steam'],
    body: [
      {
        heading: 'Read this after one clear',
        paragraphs: [
          'Feed The Pit is built around story pressure, so the ending page is best used after one blind or mostly blind clear. If you have not reached the current Act 1 end, start with the walkthrough page and keep story details fresh for yourself.',
          'Once you have cleared Act 1, the useful work is separating confirmed outcomes from open questions. Steam says more acts are coming, so not every mystery is supposed to resolve now.',
        ],
      },
      {
        heading: 'What an ending pass should check',
        paragraphs: [
          'On a second pass, track choices that felt irreversible, mission ranks that changed your confidence, and moments where E.C.C. language shifted. Do not only look for a final cutscene. In a branching horror story, earlier wording can matter as much as the last scene.',
          'If you replay for another outcome, change one major variable at a time. Changing too many mission choices makes it impossible to know which action mattered.',
        ],
        bullets: [
          'Keep a note of major choices and mission performance.',
          'Replay from a known point when possible instead of changing every habit.',
          'Separate achievement goals from story-branch goals.',
          'Do not import claims about Acts 2 or 3 until official updates arrive.',
        ],
      },
      {
        heading: 'Use walkthroughs as confirmation tools',
        paragraphs: [
          'A full walkthrough can help confirm whether you missed a branch, object, or mission pattern. Use it after forming your own theory. That keeps the ending guide from flattening the best part of a horror mystery: realizing what the game has been asking of you.',
          'If a community video claims all endings, cross-check the publish date and make sure it is Act 1 launch content, not an old devlog or unrelated pit game.',
        ],
      },
      {
        heading: 'What remains open',
        paragraphs: [
          'The biggest open item is structural: Acts 2 and 3 are planned but not released as of this check. Any page that claims complete final-game lore before those updates should be treated carefully.',
          'This page will be updated when official Steam news, Steam Community posts, or developer channels confirm new acts or ending changes.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Feed The Pit have multiple endings?',
        answer:
          'Steam tags include Multiple Endings, but current public guide coverage should stay Act 1-specific until later acts release.',
      },
      {
        question: 'Should I spoil the ending before buying?',
        answer:
          'Only if you are sensitive to horror themes or need to check content boundaries. Otherwise, play Act 1 first.',
      },
      {
        question: 'Are all final endings available now?',
        answer:
          'No reliable source says the full three-act story is complete. Steam says Acts 2 and 3 will arrive later as free updates.',
      },
    ],
  },
  {
    slug: 'achievements',
    path: '/guides/achievements',
    title: 'Feed The Pit Achievements Guide',
    seoTitle: 'Feed The Pit Achievements Guide - Steam Act 1 Unlock Notes',
    seoDescription:
      'Track Feed The Pit Steam achievements, including Top Tier, Poor Inventory Management, cEDH, BEAN ME!, Forager, and rank challenges.',
    summary:
      'Steam currently exposes 11 achievements. Treat them as second-pass goals after you understand cards, monsters, and Act 1 mission flow.',
    category: 'Walkthrough',
    difficulty: 'Intermediate',
    coverImageUrl: localCover('feed-the-pit-header.jpg'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Feed The Pit achievements',
      'Feed The Pit Top Tier achievement',
      'Feed The Pit cEDH achievement',
    ],
    sourceNotes:
      'Achievement names and visible descriptions are from public Steam achievement stats checked on July 2, 2026.',
    tags: ['Achievements', 'Steam', 'Completion'],
    relatedRoutes: ['/cards', '/monsters', '/walkthrough', '/steam'],
    body: [
      {
        heading: 'Do achievements after the first clear',
        paragraphs: [
          'Feed The Pit achievements are tempting because several names clearly hint at optional playstyles. Still, they are better as second-pass goals. The first clear should teach card value, monster behavior, and item timing.',
          'Once you understand the mission loop, achievements become a useful checklist. They ask you to rank well, rank badly, use items, collect mushrooms, drink espressos, or solve a target efficiently.',
        ],
      },
      {
        heading: 'Visible Steam achievement notes',
        paragraphs: [
          'Steam currently lists 11 achievements. Several public descriptions are visible: Top Tier asks for an S Rank mission, Poor Inventory Management asks you to use seven non-card items in a mission, cEDH asks you to find the target using two or fewer cards outside mission 1, BEAN ME! asks you to drink three espressos in one mission, Forager asks you to collect 20 mushrooms, and wow. asks for an F Rank mission.',
          'Other visible names include Feed The Pit, March of the Ents, Rabbit on the Run, Various Forms, and 100 Minutes to Midnight. Treat any unlock requirement not shown on Steam as unconfirmed until tested or officially documented.',
        ],
      },
      {
        heading: 'Order the hard goals by skill type',
        paragraphs: [
          'Top Tier and cEDH are efficiency goals. They reward clean card logic and route confidence. Poor Inventory Management and BEAN ME! are behavior goals. They reward planning item use before the mission spirals. Forager is a collection route, so it should be attempted when you can spare movement and attention.',
          'The F Rank achievement is unusual because it rewards a bad result. Do it intentionally on a separate run rather than ruining a serious clear by accident.',
        ],
        bullets: [
          'Learn the mission normally.',
          'Practice card efficiency for Top Tier and cEDH.',
          'Plan item-specific goals before entering the mission.',
          'Separate story/ending runs from achievement experiments.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many Feed The Pit achievements are on Steam?',
        answer: 'Steam lists 11 achievements as of July 2, 2026.',
      },
      {
        question: 'What is Top Tier?',
        answer:
          'The public Steam description says Top Tier requires an S Rank mission.',
      },
      {
        question: 'What is cEDH?',
        answer:
          'The public Steam description says cEDH requires finding the target using two or fewer cards, excluding mission 1.',
      },
    ],
  },
  {
    slug: 'rendering-fixes',
    path: '/guides/rendering-fixes',
    title: 'Feed The Pit Rendering Fixes',
    seoTitle: 'Feed The Pit Black Screen and Rendering Fixes',
    seoDescription:
      'Fix Feed The Pit black screen, broken textures, and launch rendering issues by checking Vulkan support, GPU drivers, overlays, and Steam settings.',
    summary:
      'Feed The Pit currently leans on Vulkan on Windows. If you hit a black screen or broken textures, start with GPU support and drivers before changing game files.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: screenshotCover('feed-the-pit-forest.jpg'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'community_crosscheck',
    videoSearchQueries: [
      'Feed The Pit black screen',
      'Feed The Pit rendering issues',
      'Feed The Pit Vulkan',
    ],
    sourceNotes:
      'Based on Steam system requirements and a Steam Community rendering issues thread surfaced during launch-week research.',
    tags: ['Fixes', 'Vulkan', 'Steam'],
    relatedRoutes: [
      '/steam',
      '/download',
      '/discord',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Start with the Vulkan requirement',
        paragraphs: [
          'The Steam page lists NVIDIA GTX 1050 with Vulkan required in the minimum graphics line. Steam Community launch posts also surfaced rendering issues, black screens, and broken textures tied to the current rendering path.',
          'That means the first fix is not reinstalling random files. Confirm your GPU supports Vulkan, update your GPU driver, and restart Steam before changing compatibility settings.',
        ],
      },
      {
        heading: 'Quick fix order',
        paragraphs: [
          'Use a conservative order so you know what changed. Update graphics drivers first. Then verify game files in Steam. Then disable overlays that inject into the renderer. Then try windowed/fullscreen changes if you can reach the menu.',
          'If you are using Proton or Linux, be extra cautious: Steam Community reports include Linux/Proton input or selection problems, and that does not necessarily mean the Windows build is broken the same way.',
        ],
        bullets: [
          'Update NVIDIA, AMD, or Intel graphics drivers.',
          'Verify Feed The Pit files through Steam.',
          'Disable third-party overlays and capture hooks for testing.',
          'Check whether your GPU actually supports Vulkan.',
          'Watch official Steam news for a DirectX or rendering update.',
        ],
      },
      {
        heading: 'Do not use unofficial patches',
        paragraphs: [
          'Avoid random DLL packs, modified clients, cracked builds, and unofficial launchers. A rendering bug is frustrating, but unsafe downloads can create a worse problem than waiting for a patch.',
          'Use the Steam discussion hub, official Discord links, or developer posts when reporting your GPU, driver version, operating system, and the exact failure screen.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why does Feed The Pit show a black screen?',
        answer:
          'Launch-week community reports point toward rendering path issues. Start with Vulkan support, GPU drivers, file verification, and overlays.',
      },
      {
        question: 'Does Feed The Pit support DirectX?',
        answer:
          'A Steam Community launch thread says DirectX support was not available out of the box yet and may arrive in a later update.',
      },
      {
        question: 'Should I download a fix from another site?',
        answer:
          'No. Use Steam file verification, official updates, and official community support instead of unofficial patches or modified files.',
      },
    ],
  },
  {
    slug: 'steam-release',
    path: '/steam',
    title: 'Feed The Pit Steam Guide',
    seoTitle: 'Feed The Pit Steam - Release Date, Acts, Price and Requirements',
    seoDescription:
      'Check Feed The Pit on Steam: Jun 30, 2026 release, Act 1 launch status, planned free Acts 2 and 3, Windows/Vulkan requirements, and safe links.',
    summary:
      'Steam is the official full-release home for Curious Fox Sox Feed The Pit. Use it for Act 1, achievements, updates, and future Acts 2 and 3.',
    category: 'Official',
    difficulty: 'Status',
    coverImageUrl: videos.actOneTrailer.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Feed The Pit Steam',
      'Feed The Pit release date',
      'Feed The Pit Act 1 trailer',
    ],
    sourceNotes:
      'Steam page and official trailer are the primary source for release status, platform, and Act 1 positioning.',
    video: videos.actOneTrailer,
    tags: ['Steam', 'Release', 'Act 1'],
    relatedRoutes: [
      '/download',
      '/guides/rendering-fixes',
      '/walkthrough',
      '/discord',
    ],
    body: [
      {
        heading: 'Steam is the full game source',
        paragraphs: [
          'The Steam page lists Feed The Pit as a Curious Fox Sox action/indie release on Jun 30, 2026. It is the source to use for the story-driven investigative horror game, achievements, updates, and official purchase path.',
          'The launch note is important: Act 1 is available now, while Acts 2 and 3 are planned as free updates in the coming months. Do not buy expecting all three acts to be playable today.',
        ],
      },
      {
        heading: 'Platform and requirement notes',
        paragraphs: [
          'Steam lists Windows support and minimum requirements including Windows 10, Intel i7, 2 GB RAM, NVIDIA GTX 1050, Vulkan required, and 1 GB storage. If your machine has older integrated graphics or outdated drivers, check the rendering fixes page before assuming the game itself is broken.',
          'Steam also lists single-player, Steam Achievements, and Family Sharing. English is listed for interface, full audio, and subtitles.',
        ],
      },
      {
        heading: 'Use Steam for updates',
        paragraphs: [
          'Because future acts are planned, Steam news and the Steam Community hub are the places to check when Act 2, Act 3, rendering fixes, or achievement changes appear. This wiki should follow those official updates rather than pulling rumors from comments.',
        ],
      },
    ],
    faq: [
      {
        question: 'When did Feed The Pit release on Steam?',
        answer: 'Steam lists Jun 30, 2026 as the release date.',
      },
      {
        question: 'Is Feed The Pit Act 1 only?',
        answer:
          'At launch, yes. Steam says Act 1 is available and Acts 2 and 3 will release later as free updates.',
      },
      {
        question: 'Is the browser version the Steam game?',
        answer:
          'No. The browser version is a separate short incremental experience.',
      },
    ],
  },
  {
    slug: 'download',
    path: '/download',
    title: 'Feed The Pit Download Guide',
    seoTitle: 'Feed The Pit Download - Steam, Browser Play and Safe Links',
    seoDescription:
      'Download Feed The Pit safely through Steam, play in browser here, and avoid APK mirrors, cracked clients, and fake downloads.',
    summary:
      'Use Steam for the full PC story campaign and this site for browser play. Avoid mirrors, APKs, cracked clients, and fake code pages.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: localCover('feed-the-pit-header.jpg'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Feed The Pit download',
      'Feed The Pit safe download',
      'Feed The Pit APK',
    ],
    sourceNotes:
      'Download guidance is based on official Steam and itch sources. No third-party mirrors are recommended.',
    tags: ['Download', 'Safety', 'Steam'],
    relatedRoutes: ['/steam', '/play-online', '/itch-io', '/mobile'],
    body: [
      {
        heading: 'Use official paths only',
        paragraphs: [
          'For the full PC story campaign, use Steam. That gives you the current Act 1 release, achievements, updates, file verification, and future Acts 2 and 3 when they ship.',
          'For quick browser play, use the play-online page here and keep it separate from the Steam campaign.',
        ],
      },
      {
        heading: 'Avoid unsafe mirrors',
        paragraphs: [
          'Search demand around new indie games often attracts fake download pages. Do not install APK mirrors, cracked clients, save editors, private launchers, or files that claim to unlock future acts. Feed The Pit is not a mobile gacha and does not need a code generator.',
          'If you need a technical fix, use Steam file verification and official community support. A random download can break saves, leak credentials, or install malware.',
        ],
      },
      {
        heading: 'Which version should you choose?',
        paragraphs: [
          'Choose Steam for the story-driven horror game. Choose play online for the short browser incremental. Choose itch.io if you want to inspect the original mooncrustgames page, screenshots, tags, comments, and creator profile.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where should I download Feed The Pit?',
        answer:
          'Download the full PC game from Steam. Use this site for browser play and guide pages.',
      },
      {
        question: 'Is there a Feed The Pit APK?',
        answer:
          'No official mobile/APK release was found during this check. Avoid APK mirrors.',
      },
      {
        question: 'Are there Feed The Pit codes?',
        answer:
          'No reliable redeem-code system was found. Do not use code generators.',
      },
    ],
  },
  {
    slug: 'itch-io',
    path: '/itch-io',
    title: 'Feed The Pit itch.io Guide',
    seoTitle: 'Feed The Pit Browser Version - Steam Difference',
    seoDescription:
      'Understand the Feed The Pit browser version, how the 3-layer dark incremental works, and how it differs from Steam.',
    summary:
      'The browser version is a 3-layer dark incremental, not the Steam story campaign.',
    category: 'Browser',
    difficulty: 'Status',
    coverImageUrl: itchCover('feed-the-pit-browser-layer-two.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Feed The Pit itch.io',
      'mooncrustgames Feed The Pit',
      'Feed The Pit browser game',
    ],
    sourceNotes:
      'Uses the official mooncrustgames itch page for browser-game details and screenshots.',
    tags: ['itch.io', 'Browser', 'Incremental'],
    relatedRoutes: ['/play-online', '/download', '/steam'],
    body: [
      {
        heading: 'The browser version is a different experience',
        paragraphs: [
          'This browser version plays as a dark incremental about keeping a hole satisfied. You begin with grain, then escalate through offerings, buildings, layers, and the pit speaking back.',
          'That is very different from the Steam story campaign. Both share a title and pit theme, but the mechanics are different, so choose the page that matches what you want to play.',
        ],
      },
      {
        heading: 'What the browser version includes',
        paragraphs: [
          'The itch page describes a 3-layer demo that lasts roughly 20 to 25 minutes and ends at THE RED. It recommends headphones because sound is part of the mood.',
          'The browser version has pixel art, incremental/clicker structure, and a compact run length. It is a good play-online answer, but not a replacement for Steam Act 1.',
        ],
      },
      {
        heading: 'Why use the play-online page',
        paragraphs: [
          'The play-online page keeps the game, screenshots, version notes, and safe next links in one place, so players do not need to search through random mirrors.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who made the itch Feed The Pit?',
        answer: 'The itch page lists mooncrustgames as the author.',
      },
      {
        question: 'Is the itch build free?',
        answer:
          'The browser version can be played in a web browser. Use Steam when you want the full PC story campaign.',
      },
      {
        question: 'Why does the site also link Steam?',
        answer:
          'Steam is where PC players should go for the story-driven horror campaign, achievements, updates, and future acts.',
      },
    ],
  },
  {
    slug: 'discord',
    path: '/discord',
    title: 'Feed The Pit Discord Guide',
    seoTitle: 'Feed The Pit Discord - Official Community Link Safety',
    seoDescription:
      'Find Feed The Pit community links safely through Steam and Curious Fox Sox channels, and avoid reposted invite traps or fake download servers.',
    summary:
      'Use official Steam and Curious Fox Sox channels for Discord. Avoid random invite reposts, download servers, code generators, and spoiler-heavy communities before finishing Act 1.',
    category: 'Official',
    difficulty: 'Status',
    coverImageUrl: screenshotCover('feed-the-pit-ecc.jpg'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Feed The Pit Discord',
      'Curious Fox Sox Discord',
      'Feed The Pit community',
    ],
    sourceNotes:
      'Steam exposes a Discord link and Curious Fox Sox social snippets expose official Discord invites. Use official channels because invite codes can change.',
    tags: ['Discord', 'Community', 'Official'],
    relatedRoutes: ['/steam', '/download', '/guides/rendering-fixes'],
    body: [
      {
        heading: 'Use official channels first',
        paragraphs: [
          'The safest path is the Discord button on the Steam page or the current Curious Fox Sox social/about links. Discord invite codes can change, so a guide page should point players toward official surfaces rather than treating a random repost as permanent.',
          'If a server asks you to download a patch, cracked build, APK, or save editor, leave. Official community spaces should not require unsafe files to solve a rendering issue.',
        ],
      },
      {
        heading: 'Ask better support questions',
        paragraphs: [
          'For rendering issues, include operating system, GPU, driver version, whether Vulkan is supported, and whether Steam file verification was already attempted. For mission help, mention the act, mission state, card hand problem, and monster behavior without spoiling story beats in public channels.',
        ],
      },
      {
        heading: 'Protect yourself from spoilers',
        paragraphs: [
          'Feed The Pit is story-driven, and Act 1 ending content appeared on YouTube immediately after launch. If you care about blind story discovery, mute or avoid spoiler channels until you have one clear.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where is the official Feed The Pit Discord?',
        answer:
          'Use the Discord link exposed on Steam or current Curious Fox Sox official channels because invite codes can change.',
      },
      {
        question: 'Can Discord help with black screens?',
        answer:
          'It can help you report details, but start with Vulkan support, driver updates, file verification, and official patch notes.',
      },
      {
        question: 'Should I join before finishing Act 1?',
        answer:
          'Only if you are comfortable avoiding spoilers or need technical help.',
      },
    ],
  },
  {
    slug: 'mobile',
    path: '/mobile',
    title: 'Feed The Pit Mobile and APK Safety',
    seoTitle: 'Feed The Pit Mobile - APK Safety and Browser Play Status',
    seoDescription:
      'Check Feed The Pit mobile status, why APK mirrors are unsafe, and when browser play is the better option.',
    summary:
      'No official mobile release was found. Use Steam for the full PC game or the browser page for quick play; avoid APK mirrors and fake mobile ports.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: itchCover('feed-the-pit-browser-layer-three.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'Feed The Pit mobile',
      'Feed The Pit APK',
      'Feed The Pit Android',
    ],
    sourceNotes:
      'Created because download searches can drift to unsafe mobile/APK intent. Official sources checked did not show a mobile release.',
    tags: ['Mobile', 'APK Safety', 'Browser'],
    relatedRoutes: ['/play-online', '/download', '/steam', '/itch-io'],
    body: [
      {
        heading: 'No official mobile release found',
        paragraphs: [
          'Steam lists the story campaign for Windows. During this check, no official Android, iOS, or APK release was found for the Steam game.',
          'That means APK pages should be treated as unsafe unless an official developer channel announces otherwise. New horror games are common bait for fake mobile download pages.',
        ],
      },
      {
        heading: 'Use browser play instead of APK mirrors',
        paragraphs: [
          'If your goal is to play something on a phone or tablet, try the play-online page first. Small screens may be less comfortable, but browser play is safer than installing an unknown APK.',
          'If you want the full Act 1 horror release, use Steam on a Windows PC that meets the Vulkan requirement.',
        ],
      },
      {
        heading: 'Red flags',
        paragraphs: [
          'Avoid pages that promise unlocked acts, free Steam copies, APK mods, code generators, or special launchers. Those claims do not match the official source picture and can expose your device to malware.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Feed The Pit on Android?',
        answer: 'No official Android release was found during this check.',
      },
      {
        question: 'Can I play on mobile browser?',
        answer:
          'You can try the browser version, but the full Steam horror game is not the same thing and is not a mobile port.',
      },
      {
        question: 'Are Feed The Pit APKs safe?',
        answer:
          'Do not trust APK mirrors unless an official developer source announces a mobile release.',
      },
    ],
  },
];

export const featuredGuides = guides.filter((guide) =>
  [
    'beginner-guide',
    'play-online',
    'cards-guide',
    'monsters-guide',
    'walkthrough-guide',
    'steam-release',
  ].includes(guide.slug)
);

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuideByPath(path: string) {
  return guides.find((guide) => guide.path === path);
}
