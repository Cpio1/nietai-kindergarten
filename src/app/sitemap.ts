import type { MetadataRoute } from "next";
import { resolveSiteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = resolveSiteUrl();
  const languages = { kk: `${base}/`, ru: `${base}/ru` };
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${base}/ru`, changeFrequency: "monthly", priority: 0.9, alternates: { languages } },
  ];
}
