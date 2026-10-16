import { SITE } from "@/lib/content";

// Official lockup (public/logo.svg, 792×175). Plain <img>: SVG needs no optimisation and the size is fixed.
export function Logo({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" }) {
  const [w, h] = size === "sm" ? [126, 28] : [163, 36];
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logo.svg" alt={SITE.name} width={w} height={h} className={className} decoding="async" />;
}
