"use client";

import Image from "next/image";
import { useState } from "react";
import { dictionary, type Locale } from "@/content/dictionary";
import { Eyebrow } from "@/shared/illustrations/Decor";
import { Lightbox } from "@/shared/Lightbox";
import { Reveal } from "@/shared/MotionRoot";
import type { ImageAsset } from "@/shared/types";

const PAGE = 8;
const shapes = ["rounded-[1.5rem_3rem_1.5rem_1.5rem]", "rounded-[1.5rem]", "rounded-[1.5rem_1.5rem_3rem_1.5rem]", "rounded-[3rem_1.5rem_1.5rem_1.5rem]"];
const tints = ["bg-teal", "bg-sun", "bg-peach"];

export function MobileGallery({ locale, images }: { locale: Locale; images: ImageAsset[] }) {
  const t = dictionary[locale].gallery;
  const [visible, setVisible] = useState(PAGE);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <Reveal y={18} className="text-center">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-[2.1rem] font-extrabold sm:text-5xl">{t.title}</h2>
        </Reveal>

        <div className="mt-7 columns-2 gap-3">
          {images.slice(0, visible).map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={t.open(index + 1)}
              className={`mb-3 block w-full break-inside-avoid overflow-hidden active:opacity-80 ${shapes[index % shapes.length]} ${tints[index % tints.length]}`}
            >
              <Image
                src={image.src}
                alt={t.photoAlt(index + 1)}
                width={image.width}
                height={image.height}
                sizes="(min-width: 672px) 320px, 46vw"
                className="h-auto w-full"
              />
            </button>
          ))}
        </div>

        {visible < images.length && (
          <button
            type="button"
            onClick={() => setVisible((count) => count + PAGE)}
            className="mt-3 w-full rounded-full bg-sun py-3.5 font-display font-semibold text-deep"
          >
            {t.more}
          </button>
        )}
      </div>
      <Lightbox images={images} index={openIndex} locale={locale} onChange={setOpenIndex} />
    </section>
  );
}
