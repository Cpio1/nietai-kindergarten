"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { useState } from "react";
import { dictionary, type Locale } from "@/content/dictionary";
import { Eyebrow, Squiggle, Star } from "@/shared/illustrations/Decor";
import { Lightbox } from "@/shared/Lightbox";
import { Reveal } from "@/shared/MotionRoot";
import type { ImageAsset } from "@/shared/types";

const PAGE = 12;
const shapes = [
  "rounded-[2rem_5rem_2rem_5rem]",
  "rounded-[5rem_2rem_5rem_2rem]",
  "rounded-[3rem]",
  "rounded-[6rem_2.5rem_2.5rem_2.5rem]",
  "rounded-[2.5rem_2.5rem_6rem_2.5rem]",
];
const tints = ["bg-teal", "bg-sun", "bg-peach"];

export function Gallery({ locale, images }: { locale: Locale; images: ImageAsset[] }) {
  const t = dictionary[locale].gallery;
  const [visible, setVisible] = useState(PAGE);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative isolate overflow-hidden py-24">
      <Star className="anim-float absolute top-24 left-[12%] h-10 w-10" color="#1EAA91" />
      <Squiggle className="absolute top-32 right-[9%] w-32" color="#FFB5A2" />

      <Reveal className="mx-auto max-w-3xl px-8 text-center">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="text-5xl font-extrabold xl:text-6xl">{t.title}</h2>
      </Reveal>

      <div className="mx-auto mt-14 max-w-7xl columns-3 gap-6 px-8">
        {images.slice(0, visible).map((image, index) => (
          <m.button
            key={image.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={t.open(index + 1)}
            className={`group relative mb-6 block w-full cursor-zoom-in break-inside-avoid overflow-hidden ${shapes[index % shapes.length]} ${tints[index % tints.length]}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={image.src}
              alt={t.photoAlt(index + 1)}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1280px) 400px, 32vw"
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </m.button>
        ))}
      </div>

      {visible < images.length && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setVisible((count) => count + PAGE)}
            className="cursor-pointer rounded-full bg-sun px-8 py-3.5 font-display font-semibold text-deep transition-transform hover:-translate-y-1"
          >
            {t.more}
          </button>
        </div>
      )}

      <Lightbox images={images} index={openIndex} locale={locale} onChange={setOpenIndex} />
    </section>
  );
}
