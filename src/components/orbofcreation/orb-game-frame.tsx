'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  ExternalLinkIcon,
  Maximize2Icon,
  Minimize2Icon,
  PlayIcon,
  RotateCcwIcon,
} from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

type OrbGameFrameProps = {
  src: string;
  posterSrc: string;
  labels: {
    title: string;
    loading: string;
    start: string;
    reset: string;
    fullscreen: string;
    exitFullscreen: string;
    open: string;
  };
  className?: string;
};

type OrbFrameWindow = Window & {
  orbResize?: () => void;
  orbSetFullscreen?: (fullscreen: boolean) => boolean;
};

function shouldOpenDirectlyForMobileFullscreen() {
  const userAgent = navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/.test(userAgent);
  const isSmallTouchScreen =
    navigator.maxTouchPoints > 0 &&
    window.matchMedia('(max-width: 767px)').matches;

  return isIOS || isAndroid || isSmallTouchScreen;
}

function getFrameDocument(frame: HTMLIFrameElement | null) {
  try {
    return frame?.contentDocument ?? null;
  } catch {
    return null;
  }
}

export function OrbGameFrame({
  src,
  posterSrc,
  labels,
  className,
}: OrbGameFrameProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [frameKey, setFrameKey] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [showWarmup, setShowWarmup] = useState(false);
  const [canFullscreen, setCanFullscreen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [openDirectForFullscreen, setOpenDirectForFullscreen] = useState(false);

  const syncFullscreenState = useCallback(() => {
    const childDocument = getFrameDocument(iframeRef.current);
    setIsFullscreen(
      document.fullscreenElement === stageRef.current ||
        document.fullscreenElement === iframeRef.current ||
        Boolean(childDocument?.fullscreenElement)
    );
  }, []);

  useEffect(() => {
    const shouldOpenDirect = shouldOpenDirectlyForMobileFullscreen();
    setOpenDirectForFullscreen(shouldOpenDirect);
    setCanFullscreen(Boolean(document.fullscreenEnabled) || shouldOpenDirect);

    document.addEventListener('fullscreenchange', syncFullscreenState);
    return () => {
      document.removeEventListener('fullscreenchange', syncFullscreenState);
    };
  }, [syncFullscreenState]);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    setShowWarmup(true);
    const timer = window.setTimeout(() => setShowWarmup(false), 2200);

    return () => window.clearTimeout(timer);
  }, [frameKey, hasStarted]);

  const openGameDirectly = useCallback(() => {
    const opened = window.open(src, '_blank', 'noopener,noreferrer');

    if (!opened) {
      window.location.href = src;
    }
  }, [src]);

  const restartFrame = () => {
    if (!hasStarted) {
      return;
    }

    setFrameKey((current) => current + 1);
  };

  const toggleFullscreen = async () => {
    if (!hasStarted) {
      return;
    }

    if (openDirectForFullscreen) {
      openGameDirectly();
      return;
    }

    if (!stageRef.current || !iframeRef.current || !canFullscreen) {
      return;
    }

    const childDocument = getFrameDocument(iframeRef.current);
    const childWindow = iframeRef.current
      .contentWindow as OrbFrameWindow | null;

    if (document.fullscreenElement || childDocument?.fullscreenElement) {
      if (childWindow?.orbSetFullscreen?.(false)) {
        return;
      }

      await document.exitFullscreen();
      return;
    }

    if (childWindow?.orbSetFullscreen?.(true)) {
      window.setTimeout(syncFullscreenState, 120);
      return;
    }

    await stageRef.current.requestFullscreen();
    childWindow?.orbResize?.();
    syncFullscreenState();
  };

  const handleFrameLoad = () => {
    setShowWarmup(false);
    const childDocument = getFrameDocument(iframeRef.current);
    childDocument?.addEventListener('fullscreenchange', syncFullscreenState);
  };

  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-[#4B6B66] bg-black shadow-2xl shadow-black/35',
        className
      )}
    >
      <div
        ref={stageRef}
        className="relative aspect-video min-h-[280px] w-full overflow-hidden bg-black sm:min-h-[380px] lg:min-h-[620px]"
      >
        {hasStarted ? (
          <iframe
            ref={iframeRef}
            key={frameKey}
            title="Orb of Creation online game"
            src={src}
            allow="fullscreen; autoplay; gamepad; cross-origin-isolated"
            allowFullScreen
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 size-full border-0 bg-black"
            onLoad={handleFrameLoad}
          />
        ) : (
          <div className="absolute inset-0">
            <Image
              src={posterSrc}
              alt="Orb of Creation logo"
              fill
              priority
              sizes="(min-width: 1024px) 1120px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,25,21,0.24)_0%,rgba(17,25,21,0.82)_70%,rgba(17,25,21,0.96)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
              <div className="max-w-2xl rounded-lg border border-[#FFB68A]/40 bg-[#111915]/90 p-5 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FFB68A]">
                  Browser build
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-[#F3EDE1] md:text-3xl">
                  Try Orb of Creation in your browser
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#CDEAE7]">
                  The first launch loads a large Unity WebGL data file. Use
                  Steam for the current 1.0 release and this page for a quick
                  browser session.
                </p>
                <Button
                  type="button"
                  className="mt-5 bg-[#FFB68A] text-[#33241B] hover:bg-[#FFD0A8]"
                  onClick={() => setHasStarted(true)}
                >
                  <PlayIcon className="size-4" />
                  {labels.start}
                </Button>
              </div>
            </div>
          </div>
        )}

        {showWarmup ? (
          <div className="pointer-events-none absolute inset-0 grid place-items-center bg-black/80 text-sm font-medium text-[#F3EDE1]">
            <span className="rounded-md border border-[#FFB68A]/35 bg-[#1B2630] px-3 py-2">
              {labels.loading}
            </span>
          </div>
        ) : null}
      </div>

      <div className="flex min-h-14 flex-wrap items-center justify-between gap-3 border-[#4B6B66] border-t bg-[#1B2630] px-3 py-2">
        <div className="flex min-w-0 items-center gap-2 text-sm text-[#CDEAE7]">
          <span
            className="size-2 shrink-0 rounded-full bg-[#FFB68A]"
            aria-hidden
          />
          <span className="truncate">{labels.title}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-9 text-[#CDEAE7] hover:bg-white/10 hover:text-white"
            title={labels.reset}
            aria-label={labels.reset}
            disabled={!hasStarted}
            onClick={restartFrame}
          >
            <RotateCcwIcon className="size-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-9 text-[#CDEAE7] hover:bg-white/10 hover:text-white"
            title={
              openDirectForFullscreen
                ? labels.open
                : isFullscreen
                  ? labels.exitFullscreen
                  : labels.fullscreen
            }
            aria-label={
              openDirectForFullscreen
                ? labels.open
                : isFullscreen
                  ? labels.exitFullscreen
                  : labels.fullscreen
            }
            disabled={!hasStarted || !canFullscreen}
            onClick={() => {
              toggleFullscreen().catch(() => {
                if (openDirectForFullscreen) {
                  openGameDirectly();
                  return;
                }

                setCanFullscreen(false);
              });
            }}
          >
            {isFullscreen ? (
              <Minimize2Icon className="size-4" />
            ) : (
              <Maximize2Icon className="size-4" />
            )}
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="size-9 text-[#CDEAE7] hover:bg-white/10 hover:text-white"
            title={labels.open}
            aria-label={labels.open}
          >
            <a href={src} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
