import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { contactChannel, contactHref } from "@/lib/site";

type ContactCTAProps = Omit<ComponentPropsWithoutRef<"a">, "href" | "children"> & {
  className?: string;
  children: ReactNode;
};

/**
 * The one anchor every primary CTA on the site is built from.
 *
 * Headless on purpose: it carries no styling, no layout and no label. Each
 * variation passes its own class and its own children so a broadsheet
 * classified box and a terminal caret prompt can be the same link. The href
 * comes from `lib/site.ts`, so switching the studio from mail to WhatsApp is
 * one config edit and no section changes.
 */
export function ContactCTA({ className, children, ...rest }: ContactCTAProps) {
  const channel = contactChannel();

  return (
    <a
      href={contactHref()}
      className={className}
      data-contact-channel={channel}
      // wa.me leaves the site; mailto hands off to the mail client in place.
      {...(channel === "whatsapp" ? { target: "_blank", rel: "noopener noreferrer" } : null)}
      {...rest}
    >
      {children}
    </a>
  );
}
