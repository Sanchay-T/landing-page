import Link from "next/link";

const items = [
  { href: "#proof", label: "Proof" },
  { href: "#playbooks", label: "Playbooks" },
  { href: "#commit", label: "Commit" },
];

export default function ChapterNav() {
  return (
    <nav
      aria-label="Chapter navigation"
      className="mx-auto -mt-12 w-full max-w-4xl px-6 md:-mt-16 md:px-0"
    >
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-white/10 bg-background/80 px-2 py-2 text-xs uppercase tracking-[0.24em] text-muted-foreground backdrop-blur">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2 font-semibold transition-colors hover:bg-[rgb(var(--brand-accent-rgb)/0.12)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--brand-accent-rgb))]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

