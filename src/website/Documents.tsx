"use client";

import { dictionary, type Locale } from "@/content/dictionary";
import { site } from "@/content/site";
import { Eyebrow, Star } from "@/shared/illustrations/Decor";
import { ArrowIcon, FolderArt } from "@/shared/illustrations/Things";
import { Reveal } from "@/shared/MotionRoot";

export function Documents({ locale, url }: { locale: Locale; url: string | null }) {
  const t = dictionary[locale].documents;

  return (
    <section id="documents" className="relative isolate px-6 py-10">
      <Reveal>
        <div className="on-bright relative mx-auto grid max-w-[58rem] grid-cols-12 items-center gap-6 overflow-hidden rounded-[3rem_9rem_3rem_9rem] bg-sun px-12 py-10 text-deep xl:px-16">
          <div className="shape-a absolute -right-20 -bottom-24 -z-0 h-72 w-72 bg-peach/70" />
          <Star className="anim-float absolute top-8 left-[46%] h-7 w-7" color="#FFF8EC" />

          <div className="relative col-span-7">
            <Eyebrow className="text-deep">{t.eyebrow}</Eyebrow>
            <h2 className="text-[2.5rem] font-extrabold">{t.title}</h2>
            <p className="mt-3 max-w-md text-base font-semibold">{url ? t.textReady : t.textPending}</p>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-forest px-6 py-3 font-display text-[0.95rem] font-semibold text-milk transition-transform duration-300 hover:-translate-y-1"
                >
                  {t.button}
                  <span className="sr-only">({t.opensNewTab})</span>
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              ) : (
                <>
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center gap-2.5 rounded-full border-2 border-dashed border-deep/50 px-6 py-2.5 font-display text-[0.95rem] font-semibold text-deep/70"
                  >
                    {t.button}
                  </button>
                  <a href={`tel:${site.phone.tel}`} className="font-display text-base font-bold underline decoration-2 underline-offset-4">
                    {site.phone.display}
                  </a>
                </>
              )}
            </div>
          </div>

          <div className="relative col-span-5">
            <FolderArt className="mx-auto w-full max-w-[15rem]" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
