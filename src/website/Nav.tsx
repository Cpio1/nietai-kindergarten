"use client";

import { m } from "framer-motion";
import { dictionary, type Locale, type SectionId } from "@/content/dictionary";
import { LanguageSwitch, ThemeToggle, useActiveSection } from "@/shared/controls";
import { LogoMark } from "@/shared/illustrations/Things";

export function Nav({ locale, sections }: { locale: Locale; sections: SectionId[] }) {
  const t = dictionary[locale];
  const active = useActiveSection(sections);

  return (
    <m.header
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <div className="flex w-full max-w-6xl items-center justify-between gap-2 rounded-full border border-line bg-nav py-1.5 pr-2 pl-3 shadow-[0_12px_40px_-16px_rgba(54,79,73,0.45)] backdrop-blur-lg">
        <a href="#home" aria-label={t.a11y.home} className="flex shrink-0 items-center gap-2 rounded-full pr-2">
          <LogoMark className="h-10 w-10" />
          <span className="font-display text-lg font-bold">{t.brand.short}</span>
        </a>

        <nav aria-label={t.a11y.mainNav}>
          <ul className="flex items-center gap-0.5">
            {sections.map((id) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded-full px-3 py-2 font-display text-sm font-medium whitespace-nowrap transition-colors duration-300 xl:px-4 ${
                      isActive ? "bg-teal text-deep" : "text-ink hover:bg-sun hover:text-deep"
                    }`}
                  >
                    {t.nav[id]}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-0.5">
          <LanguageSwitch locale={locale} section={active} />
          <ThemeToggle locale={locale} />
        </div>
      </div>
    </m.header>
  );
}
