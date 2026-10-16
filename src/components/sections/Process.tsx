import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS } from "@/lib/content";

const fa = (n: number) => n.toLocaleString("fa-IR");

export function Process() {
  const { steps, ...heading } = PROCESS;
  return (
    <section id="process" aria-labelledby="process-title" className="cv-auto pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="process-title" {...heading} />

        {/* A real sequence, so an ordered list with numbers is the right structure. */}
        <ol className="mt-14 grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="reveal bg-surface p-7 lg:p-8">
              <span aria-hidden className="block text-end text-xs font-bold text-brand-500">
                {fa(i + 1)}
              </span>
              <h3 className="mt-6 text-xl font-medium text-ink-900">{s.title}</h3>
              <p className="mt-3 text-sm leading-8 text-slate-500">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
