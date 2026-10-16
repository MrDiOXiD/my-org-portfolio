import { TICKER } from "@/lib/content";

// Static, centered on md+. On small screens it becomes a seamless marquee.
export function TickerStrip() {
  return (
    <section aria-label="حوزه‌های فعالیت" className="overflow-hidden border-b border-line bg-white">
      <ul dir="ltr" className="flex w-max items-center gap-8 py-5 animate-[marquee_30s_linear_infinite] motion-reduce:animate-none md:mx-auto md:w-auto md:animate-none md:flex-wrap md:justify-center md:gap-10">
        {[0, 1].flatMap((copy) =>
          TICKER.flatMap((t, i) => {
            const dupe = copy === 1;
            const lastOfFirst = !dupe && i === TICKER.length - 1;
            return [
              <li
                key={`${copy}-${t}`}
                aria-hidden={dupe || undefined}
                className={`font-latin text-[11px] font-semibold tracking-[0.18em] text-slate-500 ${dupe ? "md:hidden" : ""}`}
              >
                {t}
              </li>,
              <li
                key={`${copy}-${t}-dot`}
                aria-hidden
                role="presentation"
                className={`size-1 rounded-full bg-brand-500 ${dupe || lastOfFirst ? "md:hidden" : ""}`}
              />,
            ];
          }),
        )}
      </ul>
    </section>
  );
}
