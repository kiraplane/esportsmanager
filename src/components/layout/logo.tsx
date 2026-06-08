'use client';

import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="The False Sun logo"
      title="The False Sun"
      className={cn(
        'relative inline-flex size-11 shrink-0 items-center justify-center rounded-full',
        'border border-[#D9B56A]/70 bg-[#0A0F0C] shadow-[0_0_34px_rgba(217,181,106,0.26)]',
        className
      )}
    >
      <span className="absolute size-6 rounded-full bg-[#D9B56A]" />
      <span className="absolute size-8 rounded-full border border-[#F7E8C9]/50" />
      <span className="relative size-3 rounded-full bg-[#7B2635]" />
    </span>
  );
}
