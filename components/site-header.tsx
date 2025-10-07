"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CalTrigger } from "@/components/integrations/cal-trigger";

const menuItem = [
  {
    id: 1,
    label: "Services",
    href: "#services",
  },
  {
    id: 2,
    label: "Process",
    href: "#process",
  },
  {
    id: 3,
    label: "Industries",
    href: "#industries",
  },
  {
    id: 4,
    label: "Pricing",
    href: "#pricing",
  },
  {
    id: 5,
    label: "FAQ",
    href: "#faq",
  },
  {
    id: 6,
    label: "Blog",
    href: "/blog",
  },
  {
    id: 7,
    label: "Case Studies",
    href: "/case-studies",
  },
];

export function SiteHeader() {
  const mobilenavbarVariant = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const mobileLinkVar = {
    initial: {
      y: "-20px",
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);
    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="container mx-auto flex w-full items-center justify-between py-4 md:h-[var(--navigation-height)] md:py-0">
          <Link className="text-md flex items-center font-semibold tracking-tight" href="/">
            Devonel
          </Link>

          <div className="hidden h-full items-center gap-6 md:flex">
            <Link className="text-sm" href="/blog">
              Blog
            </Link>
            <Link className="text-sm" href="/case-studies">
              Case Studies
            </Link>
            <CalTrigger>
              <Button
                variant="ghost"
                className="rounded-full border border-white/20 bg-[linear-gradient(90deg,#151519,#06060a)] px-4 py-1.5 text-sm font-semibold text-white shadow-[0_15px_45px_-30px_rgba(0,0,0,0.75)] hover:bg-[linear-gradient(90deg,#13131a,#050508)]"
                type="button"
              >
                Book a strategy call
              </Button>
            </CalTrigger>
          </div>
          <button
            className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm md:hidden"
            onClick={() => setHamburgerMenuIsOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        <motion.nav
          initial="initial"
          exit="exit"
          variants={mobilenavbarVariant}
          animate={hamburgerMenuIsOpen ? "animate" : "exit"}
          className={cn(
            `fixed left-0 top-0 z-50 h-screen w-full overflow-auto bg-background/70 backdrop-blur-[12px] `,
            {
              "pointer-events-none": !hamburgerMenuIsOpen,
            }
          )}
        >
          <div className="container mx-auto flex h-[var(--navigation-height)] items-center justify-between">
            <Link className="text-md flex items-center font-semibold" href="/">
              Devonel
            </Link>

            <button
              className="ml-6 md:hidden"
              onClick={() => setHamburgerMenuIsOpen((open) => !open)}
            >
              <span className="sr-only">Toggle menu</span>
              {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
            </button>
          </div>
          <motion.ul
            className={`flex flex-col md:flex-row md:items-center uppercase md:normal-case ease-in`}
            variants={containerVariants}
            initial="initial"
            animate={hamburgerMenuIsOpen ? "open" : "exit"}
          >
            {menuItem.map((item) => (
              <motion.li
                variants={mobileLinkVar}
                key={item.id}
                className="border-grey-dark pl-6 py-0.5 border-b md:border-none"
              >
                <Link
                  className={`hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${
                    hamburgerMenuIsOpen ? "[&_a]:translate-y-0" : ""
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </AnimatePresence>
    </>
  );
}
