import { Check } from "lucide-react";
import { WHY } from "@/lib/content";

export function Why() {
  return (
    <section aria-labelledby="why-title" className="cv-auto px-5 pb-24 sm:px-8 lg:pb-32">
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-ink-900 p-7 text-white sm:p-12 lg:p-16">
        <div aria-hidden className="absolute -left-28 -top-28 size-80 rounded-full bg-brand-500/10 blur-sm" />
        <div aria-hidden className="absolute -left-12 -top-12 size-52 rounded-full border border-brand-500/20" />

        <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold text-brand-400">{WHY.eyebrow}</p>
            <h2 id="why-title" className="mt-4 text-[clamp(1.8rem,3.6vw,2.5rem)] font-light leading-[1.5]">
              {WHY.title}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-8 text-white/60">{WHY.description}</p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/75">
              {WHY.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Check aria-hidden className="size-3.5 text-brand-400" strokeWidth={3} />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <dl className="grid grid-cols-2 border-s border-t border-white/10">
            {WHY.stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col-reverse items-center gap-3 border-b border-e border-white/10 px-4 py-9 text-center ${
                  i === 2 ? "col-span-2" : ""
                }`}
              >
                <dt className="text-xs text-white/55">{s.label}</dt>
                <dd className="text-4xl font-light text-brand-400 sm:text-5xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
