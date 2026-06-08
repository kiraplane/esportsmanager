import type { GuideFaq } from '@/data/falsesun/types';

export function FaqSection({ items }: { items: GuideFaq[] }) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-2xl font-bold text-[#F7E8C9]">FAQ</h2>
      <div className="grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="rounded-lg border border-[#493A34] bg-[#141916] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#F7E8C9]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#C7BAA7]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
