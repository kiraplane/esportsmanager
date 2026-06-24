import type { GuideFaq } from '@/data/orbofcreation/types';

export function FaqSection({
  items,
  title = 'FAQ',
}: {
  items: GuideFaq[];
  title?: string;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-2xl font-bold text-[#F3EDE1]">
        {title}
      </h2>
      <div className="grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="rounded-lg border border-[#4B6B66] bg-[#1B2630] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#F3EDE1]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#CDEAE7]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
