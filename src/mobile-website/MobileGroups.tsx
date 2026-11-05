"use client";

import { dictionary, type Locale } from "@/content/dictionary";
import { groups } from "@/content/groups";
import { site } from "@/content/site";
import { Critter } from "@/shared/illustrations/Critter";
import { Eyebrow, Wave } from "@/shared/illustrations/Decor";
import { PhoneIcon } from "@/shared/illustrations/Things";
import { Reveal } from "@/shared/MotionRoot";

const RING_RADIUS = 39;

/** Округление нужно, чтобы значения на сервере и в браузере совпадали при гидратации. */
function ringPosition(index: number, total: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    left: `${(50 + RING_RADIUS * Math.cos(angle)).toFixed(3)}%`,
    top: `${(50 + RING_RADIUS * Math.sin(angle)).toFixed(3)}%`,
  };
}

export function MobileGroups({ locale }: { locale: Locale }) {
  const t = dictionary[locale].groups;
  const named = groups.filter((group) => group.name);

  return (
    <section id="groups" className="on-bright relative overflow-hidden bg-teal px-5 pt-16 pb-20 text-deep">
      <Wave className="absolute inset-x-0 -top-px h-8 text-surface" variant="b" flip />

      <div className="mx-auto max-w-2xl">
        <Reveal y={18} className="text-center">
          <Eyebrow className="text-deep">{t.eyebrow}</Eyebrow>
          <h2 className="text-[2.1rem] font-extrabold sm:text-5xl">{t.title}</h2>
          <p className="mt-4 font-semibold">{t.text}</p>
        </Reveal>

        <Reveal y={20} className="relative mx-auto mt-6 aspect-square w-full max-w-[22rem]">
          <div className="absolute inset-[11%] rounded-full border-4 border-dashed border-deep/25" />
          <div className="shape-a absolute inset-[29%] flex flex-col items-center justify-center bg-sun">
            <span className="font-display text-5xl leading-none font-extrabold">{t.count}</span>
            <span className="font-display font-bold">{t.countLabel}</span>
          </div>
          <ul className="anim-orbit absolute inset-0">
            {groups.map((group, index) => (
              <li
                key={group.critter}
                className="absolute h-[21%] w-[21%] -translate-x-1/2 -translate-y-1/2"
                style={ringPosition(index, groups.length)}
              >
                <div className="anim-orbit-counter flex h-full w-full items-center justify-center rounded-full bg-milk p-1.5 shadow-md">
                  <Critter kind={group.critter} className="h-full w-full" />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {named.length > 0 && (
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {named.map((group) => (
              <li key={group.critter} className="rounded-3xl bg-milk p-3 text-center">
                <p className="font-display font-bold">{group.name?.[locale]}</p>
                {group.ages && <p className="text-sm font-semibold">{group.ages[locale]}</p>}
              </li>
            ))}
          </ul>
        )}

        <a
          href={`tel:${site.phone.tel}`}
          className="mt-6 flex items-center justify-center gap-3 rounded-full bg-sun py-3.5 font-display font-semibold active:scale-[0.98]"
        >
          <PhoneIcon className="h-5 w-5" />
          {t.call}
        </a>
      </div>

      <Wave className="absolute inset-x-0 -bottom-px h-10 text-peach" variant="c" />
    </section>
  );
}
