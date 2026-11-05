"use client";

import { dictionary, type Locale } from "@/content/dictionary";
import { site } from "@/content/site";
import { Eyebrow, Star } from "@/shared/illustrations/Decor";
import { ArrowIcon, FolderArt } from "@/shared/illustrations/Things";
import { Reveal } from "@/shared/MotionRoot";

export function Documents({ locale, url }: { locale: Locale; url: string | null }) {
  const t = dictionary[locale].documents;

  return (
    <section id="documents" className="relative isolate px-8 py-20">
      <Reveal>
        <div className="on-bright relative mx-auto grid max-w-6xl grid-cols-12 items-center gap-8 overflow-hidden rounded-[4rem_12rem_4rem_12rem] bg-sun px-16 py-16 text-deep xl:px-24">
          <div className="shape-a absolute -right-24 -bottom-32 -z-0 h-96 w-96 bg-peach/70" />
          <Star className="anim-float absolute top-12 left-[46%] h-9 w-9" color="#FFF8EC" />

          <div className="relative col-span-7">
            <Eyebrow className="text-deep">{t.eyebrow}</Eyebrow>
            <h2 className="text-5xl font-extrabold">{t.title}</h2>
            <p className="mt-5 max-w-lg text-xl font-semibold">{url ? t.textReady : t.textPending}</p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-forest px-8 py-4 font-display text-lg font-semibold text-milk transition-transform duration-300 hover:-translate-y-1"
                >
                  {t.button}
                  <span className="sr-only">({t.opensNewTab})</span>
                  <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              ) : (
                <>
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center gap-3 rounded-full border-2 border-dashed border-deep/50 px-8 py-3.5 font-display text-lg font-semibold text-deep/70"
                  >
                    {t.button}
                  </button>
                  <a href={`tel:${site.phone.tel}`} className="font-display text-lg font-bold underline decoration-2 underline-offset-4">
                    {site.phone.display}
                  </a>
                </>
              )}
            </div>
          </div>

          <div className="relative col-span-5">
            <FolderArt className="mx-auto w-full max-w-xs" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
