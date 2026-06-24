import type { GuideFaq } from '@/data/orbofcreation/types';
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
        'rounded-lg border border-[#4B6B66] bg-[#1B2630] p-6 shadow-sm',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#F3EDE1]">
        {title}
      </h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#4B6B66] bg-[#111915] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#F3EDE1] transition group-open:text-[#FFB68A]">
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
