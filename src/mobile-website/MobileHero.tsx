import Image from "next/image";
import { dictionary, type Locale } from "@/content/dictionary";
import { site } from "@/content/site";
import { Flower, Star, Wave } from "@/shared/illustrations/Decor";
import { HeroScene } from "@/shared/illustrations/HeroScene";
import { ArrowIcon, PhoneIcon } from "@/shared/illustrations/Things";
import { HERO_IMAGE_SIZES, type ImageAsset } from "@/shared/types";

export function MobileHero({ locale, image }: { locale: Locale; image: ImageAsset | null }) {
  const t = dictionary[locale].hero;

  return (
    <section id="home" className="relative isolate overflow-hidden pt-22 pb-20">
      <div className="shape-a absolute -top-24 -right-24 -z-10 h-56 w-56 bg-sun" />
      <Star className="anim-float absolute top-20 right-5 h-6 w-6" color="#FFF8EC" />

      <div className="mx-auto max-w-2xl px-5">
        <h1 className="anim-rise text-[clamp(2.05rem,10.2vw,3.6rem)] font-extrabold">{t.title}</h1>
        <p className="anim-rise delay-1 mt-4 text-lg leading-snug font-semibold text-muted sm:text-xl">{t.subtitle}</p>

        <div className="anim-pop delay-1 relative mx-auto mt-6 max-w-md">
          <div className="shape-b absolute top-1/3 -left-20 -z-10 h-44 w-44 bg-peach" />
          {image ? (
            <div className="shape-a overflow-hidden border-[6px] border-surface shadow-xl">
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
            <HeroScene className="w-full" />
          )}
          <Flower className="anim-float absolute -right-1 -bottom-1 h-10 w-10" color="#FFB5A2" />
        </div>

        <div className="anim-rise delay-2 relative mt-6 flex flex-col gap-3">
          <a
            href="#about"
            className="flex items-center justify-center gap-3 rounded-full bg-teal py-4 font-display text-lg font-semibold text-deep active:scale-[0.98]"
          >
            {t.cta}
            <ArrowIcon className="h-5 w-5" />
          </a>
          <a
            href={`tel:${site.phone.tel}`}
            className="flex items-center justify-center gap-3 rounded-full border-2 border-ink/25 bg-page/60 py-3.5 font-display font-semibold active:scale-[0.98]"
          >
            <PhoneIcon className="h-5 w-5" />
            {site.phone.display}
          </a>
        </div>
      </div>

      <Wave className="absolute inset-x-0 -bottom-px h-10 text-surface" variant="a" />
    </section>
  );
}
