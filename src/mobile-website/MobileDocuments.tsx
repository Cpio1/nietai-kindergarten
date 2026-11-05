"use client";

import { dictionary, type Locale } from "@/content/dictionary";
import { site } from "@/content/site";
import { Eyebrow } from "@/shared/illustrations/Decor";
import { ArrowIcon, FolderArt } from "@/shared/illustrations/Things";
import { Reveal } from "@/shared/MotionRoot";

export function MobileDocuments({ locale, url }: { locale: Locale; url: string | null }) {
  const t = dictionary[locale].documents;

  return (
    <section id="documents" className="px-4 py-8">
      <Reveal y={20}>
        <div className="on-bright mx-auto max-w-2xl overflow-hidden rounded-[2rem_4.5rem_2rem_4.5rem] bg-sun p-6 text-deep">
          <FolderArt className="mx-auto w-40" />
          <Eyebrow className="mt-3 text-deep">{t.eyebrow}</Eyebrow>
          <h2 className="text-[2rem] font-extrabold sm:text-5xl">{t.title}</h2>
          <p className="mt-3 font-semibold">{url ? t.textReady : t.textPending}</p>

          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-3 rounded-full bg-forest px-4 py-4 text-center font-display font-semibold text-milk active:scale-[0.98]"
            >
              {t.button}
              <span className="sr-only">({t.opensNewTab})</span>
              <ArrowIcon className="h-5 w-5 shrink-0" />
            </a>
          ) : (
            <>
              <button
                type="button"
                disabled
                className="mt-5 w-full rounded-full border-2 border-dashed border-deep/50 px-4 py-3.5 font-display font-semibold text-deep/70"
              >
                {t.button}
              </button>
              <a
                href={`tel:${site.phone.tel}`}
                className="mt-3 block py-1 text-center font-display font-bold underline decoration-2 underline-offset-4"
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
