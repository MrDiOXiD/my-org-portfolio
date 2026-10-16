import type { CSSProperties } from "react";
import { ArrowLeft, Globe, Mail, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Contact, Member } from "@/lib/content";

const THEMES = {
  violet: { accent: "#8b5cf6", soft: "#c4b5fd", a: "#2c2057", b: "#140f2b", tint: "#f4f0ff" },
  sky: { accent: "#2b8be0", soft: "#7cc7ff", a: "#0f2f55", b: "#08111f", tint: "#eaf4ff" },
  emerald: { accent: "#14966a", soft: "#6ee7b7", a: "#0f3d2e", b: "#08191a", tint: "#e9faf2" },
} as const;

const contactIcons: Record<Contact["kind"], LucideIcon> = { email: Mail, web: Globe, phone: Phone };
const fa = (n: number) => n.toLocaleString("fa-IR", { minimumIntegerDigits: 2 });

type Props = { member: Member; index: number; flip?: boolean };

export function MemberCard({ member: m, index, flip }: Props) {
  const t = THEMES[m.theme];
  const vars = {
    "--accent": t.accent,
    "--accent-soft": t.soft,
    "--panel-a": t.a,
    "--panel-b": t.b,
    "--tint": t.tint,
  } as CSSProperties;
  const nameId = `member-${index}`;

  return (
    <article
      id={`member-${index + 1}`}
      aria-labelledby={nameId}
      style={vars}
      className={`reveal relative flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_40px_90px_-40px_rgb(15_23_42/0.35)] ring-1 ring-line lg:flex-row ${
        flip ? "lg:flex-row-reverse" : ""
      }`}
    >
      <span aria-hidden className="absolute inset-x-0 top-0 z-10 h-[3px] bg-(--accent)" />

      {/* ── profile panel ── */}
      <div className="flex flex-col bg-[linear-gradient(160deg,var(--panel-a),var(--panel-b))] p-6 text-white sm:p-8 lg:w-[36%] lg:shrink-0">
        <div className="relative mx-auto grid aspect-[4/3] w-full max-w-sm place-items-center overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.03] lg:aspect-[1.3/1]">
          <div aria-hidden className="bg-grid absolute inset-0 opacity-70" />
          <div aria-hidden className="absolute inset-[14%] rounded-full border border-white/[0.07]" />
          <span aria-hidden dir="ltr" className="relative font-latin text-6xl font-bold tracking-tight text-(color:--accent-soft) sm:text-7xl lg:text-8xl">
            {m.initials}
          </span>
          <span aria-hidden className="absolute bottom-5 right-5 size-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgb(52_211_153)]" />
        </div>

        <p className="mt-8 text-xs font-semibold text-(color:--accent-soft)">عضو {fa(index + 1)}</p>
        <h3 id={nameId} className="mt-1 text-2xl font-medium lg:text-3xl">{m.name}</h3>
        <p className="mt-1 text-sm text-white/55 lg:text-base">{m.role}</p>

        <ul dir="ltr" className="mt-5 flex flex-wrap justify-end gap-2" aria-label="ابزارهای اصلی">
          {m.badges.map((b) => (
            <li key={b} className="rounded-full border border-white/15 px-3.5 py-1.5 font-latin text-[10px] lg:text-[11px] tracking-[0.12em] text-white/60">
              {b}
            </li>
          ))}
        </ul>

        <ul className="mt-auto pt-8">
          {m.contacts.map((c) => {
            const Icon = contactIcons[c.kind];
            const external = c.kind === "web";
            return (
              <li key={c.href} className="border-t border-white/10">
                <a
                  href={c.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 py-4"
                >
                  <Icon aria-hidden className="size-5 shrink-0 text-(color:--accent-soft)" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium lg:text-base">{c.label}</span>
                    <span dir="ltr" className="block truncate text-right text-xs lg:text-[13px] text-white/50">{c.value}</span>
                  </span>
                  <ArrowLeft aria-hidden className="size-4 shrink-0 text-white/30 transition-all group-hover:-translate-x-1 group-hover:text-white" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ── story ── */}
      <div className="flex-1 bg-[radial-gradient(70%_60%_at_0%_100%,var(--tint),transparent)] p-6 sm:p-10 lg:px-16 lg:py-[4.5rem]">
        <p dir="ltr" className="font-latin text-xs font-semibold tracking-[0.16em] text-(color:--accent)">
          {m.category[0]} <span aria-hidden>•</span> {m.category[1]}
        </p>

        <blockquote className="mt-8 border-s-[3px] border-(--accent) ps-5 text-xl font-bold leading-[2] text-ink-900 sm:ps-6 sm:text-2xl lg:text-[1.9rem] lg:leading-[1.9]">
          «{m.quote}»
        </blockquote>

        <div className="mt-9 space-y-5 text-sm leading-8 lg:text-base lg:leading-[2.1] text-slate-500">
          {m.bio.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <div className="mt-10 border-t border-line pt-6">
          <div className="flex items-center justify-between gap-4">
            <h4 className="text-sm font-bold text-ink-900 lg:text-base">حوزه‌های تخصص</h4>
            <span className="text-xs text-slate-400">{m.skills.length.toLocaleString("fa-IR")} مهارت کلیدی</span>
          </div>
          <ul dir="ltr" className="mt-5 flex flex-wrap gap-2.5">
            {m.skills.map((s) => (
              <li key={s} className="rounded-lg border border-line bg-white/80 px-3.5 py-2 font-latin text-xs text-slate-600 lg:text-[13px]">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
