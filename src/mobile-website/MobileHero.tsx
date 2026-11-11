import { dictionary, type Locale } from "@/content/dictionary";
import { site } from "@/content/site";
import { Flower, Star, Wave } from "@/shared/illustrations/Decor";
import { ArrowIcon, PhoneIcon } from "@/shared/illustrations/Things";
import { Mascot } from "@/shared/Mascot";

export function MobileHero({ locale }: { locale: Locale }) {
  const t = dictionary[locale].hero;

  return (
    <section id="home" className="relative isolate overflow-hidden pt-[4.25rem] pb-14">
      <div className="shape-a absolute -top-20 -right-20 -z-10 h-44 w-44 bg-sun" />
      <Star className="anim-float absolute top-16 right-4 h-5 w-5" color="#FFF8EC" />

      <div className="mx-auto max-w-xl px-4">
        <h1 className="anim-rise text-[clamp(1.75rem,8.7vw,3rem)] font-extrabold">{t.title}</h1>
        <p className="anim-rise delay-1 mt-3 text-[0.95rem] leading-snug font-semibold text-muted sm:text-[1.05rem]">{t.subtitle}</p>

        {/* На телефоне маскот стоит под описанием, по центру, и не доходит до кнопок. */}
        <div className="anim-pop delay-1 relative mx-auto mt-3 flex justify-center">
          <div className="shape-b absolute top-1/4 -left-16 -z-10 h-32 w-32 bg-peach" />
          <Mascot
            name="welcome"
            locale={locale}
            reveal={false}
            eager
            highPriority
            tilt={-4}
            className="w-[min(60vw,14rem,34svh)]"
          />
          <Flower className="anim-float absolute right-2 bottom-2 h-7 w-7" color="#FFB5A2" />
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
