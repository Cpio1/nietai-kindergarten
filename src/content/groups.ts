import type { CritterKind } from "@/shared/illustrations/Critter";
import type { Locale } from "./dictionary";

export type Group = {
  id: string;
  name: Record<Locale, string>;
  /** Зверёнок на карточке только украшение. */
  critter: CritterKind;
  /** Цвет пятна за зверёнком из палитры сайта. */
  color: string;
};

const group = (id: string, title: string, critter: CritterKind, color: string): Group => ({
  id,
  name: { kk: `«${title}» тобы`, ru: `Группа «${title}»` },
  critter,
  color,
});

export const groups: Group[] = [
  group("kenzhetai", "Кенжетай", "chick", "#F8C65C"),
  group("baldai", "Балдай", "bear", "#FFB5A2"),
  group("erketai", "Еркетай", "bunny", "#7BD8A0"),
  group("alaqai", "Алақай", "frog", "#F8C65C"),
  group("tattimai", "Тәттімай", "cat", "#FFB5A2"),
  group("quralai", "Құралай", "fawn", "#7BD8A0"),
  group("shyrai", "Шырай", "fox", "#F8C65C"),
  group("kunimai", "Күнімай", "elephant", "#FFB5A2"),
];
