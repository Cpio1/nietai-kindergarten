"use client";

import { m } from "framer-motion";
import { dictionary, type Locale } from "@/content/dictionary";
import { groups } from "@/content/groups";
import { site } from "@/content/site";
import { GroupCard } from "@/shared/GroupCard";
import { Eyebrow, Wave } from "@/shared/illustrations/Decor";
import { PhoneIcon } from "@/shared/illustrations/Things";
import { Mascot } from "@/shared/Mascot";
import { Reveal } from "@/shared/MotionRoot";

export function MobileGroups({ locale }: { locale: Locale }) {
  const t = dictionary[locale].groups;

  return (
    <section id="groups" className="on-bright relative overflow-hidden bg-teal px-4 pt-12 pb-14 text-deep">
      <Wave className="absolute inset-x-0 -top-px h-6 text-surface" variant="b" flip />

      <div className="mx-auto max-w-xl">
        <Reveal y={18} className="text-center">
          {/* На телефоне маскот стоит рядом с заголовком, а не над карточками групп. */}
          <div className="flex items-center justify-center gap-1.5">
            <Mascot
              name="learning"
              locale={locale}
              tilt={-4}
              className="w-[6.25rem] shrink-0 min-[375px]:w-28 min-[430px]:w-32 sm:w-36"
            />
            <div className="min-w-0 text-left">
              <Eyebrow className="text-deep">{t.eyebrow}</Eyebrow>
              <h2 className="text-[1.8rem] font-extrabold sm:text-[2.6rem]">{t.title}</h2>
            </div>
          </div>
          <p className="mt-3 font-semibold">{t.text}</p>
        </Reveal>

        <ul className="mx-auto mt-5 grid max-w-[17rem] grid-cols-1 gap-2.5 min-[360px]:max-w-none min-[360px]:grid-cols-2 sm:gap-3">
          {groups.map((group, index) => (
            <m.li
              key={group.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.55, delay: (index % 2) * 0.07, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <GroupCard group={group} index={index} locale={locale} compact />
            </m.li>
          ))}
        </ul>

        <a
          href={`tel:${site.phone.tel}`}
          className="mx-auto mt-5 flex max-w-sm items-center justify-center gap-2.5 rounded-full bg-sun py-2.5 font-display text-sm font-semibold active:scale-[0.98]"
        >
          <PhoneIcon className="h-4 w-4" />
          {t.call}
        </a>
      </div>

      <Wave className="absolute inset-x-0 -bottom-px h-8 text-page" variant="c" />
    </section>
  );
}
