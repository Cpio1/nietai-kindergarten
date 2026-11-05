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
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
