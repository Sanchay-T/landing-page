import Link from "next/link";
import type { Variation } from "./variations";

/**
 * Route scaffold for a variation that has not been designed yet.
 *
 * It states the direction and its thesis and links back to the switcher, and
 * nothing else. Each variation replaces its own `page.tsx` outright, so this
 * file disappears once the fifth one lands.
 */
export function VariationScaffold({ variation }: { variation: Variation }) {
  return (
    <main className="mx-auto flex min-h-svh max-w-[46rem] flex-col justify-center px-5 py-16 sm:px-8">
      <p className="text-sm tabular-nums text-fg-muted">Variation {variation.n} of 5</p>
      <h1 className="mt-3 text-[clamp(2rem,8vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
        {variation.name}
      </h1>
      <p className="mt-5 max-w-[54ch] text-[clamp(1rem,3vw,1.25rem)] leading-relaxed text-fg-muted">
        {variation.thesis}
      </p>
      <p className="mt-10">
        <Link
          href="/"
          className="underline decoration-border-strong underline-offset-4 hover:decoration-fg"
        >
          Back to all five variations
        </Link>
      </p>
    </main>
  );
}
