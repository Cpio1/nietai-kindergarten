/** Проверенные факты о детском саде. Режим работы и Instagram не указаны намеренно. */
export const site = {
  phone: {
    display: "+7 (72752) 7-40-94",
    tel: "+77275274094",
  },
  geo: { lat: 43.490512, lon: 77.031653 },
  twoGisFirmId: "70000001090847863",
  groupCount: 7,
} as const;

const twoGisOptions = {
  pos: { lat: site.geo.lat, lon: site.geo.lon, zoom: 17 },
  opt: { city: "almaty" },
  org: site.twoGisFirmId,
};

export const twoGisWidgetUrl = `https://widgets.2gis.com/widget?type=firmsonmap&options=${encodeURIComponent(
  JSON.stringify(twoGisOptions),
)}`;

export const twoGisFirmUrl = `https://2gis.kz/almaty/firm/${site.twoGisFirmId}`;

/** Возвращает ссылку только если это настоящий адрес Google Drive или Docs. */
export function resolveDocumentsUrl(raw = process.env.NEXT_PUBLIC_DOCUMENTS_URL): string | null {
  if (!raw) return null;
  try {
    const url = new URL(raw.trim());
    const allowed = url.hostname === "drive.google.com" || url.hostname === "docs.google.com";
    return url.protocol === "https:" && allowed ? url.toString() : null;
  } catch {
    return null;
  }
}

export function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
