"use client";

import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { dictionary, type Locale } from "@/content/dictionary";
import { site } from "@/content/site";
import { Cloud, Flower, Squiggle, Star, Wave } from "@/shared/illustrations/Decor";
import { ArrowIcon, PhoneIcon } from "@/shared/illustrations/Things";
import { SiteLogo } from "@/shared/SiteLogo";
import { HERO_IMAGE_SIZES, type ImageAsset } from "@/shared/types";

export function Hero({ locale, image }: { locale: Locale; image: ImageAsset | null }) {
  const t = dictionary[locale].hero;
  const { scrollY } = useScroll();
  const slow = useTransform(scrollY, [0, 800], [0, 90]);

  return (
    <section id="home" className="relative isolate flex min-h-[85svh] flex-col overflow-hidden pt-20">
      {/* Пятна не заходят под текст: в тёмной теме светлые буквы на них не читались бы. */}
      <m.div style={{ y: slow }} className="shape-a absolute -top-[10vw] -right-[8vw] -z-10 h-[35vw] w-[35vw] bg-sun" />
      <div className="shape-b absolute -bottom-32 -left-24 -z-10 h-56 w-56 bg-peach" />
      <Cloud className="anim-drift absolute top-24 left-[34%] -z-10 w-20 opacity-90 dark:opacity-30" />
      <Star className="anim-float absolute top-[14%] left-[47%] h-7 w-7" color="#1EAA91" />
      <Flower className="anim-float delay-2 absolute bottom-20 left-[54%] h-9 w-9" color="#FFB5A2" />

      <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-12 items-center gap-6 px-6 pb-16">
        <div className="col-span-7">
          <h1 className="anim-rise text-[clamp(2.35rem,4.1vw,4.1rem)] font-extrabold">{t.title}</h1>
          <Squiggle className="anim-rise delay-1 mt-4 w-28" />
          <p className="anim-rise delay-1 mt-4 max-w-lg text-base leading-relaxed font-semibold text-muted xl:text-xl">
            {t.subtitle}
          </p>
          <div className="anim-rise delay-2 mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#about"
              className="group inline-flex items-center gap-2.5 rounded-full bg-teal px-6 py-3 font-display text-[0.95rem] font-semibold text-deep shadow-[0_18px_40px_-18px_rgba(30,170,145,0.9)] transition-transform duration-300 hover:-translate-y-1"
            >
              {t.cta}
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${site.phone.tel}`}
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-ink/25 px-5 py-2.5 font-display text-sm font-semibold transition-colors hover:border-teal hover:bg-teal hover:text-deep"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phone.display}
            </a>
          </div>
        </div>

        <div className="anim-pop delay-1 relative col-span-5 mx-auto w-full max-w-[25rem]">
          {image ? (
            <div className="relative">
              <div className="shape-a overflow-hidden border-8 border-surface shadow-2xl">
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
            <div className="shape-logo flex aspect-square items-center justify-center bg-white p-[9%] shadow-2xl">
              <SiteLogo
                locale={locale}
                sizes={HERO_IMAGE_SIZES}
                eager
                highPriority
                className="w-full object-contain"
              />
            </div>
          )}
        </div>
      </div>

      <Wave className="absolute inset-x-0 -bottom-px z-0 h-14 text-surface" variant="a" />
    </section>
  );
}
