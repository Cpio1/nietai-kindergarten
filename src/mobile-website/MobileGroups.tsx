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
    <section id="groups" className="on-bright relative overflow-hidden bg-teal px-4 pt-12 pb-14 text-deep">
      <Wave className="absolute inset-x-0 -top-px h-6 text-surface" variant="b" flip />

      <div className="mx-auto max-w-xl">
        <Reveal y={18} className="text-center">
          <Eyebrow className="text-deep">{t.eyebrow}</Eyebrow>
          <h2 className="text-[1.8rem] font-extrabold sm:text-[2.6rem]">{t.title}</h2>
          <p className="mt-3 font-semibold">{t.text}</p>
        </Reveal>

        <Reveal y={20} className="relative mx-auto mt-4 aspect-square w-full max-w-[18rem]">
          <div className="absolute inset-[11%] rounded-full border-4 border-dashed border-deep/25" />
          <div className="shape-a absolute inset-[29%] flex flex-col items-center justify-center bg-sun">
            <span className="font-display text-[2.6rem] leading-none font-extrabold">{t.count}</span>
            <span className="font-display text-sm font-bold">{t.countLabel}</span>
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
          <ul className="mt-5 grid grid-cols-2 gap-2.5">
            {named.map((group) => (
              <li key={group.critter} className="rounded-2xl bg-milk p-2.5 text-center">
                <p className="font-display text-sm font-bold">{group.name?.[locale]}</p>
                {group.ages && <p className="text-xs font-semibold">{group.ages[locale]}</p>}
              </li>
            ))}
          </ul>
        )}

        <a
          href={`tel:${site.phone.tel}`}
          className="mx-auto mt-5 flex max-w-sm items-center justify-center gap-2.5 rounded-full bg-sun py-2.5 font-display text-sm font-semibold active:scale-[0.98]"
        >
          <PhoneIcon className="h-4 w-4" />
          {t.call}
        </a>
      </div>

      <Wave className="absolute inset-x-0 -bottom-px h-8 text-peach" variant="c" />
    </section>
  );
}
