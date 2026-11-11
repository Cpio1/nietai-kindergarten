import { sectionOrder } from "@/content/dictionary";
import type { SiteProps } from "@/shared/types";
import { MobileAbout } from "./MobileAbout";
import { MobileClubs } from "./MobileClubs";
import { MobileContact, MobileFooter } from "./MobileContact";
import { MobileDocuments } from "./MobileDocuments";
import { MobileFood } from "./MobileFood";
import { MobileGallery } from "./MobileGallery";
import { MobileGroups } from "./MobileGroups";
import { MobileHero } from "./MobileHero";
import { MobileNav } from "./MobileNav";

/** Мобильная версия сайта (ширина экрана меньше 1024px). */
export function MobileWebsite({ locale, media, documentsUrl }: SiteProps) {
  const hasGallery = media.gallery.length > 0;
  const sections = sectionOrder.filter((id) => id !== "gallery" || hasGallery);

  return (
    <>
      <MobileNav locale={locale} sections={sections} />
      <main>
        <MobileHero locale={locale} />
        <MobileAbout locale={locale} />
        <MobileGroups locale={locale} />
        <MobileClubs locale={locale} />
        <MobileFood locale={locale} />
        {hasGallery && <MobileGallery locale={locale} images={media.gallery} />}
        <MobileDocuments locale={locale} url={documentsUrl} />
        <MobileContact locale={locale} />
      </main>
      <MobileFooter locale={locale} />
    </>
  );
}
