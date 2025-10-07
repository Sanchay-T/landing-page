const fallbackUrl = "https://cal.com/devonel/strategy-call";

export const CTA_LINKS = {
  bookCall:
    (typeof process !== "undefined"
      ? process.env.NEXT_PUBLIC_BOOK_CALL_URL
      : undefined) || fallbackUrl,
};

export const CAL_NAMESPACE = "devonel-book-call";
