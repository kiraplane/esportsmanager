import type { EndingChecklistItem } from './types';

export const endingChecklist: EndingChecklistItem[] = [
  {
    number: 1,
    label: 'First trust branch',
    routeFocus: 'Stay with Silas and test the early trust answers.',
    confidence: 'watch',
    pageHref: '/silas-route',
    notes:
      'Use as an early save point branch; exact gallery label still needs replay verification.',
  },
  {
    number: 2,
    label: 'Fear answer branch',
    routeFocus: 'Answer honestly when the route asks whether you are afraid.',
    confidence: 'watch',
    pageHref: '/silas-route',
    notes: 'Useful fork for players missing mid-gallery outcomes.',
  },
  {
    number: 3,
    label: 'Shotgun confrontation',
    routeFocus:
      'Leave the bed, recover memories, then follow the confrontation path.',
    confidence: 'medium',
    pageHref: '/silas-route',
    notes:
      'Cross-checked from all-endings videos, but replay order should be confirmed in English UI.',
  },
  {
    number: 4,
    label: 'Do not fire / hesitation split',
    routeFocus:
      'Create a save before the weapon choice and test hesitation answers.',
    confidence: 'watch',
    pageHref: '/silas-route',
    notes: 'Treat this as a fork cluster rather than one final answer.',
  },
  {
    number: 5,
    label: 'Barn memory route',
    routeFocus:
      'Ask what happened that summer, then take the memory route toward the barn.',
    confidence: 'medium',
    pageHref: '/all-endings',
    notes:
      'Important because several escape and violence outcomes branch from this area.',
  },
  {
    number: 6,
    label: 'Run through the remembered path',
    routeFocus:
      'Choose the escape path and remember the road order when prompted.',
    confidence: 'medium',
    pageHref: '/all-endings',
    notes:
      'One video notes a right / left style path memory sequence; keep a save before the prompt.',
  },
  {
    number: 7,
    label: 'River swim failure',
    routeFocus: 'Try the river route while wounded or under pressure.',
    confidence: 'medium',
    pageHref: '/all-endings',
    notes:
      'The route is tied to whether the escape remains hidden long enough.',
  },
  {
    number: 8,
    label: 'Bridge escape branch',
    routeFocus:
      'Choose the safer bridge idea instead of swimming when available.',
    confidence: 'watch',
    pageHref: '/all-endings',
    notes: 'Likely shares setup with the river branch.',
  },
  {
    number: 9,
    label: 'Court / prison outcome',
    routeFocus:
      'Follow the violent confrontation route through its legal aftermath.',
    confidence: 'medium',
    pageHref: '/all-endings',
    notes: 'Mentioned in walkthrough summaries as one of the darker outcomes.',
  },
  {
    number: 10,
    label: 'Hospital aftermath',
    routeFocus:
      'Reach an injury aftermath where the protagonist returns to the city.',
    confidence: 'medium',
    pageHref: '/kyle-route',
    notes: 'Related to the Ending 20 / chicken accident cluster.',
  },
  {
    number: 11,
    label: 'Kyle summer promise',
    routeFocus: 'End with Kyle helping on the farm and a promise to return.',
    confidence: 'medium',
    pageHref: '/kyle-route',
    notes:
      'A cleaner emotional branch for players looking beyond Silas outcomes.',
  },
  {
    number: 12,
    label: 'Pier refusal setup',
    routeFocus:
      'Give Silas most farm work, answer warmly, then refuse the pier.',
    confidence: 'medium',
    pageHref: '/silas-route',
    notes:
      'Part of a more specific late good-separation route found in community cross-checks.',
  },
  {
    number: 13,
    label: 'Tree “cute” answer setup',
    routeFocus:
      'At the tree, choose the warm/cute response after refusing the pier.',
    confidence: 'medium',
    pageHref: '/silas-route',
    notes:
      'Keep the answer in your notes because this route is easy to desync.',
  },
  {
    number: 14,
    label: 'No previous partner answer',
    routeFocus:
      'When asked about past partners, choose the answer that reassures Silas.',
    confidence: 'medium',
    pageHref: '/silas-route',
    notes: 'Sensitive route detail; the guide keeps it non-explicit.',
  },
  {
    number: 15,
    label: 'Dream question answer',
    routeFocus: 'Ask the gentle dream follow-up instead of pushing away.',
    confidence: 'medium',
    pageHref: '/silas-route',
    notes: 'Part of the same hard-to-hit affectionate route cluster.',
  },
  {
    number: 16,
    label: 'First kiss initiative',
    routeFocus: 'Choose the proactive kiss option on the later night scene.',
    confidence: 'medium',
    pageHref: '/silas-route',
    notes: 'Do not over-describe the adult context; record the choice only.',
  },
  {
    number: 17,
    label: 'Morning nose joke',
    routeFocus: 'Use the playful morning answer after the affectionate branch.',
    confidence: 'medium',
    pageHref: '/silas-route',
    notes: 'Small choices seem to matter more than players expect.',
  },
  {
    number: 18,
    label: 'Nightmare and stay-in-bed route',
    routeFocus: 'After the last dream, say it was a nightmare and stay in bed.',
    confidence: 'medium',
    pageHref: '/silas-route',
    notes: 'A late branch toward the separation / institutional outcome.',
  },
  {
    number: 19,
    label: '“You can still feel him” continuation',
    routeFocus:
      'A lingering ending that players reported as a to-be-continued style outcome.',
    confidence: 'watch',
    pageHref: '/all-endings',
    notes: 'Needs exact route verification before presenting as solved.',
  },
  {
    number: 20,
    label: 'Chicken accident / low-chance ending',
    routeFocus:
      'Trigger the rare farm/chicken accident near the early farm flow.',
    confidence: 'medium',
    pageHref: '/ending-20',
    notes:
      'Community/video evidence suggests a low random chance. Use retries instead of changing unrelated late choices.',
  },
];

export const endingRules = [
  'Create saves before the bed scene, farm chore split, pier choice, tree answer, past-partner question, dream question, kiss choice, final dream, and farm mini-game loop.',
  'Treat the ending gallery as route clusters, not a straight list. Several endings share the same setup and split on one late answer.',
  'If a branch feels random, reset from the closest save instead of replaying the whole visual novel.',
  'Record your gallery slots as numbers and route notes. The current public guides use unofficial labels until every English UI ending name is verified.',
];
