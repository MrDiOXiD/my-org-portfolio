import { Button } from "@/components/ui/Button";
import { HERO } from "@/lib/content";
import { OrbitVisual } from "./OrbitVisual";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-ink-950 text-white">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_22%_35%,rgb(45_99_194/0.24),transparent_72%)]" />
        <div className="bg-grid absolute inset-0" />
      </div>

      <div className="mx-auto grid min-h-[min(100svh,880px)] max-w-7xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-2 lg:gap-6 lg:pt-36">
        <div>
          <p className="rise inline-flex items-center gap-2.5 text-xs text-white/70">
            <span aria-hidden className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgb(52_211_153)]" />
            {HERO.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="rise-t mt-6 text-[clamp(2.4rem,6.2vw,4.5rem)] font-bold leading-[1.3] tracking-tight [--d:80ms]"
          >
            <span className="sr-only">چتراتک: </span>
            <span className="block">{HERO.lines.first}</span>
            {HERO.lines.accent.map((l) => (
              <span key={l} className="block text-brand-400">
                {l}
              </span>
            ))}
            <span className="block">{HERO.lines.last}</span>
          </h1>

          <p className="rise-t mt-7 max-w-xl text-[15px] leading-8 text-white/60 sm:text-base [--d:160ms]">
            {HERO.description}
          </p>

          <div className="rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 [--d:240ms]">
            <Button href={HERO.primaryCta.href}>{HERO.primaryCta.label}</Button>
            <Button href={HERO.secondaryCta.href} variant="link" icon={false}>
              {HERO.secondaryCta.label}
            </Button>
          </div>
        </div>

        <OrbitVisual />
      </div>
    </section>
  );
}
