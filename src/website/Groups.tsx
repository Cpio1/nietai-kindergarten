"use client";

import { m } from "framer-motion";
import { dictionary, type Locale } from "@/content/dictionary";
import { groups } from "@/content/groups";
import { site } from "@/content/site";
import { Cloud, Eyebrow, Wave } from "@/shared/illustrations/Decor";
import { PhoneIcon } from "@/shared/illustrations/Things";
import { GroupCard } from "@/shared/GroupCard";
import { Reveal } from "@/shared/MotionRoot";

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

      <ul className="relative z-10 mx-auto mt-8 grid max-w-[54rem] grid-cols-4 gap-3 px-6 xl:gap-4">
        {groups.map((group, index) => (
          <m.li
            key={group.id}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: (index % 4) * 0.08 + Math.floor(index / 4) * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <m.div
              className="h-full"
              whileHover={{ y: -6, rotate: index % 2 ? 1.5 : -1.5 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
            >
              <GroupCard group={group} index={index} locale={locale} />
            </m.div>
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
