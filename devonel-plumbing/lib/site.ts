/**
 * Site-wide facts and the one contact decision every CTA reads from.
 *
 * Source of truth for the strings here is `docs/goal/COPY.md`, section
 * "Contact plumbing" and section "Constants". Nothing in this file is invented:
 * if a value is not in COPY.md it is not here, and no section may hardcode a
 * contact channel of its own.
 *
 * The whatsapp field is the only open item. It is empty until Sanchay supplies
 * a publishable E.164 number, and every surface already reads correctly in that
 * state, so setting the value is the only step left.
 */

export const site = {
  name: "Devonel",
  url: "https://www.devonel.com",
  /** COPY.md section 10 sign-off line, sourced to brief 9.4. */
  positioning: "AI product studio and growth partner for owner-led brands",
  /** COPY.md section 10 location line, sourced to brief 9.7. */
  locations: ["Dubai", "Mumbai"],
  contact: {
    /** COPY.md "Constants": the business mailbox already used with clients. */
    email: "sanchay@devonel.com",
    /**
     * E.164 digits only, no "+", no spaces, e.g. "971500000000".
     * Empty until configured. No publishable number exists in any source, so
     * none is guessed, and while this is empty no page names a chat channel.
     */
    whatsapp: "",
    /** COPY.md: "Exact mailto subject to prefill everywhere". */
    mailSubject: "Brief for Devonel",
  },
} as const;

/** Which channel the primary CTA resolves to right now. */
export type ContactChannel = "whatsapp" | "email";

export function contactChannel(): ContactChannel {
  return site.contact.whatsapp ? "whatsapp" : "email";
}

/**
 * The href behind every primary CTA on the site.
 *
 * Number set: WhatsApp, with the brief subject prefilled as the message.
 * Number empty (today): mail to the studio with the subject prefilled.
 */
export function contactHref(): string {
  const { whatsapp, email, mailSubject } = site.contact;
  const text = encodeURIComponent(mailSubject);
  return whatsapp ? `https://wa.me/${whatsapp}?text=${text}` : `mailto:${email}?subject=${text}`;
}

/**
 * The label on every primary CTA.
 *
 * COPY.md, "Canonical primary CTA": the wording is channel-neutral on purpose
 * so the same three words are correct whether the button opens WhatsApp or
 * mail. It is a function, not a constant, so a later change of rule stays a
 * one-line edit here instead of a sweep through every section.
 */
export function contactLabel(): string {
  return "Send your brief";
}
