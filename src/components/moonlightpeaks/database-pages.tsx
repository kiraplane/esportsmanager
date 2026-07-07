import Container from '@/components/layout/container';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/moonlightpeaks/wiki-navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import {
  type CharacterEntry,
  type DatabaseCategory,
  type FamilyEntry,
  type ItemEntry,
  type LocationEntry,
  characters,
  databaseCategoryMeta,
  families,
  getDatabaseCounts,
  getRomanceLabel,
  items,
  locations,
} from '@/data/moonlightpeaks/database';
import { getDatabaseImagePath } from '@/data/moonlightpeaks/database-images';
import { siteFacts } from '@/data/moonlightpeaks/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  Boxes,
  type Database,
  Filter,
  Heart,
  Map,
  UsersRound,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import type { ReactNode } from 'react';

const categoryIcons = {
  characters: UsersRound,
  families: Heart,
  locations: Map,
  items: Boxes,
} satisfies Record<DatabaseCategory, typeof Database>;

function SectionShell({
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
    '@type': 'CollectionPage',
    name: title,
    description: intro,
    url: `${siteFacts.domain}${currentPath}`,
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
              <Badge className="bg-[#5EE6D6] text-[#14091E]">Database</Badge>
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

          <WikiRouteSidebar currentPath={currentPath} locale={locale} />
        </div>
      </Container>
    </div>
  );
}

