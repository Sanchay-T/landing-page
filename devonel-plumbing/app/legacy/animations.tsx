"use client";

import { useEffect } from "react";

export function Animations() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const observers: IntersectionObserver[] = [];

    // Stagger-in observer for elements with these classes
    const targets = document.querySelectorAll(".proc-col, .diagram-col, .ledger-row, .tenet");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    targets.forEach((el) => io.observe(el));
    observers.push(io);

    // PSI tick — slow drift between min/max
    const tickInterval = setInterval(() => {
      document.querySelectorAll<HTMLElement>("[data-tick]").forEach((el) => {
        const min = Number(el.dataset.tickMin);
        const max = Number(el.dataset.tickMax);
        let val = Number(el.dataset.current ?? el.dataset.tick);
        let dir = Number(el.dataset.dir ?? "1");
        val += dir * (Math.random() * 0.4 + 0.2);
        if (val >= max) {
          val = max;
          dir = -1;
        } else if (val <= min) {
          val = min;
          dir = 1;
        }
        el.dataset.current = String(val);
        el.dataset.dir = String(dir);
        el.textContent = val.toFixed(0);
      });
    }, 1400);

    // Ledger count-up — when row enters view, count $/hr from 0
    const fmt = (n: number, prefix = "", suffix = "") =>
      prefix + Math.round(n).toLocaleString() + suffix;

    const countUp = (el: Element, target: number, opts: { prefix?: string; suffix?: string } = {}) => {
      const dur = 1400;
      const start = performance.now();
      const tick = (t: number) => {
        const k = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - k, 3);
        el.textContent = fmt(target * eased, opts.prefix || "", opts.suffix || "");
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    document.querySelectorAll<HTMLElement>(".ledger-row .savings").forEach((el) => {
      const m = el.textContent?.match(/\$([\d,]+)k/);
      if (!m) return;
      const target = parseInt(m[1].replace(/,/g, ""), 10);
      el.dataset.target = String(target);
      el.textContent = "$0k";
    });
    document.querySelectorAll<HTMLElement>(".ledger-row .hours").forEach((el) => {
      const m = el.textContent?.match(/(\d+) hr/);
      if (!m) return;
      el.dataset.target = String(Number(m[1]));
      el.textContent = "0 hr";
    });

    const ledgerIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const sv = e.target.querySelector<HTMLElement>(".savings");
          const hr = e.target.querySelector<HTMLElement>(".hours");
          if (sv?.dataset.target) countUp(sv, Number(sv.dataset.target), { prefix: "$", suffix: "k" });
          if (hr?.dataset.target) countUp(hr, Number(hr.dataset.target), { suffix: " hr" });
          ledgerIO.unobserve(e.target);
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll(".ledger-row").forEach((el) => ledgerIO.observe(el));
    observers.push(ledgerIO);

    // Big number — count up $1.18M (uses the existing .bignum-num + em.bignum-suffix structure)
    const numEl = document.querySelector<HTMLElement>(".proof-side .bignum-num");
    const suffixEl = document.querySelector<HTMLElement>(".proof-side .bignum-suffix");
    let bigIO: IntersectionObserver | null = null;
    if (numEl && suffixEl) {
      const originalText = numEl.textContent ?? "1.18";
      const originalSuffix = suffixEl.textContent ?? "M";
      numEl.textContent = "0.00";
      bigIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const dur = 1800;
            const start = performance.now();
            const target = 1.18;
            const tick = (t: number) => {
              const k = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - k, 3);
              const v = (target * eased).toFixed(2);
              numEl.textContent = v;
              if (k < 1) requestAnimationFrame(tick);
              else {
                numEl.textContent = originalText;
                suffixEl.textContent = originalSuffix;
              }
            };
            requestAnimationFrame(tick);
            bigIO?.unobserve(e.target);
          });
        },
        { threshold: 0.5 }
      );
      bigIO.observe(numEl);
      observers.push(bigIO);
    }

    return () => {
      clearInterval(tickInterval);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return null;
}
