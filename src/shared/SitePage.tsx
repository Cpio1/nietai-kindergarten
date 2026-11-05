import { dictionary, type Locale } from "@/content/dictionary";
import { resolveDocumentsUrl, resolveSiteUrl, site } from "@/content/site";
import { MobileWebsite } from "@/mobile-website/MobileWebsite";
import { Website } from "@/website/Website";
import { loadSiteMedia } from "./lib-media";
import { MotionRoot } from "./MotionRoot";
import type { SiteProps } from "./types";
import { ViewportSwitch } from "./ViewportSwitch";

export async function SitePage({ locale }: { locale: Locale }) {
  const props: SiteProps = {
    locale,
    media: await loadSiteMedia(),
    documentsUrl: resolveDocumentsUrl(),
  };
  const t = dictionary[locale];
  const siteUrl = resolveSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Preschool",
    name: t.brand.name,
    url: locale === "kk" ? `${siteUrl}/` : `${siteUrl}/${locale}`,
    telephone: site.phone.tel,
    description: t.meta.description,
    inLanguage: locale,
    address: {
      "@type": "PostalAddress",
      streetAddress: locale === "kk" ? "Нұрлы жол көшесі, 5А" : "улица Нурлы Жол, 5А",
      addressLocality: locale === "kk" ? "Байсерке ауылы" : "село Байсерке",
      addressRegion: locale === "kk" ? "Алматы облысы, Іле ауданы" : "Алматинская область, Илийский район",
      addressCountry: "KZ",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lon },
    ...(props.media.hero ? { image: `${siteUrl}${props.media.hero.src}` } : {}),
  };

  return (
    <MotionRoot>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ViewportSwitch desktop={<Website {...props} />} mobile={<MobileWebsite {...props} />} />
    </MotionRoot>
  );
}
