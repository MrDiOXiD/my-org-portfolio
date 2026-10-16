import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/lib/content";

// Persian (Solar Hijri) year, computed at build time.
const year = new Intl.DateTimeFormat("fa-IR-u-ca-persian", { year: "numeric" }).format(new Date());

export function Footer() {
  return (
    <footer className="px-5 pb-10 sm:px-8">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 border-t border-line pt-8 text-center sm:flex-row sm:justify-between sm:text-start">
        {/* accent line that grows from the centre as the footer scrolls in */}
        <span aria-hidden className="footer-line absolute inset-x-0 -top-px h-px bg-[linear-gradient(to_left,transparent,var(--color-brand-500),transparent)]" />
        <span className="reveal-footer footer-glow inline-flex rounded-xl bg-ink-900 px-4 py-2.5 transition-transform duration-300 hover:-translate-y-0.5">
          <Logo size="sm" />
        </span>
        <p className="reveal-footer text-xs text-slate-500 [animation-range:entry_10%_entry_80%]">{SITE.tagline}</p>
        <p className="reveal-footer text-xs text-slate-400 [animation-range:entry_20%_entry_100%]">
          © {year} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
