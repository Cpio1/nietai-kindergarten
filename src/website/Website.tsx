import { sectionOrder } from "@/content/dictionary";
import type { SiteProps } from "@/shared/types";
import { About } from "./About";
import { Clubs } from "./Clubs";
import { Contact, Footer } from "./Contact";
import { Documents } from "./Documents";
import { Food } from "./Food";
import { Gallery } from "./Gallery";
import { Groups } from "./Groups";
import { Hero } from "./Hero";
import { Nav } from "./Nav";

/** Компьютерная версия сайта (ширина экрана от 1024px). */
export function Website({ locale, media, documentsUrl }: SiteProps) {
  const hasGallery = media.gallery.length > 0;
  const sections = sectionOrder.filter((id) => id !== "gallery" || hasGallery);

  return (
    <>
      <Nav locale={locale} sections={sections} />
      <main>
        <Hero locale={locale} />
        <About locale={locale} />
        <Groups locale={locale} />
        <Clubs locale={locale} />
        <Food locale={locale} />
        {hasGallery && <Gallery locale={locale} images={media.gallery} />}
        <Documents locale={locale} url={documentsUrl} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
