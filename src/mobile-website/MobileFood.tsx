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
    <section id="food" className="on-bright relative overflow-hidden bg-peach px-4 pt-6 pb-14 text-deep">
      <div className="mx-auto max-w-xl">
        <Reveal y={18} className="text-center">
          <Eyebrow className="text-deep">{t.eyebrow}</Eyebrow>
          <h2 className="text-[1.8rem] font-extrabold sm:text-[2.6rem]">{t.title}</h2>
          <p className="mt-3 font-semibold">{t.text}</p>
        </Reveal>

        <ol className="relative mx-auto mt-5 max-w-xs space-y-3">
          <span aria-hidden="true" className="absolute top-7 bottom-7 left-[2.6rem] border-l-4 border-dashed border-deep/25" />
          {t.meals.map((meal, index) => (
            <m.li
              key={meal.id}
              className="relative flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className={`z-10 flex h-[5.5rem] w-[5.5rem] shrink-0 items-center justify-center rounded-full border-[6px] bg-milk shadow-md ${rings[index]}`}>
                <MealIcon meal={meal.id} className="h-[3.4rem] w-[3.4rem]" />
              </div>
              <h3 className="text-xl font-bold">{meal.name}</h3>
            </m.li>
          ))}
        </ol>
      </div>
      <Wave className="absolute inset-x-0 -bottom-px h-8 text-page" variant="a" />
    </section>
  );
}
