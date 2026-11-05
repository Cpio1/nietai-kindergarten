"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { dictionary, type Locale } from "@/content/dictionary";
import { ClubArt } from "@/shared/illustrations/ClubArt";
import { Eyebrow, Flower, Star, Wave } from "@/shared/illustrations/Decor";
import { Reveal } from "@/shared/MotionRoot";
import type { SiteMedia } from "@/shared/types";

const cardStyles = {
  dance: {
    card: "bg-sun rounded-[3rem_8rem_3rem_8rem]",
    frame: "shape-a bg-peach",
    from: -40,
  },
  taekwondo: {
    card: "bg-teal rounded-[8rem_3rem_8rem_3rem] mt-12",
    frame: "shape-b bg-milk/35",
    from: 40,
  },
} as const;

export function Clubs({ locale, photos }: { locale: Locale; photos: SiteMedia["clubs"] }) {
  const t = dictionary[locale].clubs;

  return (
    <section id="clubs" className="relative isolate overflow-hidden pt-10 pb-28">
      <Flower className="anim-float absolute top-16 left-[8%] h-10 w-10" color="#FFB5A2" />
      <Star className="anim-float delay-2 absolute top-28 right-[9%] h-7 w-7" color="#1EAA91" />

      <Reveal className="mx-auto max-w-2xl px-6 text-center">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="text-[2.5rem] font-extrabold xl:text-5xl">{t.title}</h2>
        <p className="mt-3 text-base font-semibold text-muted">{t.text}</p>
      </Reveal>

      <ul className="on-bright mx-auto mt-8 grid max-w-5xl grid-cols-2 items-start gap-6 px-6 text-deep">
        {t.items.map((club, index) => {
          const style = cardStyles[club.id];
          const photo = photos[club.id];
          return (
            <m.li
              key={club.id}
              className={`flex items-center gap-5 p-7 shadow-[0_24px_50px_-28px_rgba(15,43,37,0.7)] xl:p-9 ${style.card}`}
              initial={{ opacity: 0, x: style.from }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <div className={`flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden xl:h-40 xl:w-40 ${style.frame}`}>
                {photo ? (
                  <Image
                    src={photo.src}
                    alt={club.name}
                    width={photo.width}
                    height={photo.height}
                    sizes="160px"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <ClubArt club={club.id} className="h-full w-full p-1.5" />
                )}
              </div>
              <div className="min-w-0">
                <h3 className="text-2xl font-bold xl:text-[1.7rem]">{club.name}</h3>
                <p className="mt-2 text-[0.95rem] leading-snug font-semibold">{club.text}</p>
              </div>
            </m.li>
          );
        })}
      </ul>

      <Wave className="absolute inset-x-0 -bottom-px h-16 text-peach" variant="c" />
    </section>
  );
}
