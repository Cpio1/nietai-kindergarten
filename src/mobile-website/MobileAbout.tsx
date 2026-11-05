"use client";

import { dictionary, type Locale } from "@/content/dictionary";
import { Eyebrow } from "@/shared/illustrations/Decor";
import { AboutScene } from "@/shared/illustrations/HeroScene";
import { MediaFrame } from "@/shared/MediaFrame";
import { Reveal } from "@/shared/MotionRoot";
import type { MediaAsset } from "@/shared/types";

const tiles = [
  "bg-teal rounded-[1.75rem_3rem_1.75rem_1.75rem]",
  "bg-sun rounded-[3rem_1.75rem_1.75rem_1.75rem]",
  "bg-peach rounded-[1.75rem_1.75rem_1.75rem_3rem]",
  "bg-sun rounded-[1.75rem_1.75rem_3rem_1.75rem]",
];

export function MobileAbout({ locale, media }: { locale: Locale; media: MediaAsset | null }) {
  const t = dictionary[locale].about;

  return (
    <section id="about" className="bg-surface px-5 py-12">
      <div className="mx-auto max-w-2xl">
        <Reveal y={18}>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-[2.1rem] font-extrabold sm:text-5xl">{t.title}</h2>
          <div className="mt-5 space-y-4 text-muted">
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <ul className="on-bright mt-8 grid grid-cols-2 gap-3 text-deep">
          {t.stats.map((stat, index) => (
            <li key={stat.label} className={tiles[index]}>
              <Reveal y={12} delay={index * 0.05} className="flex min-h-32 flex-col justify-center p-4 text-center">
                <span className={`font-display leading-none font-extrabold ${stat.value.length > 4 ? "text-lg" : "text-[2.6rem]"}`}>
                  {stat.value}
                </span>
                <span className="mt-1.5 text-[0.95rem] leading-tight font-bold">{stat.label}</span>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-8" y={16}>
          {media ? (
            <MediaFrame
              media={media}
              alt={t.mediaAlt}
              sizes="(min-width: 672px) 640px, 92vw"
              className="rounded-[2rem_4rem_2rem_4rem] shadow-lg"
            />
          ) : (
            <AboutScene className="mx-auto w-full max-w-sm" />
          )}
        </Reveal>
      </div>
    </section>
  );
}
