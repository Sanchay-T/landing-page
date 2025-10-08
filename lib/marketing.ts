const fallbackCalEvent = "devonel/ai-automation-consultation";
const fallbackUrl = `https://cal.com/${fallbackCalEvent}`;

export const CTA_LINKS = {
  bookCall:
    (typeof process !== "undefined"
      ? process.env.NEXT_PUBLIC_BOOK_CALL_URL
      : undefined) || fallbackUrl,
};

export const CAL_EMBED_NAMESPACE =
  (typeof process !== "undefined"
    ? process.env.NEXT_PUBLIC_CAL_NAMESPACE
    : undefined) || "ai-automation-consultation";

export const CAL_EMBED_LINK =
  (typeof process !== "undefined"
    ? process.env.NEXT_PUBLIC_CAL_LINK
    : undefined) || fallbackCalEvent;

export const CAL_EMBED_ID = "schedule-consultation";
