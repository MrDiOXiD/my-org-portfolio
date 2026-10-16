import { Button } from "@/components/ui/Button";
import { CTA, SITE } from "@/lib/content";

export function Cta() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="cv-auto px-5 pb-24 sm:px-8 lg:pb-28">
      <div className="reveal relative mx-auto flex max-w-7xl flex-col gap-10 overflow-hidden rounded-3xl bg-brand-500 p-8 sm:p-12 md:flex-row md:items-center md:justify-between lg:p-16">
        <div aria-hidden className="absolute -right-24 -top-32 size-96 rounded-full bg-white/[0.06]" />
        <div className="relative">
          <p className="text-xs font-semibold text-white/80">{CTA.eyebrow}</p>
          <h2 id="cta-title" className="mt-4 text-[clamp(1.75rem,3.8vw,2.75rem)] font-light leading-[1.6] text-white">
            {CTA.lines[0]}
            <br />
            {CTA.lines[1]}
          </h2>
        </div>
        <Button href={`mailto:${SITE.email}`} variant="glass" className="relative self-start md:self-auto">
          <span dir="ltr">{SITE.email}</span>
        </Button>
      </div>
    </section>
  );
}
