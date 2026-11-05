"use client";

import { m } from "framer-motion";
import { dictionary, type Locale } from "@/content/dictionary";
import { groups } from "@/content/groups";
import { site } from "@/content/site";
import { Cloud, Eyebrow, Wave } from "@/shared/illustrations/Decor";
import { Balloon, PhoneIcon } from "@/shared/illustrations/Things";
import { Reveal } from "@/shared/MotionRoot";

const offsets = ["mt-16", "mt-3", "mt-20", "mt-0", "mt-[4.5rem]", "mt-5", "mt-14"];

export function Groups({ locale }: { locale: Locale }) {
  const t = dictionary[locale].groups;

  return (
    <section id="groups" className="on-bright relative isolate overflow-hidden bg-teal pt-24 pb-36 text-deep">
      <Wave className="absolute inset-x-0 -top-px h-14 text-surface" variant="b" flip />
      <Cloud className="anim-drift absolute top-28 left-[4%] -z-10 w-28 opacity-70" />
      <Cloud className="anim-drift absolute top-44 right-[3%] -z-10 w-36 opacity-60" style={{ animationDelay: "-6s" }} />

      <Reveal className="relative mx-auto max-w-2xl px-6 text-center">
        <Eyebrow className="text-deep">{t.eyebrow}</Eyebrow>
        <h2 className="text-[2.5rem] font-extrabold xl:text-5xl">{t.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base font-semibold">{t.text}</p>
        <a
          href={`tel:${site.phone.tel}`}
          className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-sun px-5 py-2.5 font-display text-sm font-semibold transition-transform duration-300 hover:-translate-y-1"
        >
          <PhoneIcon className="h-4 w-4" />
          {t.call}
        </a>
      </Reveal>

      <ul className="relative z-10 mx-auto mt-8 grid max-w-[59rem] grid-cols-7 gap-3 px-6 xl:gap-4">
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
              <div className="mt-2 text-center">
                <p className="font-display text-sm font-bold">{group.name[locale]}</p>
                {group.ages && <p className="text-xs font-semibold">{group.ages[locale]}</p>}
              </div>
            )}
          </m.li>
        ))}
      </ul>

      <div className="absolute inset-x-0 -bottom-px z-0">
        <Wave className="-mb-10 h-28 text-[#7BD8A0]" variant="c" />
        <Wave className="relative h-16 text-page" variant="a" />
      </div>
    </section>
  );
}
