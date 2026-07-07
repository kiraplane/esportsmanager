'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { ItemEntry } from '@/data/moonlightpeaks/database';
import { Check, RotateCcw, Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const storageKey = 'moonlightpeaks-item-tracker-v1';

export function ItemTrackerTool({ items }: { items: ItemEntry[] }) {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState('All');
  const [hideDone, setHideDone] = useState(false);
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    const raw = window.localStorage.getItem(storageKey);
    if (raw) {
      setDone(JSON.parse(raw) as string[]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(done));
  }, [done]);

  const groups = useMemo(
    () => [
      'All',
      ...Array.from(new Set(items.map((item) => item.trackerGroup))).sort(),
    ],
    [items]
  );

  const filtered = useMemo(
    () =>
      items.filter((item) => {
        const isDone = done.includes(item.slug);
        const matchesGroup = group === 'All' || item.trackerGroup === group;
        const matchesQuery =
          `${item.name} ${item.category} ${item.trackerGroup}`
            .toLowerCase()
            .includes(query.toLowerCase());
        return matchesGroup && matchesQuery && (!hideDone || !isDone);
      }),
    [done, group, hideDone, items, query]
  );

  function toggle(slug: string) {
    setDone((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug]
    );
  }

  return (
    <section className="space-y-5">
      <div className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5">
        <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_180px_160px_120px]">
          <label className="relative block">
            <Search className="absolute top-3 left-3 size-4 text-[#C77DFF]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search item, category, group"
              className="h-11 w-full rounded-md border border-[#4B315F] bg-[#120719] pr-3 pl-10 text-sm text-[#F4EAFE] outline-none focus:border-[#C77DFF]"
            />
          </label>
          <select
            value={group}
            onChange={(event) => setGroup(event.target.value)}
            className="h-11 rounded-md border border-[#4B315F] bg-[#120719] px-3 text-sm text-[#F4EAFE] outline-none focus:border-[#C77DFF]"
          >
            {groups.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <label className="flex h-11 items-center gap-2 rounded-md border border-[#4B315F] bg-[#120719] px-3 text-sm text-[#DED2F6]">
            <input
              type="checkbox"
              checked={hideDone}
              onChange={(event) => setHideDone(event.target.checked)}
              className="size-4 accent-[#C77DFF]"
            />
            Hide completed
          </label>
          <Button
            type="button"
            variant="outline"
            onClick={() => setDone([])}
            className="h-11 border-[#4B315F] bg-[#120719] text-[#DED2F6] hover:bg-[#2B1838]"
          >
            <RotateCcw className="size-4" />
            Reset
          </Button>
        </div>
        <p className="mt-3 text-sm text-[#DED2F6]">
          {done.length} of {items.length} rows completed locally.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => {
          const completed = done.includes(item.slug);
          return (
            <button
              key={item.slug}
              type="button"
              onClick={() => toggle(item.slug)}
              className={`rounded-lg border p-4 text-left transition ${
                completed
                  ? 'border-[#5EE6D6] bg-[#5EE6D6]/12'
                  : 'border-[#4B315F] bg-[#1D102A] hover:border-[#C77DFF]'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="break-words font-display text-lg font-bold">
                    {item.name}
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#C77DFF]">
                    {item.trackerGroup}
                  </p>
                </div>
                <span
                  className={`inline-flex size-7 shrink-0 items-center justify-center rounded-md border ${
                    completed
                      ? 'border-[#5EE6D6] bg-[#5EE6D6] text-[#14091E]'
                      : 'border-[#4B315F] bg-[#120719] text-[#DED2F6]'
                  }`}
                >
                  {completed ? <Check className="size-4" /> : null}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="border-[#4B315F] bg-[#120719] text-[#DED2F6]"
                >
                  {item.category}
                </Badge>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
