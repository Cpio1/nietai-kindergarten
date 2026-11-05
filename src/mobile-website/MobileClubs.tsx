"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { dictionary, type Locale } from "@/content/dictionary";
import { ClubArt } from "@/shared/illustrations/ClubArt";
import { Eyebrow, Wave } from "@/shared/illustrations/Decor";
import { Reveal } from "@/shared/MotionRoot";
import type { SiteMedia } from "@/shared/types";

const cardStyles = {
  dance: {
    card: "bg-sun rounded-[1.5rem_3.5rem_1.5rem_3.5rem]",
    frame: "shape-a bg-peach",
    from: -24,
  },
  taekwondo: {
    card: "flex-row-reverse bg-teal rounded-[3.5rem_1.5rem_3.5rem_1.5rem]",
    frame: "shape-b bg-milk/35",
    from: 24,
  },
} as const;

export function MobileClubs({ locale, photos }: { locale: Locale; photos: SiteMedia["clubs"] }) {
  const t = dictionary[locale].clubs;

  return (
    <section id="clubs" className="relative overflow-hidden px-4 pt-5 pb-16">
      <div className="mx-auto max-w-xl">
        <Reveal y={18} className="text-center">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-[1.8rem] font-extrabold sm:text-[2.6rem]">{t.title}</h2>
          <p className="mt-3 font-semibold text-muted">{t.text}</p>
        </Reveal>

        <ul className="on-bright mt-5 space-y-3 text-deep">
          {t.items.map((club, index) => {
            const style = cardStyles[club.id];
            const photo = photos[club.id];
            return (
              <m.li
                key={club.id}
                className={`flex items-center gap-3 p-4 ${style.card}`}
                initial={{ opacity: 0, x: style.from }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
              >
                <div className={`flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden ${style.frame}`}>
                  {photo ? (
                    <Image
                      src={photo.src}
                      alt={club.name}
                      width={photo.width}
                      height={photo.height}
                      sizes="96px"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <ClubArt club={club.id} className="h-full w-full p-1" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[1.2rem] font-bold">{club.name}</h3>
                  <p className="mt-1 text-[0.85rem] leading-snug font-semibold">{club.text}</p>
                </div>
              </m.li>
            );
          })}
        </ul>
      </div>
      <Wave className="absolute inset-x-0 -bottom-px h-8 text-peach" variant="c" />
    </section>
  );
}
