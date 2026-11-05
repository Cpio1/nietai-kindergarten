import Image from "next/image";
import { dictionary, type Locale } from "@/content/dictionary";

const logos = {
  /** Полный логотип с надписью: для мест, где надпись читается. */
  full: { src: "/images/logo.png", width: 1024, height: 1048 },
  /** Без подложки: прозрачность задана в самом PNG, для главного экрана. */
  transparent: { src: "/images/logo-transparent.png", width: 1211, height: 1238 },
  /** Только солнышко: надпись логотипа не читается в высоте шапки. */
  mark: { src: "/images/logo-mark.png", width: 512, height: 512 },
} as const;

/**
 * Размер задаётся через className, а sizes одинаков в обеих версиях сайта:
 * браузер выбирает один и тот же файл и не скачивает логотип дважды.
 */
export function SiteLogo({
  locale,
  variant = "full",
  sizes,
  eager = false,
  highPriority = false,
  className,
}: {
  locale: Locale;
  variant?: keyof typeof logos;
  sizes: string;
  eager?: boolean;
  highPriority?: boolean;
  className?: string;
}) {
  const logo = logos[variant];
  return (
    <Image
      src={logo.src}
      alt={dictionary[locale].brand.logoAlt}
      width={logo.width}
      height={logo.height}
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={highPriority ? "high" : undefined}
      className={`h-auto shrink-0 ${className ?? ""}`}
    />
  );
}

export const LOGO_SIZES = { nav: "40px", hero: "(min-width: 1024px) 288px, 208px", footer: "72px" } as const;
