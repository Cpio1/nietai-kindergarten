import type { ReactNode } from "react";
import { buildMetadata, SiteDocument, siteViewport } from "@/shared/document";

export const metadata = buildMetadata("kk");
export const viewport = siteViewport;

export default function Layout({ children }: { children: ReactNode }) {
  return <SiteDocument locale="kk">{children}</SiteDocument>;
}
