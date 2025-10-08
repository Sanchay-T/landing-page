"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

import {
  CAL_EMBED_ID,
  CAL_EMBED_LINK,
  CAL_EMBED_NAMESPACE,
} from "@/lib/marketing";
import { cn } from "@/lib/utils";

interface CalInlineEmbedProps {
  className?: string;
  id?: string;
  frame?: boolean;
}

export function CalInlineEmbed({
  className,
  id = CAL_EMBED_ID,
  frame = true,
}: CalInlineEmbedProps) {
  useEffect(() => {
    let mounted = true;

    (async () => {
      const cal = await getCalApi({ namespace: CAL_EMBED_NAMESPACE });
      if (!mounted) return;

      cal("ui", {
        hideEventTypeDetails: false,
        layout: "column_view",
        theme: "dark",
        styles: {
          branding: {
            brandColor: "rgb(var(--brand-accent-rgb))",
          },
        },
      });
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div
      id={id}
      className={cn(
        "relative w-full overflow-hidden",
        frame
          ? "rounded-[2rem] border border-white/12 bg-[color:rgba(8,8,16,0.85)] p-6 shadow-[0_35px_140px_-40px_rgba(0,0,0,0.65)] backdrop-blur-xl"
          : "rounded-[1.5rem] border border-white/10 bg-[color:rgba(6,6,14,0.92)] p-4 shadow-[0_25px_120px_-30px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-6",
        className
      )}
    >
      <Cal
        namespace={CAL_EMBED_NAMESPACE}
        calLink={CAL_EMBED_LINK}
        style={{
          width: "100%",
          height: "100%",
          minHeight: frame ? "520px" : "420px",
          overflow: "auto",
        }}
        config={{
          layout: "column_view",
        }}
      />
    </div>
  );
}
