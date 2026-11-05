"use client";

import { m } from "framer-motion";
import { dictionary, type Locale } from "@/content/dictionary";
import { Eyebrow, Wave } from "@/shared/illustrations/Decor";
import { MealIcon } from "@/shared/illustrations/Things";
import { Reveal } from "@/shared/MotionRoot";

const rings = ["border-sun", "border-teal", "border-sun", "border-teal"];

export function MobileFood({ locale }: { locale: Locale }) {
  const t = dictionary[locale].food;

  return (
    <section id="food" className="on-bright relative overflow-hidden bg-peach px-5 pt-8 pb-20 text-deep">
      <div className="mx-auto max-w-2xl">
        <Reveal y={18} className="text-center">
          <Eyebrow className="text-deep">{t.eyebrow}</Eyebrow>
          <h2 className="text-[2.1rem] font-extrabold sm:text-5xl">{t.title}</h2>
          <p className="mt-3 font-semibold">{t.text}</p>
        </Reveal>

        <ol className="relative mt-8 space-y-4">
          <span aria-hidden="true" className="absolute top-8 bottom-8 left-[3.25rem] border-l-4 border-dashed border-deep/25" />
          {t.meals.map((meal, index) => (
            <m.li
              key={meal.id}
              className="relative flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className={`z-10 flex h-[6.5rem] w-[6.5rem] shrink-0 items-center justify-center rounded-full border-[7px] bg-milk shadow-md ${rings[index]}`}>
                <MealIcon meal={meal.id} className="h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold">{meal.name}</h3>
            </m.li>
          ))}
        </ol>
      </div>
      <Wave className="absolute inset-x-0 -bottom-px h-10 text-page" variant="a" />
    </section>
  );
}