export function DatabaseLandingPage({ locale }: { locale?: Locale }) {
  const counts = getDatabaseCounts();
  const categories = Object.values(databaseCategoryMeta);

  return (
    <SectionShell
      currentPath="/database"
      locale={locale}
      title="Moonlight Peaks Database"
      intro="A structured launch database for characters, families, locations, and item indexes with local artwork and compact browsing pages."
    >
      <section className="grid gap-4 md:grid-cols-2">
        {categories.map((category) => {
          const Icon = categoryIcons[category.category];
          return (
            <LocaleLink
              key={category.category}
              href={category.route}
              className="group rounded-lg border border-[#4B315F] bg-[#1D102A] p-5 transition hover:border-[#C77DFF] hover:bg-[#251334]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 gap-3">
                  <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-[#C77DFF]/50 bg-[#120719] text-[#C77DFF]">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display text-2xl font-bold">
                      {category.shortTitle}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#DED2F6]">
                      {category.description}
                    </p>
                  </div>
                </div>
                <ArrowRight className="mt-2 size-5 shrink-0 text-[#C77DFF] transition group-hover:translate-x-1" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="bg-[#C77DFF] text-[#14091E]">
                  {counts[category.category]} rows
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#4B315F] bg-[#120719] text-[#DED2F6]"
                >
                  Updated Jul 7, 2026
                </Badge>
              </div>
            </LocaleLink>
          );
        })}
      </section>
    </SectionShell>
  );
}

export function DatabaseCategoryPage({
  category,
  locale,
}: {
  category: DatabaseCategory;
  locale?: Locale;
}) {
  const meta = databaseCategoryMeta[category];

  return (
    <SectionShell
      currentPath={meta.route}
      locale={locale}
      title={meta.title}
      intro={meta.description}
    >
      <section className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5EE6D6]">
              Database coverage
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-[#DED2F6]">
              Browse the current {meta.shortTitle.toLowerCase()} rows with
              compact cards, local artwork, and fields that are useful for
              planning a save.
            </p>
          </div>
          <Badge className="bg-[#C77DFF] text-[#14091E]">
            {getDatabaseCounts()[category]} rows
          </Badge>
        </div>
      </section>

      {category === 'characters' ? (
        <CharacterGrid entries={characters} />
      ) : null}
      {category === 'families' ? <FamilyGrid entries={families} /> : null}
      {category === 'locations' ? <LocationGrid entries={locations} /> : null}
      {category === 'items' ? <ItemGrid entries={items} /> : null}
    </SectionShell>
  );
}

function CharacterGrid({ entries }: { entries: CharacterEntry[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {entries.map((entry) => {
        const imagePath = getDatabaseImagePath('characters', entry.slug);
        return (
          <article
            key={entry.slug}
            className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5"
          >
            <DatabaseImage
              alt={`${entry.name} Moonlight Peaks portrait`}
              src={imagePath}
              variant="portrait"
            />
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="border-[#4B315F] bg-[#120719] text-[#DED2F6]"
              >
                {getRomanceLabel(entry.romanceStatus)}
              </Badge>
              <Badge className="bg-[#5EE6D6] text-[#14091E]">
                {entry.family}
              </Badge>
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold">
              {entry.name}
            </h2>
            <div className="mt-3 grid gap-2 text-sm text-[#DED2F6] sm:grid-cols-2">
              <Fact label="Species" value={entry.species} />
              <Fact label="Pronouns" value={entry.pronouns} />
              <Fact label="Birthday" value={entry.birthday} />
              <Fact label="Lives in" value={entry.livesIn} />
              <Fact label="Occupation" value={entry.occupation} />
            </div>
            <p className="mt-4 text-sm leading-7 text-[#DED2F6]">
              {entry.summary}
            </p>
          </article>
        );
      })}
    </section>
  );
}

function FamilyGrid({ entries }: { entries: FamilyEntry[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {entries.map((entry) => {
        const imagePath = getDatabaseImagePath('families', entry.slug);
        return (
          <article
            key={entry.slug}
            className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5"
          >
            <DatabaseImage
              alt={`${entry.name} family crest`}
              src={imagePath}
              variant="icon"
            />
            <Badge className="bg-[#5EE6D6] text-[#14091E]">
              {entry.inclination}
            </Badge>
            <h2 className="mt-3 font-display text-2xl font-bold">
              {entry.name}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#DED2F6]">
              {entry.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {entry.knownMembers.map((member) => (
                <Badge
                  key={member}
                  variant="outline"
                  className="border-[#4B315F] bg-[#120719] text-[#DED2F6]"
                >
                  {member}
                </Badge>
              ))}
            </div>
          </article>
        );
      })}
    </section>
  );
}

function LocationGrid({ entries }: { entries: LocationEntry[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {entries.map((entry) => {
        const imagePath = getDatabaseImagePath('locations', entry.slug);
        return (
          <article
            key={entry.slug}
            className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5"
          >
            <DatabaseImage
              alt={`${entry.name} Moonlight Peaks location`}
              src={imagePath}
              variant="wide"
            />
            <Badge className="bg-[#C77DFF] text-[#14091E]">{entry.kind}</Badge>
            <h2 className="mt-3 font-display text-2xl font-bold">
              {entry.name}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#DED2F6]">
              {entry.summary}
            </p>
            {entry.relatedCharacters.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.relatedCharacters.map((character) => (
                  <Badge
                    key={character}
                    variant="outline"
                    className="border-[#4B315F] bg-[#120719] text-[#DED2F6]"
                  >
                    {character}
                  </Badge>
                ))}
              </div>
            ) : null}
          </article>
        );
      })}
    </section>
  );
}

function ItemGrid({ entries }: { entries: ItemEntry[] }) {
  const trackerGroups = Array.from(
    new Set(entries.map((entry) => entry.trackerGroup))
  );

  return (
    <section className="space-y-5">
      <div className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5">
        <div className="flex items-center gap-3">
          <Filter className="size-5 text-[#5EE6D6]" />
          <div>
            <h2 className="font-display text-2xl font-bold">Tracker groups</h2>
            <p className="mt-1 text-sm leading-6 text-[#DED2F6]">
              Use these groups in the item tracker before exact price, recipe,
              and gift tables are safe to publish.
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {trackerGroups.map((group) => (
            <Badge key={group} className="bg-[#C77DFF] text-[#14091E]">
              {group}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {entries.map((entry) => (
          <article
            key={entry.slug}
            className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5"
          >
            <DatabaseImage
              alt={`${entry.name} Moonlight Peaks item`}
              src={getDatabaseImagePath('items', entry.slug)}
              variant="icon"
            />
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-[#5EE6D6] text-[#14091E]">
                {entry.trackerGroup}
              </Badge>
            </div>
            <h2 className="mt-3 font-display text-xl font-bold">
              {entry.name}
            </h2>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#C77DFF]">
              {entry.category}
            </p>
            <p className="mt-3 text-sm leading-7 text-[#DED2F6]">
              {entry.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DatabaseImage({
  alt,
  src,
  variant,
}: {
  alt: string;
  src?: string;
  variant: 'icon' | 'portrait' | 'wide';
}) {
  if (!src) {
    return null;
  }

  const isIcon = variant === 'icon';

  return (
    <div
      className={`mb-4 flex overflow-hidden rounded-md border border-[#4B315F] bg-[#120719] ${
        isIcon ? 'h-28 items-center justify-center p-4' : 'aspect-[4/3]'
      }`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={
          isIcon
            ? 'max-h-20 max-w-24 object-contain'
            : 'h-full w-full object-contain'
        }
      />
    </div>
  );
}

function Fact({ label, value }: { label: string; value?: string }) {
  if (!value) {
    return null;
  }

  return (
    <div className="rounded-md border border-[#4B315F] bg-[#120719] px-3 py-2">
      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C77DFF]">
        {label}
      </span>
      <span className="mt-1 block break-words">{value}</span>
    </div>
  );
}
