"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { HEADER_CTA, NAV_LINKS, SITE } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <LazyMotion features={domAnimation}>
      <header
        className={`absolute inset-x-0 top-0 z-50 ${open ? "border-b border-white/10 bg-ink-950" : ""}`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label={`${SITE.name} — صفحه اصلی`} onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav aria-label="منوی اصلی" className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-white/65 transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href={HEADER_CTA.href} variant="outline">
              {HEADER_CTA.label}
            </Button>
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-white/15 text-white md:hidden"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <m.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="border-t border-white/10 px-5 pb-8 pt-4 md:hidden"
            >
              <nav aria-label="منوی موبایل" className="flex flex-col">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/10 py-4 text-lg text-white/85"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <Button href={HEADER_CTA.href} className="mt-6 w-full justify-center" onClick={() => setOpen(false)}>
                {HEADER_CTA.label}
              </Button>
            </m.div>
          )}
        </AnimatePresence>
      </header>
    </LazyMotion>
  );
}
