"use client";

import { dictionary, type Locale } from "@/content/dictionary";
import { site, twoGisFirmUrl } from "@/content/site";
import { Eyebrow, Wave } from "@/shared/illustrations/Decor";
import { ArrowIcon, PhoneIcon, PinIcon } from "@/shared/illustrations/Things";
import { Reveal } from "@/shared/MotionRoot";
import { LOGO_SIZES, SiteLogo } from "@/shared/SiteLogo";
import { MobileMap } from "./MobileMap";

export function MobileContact({ locale }: { locale: Locale }) {
  const t = dictionary[locale].contact;

  return (
    <section id="contact" className="relative px-4 pt-4 pb-14">
      <div className="mx-auto max-w-xl">
        <Reveal y={18}>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-[1.8rem] font-extrabold sm:text-[2.6rem]">{t.title}</h2>
        </Reveal>

        <Reveal y={16} className="mt-4 space-y-2.5">
          <div className="flex gap-2.5 rounded-[1.5rem] border border-line bg-surface p-3">
            <span className="shape-c flex h-10 w-10 shrink-0 items-center justify-center bg-peach text-deep">
              <PinIcon className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-xs font-semibold text-muted">{t.addressLabel}</p>
              <address className="leading-snug font-bold not-italic">{t.address}</address>
            </div>
          </div>
          <a
            href={`tel:${site.phone.tel}`}
            className="flex items-center gap-2.5 rounded-[1.5rem] border border-line bg-surface p-3 active:scale-[0.99]"
          >
            <span className="shape-b flex h-10 w-10 shrink-0 items-center justify-center bg-sun text-deep">
              <PhoneIcon className="h-4 w-4" />
            </span>
            <span>
              <span className="block font-display text-xs font-semibold text-muted">{t.phoneLabel}</span>
              <span className="font-display text-lg font-bold">{site.phone.display}</span>
            </span>
          </a>
        </Reveal>

        <Reveal y={16} className="mt-4">
          <MobileMap title={t.mapTitle} />
          <a
            href={twoGisFirmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-3 flex max-w-sm items-center justify-center gap-2.5 rounded-full bg-teal py-2.5 font-display text-sm font-semibold text-deep active:scale-[0.98]"
          >
            {t.openMap}
            <ArrowIcon className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
      <Wave className="absolute inset-x-0 -bottom-px h-8 text-forest" variant="c" />
    </section>
  );
}

export function MobileFooter({ locale }: { locale: Locale }) {
  const t = dictionary[locale];
  return (
    <footer className="bg-forest px-5 pt-3 pb-8 text-center text-milk">
      <span className="inline-block rounded-[1.25rem] bg-milk p-1.5 shadow-sm">
        <SiteLogo locale={locale} sizes={LOGO_SIZES.footer} className="w-[3.75rem]" />
      </span>
      <p className="mt-1.5 font-display text-sm font-bold">{t.brand.name}</p>
      <p className="mt-1 text-xs font-semibold">
        © {new Date().getFullYear()} {t.brand.short}. {t.footer.rights}
      </p>
    </footer>
  );
}
