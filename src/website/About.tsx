"use client";

import { m } from "framer-motion";
import { dictionary, type Locale } from "@/content/dictionary";
import { Eyebrow, Flower, Star } from "@/shared/illustrations/Decor";
import { Mascot } from "@/shared/Mascot";
import { Reveal } from "@/shared/MotionRoot";

const statStyles = [
  { shape: "shape-a", bg: "bg-teal", size: "h-40 w-40", value: "text-[3.5rem]", offset: "" },
  { shape: "shape-c", bg: "bg-sun", size: "h-36 w-36", value: "text-5xl", offset: "mt-12" },
  { shape: "shape-d", bg: "bg-peach", size: "h-40 w-40", value: "text-[1.15rem]", offset: "-mt-2" },
  { shape: "shape-b", bg: "bg-sun", size: "h-44 w-44", value: "text-[3.5rem]", offset: "mt-9" },
];

export function About({ locale }: { locale: Locale }) {
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

        {/* Вместо фото main-page2 — один большой маскот на зелёном пятне, по центру колонки. */}
        <div className="relative col-span-6 flex items-center justify-center">
          <div className="shape-b absolute inset-x-[6%] inset-y-[8%] -z-10 translate-x-4 translate-y-4 bg-teal/25" />
          <div className="shape-a absolute inset-x-[8%] inset-y-[10%] -z-10 bg-teal" />
          <Star className="anim-float absolute top-[6%] left-[4%] h-7 w-7" color="#F8C65C" />
          <Flower className="anim-float delay-2 absolute right-[2%] bottom-[10%] h-8 w-8" color="#FFB5A2" />
          <Mascot name="openArms" locale={locale} loop="sway" className="w-[min(100%,30rem)]" />
        </div>

        <ul className="col-span-12 mt-4 flex flex-wrap items-start justify-center gap-x-8 gap-y-4 xl:gap-x-12">
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
