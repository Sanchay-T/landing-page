"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { variations } from "./variations";

/**
 * Review chrome, not page design.
 *
 * A fixed pill in the bottom-right of every variation so all five stay one tap
 * apart. It is deliberately neutral so it reads over a light broadsheet and a
 * near-black cinematic hero alike, and it removes itself when the URL carries
 * `?chrome=0` so screenshots used for design judgment are clean.
 */
export function MiniSwitcher() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (searchParams.get("chrome") === "0") return null;

  const item =
    "grid h-8 min-w-8 place-items-center rounded-full px-2 text-[0.8125rem] font-medium leading-none tabular-nums transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <nav
      aria-label="Variation switcher"
      className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-50 flex items-center gap-0.5 rounded-full bg-[#16161a] p-1 text-white shadow-[0_2px_12px_rgba(0,0,0,0.35)] print:hidden"
    >
      {variations.map((v) => {
        const active = pathname === v.href;
        return (
          <Link
            key={v.slug}
            href={v.href}
            aria-label={`Variation ${v.n}: ${v.name}`}
            aria-current={active ? "page" : undefined}
            className={`${item} ${
              active ? "bg-white text-[#16161a]" : "text-white/70 hover:bg-white/15 hover:text-white"
            }`}
          >
            {v.n}
          </Link>
        );
      })}
      <span aria-hidden className="mx-1 h-4 w-px bg-white/25" />
      <Link
        href="/"
        aria-label="All five variations"
        className={`${item} text-white/70 hover:bg-white/15 hover:text-white`}
      >
        /
      </Link>
    </nav>
  );
}
