"use client";

import { m } from "framer-motion";
import { dictionary, type Locale } from "@/content/dictionary";
import { Eyebrow, Flower, Star } from "@/shared/illustrations/Decor";
import { AboutScene } from "@/shared/illustrations/HeroScene";
import { MediaFrame } from "@/shared/MediaFrame";
import { Reveal } from "@/shared/MotionRoot";
import type { MediaAsset } from "@/shared/types";

const statStyles = [
  { shape: "shape-a", bg: "bg-teal", size: "h-52 w-52", value: "text-7xl", offset: "" },
  { shape: "shape-c", bg: "bg-sun", size: "h-48 w-48", value: "text-6xl", offset: "mt-20" },
  { shape: "shape-d", bg: "bg-peach", size: "h-52 w-52", value: "text-[1.45rem]", offset: "-mt-4" },
  { shape: "shape-b", bg: "bg-sun", size: "h-56 w-56", value: "text-7xl", offset: "mt-14" },
];

export function About({ locale, media }: { locale: Locale; media: MediaAsset | null }) {
  const t = dictionary[locale].about;

  return (
    <section id="about" className="relative isolate overflow-hidden bg-surface py-28">
      <Flower className="anim-float absolute top-24 right-[8%] h-14 w-14" color="#F8C65C" />
      <Star className="anim-float delay-2 absolute bottom-24 left-[5%] h-10 w-10" color="#FFB5A2" />

      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-x-10 gap-y-20 px-8">
        <Reveal className="col-span-6">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-5xl font-extrabold xl:text-6xl">{t.title}</h2>
          <div className="mt-8 space-y-5 text-xl text-muted">
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative col-span-6" delay={0.15}>
          <div className="shape-b absolute -inset-4 -z-10 translate-x-5 translate-y-5 bg-teal/25" />
          {media ? (
            <MediaFrame
              media={media}
              alt={t.mediaAlt}
              sizes="(min-width: 1280px) 600px, 48vw"
              className="shape-leaf aspect-[5/4] shadow-xl"
            />
          ) : (
            <AboutScene className="w-full" />
          )}
        </Reveal>

        <ul className="col-span-12 flex flex-wrap items-start justify-center gap-x-10 gap-y-6 xl:gap-x-16">
          {t.stats.map((stat, index) => {
            const style = statStyles[index];
            return (
              <m.li
                key={stat.label}
                className={`on-bright flex flex-col items-center justify-center p-5 text-center text-deep ${style.shape} ${style.bg} ${style.size} ${style.offset}`}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.06, rotate: index % 2 ? -3 : 3 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 180, damping: 15, delay: index * 0.08 }}
              >
                <span className={`font-display leading-none font-extrabold ${style.value}`}>{stat.value}</span>
                <span className="mt-2 text-lg leading-tight font-bold">{stat.label}</span>
              </m.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
