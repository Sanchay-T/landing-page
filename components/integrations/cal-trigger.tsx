"use client";

import { getCalApi } from "@calcom/embed-react";
import { cloneElement, ReactElement, useEffect } from "react";

import { CAL_NAMESPACE, CTA_LINKS } from "@/lib/marketing";

type CalConfig = {
  layout?: "month_view" | "week_view" | "column_view" | "docked";
  theme?: "light" | "dark";
  [key: string]: unknown;
};

export interface CalTriggerProps {
  children: ReactElement<Record<string, unknown>>;
  link?: string;
  namespace?: string;
  config?: CalConfig;
}

export function CalTrigger({
  children,
  link = CTA_LINKS.bookCall,
  namespace = CAL_NAMESPACE,
  config,
}: CalTriggerProps) {
  useEffect(() => {
    let isMounted = true;

    (async () => {
      const cal = await getCalApi();
      if (!isMounted) return;

      cal("ui", {
        theme: "dark",
        styles: {
          branding: {
            brandColor: "rgb(var(--brand-accent-rgb))",
          },
        },
      });
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const mergedConfig = {
    layout: "month_view" as const,
    theme: "dark" as const,
    ...config,
  } satisfies CalConfig;

  const dataAttributes: Record<string, unknown> = {
    "data-cal-namespace": namespace,
    "data-cal-link": link,
    "data-cal-config": JSON.stringify(mergedConfig),
  };

  return cloneElement(children, dataAttributes);
}
