"use client";

import { motion } from "framer-motion";

export default function ClientSection() {
  return (
    <section
      id="clients"
      className="text-center mx-auto max-w-7xl px-6 md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Trusted by teams from around the world
          </h2>
          <div className="mt-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16 [&_path]:fill-white">
              {[
                { name: "Google", src: "https://cdn.magicui.design/companies/Google.svg" },
                { name: "Microsoft", src: "https://cdn.magicui.design/companies/Microsoft.svg" },
                { name: "GitHub", src: "https://cdn.magicui.design/companies/GitHub.svg" },
                { name: "Uber", src: "https://cdn.magicui.design/companies/Uber.svg" },
                { name: "Notion", src: "https://cdn.magicui.design/companies/Notion.svg" },
              ].map((logo, index) => (
                <motion.li
                  key={logo.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group flex items-center justify-center"
                >
                  <picture className="relative">
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      className="h-8 w-28 px-2 transition-opacity duration-300 dark:brightness-0 dark:invert group-hover:opacity-70"
                    />
                  </picture>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
