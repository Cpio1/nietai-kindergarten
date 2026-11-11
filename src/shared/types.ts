import type { Locale } from "@/content/dictionary";

export type ImageAsset = { kind: "image"; src: string; width: number; height: number };
export type VideoAsset = { kind: "video"; src: string };
export type MediaAsset = ImageAsset | VideoAsset;

export type SiteMedia = {
  hero: ImageAsset | null;
  about: MediaAsset | null;
  gallery: ImageAsset[];
  clubs: { dance: ImageAsset | null; taekwondo: ImageAsset | null };
};

export type SiteProps = {
  locale: Locale;
  media: SiteMedia;
  documentsUrl: string | null;
};

