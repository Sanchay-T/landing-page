import Link from "next/link";
import { variations } from "./(variations)/variations";

/**
 * The switcher landing.
 *
 * Deliberately plain: this is the index Sanchay taps through, not a sixth
 * design. It should never be mistaken for one of the five, so it carries no
 * accent colour, no imagery and no motion — a directory of five rows, each row
 * one large target with its number, its name and what it argues.
 */
export default function SwitcherPage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-[68rem] flex-col px-5 py-14 sm:px-8 sm:py-20">
      <header className="max-w-[46ch]">
        <h1 className="text-[clamp(1.75rem,6vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Devonel redesign
        </h1>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-fg-muted sm:text-base">
          Five directions on one brief. Every one is a complete landing page, so
          open them all and keep the one you would send to a prospect today.
        </p>
      </header>

      <ol className="mt-10 border-t border-border sm:mt-14">
        {variations.map((v) => (
          <li key={v.slug} className="border-b border-border">
            <Link
              href={v.href}
              aria-label={`Variation ${v.n}: ${v.name}`}
              className="group grid grid-cols-[2.25rem_1fr] items-baseline gap-x-4 gap-y-2 py-6 transition-colors hover:bg-surface-2 sm:grid-cols-[4rem_1fr] sm:gap-x-6 sm:py-8"
            >
              <span
                aria-hidden
                className="text-[clamp(1.75rem,5vw,2.75rem)] font-medium leading-none tabular-nums tracking-[-0.03em] text-fg-muted transition-colors group-hover:text-fg"
              >
                {v.n}
              </span>
              <span className="min-w-0">
                <span className="block text-[clamp(1.25rem,4vw,1.875rem)] font-semibold leading-tight tracking-[-0.02em] underline decoration-transparent underline-offset-[6px] transition-[text-decoration-color] group-hover:decoration-fg">
                  {v.name}
                </span>
                <span className="mt-2 block max-w-[62ch] text-[0.9375rem] leading-relaxed text-fg-muted">
                  {v.thesis}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
