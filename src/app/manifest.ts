import type { MetadataRoute } from "next";
import { dictionary } from "@/content/dictionary";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: dictionary.kk.brand.name,
    short_name: dictionary.kk.brand.short,
    description: dictionary.kk.meta.description,
    lang: "kk",
    start_url: "/",
    display: "browser",
    background_color: "#FFF8EC",
    theme_color: "#1EAA91",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
