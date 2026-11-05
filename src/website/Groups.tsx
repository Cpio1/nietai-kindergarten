"use client";

import { m } from "framer-motion";
import { dictionary, type Locale } from "@/content/dictionary";
import { groups } from "@/content/groups";
import { site } from "@/content/site";
import { Cloud, Eyebrow, Wave } from "@/shared/illustrations/Decor";
import { Balloon, PhoneIcon } from "@/shared/illustrations/Things";
import { Reveal } from "@/shared/MotionRoot";

const offsets = ["mt-24", "mt-4", "mt-32", "mt-0", "mt-28", "mt-8", "mt-20"];

export function Groups({ locale }: { locale: Locale }) {
  const t = dictionary[locale].groups;

  return (
    <section id="groups" className="on-bright relative isolate overflow-hidden bg-teal pt-36 pb-52 text-deep">
      <Wave className="absolute inset-x-0 -top-px h-20 text-surface" variant="b" flip />
      <Cloud className="anim-drift absolute top-40 left-[4%] -z-10 w-40 opacity-70" />
      <Cloud className="anim-drift absolute top-64 right-[3%] -z-10 w-52 opacity-60" style={{ animationDelay: "-6s" }} />

      <Reveal className="relative mx-auto max-w-3xl px-8 text-center">
        <Eyebrow className="text-deep">{t.eyebrow}</Eyebrow>
        <h2 className="text-5xl font-extrabold xl:text-6xl">{t.title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl font-semibold">{t.text}</p>
        <a
          href={`tel:${site.phone.tel}`}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-sun px-7 py-3.5 font-display font-semibold transition-transform duration-300 hover:-translate-y-1"
        >
          <PhoneIcon className="h-5 w-5" />
          {t.call}
        </a>
      </Reveal>

      <ul className="relative z-10 mx-auto mt-14 grid max-w-7xl grid-cols-7 gap-3 px-8 xl:gap-6">
        {groups.map((group, index) => (
          <m.li
            key={group.critter}
            className={offsets[index]}
            initial={{ opacity: 0, y: 140 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: index * 0.09, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <m.div whileHover={{ scale: 1.08 }} transition={{ type: "spring", stiffness: 220, damping: 14 }}>
              <div className="anim-sway" style={{ animationDelay: `${index * -1.1}s`, animationDuration: `${7 + (index % 3)}s` }}>
                <Balloon critter={group.critter} stripe={group.color} number={index + 1} className="w-full" />
              </div>
            </m.div>
            {group.name && (
              <div className="mt-3 text-center">
                <p className="font-display font-bold">{group.name[locale]}</p>
                {group.ages && <p className="text-sm font-semibold">{group.ages[locale]}</p>}
              </div>
            )}
          </m.li>
        ))}
      </ul>

      <div className="absolute inset-x-0 -bottom-px z-0">
        <Wave className="-mb-16 h-40 text-[#7BD8A0]" variant="c" />
        <Wave className="relative h-24 text-peach" variant="a" />
      </div>
    </section>
  );
}
