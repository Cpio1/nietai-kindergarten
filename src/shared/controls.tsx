"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { dictionary, localePath, type Locale, type SectionId } from "@/content/dictionary";
import { THEME_KEY } from "./theme-script";

function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const buttonClass =
  "inline-flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-full font-display text-sm font-semibold text-ink transition-colors hover:bg-sun hover:text-deep";

export function ThemeToggle({ locale }: { locale: Locale }) {
  const isDark = useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.classList.contains("dark"),
    () => false,
  );
  const t = dictionary[locale].a11y;

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    } catch {
      // Без доступа к хранилищу тема просто не запомнится.
    }
  }

  return (
    <button type="button" onClick={toggle} aria-label={isDark ? t.toLight : t.toDark} className={buttonClass}>
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
        {isDark ? (
          <>
            <circle cx="12" cy="12" r="5" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <rect key={angle} x="11" y="1.500" width="2" height="4" rx="1" transform={`rotate(${angle} 12 12)`} />
            ))}
          </>
        ) : (
          <path d="M20.500 14.500A8.500 8.500 0 0 1 9.500 3.500a8.500 8.500 0 1 0 11 11z" />
        )}
      </svg>
    </button>
  );
}

export function LanguageSwitch({ locale, section }: { locale: Locale; section?: SectionId }) {
  const target: Locale = locale === "kk" ? "ru" : "kk";
  const hash = section && section !== "home" ? `#${section}` : "";
  return (
    <a
      href={`${localePath[target]}${hash}`}
      hrefLang={target}
      lang={target}
      aria-label={dictionary[locale].a11y.switchLang}
      className={buttonClass}
    >
      {target === "ru" ? "РУС" : "ҚАЗ"}
    </a>
  );
}

/** Определяет раздел, который сейчас находится в центре экрана. */
export function useActiveSection(ids: SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>("home");
  const key = ids.join(",");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of key.split(",")) {
      // При загрузке в HTML есть обе версии сайта: следим только за видимой.
      const element = Array.from(document.querySelectorAll(`[id="${id}"]`)).find(
        (candidate) => candidate.getClientRects().length > 0,
      );
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [key]);

  return active;
}
