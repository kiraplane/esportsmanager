import type { GuideFaq } from '@/data/esportsmanager/types';
import { cn } from '@/lib/utils';

export function FaqSection({
  className,
  items,
  title = 'FAQ',
}: {
  className?: string;
  items: GuideFaq[];
  title?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-lg border border-[#1F3A4A] bg-[#0E1B27] p-6 shadow-sm',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#F4FAFF]">
        {title}
      </h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#1F3A4A] bg-[#061018] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#F4FAFF] transition group-open:text-[#59D6FF]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#BED3E0]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
