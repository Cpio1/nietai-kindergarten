import Image from "next/image";
import { dictionary, type Locale } from "@/content/dictionary";
import { site } from "@/content/site";
import { Flower, Star, Wave } from "@/shared/illustrations/Decor";
import { ArrowIcon, PhoneIcon } from "@/shared/illustrations/Things";
import { SiteLogo } from "@/shared/SiteLogo";
import { HERO_IMAGE_SIZES, type ImageAsset } from "@/shared/types";

export function MobileHero({ locale, image }: { locale: Locale; image: ImageAsset | null }) {
  const t = dictionary[locale].hero;

  return (
    <section id="home" className="relative isolate overflow-hidden pt-[4.25rem] pb-14">
      <div className="shape-a absolute -top-20 -right-20 -z-10 h-44 w-44 bg-sun" />
      <Star className="anim-float absolute top-16 right-4 h-5 w-5" color="#FFF8EC" />

      <div className="mx-auto max-w-xl px-4">
        <h1 className="anim-rise text-[clamp(1.75rem,8.7vw,3rem)] font-extrabold">{t.title}</h1>
        <p className="anim-rise delay-1 mt-3 text-[0.95rem] leading-snug font-semibold text-muted sm:text-[1.05rem]">{t.subtitle}</p>

        <div className="anim-pop delay-1 relative mx-auto mt-4 max-w-[17.75rem]">
          <div className="shape-b absolute top-1/3 -left-14 -z-10 h-32 w-32 bg-peach" />
          {image ? (
            <div className="shape-a overflow-hidden border-[5px] border-surface shadow-xl">
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
          ) : (
            <div className="shape-logo flex aspect-square items-center justify-center bg-white p-[9%] shadow-xl">
              <SiteLogo
                locale={locale}
                sizes={HERO_IMAGE_SIZES}
                eager
                highPriority
                className="w-full object-contain"
              />
            </div>
          )}
          <Flower className="anim-float absolute -right-1 -bottom-1 h-8 w-8" color="#FFB5A2" />
        </div>

        <div className="anim-rise delay-2 relative mx-auto mt-5 flex max-w-sm flex-col gap-2.5">
          <a
            href="#about"
            className="flex items-center justify-center gap-2.5 rounded-full bg-teal py-3 font-display text-[0.95rem] font-semibold text-deep active:scale-[0.98]"
          >
            {t.cta}
            <ArrowIcon className="h-4 w-4" />
          </a>
          <a
            href={`tel:${site.phone.tel}`}
            className="flex items-center justify-center gap-2.5 rounded-full border-2 border-ink/25 bg-page/60 py-2.5 font-display text-sm font-semibold active:scale-[0.98]"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phone.display}
          </a>
        </div>
      </div>

      <Wave className="absolute inset-x-0 -bottom-px h-8 text-surface" variant="a" />
    </section>
  );
}
