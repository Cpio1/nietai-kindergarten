"use client";

import { dictionary, type Locale } from "@/content/dictionary";
import { site, twoGisFirmUrl, twoGisWidgetUrl } from "@/content/site";
import { Eyebrow, Flower, Wave } from "@/shared/illustrations/Decor";
import { ArrowIcon, LogoMark, PhoneIcon, PinIcon } from "@/shared/illustrations/Things";
import { Reveal } from "@/shared/MotionRoot";

export function Contact({ locale }: { locale: Locale }) {
  const t = dictionary[locale].contact;

  return (
    <section id="contact" className="relative isolate overflow-hidden pt-16 pb-40">
      <Flower className="anim-float absolute top-10 right-[6%] h-14 w-14" color="#1EAA91" />
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-12 px-8">
        <Reveal className="col-span-5">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-5xl font-extrabold xl:text-6xl">{t.title}</h2>

          <dl className="mt-10 space-y-7">
            <div className="flex gap-4">
              <dt className="shape-c flex h-14 w-14 shrink-0 items-center justify-center bg-peach text-deep">
                <PinIcon className="h-6 w-6" />
                <span className="sr-only">{t.addressLabel}</span>
              </dt>
              <dd>
                <p aria-hidden="true" className="font-display text-sm font-semibold text-muted">{t.addressLabel}</p>
                <address className="text-lg leading-snug font-bold not-italic">{t.address}</address>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="shape-b flex h-14 w-14 shrink-0 items-center justify-center bg-sun text-deep">
                <PhoneIcon className="h-6 w-6" />
                <span className="sr-only">{t.phoneLabel}</span>
              </dt>
              <dd>
                <p aria-hidden="true" className="font-display text-sm font-semibold text-muted">{t.phoneLabel}</p>
                <a href={`tel:${site.phone.tel}`} className="font-display text-2xl font-bold transition-colors hover:text-accent">
                  {site.phone.display}
                </a>
              </dd>
            </div>
          </dl>

          <a
            href={twoGisFirmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-teal px-7 py-3.5 font-display font-semibold text-deep transition-transform duration-300 hover:-translate-y-1"
          >
            {t.openMap}
            <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal className="relative col-span-7" delay={0.12}>
          <div className="shape-b absolute -inset-5 -z-10 translate-x-3 translate-y-4 bg-teal/80" />
          <iframe
            src={twoGisWidgetUrl}
            title={t.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[32rem] rounded-[1.5rem_6rem_1.5rem_6rem] w-full border-0 bg-milk shadow-xl"
          />
        </Reveal>
      </div>
      <Wave className="absolute inset-x-0 -bottom-px h-24 text-forest" variant="c" />
    </section>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const t = dictionary[locale];
  return (
    <footer className="bg-forest pt-6 pb-10 text-milk">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8">
        <div className="flex items-center gap-3">
          <LogoMark className="h-11 w-11" />
          <span className="font-display text-lg font-bold">{t.brand.name}</span>
        </div>
        <p className="text-sm font-semibold">
          © {new Date().getFullYear()} {t.brand.short}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
