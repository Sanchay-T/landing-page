import Link from "next/link";
import { getVariation } from "../variations";

/**
 * Variation 3. Round 1 was deleted wholesale; this route holds the slug and
 * the name until the round-2 direction is built here.
 *
 * The name is read from `variations.ts` rather than typed, so this page, the
 * switcher at `/` and the mini-switcher can never disagree about what v3 is.
 */
const variation = getVariation("v3")!;

export const metadata = { title: `${variation.name} - Devonel` };

export default function Page() {
  return (
    <main className="mx-auto flex min-h-svh max-w-[46rem] flex-col justify-center px-5 py-16 sm:px-8">
      <h1 className="text-[clamp(2rem,8vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
        {variation.name}
      </h1>
      <p className="mt-8">
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
