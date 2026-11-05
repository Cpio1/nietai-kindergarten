"use client";

import { m } from "framer-motion";
import { dictionary, type Locale } from "@/content/dictionary";
import { Eyebrow, Flower, Star } from "@/shared/illustrations/Decor";
import { AboutScene } from "@/shared/illustrations/HeroScene";
import { MediaFrame } from "@/shared/MediaFrame";
import { Reveal } from "@/shared/MotionRoot";
import type { MediaAsset } from "@/shared/types";

const statStyles = [
  { shape: "shape-a", bg: "bg-teal", size: "h-40 w-40", value: "text-[3.5rem]", offset: "" },
  { shape: "shape-c", bg: "bg-sun", size: "h-36 w-36", value: "text-5xl", offset: "mt-12" },
  { shape: "shape-d", bg: "bg-peach", size: "h-40 w-40", value: "text-[1.15rem]", offset: "-mt-2" },
  { shape: "shape-b", bg: "bg-sun", size: "h-44 w-44", value: "text-[3.5rem]", offset: "mt-9" },
];

export function About({ locale, media }: { locale: Locale; media: MediaAsset | null }) {
  const t = dictionary[locale].about;

  return (
    <section id="about" className="relative isolate overflow-hidden bg-surface py-16">
      <Flower className="anim-float absolute top-16 right-[8%] h-10 w-10" color="#F8C65C" />
      <Star className="anim-float delay-2 absolute bottom-16 left-[5%] h-7 w-7" color="#FFB5A2" />

      <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-x-8 gap-y-10 px-6">
        <Reveal className="col-span-6">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-[2.5rem] font-extrabold xl:text-5xl">{t.title}</h2>
          <div className="mt-5 space-y-3 text-base text-muted">
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative col-span-6 mx-auto w-full max-w-md" delay={0.15}>
          <div className="shape-b absolute -inset-3 -z-10 translate-x-4 translate-y-4 bg-teal/25" />
          {media ? (
            <MediaFrame
              media={media}
              alt={t.mediaAlt}
              sizes="448px"
              className="shape-leaf aspect-[5/4] shadow-xl"
            />
          ) : (
            <AboutScene className="w-full" />
          )}
        </Reveal>

        <ul className="col-span-12 flex flex-wrap items-start justify-center gap-x-8 gap-y-4 xl:gap-x-12">
          {t.stats.map((stat, index) => {
            const style = statStyles[index];
            return (
              <m.li
                key={stat.label}
                className={`on-bright flex flex-col items-center justify-center p-4 text-center text-deep ${style.shape} ${style.bg} ${style.size} ${style.offset}`}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.06, rotate: index % 2 ? -3 : 3 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 180, damping: 15, delay: index * 0.08 }}
              >
                <span className={`font-display leading-none font-extrabold ${style.value}`}>{stat.value}</span>
                <span className="mt-1.5 text-sm leading-tight font-bold">{stat.label}</span>
              </m.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
