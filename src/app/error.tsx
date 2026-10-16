"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main id="main" className="grid min-h-[85svh] place-items-center bg-ink-950 px-5 pt-20 text-center text-white">
      <div>
        <h1 className="text-2xl font-light">مشکلی پیش آمد.</h1>
        <p className="mt-3 text-sm text-white/60">لطفاً دوباره تلاش کنید.</p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 h-12 rounded-full bg-brand-500 px-8 text-sm font-medium transition-colors hover:bg-brand-400"
        >
          تلاش دوباره
        </button>
      </div>
    </main>
  );
}
