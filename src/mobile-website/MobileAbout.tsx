"use client";

import { dictionary, type Locale } from "@/content/dictionary";
import { Eyebrow } from "@/shared/illustrations/Decor";
import { AboutScene } from "@/shared/illustrations/HeroScene";
import { Mascot } from "@/shared/Mascot";
import { MediaFrame } from "@/shared/MediaFrame";
import { Reveal } from "@/shared/MotionRoot";
import type { MediaAsset } from "@/shared/types";

const tiles = [
  "bg-teal rounded-[1.5rem_2.5rem_1.5rem_1.5rem]",
  "bg-sun rounded-[2.5rem_1.5rem_1.5rem_1.5rem]",
  "bg-peach rounded-[1.5rem_1.5rem_1.5rem_2.5rem]",
  "bg-sun rounded-[1.5rem_1.5rem_2.5rem_1.5rem]",
];

export function MobileAbout({ locale, media }: { locale: Locale; media: MediaAsset | null }) {
  const t = dictionary[locale].about;

  return (
    <section id="about" className="bg-surface px-4 py-9">
      <div className="mx-auto max-w-xl">
        <Reveal y={18}>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-[1.8rem] font-extrabold sm:text-[2.6rem]">{t.title}</h2>
          <div className="mt-4 space-y-3 text-muted">
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <ul className="on-bright mt-6 grid grid-cols-2 gap-2.5 text-deep">
          {t.stats.map((stat, index) => (
            <li key={stat.label} className={tiles[index]}>
              <Reveal y={12} delay={index * 0.05} className="flex min-h-[6.75rem] flex-col justify-center p-3 text-center">
                <span className={`font-display leading-none font-extrabold ${stat.value.length > 4 ? "text-base" : "text-[2.2rem]"}`}>
                  {stat.value}
                </span>
                <span className="mt-1 text-[0.8rem] leading-tight font-bold">{stat.label}</span>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="relative mt-6 pb-10" y={16}>
          {media ? (
            <MediaFrame
              media={media}
              alt={t.mediaAlt}
              sizes="(min-width: 640px) 448px, 92vw"
              className="mx-auto max-w-md rounded-[1.75rem_3.5rem_1.75rem_3.5rem] shadow-lg"
            />
          ) : (
            <AboutScene className="mx-auto w-full max-w-[19rem]" />
          )}
          {/* На телефоне маскот выглядывает из-под правого нижнего угла фото и не выходит за экран. */}
          <Mascot
            name="openArms"
            locale={locale}
            className="absolute right-0 bottom-0 z-10 w-[7.5rem] min-[375px]:w-[8.75rem] min-[430px]:w-40"
          />
        </Reveal>
      </div>
    </section>
  );
}
