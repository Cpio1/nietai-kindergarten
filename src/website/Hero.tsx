"use client";

import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { dictionary, type Locale } from "@/content/dictionary";
import { site } from "@/content/site";
import { Cloud, Flower, Squiggle, Star, Sun, Wave } from "@/shared/illustrations/Decor";
import { HeroScene } from "@/shared/illustrations/HeroScene";
import { ArrowIcon, PhoneIcon } from "@/shared/illustrations/Things";
import { HERO_IMAGE_SIZES, type ImageAsset } from "@/shared/types";

export function Hero({ locale, image }: { locale: Locale; image: ImageAsset | null }) {
  const t = dictionary[locale].hero;
  const { scrollY } = useScroll();
  const slow = useTransform(scrollY, [0, 800], [0, 90]);

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-28">
      {/* Пятна не заходят под текст: в тёмной теме светлые буквы на них не читались бы. */}
      <m.div style={{ y: slow }} className="shape-a absolute -top-[12vw] -right-[10vw] -z-10 h-[46vw] w-[46vw] bg-sun" />
      <div className="shape-b absolute -bottom-40 -left-32 -z-10 h-72 w-72 bg-peach" />
      <Cloud className="anim-drift absolute top-32 left-[34%] -z-10 w-28 opacity-90 dark:opacity-30" />
      <Star className="anim-float absolute top-[14%] left-[47%] h-9 w-9" color="#1EAA91" />
      <Flower className="anim-float delay-2 absolute bottom-28 left-[54%] h-12 w-12" color="#FFB5A2" />

      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-12 items-center gap-6 px-8 pb-24">
        <div className="col-span-7">
          <h1 className="anim-rise text-[clamp(2.9rem,5.1vw,5.1rem)] font-extrabold">{t.title}</h1>
          <Squiggle className="anim-rise delay-1 mt-6 w-36" />
          <p className="anim-rise delay-1 mt-6 max-w-xl text-xl leading-relaxed font-semibold text-muted xl:text-2xl">
            {t.subtitle}
          </p>
          <div className="anim-rise delay-2 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="group inline-flex items-center gap-3 rounded-full bg-teal px-8 py-4 font-display text-lg font-semibold text-deep shadow-[0_18px_40px_-18px_rgba(30,170,145,0.9)] transition-transform duration-300 hover:-translate-y-1"
            >
              {t.cta}
              <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${site.phone.tel}`}
              className="inline-flex items-center gap-3 rounded-full border-2 border-ink/25 px-6 py-3.5 font-display font-semibold transition-colors hover:border-teal hover:bg-teal hover:text-deep"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phone.display}
            </a>
          </div>
        </div>

        <div className="anim-pop delay-1 relative col-span-5">
          {image ? (
            <div className="relative">
              <Sun className="absolute -top-14 -left-10 z-10 h-28 w-28" />
              <div className="shape-a overflow-hidden border-[10px] border-surface shadow-2xl">
                <Image
                  src={image.src}
                  alt={t.imageAlt}
                  width={image.width}
                  height={image.height}
                  sizes={HERO_IMAGE_SIZES}
                  loading="eager"
                  fetchPriority="high"
                  className="aspect-square h-auto w-full object-cover"
                />
              </div>
            </div>
          ) : (
            <HeroScene className="w-full drop-shadow-xl" />
          )}
        </div>
      </div>

      <Wave className="absolute inset-x-0 -bottom-px z-0 h-20 text-surface" variant="a" />
    </section>
  );
}
