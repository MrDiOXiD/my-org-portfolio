import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "صفحه پیدا نشد", robots: { index: false } };

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-[85svh] place-items-center bg-ink-950 px-5 pt-20 text-center text-white">
      <div>
        <p dir="ltr" className="font-latin text-7xl font-bold text-brand-400">404</p>
        <h1 className="mt-4 text-2xl font-light">صفحه‌ای که دنبالش بودید پیدا نشد.</h1>
        <p className="mt-3 text-sm text-white/60">ممکن است آدرس تغییر کرده یا اشتباه وارد شده باشد.</p>
        <Button href="/" className="mt-8">بازگشت به صفحه اصلی</Button>
      </div>
    </main>
  );
}
