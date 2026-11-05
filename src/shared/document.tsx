import type { Metadata, Viewport } from "next";
import { Nunito, Rubik } from "next/font/google";
import type { ReactNode } from "react";
import { dictionary, localePath, type Locale } from "@/content/dictionary";
import { resolveSiteUrl } from "@/content/site";
import { themeInitScript } from "./theme-script";
import "@/app/globals.css";

// Буквы Ә, Ғ, Қ, Ң, Ө, Ұ, Ү, Һ находятся в наборе cyrillic-ext, поэтому он обязателен.
const rubik = Rubik({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-rubik",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const siteViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF8EC" },
    { media: "(prefers-color-scheme: dark)", color: "#12302A" },
  ],
};

export function buildMetadata(locale: Locale): Metadata {
  const t = dictionary[locale];
  return {
    metadataBase: new URL(resolveSiteUrl()),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: t.brand.name,
    alternates: {
      canonical: localePath[locale],
      languages: { kk: localePath.kk, ru: localePath.ru, "x-default": localePath.kk },
    },
    openGraph: {
      type: "website",
      siteName: t.brand.name,
      title: t.meta.title,
      description: t.meta.description,
      url: localePath[locale],
      locale: locale === "kk" ? "kk_KZ" : "ru_RU",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: t.brand.name }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export function SiteDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={`${rubik.variable} ${nunito.variable}`} suppressHydrationWarning>
      {/* В корневом layout App Router тег <head> допустим: правило линтера относится к pages/_document. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
