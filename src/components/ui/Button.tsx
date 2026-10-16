import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "link" | "glass";

const base = "group inline-flex items-center gap-3 font-medium transition-all duration-300";
const variants: Record<Variant, string> = {
  primary:
    "h-14 rounded-full bg-brand-500 px-8 text-[15px] text-white shadow-[0_14px_44px_-10px_rgb(45_99_194/0.75)] hover:bg-brand-400 hover:shadow-[0_18px_54px_-10px_rgb(79_127_220/0.8)] active:scale-[0.98]",
  outline:
    "h-11 rounded-full border border-white/15 bg-white/[0.03] px-5 text-sm text-white hover:border-white/35 hover:bg-white/[0.07]",
  glass:
    "h-14 rounded-full border border-white/30 bg-white/15 px-7 text-[15px] text-white hover:border-white/50 hover:bg-white/25",
  link: "border-b border-white/20 pb-1.5 text-sm text-white/70 hover:border-white/60 hover:text-white",
};

type Props = {
  href: string;
  variant?: Variant;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export function Button({ href, variant = "primary", icon = true, className = "", onClick, children }: Props) {
  return (
    <Link href={href} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {icon && (
        <ArrowLeft aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
      )}
    </Link>
  );
}
