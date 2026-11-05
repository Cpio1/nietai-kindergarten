"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { dictionary, type Locale } from "@/content/dictionary";
import { Eyebrow, Flower, Sun, Wave } from "@/shared/illustrations/Decor";
import { MealIcon } from "@/shared/illustrations/Things";
import { Reveal } from "@/shared/MotionRoot";

const plateOffsets = ["mt-44", "mt-16", "mt-16", "mt-44"];
const plateRings = ["border-sun", "border-teal", "border-sun", "border-teal"];

/** Высота дуги совпадает с кривой Безье в SVG: солнце идёт точно по пунктиру. */
const ARC_HEIGHT = 200;
const arcY = (t: number) => (1 - t) ** 2 * ARC_HEIGHT + 2 * t * (1 - t) * -100 + t ** 2 * ARC_HEIGHT;

export function Food({ locale }: { locale: Locale }) {
  const t = dictionary[locale].food;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const sunX = useTransform(scrollYProgress, (value) => `${value * 100}%`);
  const sunY = useTransform(scrollYProgress, (value) => arcY(value));

  return (
    <section id="food" className="on-bright relative isolate overflow-hidden bg-peach pt-16 pb-40 text-deep">
      <Flower className="anim-float absolute top-24 left-[7%] h-16 w-16" color="#FFF8EC" />
      <Flower className="anim-float delay-2 absolute top-48 right-[9%] h-12 w-12" color="#F8C65C" />

      <Reveal className="mx-auto max-w-3xl px-8 text-center">
        <Eyebrow className="text-deep">{t.eyebrow}</Eyebrow>
        <h2 className="text-5xl font-extrabold xl:text-6xl">{t.title}</h2>
        <p className="mt-5 text-xl font-semibold">{t.text}</p>
      </Reveal>

      <div ref={ref} className="relative mx-auto mt-10 max-w-6xl px-8">
        <div className="relative">
          <svg
            viewBox={`0 -60 1000 ${ARC_HEIGHT + 60}`}
            preserveAspectRatio="none"
            className="absolute inset-x-0 top-[60px] w-full"
            style={{ height: ARC_HEIGHT + 60 }}
            aria-hidden="true"
          >
            <path
              d={`M0 ${ARC_HEIGHT} Q500 -100 1000 ${ARC_HEIGHT}`}
              fill="none"
              stroke="#0F2B25"
              strokeOpacity=".35"
              strokeWidth="3"
              strokeDasharray="4 14"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <m.div className="pointer-events-none absolute inset-x-0 top-[120px] z-10" style={{ x: sunX }}>
            <m.div style={{ y: sunY }} className="-mt-11 -ml-11 h-22 w-22">
              <Sun className="h-full w-full drop-shadow-md" />
            </m.div>
          </m.div>

          <ul className="relative grid grid-cols-4 gap-6 pt-12">
            {t.meals.map((meal, index) => (
              <m.li
                key={meal.id}
                className={`flex flex-col items-center text-center ${plateOffsets[index]}`}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 140, damping: 15, delay: index * 0.12 }}
              >
                <m.div
                  whileHover={{ rotate: index % 2 ? -7 : 7, scale: 1.06 }}
                  className={`flex h-52 w-52 items-center justify-center rounded-full border-[12px] bg-milk shadow-[0_24px_50px_-22px_rgba(15,43,37,0.6)] xl:h-60 xl:w-60 ${plateRings[index]}`}
                >
                  <MealIcon meal={meal.id} className="h-32 w-32 xl:h-36 xl:w-36" />
                </m.div>
                <h3 className="mt-6 text-3xl font-bold">{meal.name}</h3>
              </m.li>
            ))}
          </ul>
        </div>
      </div>

      <Wave className="absolute inset-x-0 -bottom-px h-24 text-page" variant="b" />
    </section>
  );
}
