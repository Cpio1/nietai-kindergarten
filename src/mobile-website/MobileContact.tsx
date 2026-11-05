"use client";

import { dictionary, type Locale } from "@/content/dictionary";
import { site, twoGisFirmUrl } from "@/content/site";
import { Eyebrow, Wave } from "@/shared/illustrations/Decor";
import { ArrowIcon, LogoMark, PhoneIcon, PinIcon } from "@/shared/illustrations/Things";
import { Reveal } from "@/shared/MotionRoot";
import { MobileMap } from "./MobileMap";

export function MobileContact({ locale }: { locale: Locale }) {
  const t = dictionary[locale].contact;

  return (
    <section id="contact" className="relative px-4 pt-6 pb-20">
      <div className="mx-auto max-w-2xl">
        <Reveal y={18}>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-[2.1rem] font-extrabold sm:text-5xl">{t.title}</h2>
        </Reveal>

        <Reveal y={16} className="mt-6 space-y-3">
          <div className="flex gap-3 rounded-[1.75rem] border border-line bg-surface p-4">
            <span className="shape-c flex h-12 w-12 shrink-0 items-center justify-center bg-peach text-deep">
              <PinIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-muted">{t.addressLabel}</p>
              <address className="leading-snug font-bold not-italic">{t.address}</address>
            </div>
          </div>
          <a
            href={`tel:${site.phone.tel}`}
            className="flex items-center gap-3 rounded-[1.75rem] border border-line bg-surface p-4 active:scale-[0.99]"
          >
            <span className="shape-b flex h-12 w-12 shrink-0 items-center justify-center bg-sun text-deep">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-display text-sm font-semibold text-muted">{t.phoneLabel}</span>
              <span className="font-display text-xl font-bold">{site.phone.display}</span>
            </span>
          </a>
        </Reveal>

        <Reveal y={16} className="mt-4">
          <MobileMap title={t.mapTitle} />
          <a
            href={twoGisFirmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-3 rounded-full bg-teal py-3.5 font-display font-semibold text-deep active:scale-[0.98]"
          >
            {t.openMap}
            <ArrowIcon className="h-5 w-5" />
          </a>
        </Reveal>
      </div>
      <Wave className="absolute inset-x-0 -bottom-px h-10 text-forest" variant="c" />
    </section>
  );
}

export function MobileFooter({ locale }: { locale: Locale }) {
  const t = dictionary[locale];
  return (
    <footer className="bg-forest px-5 pt-3 pb-8 text-center text-milk">
      <LogoMark className="mx-auto h-11 w-11" />
      <p className="mt-2 font-display font-bold">{t.brand.name}</p>
      <p className="mt-1 text-sm font-semibold">
        © {new Date().getFullYear()} {t.brand.short}. {t.footer.rights}
      </p>
    </footer>
  );
}
