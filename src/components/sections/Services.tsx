import { Code, PencilLine, ZoomIn } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES, SERVICES_SECTION, type ServiceIcon } from "@/lib/content";

const icons: Record<ServiceIcon, LucideIcon> = { code: Code, design: PencilLine, growth: ZoomIn };
const fa = (n: number) => n.toLocaleString("fa-IR", { minimumIntegerDigits: 2 });

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="services-title" {...SERVICES_SECTION} />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.title} className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <article className="reveal group flex h-full min-h-[25rem] flex-col rounded-3xl border border-line bg-white p-7 transition-all lg:p-9 duration-300 hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-[0_24px_60px_-28px_rgb(45_99_194/0.45)]">
                  <div className="flex items-start justify-between">
                    <span className="grid size-12 place-items-center lg:size-14 rounded-xl bg-brand-500/10 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <span aria-hidden className="text-xs text-slate-400">{fa(i + 1)}</span>
                  </div>

                  <div className="mt-10 flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl font-medium text-ink-900 lg:text-[1.7rem]">{s.title}</h3>
                    <span dir="ltr" className="font-latin text-[10px] font-bold tracking-[0.16em] text-brand-500">
                      {s.label}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-8 text-slate-500 lg:text-[15px] lg:leading-9">{s.description}</p>

                  <ul className="mt-auto flex flex-wrap gap-2 pt-10" dir="ltr">
                    {s.tags.map((t) => (
                      <li key={t} className="rounded-full border border-line px-3 py-1.5 font-latin text-[11px] text-slate-500">
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
