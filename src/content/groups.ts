import type { CritterKind } from "@/shared/illustrations/Critter";
import type { Locale } from "./dictionary";

export type Group = {
  critter: CritterKind;
  color: string;
  /** Заполните, когда появятся настоящие названия и возраст групп: они сразу отобразятся на сайте. */
  name?: Record<Locale, string>;
  ages?: Record<Locale, string>;
};

/** Зверята здесь только украшение и не являются названиями групп. */
export const groups: Group[] = [
  { critter: "bear", color: "#F8C65C" },
  { critter: "bunny", color: "#FFB5A2" },
  { critter: "chick", color: "#FFF8EC" },
  { critter: "cat", color: "#F8C65C" },
  { critter: "frog", color: "#FFB5A2" },
  { critter: "fox", color: "#FFF8EC" },
  { critter: "elephant", color: "#F8C65C" },
];
