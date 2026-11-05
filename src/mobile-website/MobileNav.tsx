"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { dictionary, type Locale, type SectionId } from "@/content/dictionary";
import { site } from "@/content/site";
import { LanguageSwitch, ThemeToggle, useActiveSection } from "@/shared/controls";
import { LogoMark, PhoneIcon } from "@/shared/illustrations/Things";

const linkColors = ["bg-teal", "bg-sun", "bg-peach"];

export function MobileNav({ locale, sections }: { locale: Locale; sections: SectionId[] }) {
  const t = dictionary[locale];
  const active = useActiveSection(sections);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      toggle?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-2 z-50 px-2">
      <div className="relative z-10 mx-auto flex max-w-xl items-center justify-between rounded-full border border-line bg-nav py-0.5 pr-0.5 pl-1.5 shadow-[0_10px_30px_-14px_rgba(54,79,73,0.5)] backdrop-blur-lg">
        <a href="#home" aria-label={t.a11y.home} onClick={() => setOpen(false)} className="flex items-center gap-1 rounded-full">
          <LogoMark className="h-8 w-8" />
          <span className="font-display text-sm font-bold">{t.brand.short}</span>
        </a>
        <div className="flex items-center">
          <LanguageSwitch locale={locale} section={active} />
          <ThemeToggle locale={locale} />
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.a11y.menuClose : t.a11y.menuOpen}
            onClick={() => setOpen((value) => !value)}
            className="ml-0.5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-sun text-deep"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
              <path
                className="transition-[d] duration-300"
                d={open ? "M6 6l12 12M18 6L6 18" : "M4 8h16M4 16h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            id="mobile-menu"
            aria-label={t.a11y.mainNav}
            className="fixed inset-0 flex flex-col overflow-y-auto bg-page px-5 pt-16 pb-6"
            initial={{ clipPath: "circle(0px at calc(100% - 28px) 28px)" }}
            animate={{ clipPath: "circle(150vmax at calc(100% - 28px) 28px)" }}
            exit={{ clipPath: "circle(0px at calc(100% - 28px) 28px)" }}
            transition={{ duration: 0.45, ease: [0.3, 0.7, 0.2, 1] }}
          >
            <ul className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-1">
              {sections.map((id, index) => (
                <m.li
                  key={id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.035 }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === id ? "true" : undefined}
                    className="flex items-center gap-3 rounded-full py-1 font-display text-[1.4rem] leading-tight font-bold"
                  >
                    <span aria-hidden="true" className={`shape-a h-7 w-7 shrink-0 ${active === id ? "bg-teal" : linkColors[index % 3]}`}>
                    </span>
                    <span className={active === id ? "text-accent" : ""}>{t.nav[id]}</span>
                  </a>
                </m.li>
              ))}
            </ul>
            <a
              href={`tel:${site.phone.tel}`}
              className="mx-auto mt-4 flex w-full max-w-sm items-center justify-center gap-2.5 rounded-full bg-teal py-2.5 font-display text-sm font-semibold text-deep"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phone.display}
            </a>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
