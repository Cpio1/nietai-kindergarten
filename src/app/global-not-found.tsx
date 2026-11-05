import type { Metadata } from "next";
import { dictionary } from "@/content/dictionary";
import { SiteDocument } from "@/shared/document";

export const metadata: Metadata = {
  title: dictionary.kk.notFound.title,
  robots: { index: false },
};

export default function GlobalNotFound() {
  const { title, back } = dictionary.kk.notFound;
  return (
    <SiteDocument locale="kk">
      <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="shape-a flex h-36 w-36 items-center justify-center bg-sun font-display text-4xl font-extrabold text-deep">404</p>
        <h1 className="text-3xl font-bold">{title}</h1>
        {/* Отдельная страница ошибки: нужна полная перезагрузка, а не клиентский переход. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="rounded-full bg-sun px-7 py-3 font-display font-semibold text-deep">{back}</a>
      </main>
    </SiteDocument>
  );
}
