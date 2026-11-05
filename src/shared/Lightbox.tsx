"use client";

import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { dictionary, type Locale } from "@/content/dictionary";
import type { ImageAsset } from "./types";

type Props = {
  images: ImageAsset[];
  index: number | null;
  locale: Locale;
  onChange: (index: number | null) => void;
};

const roundButton =
  "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-sun text-deep transition-transform hover:scale-110 focus-visible:outline-milk";

export function Lightbox({ images, index, locale, onChange }: Props) {
  const t = dictionary[locale].gallery;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<number | null>(null);
  const [direction, setDirection] = useState(1);
  const open = index !== null;

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      setDirection(delta);
      onChange((index + delta + images.length) % images.length);
    },
    [images.length, index, onChange],
  );

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onChange(null);
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onChange, open]);

  if (typeof document === "undefined") return null;
  const image = index !== null ? images[index] : null;

  return createPortal(
    <AnimatePresence>
      {image && index !== null && (
        <m.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={t.photoAlt(index + 1)}
          className="on-bright fixed inset-0 z-[100] flex flex-col bg-[#0b211c]/95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) onChange(null);
          }}
          onTouchStart={(event) => {
            touchStart.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const delta = event.changedTouches[0].clientX - touchStart.current;
            touchStart.current = null;
            if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1);
          }}
        >
          <div className="flex items-center justify-between p-3 lg:p-4">
            <p className="font-display font-semibold text-milk" aria-live="polite">
              {t.counter(index + 1, images.length)}
            </p>
            <button ref={closeRef} type="button" onClick={() => onChange(null)} aria-label={t.close} className={roundButton}>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="relative mb-0 min-h-0 flex-1 overflow-hidden lg:mb-6" onClick={(event) => {
            if (event.target === event.currentTarget) onChange(null);
          }}>
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <m.div
                key={image.src}
                className="pointer-events-none absolute inset-x-3 inset-y-0 lg:inset-x-20"
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <Image src={image.src} alt={t.photoAlt(index + 1)} fill sizes="100vw" className="object-contain" priority />
              </m.div>
            </AnimatePresence>
          </div>

          {images.length > 1 && (
            <div className="flex justify-center gap-4 p-4 lg:pointer-events-none lg:absolute lg:inset-x-6 lg:top-1/2 lg:-translate-y-1/2 lg:justify-between lg:p-0">
              <button type="button" onClick={() => go(-1)} aria-label={t.prev} className={`${roundButton} lg:pointer-events-auto`}>
                <svg viewBox="0 0 24 24" className="h-4 w-4 rotate-180" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
              <button type="button" onClick={() => go(1)} aria-label={t.next} className={`${roundButton} lg:pointer-events-auto`}>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          )}
        </m.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
