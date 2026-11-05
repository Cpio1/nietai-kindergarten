"use client";

import { dictionary, type Locale } from "@/content/dictionary";
import { site, twoGisFirmUrl, twoGisWidgetUrl } from "@/content/site";
import { Eyebrow, Flower, Wave } from "@/shared/illustrations/Decor";
import { ArrowIcon, PhoneIcon, PinIcon } from "@/shared/illustrations/Things";
import { Reveal } from "@/shared/MotionRoot";
import { LOGO_SIZES, SiteLogo } from "@/shared/SiteLogo";

export function Contact({ locale }: { locale: Locale }) {
  const t = dictionary[locale].contact;

  return (
    <section id="contact" className="relative isolate overflow-hidden pt-8 pb-24">
      <Flower className="anim-float absolute top-6 right-[6%] h-10 w-10" color="#1EAA91" />
      <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-8 px-6">
        <Reveal className="col-span-5">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-[2.5rem] font-extrabold xl:text-5xl">{t.title}</h2>

          <dl className="mt-6 space-y-5">
            <div className="flex gap-3">
              <dt className="shape-c flex h-11 w-11 shrink-0 items-center justify-center bg-peach text-deep">
                <PinIcon className="h-5 w-5" />
                <span className="sr-only">{t.addressLabel}</span>
              </dt>
              <dd>
                <p aria-hidden="true" className="font-display text-xs font-semibold text-muted">{t.addressLabel}</p>
                <address className="text-[0.95rem] leading-snug font-bold not-italic">{t.address}</address>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="shape-b flex h-11 w-11 shrink-0 items-center justify-center bg-sun text-deep">
                <PhoneIcon className="h-5 w-5" />
                <span className="sr-only">{t.phoneLabel}</span>
              </dt>
              <dd>
                <p aria-hidden="true" className="font-display text-xs font-semibold text-muted">{t.phoneLabel}</p>
                <a href={`tel:${site.phone.tel}`} className="font-display text-xl font-bold transition-colors hover:text-accent">
                  {site.phone.display}
                </a>
              </dd>
            </div>
          </dl>

          <a
            href={twoGisFirmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-teal px-5 py-2.5 font-display text-sm font-semibold text-deep transition-transform duration-300 hover:-translate-y-1"
          >
            {t.openMap}
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal className="relative col-span-7" delay={0.12}>
          <div className="shape-b absolute -inset-4 -z-10 translate-x-2 translate-y-3 bg-teal/80" />
          <iframe
            src={twoGisWidgetUrl}
            title={t.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[26rem] rounded-[1.25rem_5rem_1.25rem_5rem] w-full border-0 bg-milk shadow-xl"
          />
        </Reveal>
      </div>
      <Wave className="absolute inset-x-0 -bottom-px h-16 text-forest" variant="c" />
    </section>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const t = dictionary[locale];
  return (
    <footer className="bg-forest pt-4 pb-6 text-milk">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
        <div className="flex items-center gap-3">
          <span className="rounded-[1.25rem] bg-milk p-1.5 shadow-sm">
            <SiteLogo locale={locale} sizes={LOGO_SIZES.footer} className="w-[3.75rem]" />
          </span>
          <span className="font-display text-base font-bold">{t.brand.name}</span>
        </div>
        <p className="text-xs font-semibold">
          © {new Date().getFullYear()} {t.brand.short}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
