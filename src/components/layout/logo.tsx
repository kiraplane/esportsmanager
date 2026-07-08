'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="Esports Manager 2026 logo"
      title="Esports Manager 2026"
      className={cn(
        'relative inline-flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-md',
        'border border-[#59D6FF]/60 bg-[#061018] shadow-[0_0_30px_rgba(89,214,255,0.2)]',
        className
      )}
    >
      <Image
        src="/android-chrome-192x192.png"
        alt=""
        fill
        sizes="44px"
        className="object-cover"
      />
    </span>
  );
}
