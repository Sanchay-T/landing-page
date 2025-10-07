import Link from "next/link";

const items = [
  { href: "#proof", label: "Proof" },
  { href: "#signal", label: "Signal" },
  { href: "#playbooks", label: "Playbooks" },
  { href: "#commit", label: "Commit" },
  { href: "#contact", label: "Contact" },
];

export default function ChapterNav() {
  return (
    <nav
      aria-label="Chapter navigation"
      className="mx-auto -mt-12 w-full max-w-4xl px-6 md:-mt-16 md:px-0"
    >
      <div className="rounded-3xl border border-white/10 bg-background/80 px-3 py-3 text-center text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground backdrop-blur md:px-4 md:text-xs">
        <div className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-2 md:gap-y-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 leading-4 transition-colors hover:bg-[rgb(var(--brand-accent-rgb)/0.12)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--brand-accent-rgb))]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

