import type { ReactNode } from "react";
import { buildMetadata, SiteDocument, siteViewport } from "@/shared/document";

export const metadata = buildMetadata("ru");
export const viewport = siteViewport;

export default function Layout({ children }: { children: ReactNode }) {
  return <SiteDocument locale="ru">{children}</SiteDocument>;
}
