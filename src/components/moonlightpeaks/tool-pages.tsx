import Container from '@/components/layout/container';
import { FarmingProfitCalculatorTool } from '@/components/moonlightpeaks/tools/farming-profit-calculator-tool';
import { ItemTrackerTool } from '@/components/moonlightpeaks/tools/item-tracker-tool';
import { PlatformPickerTool } from '@/components/moonlightpeaks/tools/platform-picker-tool';
import { RomanceTrackerTool } from '@/components/moonlightpeaks/tools/romance-tracker-tool';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/moonlightpeaks/wiki-navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  characters,
  items,
  platformOptions,
} from '@/data/moonlightpeaks/database';
import { siteFacts } from '@/data/moonlightpeaks/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  Calculator,
  Gamepad2,
  Heart,
  ListChecks,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import type { ReactNode } from 'react';

export type ToolKind =
  | 'platform-picker'
  | 'romance-tracker'
  | 'item-tracker'
  | 'farming-profit-calculator';

const toolCards = [
  {
    kind: 'platform-picker',
    title: 'Platform Picker',
    href: '/tools/platform-picker',
    icon: Gamepad2,
    body: 'Answer a few practical questions and get a Steam, Steam Deck, Switch, Switch 2, or Android recommendation.',
    tags: ['Platforms', 'Demo', 'Safe download'],
  },
  {
    kind: 'romance-tracker',
    title: 'Romance Tracker',
    href: '/tools/romance-tracker',
    icon: Heart,
    body: 'Filter residents by family/species, shortlist romance picks, and save private notes in your browser.',
    tags: ['Characters', 'Families', 'Local notes'],
  },
  {
    kind: 'item-tracker',
    title: 'Item Tracker',
    href: '/tools/item-tracker',
    icon: ListChecks,
    body: 'Track crops, flowers, tools, resources, animals, recipes, and placeholder collection rows locally.',
    tags: ['Items', 'Checklist', 'Local save'],
  },
  {
    kind: 'farming-profit-calculator',
    title: 'Farming Profit Calculator',
    href: '/tools/farming-profit-calculator',
    icon: Calculator,
    body: 'Compare manual crop scenarios by seed cost, sell value, growth days, harvest count, and extra cost.',
    tags: ['Crops', 'Profit/day', 'Manual values'],
  },
] as const;

export function ToolsLandingPage({ locale }: { locale?: Locale }) {
  return (
    <ToolShell
      currentPath="/tools"
      locale={locale}
      title="Moonlight Peaks Tools"
      intro="Interactive player helpers for platform choice, romance notes, item checklists, and farming math with local-only saves."
    >
      <section className="grid gap-4 md:grid-cols-2">
        {toolCards.map((tool) => {
          const Icon = tool.icon;
          return (
            <LocaleLink
              key={tool.href}
              href={tool.href}
              className="group rounded-lg border border-[#4B315F] bg-[#1D102A] p-5 transition hover:border-[#C77DFF] hover:bg-[#251334]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 gap-3">
                  <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-[#C77DFF]/50 bg-[#120719] text-[#C77DFF]">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display text-2xl font-bold">
                      {tool.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#DED2F6]">
                      {tool.body}
                    </p>
                  </div>
                </div>
                <ArrowRight className="mt-2 size-5 shrink-0 text-[#C77DFF] transition group-hover:translate-x-1" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-[#4B315F] bg-[#120719] text-[#DED2F6]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </LocaleLink>
          );
        })}
      </section>

      <section className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5">
        <div className="flex gap-3">
          <ShieldCheck className="mt-1 size-5 shrink-0 text-[#5EE6D6]" />
          <div>
            <h2 className="font-display text-2xl font-bold">Tool privacy</h2>
            <p className="mt-2 text-sm leading-7 text-[#DED2F6]">
              These tools separate game fields from player-entered experiments.
              Shortlists and checklists stay in localStorage, so they are
              private to your browser and can be reset any time.
            </p>
          </div>
        </div>
      </section>
    </ToolShell>
  );
}

export function ToolDetailPage({
  kind,
  locale,
}: {
  kind: ToolKind;
  locale?: Locale;
}) {
  const tool = toolCards.find((item) => item.kind === kind);

  if (!tool) {
    return null;
  }

  return (
    <ToolShell
      currentPath={tool.href}
      locale={locale}
      title={`Moonlight Peaks ${tool.title}`}
      intro={tool.body}
    >
      {kind === 'platform-picker' ? (
        <PlatformPickerTool platforms={platformOptions} />
      ) : null}
      {kind === 'romance-tracker' ? (
        <RomanceTrackerTool characters={characters} />
      ) : null}
      {kind === 'item-tracker' ? <ItemTrackerTool items={items} /> : null}
      {kind === 'farming-profit-calculator' ? (
        <FarmingProfitCalculatorTool />
      ) : null}
    </ToolShell>
  );
}

function ToolShell({
  children,
  currentPath,
  intro,
  locale,
  title,
}: {
  children: ReactNode;
  currentPath: string;
  intro: string;
  locale?: Locale;
  title: string;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    description: intro,
    url: `${siteFacts.domain}${currentPath}`,
    applicationCategory: 'GameApplication',
    operatingSystem: 'Any',
    isPartOf: {
      '@type': 'WebSite',
      name: siteFacts.siteName,
      url: siteFacts.domain,
    },
  };

  return (
    <div className="bg-[#120719] py-10 text-[#F4EAFE]">
      <JsonLd data={jsonLd} />
      <Container className="px-4">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-6">
            <header className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5 md:p-7">
              <Badge className="bg-[#5EE6D6] text-[#14091E]">
                Player tools
              </Badge>
              <h1 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#DED2F6] md:text-lg">
                {intro}
              </p>
              <div className="mt-5">
                <MobileWikiNav currentPath={currentPath} locale={locale} />
              </div>
            </header>

            {children}
          </main>

          <WikiRouteSidebar currentPath={currentPath} locale={locale}>
            <aside className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-4">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-1 size-5 shrink-0 text-[#5EE6D6]" />
                <div>
                  <h2 className="font-display text-lg font-bold">
                    Launch-safe tools
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#DED2F6]">
                    Use tools for planning and private notes. Exact gifts,
                    prices, and schedules should still be checked in your save.
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="mt-4 bg-[#C77DFF] text-[#14091E] hover:bg-[#FFB86B]"
                  >
                    <LocaleLink href="/database">
                      Open database
                      <ArrowRight className="size-3" />
                    </LocaleLink>
                  </Button>
                </div>
              </div>
            </aside>
          </WikiRouteSidebar>
        </div>
      </Container>
    </div>
  );
}
