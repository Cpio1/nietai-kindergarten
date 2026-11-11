"use client";

import { m } from "framer-motion";
import { dictionary, type Locale } from "@/content/dictionary";
import { Eyebrow, Wave } from "@/shared/illustrations/Decor";
import { Mascot } from "@/shared/Mascot";
import { Reveal } from "@/shared/MotionRoot";

const cardStyles = {
  dance: {
    card: "bg-sun rounded-[1.5rem_3.5rem_1.5rem_3.5rem]",
    blob: "shape-a bg-peach",
    mascot: "dancer",
    loop: "dance",
    from: -24,
  },
  taekwondo: {
    card: "flex-row-reverse bg-teal rounded-[3.5rem_1.5rem_3.5rem_1.5rem]",
    blob: "shape-b bg-milk/35",
    mascot: "taekwondo",
    loop: "fight",
    from: 24,
  },
} as const;

export function MobileClubs({ locale }: { locale: Locale }) {
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
            return (
              <m.li
                key={club.id}
                className={`relative flex items-center gap-3 p-4 ${style.card}`}
                initial={{ opacity: 0, x: style.from }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
              >
                {/* На телефоне маскот поменьше, по-прежнему внутри карточки; карточки чередуют сторону. */}
                <div className="relative isolate -my-3 w-28 shrink-0 min-[360px]:w-32">
                  <div className={`absolute inset-[17%] -z-10 ${style.blob}`} />
                  <Mascot name={style.mascot} locale={locale} loop={style.loop} tilt={index ? -4 : 4} />
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
