import type { Group } from "@/content/groups";
import type { Locale } from "@/content/dictionary";
import { Critter } from "@/shared/illustrations/Critter";

const shapes = ["shape-a", "shape-b", "shape-c", "shape-d"];
const dots = ["#1EAA91", "#FF8F78", "#F8C65C"];

/** Карточка одной группы: общая для десктопной и мобильной версий. */
export function GroupCard({
  group,
  index,
  locale,
  compact = false,
}: {
  group: Group;
  index: number;
  locale: Locale;
  compact?: boolean;
}) {
  const dot = dots[index % dots.length];

  return (
    <div
      className={`relative isolate flex h-full flex-col items-center overflow-hidden rounded-[1.75rem] bg-milk text-center text-deep shadow-[0_8px_24px_-14px_rgba(15,43,37,0.55)] ${
        compact ? "px-2.5 pt-3 pb-3.5" : "px-4 pt-4 pb-5"
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute -top-7 -right-7 -z-10 h-20 w-20 rounded-full opacity-45"
        style={{ backgroundColor: group.color }}
      />
      <span aria-hidden="true" className="absolute bottom-3 left-3 -z-10 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: dot }} />
      <span aria-hidden="true" className="absolute bottom-6 left-6 -z-10 h-1.5 w-1.5 rounded-full opacity-70" style={{ backgroundColor: dot }} />

      <span
        aria-hidden="true"
        className="absolute top-2.5 left-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-teal font-display text-xs font-extrabold text-milk"
      >
        {index + 1}
      </span>

      <div
        className={`${shapes[index % shapes.length]} flex items-center justify-center ${compact ? "h-[4.25rem] w-[4.25rem] p-2" : "h-[5.25rem] w-[5.25rem] p-2.5"}`}
        style={{ backgroundColor: group.color }}
      >
        <Critter kind={group.critter} className="h-full w-full" />
      </div>

      <h3 className={`mt-2.5 font-display leading-tight font-bold ${compact ? "text-[0.95rem]" : "text-base"}`}>
        {group.name[locale]}
      </h3>
    </div>
  );
}
