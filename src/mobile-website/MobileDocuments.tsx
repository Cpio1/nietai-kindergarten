"use client";

import { dictionary, type Locale } from "@/content/dictionary";
import { site } from "@/content/site";
import { Eyebrow } from "@/shared/illustrations/Decor";
import { ArrowIcon, FolderArt } from "@/shared/illustrations/Things";
import { Reveal } from "@/shared/MotionRoot";

export function MobileDocuments({ locale, url }: { locale: Locale; url: string | null }) {
  const t = dictionary[locale].documents;

  return (
    <section id="documents" className="px-4 py-6">
      <Reveal y={20}>
        <div className="on-bright mx-auto max-w-xl overflow-hidden rounded-[1.75rem_3.75rem_1.75rem_3.75rem] bg-sun p-5 text-deep">
          <FolderArt className="mx-auto w-[7.5rem]" />
          <Eyebrow className="mt-2 text-deep">{t.eyebrow}</Eyebrow>
          <h2 className="text-[1.7rem] font-extrabold sm:text-[2.6rem]">{t.title}</h2>
          <p className="mt-2 font-semibold">{url ? t.textReady : t.textPending}</p>

          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-4 flex max-w-sm items-center justify-center gap-2.5 rounded-full bg-forest px-4 py-3 text-center font-display text-sm font-semibold text-milk active:scale-[0.98]"
            >
              {t.button}
              <span className="sr-only">({t.opensNewTab})</span>
              <ArrowIcon className="h-4 w-4 shrink-0" />
            </a>
          ) : (
            <>
              <button
                type="button"
                disabled
                className="mx-auto mt-4 block w-full max-w-sm rounded-full border-2 border-dashed border-deep/50 px-4 py-2.5 font-display text-sm font-semibold text-deep/70"
              >
                {t.button}
              </button>
              <a
                href={`tel:${site.phone.tel}`}
                className="mt-2 block py-1 text-center font-display text-sm font-bold underline decoration-2 underline-offset-4"
              >
                {site.phone.display}
              </a>
            </>
          )}
        </div>
      </Reveal>
    </section>
  );
}
