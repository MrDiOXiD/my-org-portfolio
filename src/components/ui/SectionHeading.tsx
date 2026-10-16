type Props = {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  underline?: boolean;
};

export function SectionHeading({ id, eyebrow, title, accent, description, underline }: Props) {
  return (
    <header className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="text-xs font-semibold text-brand-500">{eyebrow}</p>
        <h2 id={id} className="mt-3 text-[clamp(2rem,4.2vw,2.75rem)] font-light leading-[1.4] text-ink-900">
          {title}
          <span className="block font-bold text-brand-500">{accent}</span>
        </h2>
        {underline && <span aria-hidden className="mt-2 block h-[3px] w-28 rounded-full bg-brand-500" />}
      </div>
      <p className="max-w-md text-sm leading-8 text-slate-500">{description}</p>
    </header>
  );
}
