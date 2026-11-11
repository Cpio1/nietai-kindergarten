"use client";

import Image from "next/image";
import { m } from "framer-motion";
import type { Locale } from "@/content/dictionary";

/** Все PNG — 1254×1254 с прозрачным фоном; размер на странице задаётся через className. */
const MASCOT_FILE_SIZE = 1254;

const mascots = {
  welcome: {
    src: "/images/mascots/mascot-welcome.png",
    alt: {
      kk: "«Ниет-ай» маскоты — қол бұлғап амандасып тұрған күн",
      ru: "Маскот «Ниет-ай» — солнышко машет рукой и приветствует гостей",
    },
  },
  openArms: {
    src: "/images/mascots/mascot-open-arms.png",
    alt: {
      kk: "Құшағын жайып қарсы алған «Ниет-ай» маскоты",
      ru: "Маскот «Ниет-ай» встречает с раскрытыми руками",
    },
  },
  learning: {
    src: "/images/mascots/mascot-learning.png",
    alt: {
      kk: "Қарындаш пен рюкзак ұстаған «Ниет-ай» маскоты",
      ru: "Маскот «Ниет-ай» с карандашом и рюкзаком",
    },
  },
  dancing: {
    src: "/images/mascots/mascot-dancing.png",
    alt: {
      kk: "Билеп жүрген «Ниет-ай» маскоты",
      ru: "Танцующий маскот «Ниет-ай»",
    },
  },
} satisfies Record<string, { src: string; alt: Record<Locale, string> }>;

/**
 * Одна строка sizes на маскот для обеих версий сайта: браузер выбирает один и тот же файл
 * и не скачивает картинку дважды, пока на странице лежат оба дерева.
 */
export const MASCOT_SIZES = {
  welcome: "(min-width: 1024px) 416px, 224px",
  openArms: "(min-width: 1024px) 480px, 288px",
  learning: "(min-width: 1024px) 200px, 140px",
  dancing: "(min-width: 1024px) 176px, 128px",
} as const satisfies Record<keyof typeof mascots, string>;

const loops = {
  none: "",
  float: "anim-mascot-float",
  sway: "anim-mascot-sway",
  dance: "anim-mascot-dance",
} as const;

export type MascotName = keyof typeof mascots;

/**
 * Внешний слой (Framer Motion) отвечает за появление и наклон при наведении,
 * внутренний (CSS) — за бесконечное парение или танец. Разные слои не спорят за transform.
 */
export function Mascot({
  name,
  locale,
  className,
  loop = "float",
  reveal = true,
  eager = false,
  highPriority = false,
  tilt = 4,
}: {
  name: MascotName;
  locale: Locale;
  className?: string;
  loop?: keyof typeof loops;
  reveal?: boolean;
  eager?: boolean;
  /** Для маскота первого экрана: он самое крупное изображение (LCP). */
  highPriority?: boolean;
  tilt?: number;
}) {
  const mascot = mascots[name];
  return (
    <m.div
      className={`pointer-events-auto select-none ${className ?? ""}`}
      initial={reveal ? { opacity: 0, y: 26, scale: 0.92 } : false}
      whileInView={reveal ? { opacity: 1, y: 0, scale: 1 } : undefined}
      whileHover={{ rotate: tilt, scale: 1.03 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ type: "spring", stiffness: 140, damping: 16 }}
    >
      <div className={loops[loop]}>
        <Image
          src={mascot.src}
          alt={mascot.alt[locale]}
          width={MASCOT_FILE_SIZE}
          height={MASCOT_FILE_SIZE}
          sizes={MASCOT_SIZES[name]}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={highPriority ? "high" : undefined}
          draggable={false}
          className="block h-auto w-full object-contain"
        />
      </div>
    </m.div>
  );
}
