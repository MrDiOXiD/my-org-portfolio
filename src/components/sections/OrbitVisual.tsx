"use client";

import type { PointerEvent } from "react";
import type { LucideIcon } from "lucide-react";
import { Check, Code, PencilLine, ZoomIn } from "lucide-react";
import { LazyMotion, domAnimation, m, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";

type ChipProps = { label: string; Icon: LucideIcon; className: string; delay: number; float: boolean };

function Chip({ label, Icon, className, delay, float }: ChipProps) {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.5 + delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute ${className}`}
    >
      <m.div
        dir="ltr"
        animate={float ? { y: [0, -9, 0] } : undefined}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink-800/70 px-4 py-2.5 font-latin text-[11px] font-semibold tracking-[0.2em] text-white/70 shadow-lg shadow-black/30 backdrop-blur-md"
      >
        {label}
        <Icon aria-hidden className="size-4 text-brand-400" />
      </m.div>
    </m.div>
  );
}

export function OrbitVisual() {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 70, damping: 18 });
  const sy = useSpring(y, { stiffness: 70, damping: 18 });
  const cx = useTransform(sx, (v) => v * -0.9);
  const cy = useTransform(sy, (v) => v * -0.9);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width - 0.5) * 26);
    y.set(((e.clientY - r.top) / r.height - 0.5) * 26);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <LazyMotion features={domAnimation}>
      <div
        aria-hidden
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="rise relative mx-auto aspect-square w-full max-w-[22rem] [--d:250ms] sm:max-w-[28rem] lg:max-w-[32rem]"
      >
        <div className="absolute inset-[2%] rounded-full border border-white/[0.07]" />
        <div className="absolute inset-[20%] rounded-full border border-white/[0.07]" />

        <div className="orbit-spin absolute inset-[2%]">
          <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400 shadow-[0_0_14px_2px_rgb(79_127_220/0.8)]" />
        </div>
        <div className="orbit-spin-rev absolute inset-[20%]">
          <span className="absolute bottom-0 left-1/2 size-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-400" />
        </div>

        <div className="absolute inset-0 grid place-items-center">
          <m.img
            src="/mark.svg"
            alt=""
            width={180}
            height={180}
            style={reduce ? undefined : { x: cx, y: cy }}
            className="size-[32%] [filter:drop-shadow(0_28px_36px_rgb(45_99_194/0.45))]"
          />
        </div>

        <m.div style={reduce ? undefined : { x: sx, y: sy }} className="absolute inset-0">
          <Chip label="BUILD" Icon={Code} className="left-0 top-[26%]" delay={0} float={!reduce} />
          <Chip label="DESIGN" Icon={PencilLine} className="right-[2%] top-[31%]" delay={0.15} float={!reduce} />
          <Chip label="GROW" Icon={ZoomIn} className="bottom-[9%] right-[18%]" delay={0.3} float={!reduce} />
        </m.div>
      </div>
    </LazyMotion>
  );
}
