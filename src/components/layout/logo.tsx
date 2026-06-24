'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="Orb of Creation logo"
      title="Orb of Creation"
      className={cn(
        'relative inline-flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-md',
        'border border-[#FFB68A]/60 bg-[#111915] shadow-[0_0_30px_rgba(255,182,138,0.24)]',
        className
      )}
    >
      <Image
        src="/orbofcreation/orb-of-creation-icon.png"
        alt=""
        fill
        sizes="44px"
        className="object-cover"
      />
    </span>
  );
}
