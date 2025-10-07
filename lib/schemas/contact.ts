import { z } from "zod";

export const HEADCOUNT_OPTIONS = ["1-10", "11-50", "51-200", "200+"] as const;
export const TIMELINE_OPTIONS = ["0-4 weeks", "1-3 months", "3+ months"] as const;
export const FOCUS_AREAS = [
  "Inbound qualification",
  "Customer support",
  "Customer success expansion",
  "Revenue operations",
  "Product feedback loops",
] as const;

const optionalWebsiteSchema = z.preprocess(
  (value) => {
    if (typeof value !== "string") return value;
    const trimmed = value.trim();
    return trimmed === "" ? undefined : trimmed;
  },
  z.string().url("Enter a valid URL").optional(),
);

export const contactFormSchema = z.object({
  name: z
    .string({ required_error: "Tell us who we’ll be speaking with." })
    .trim()
    .min(2, "Tell us who we’ll be speaking with.")
    .max(96, "Keep it under 96 characters."),
  email: z
    .string({ required_error: "We need an email to respond." })
    .trim()
    .email("Enter a valid email."),
  company: z
    .string({ required_error: "Company name helps us prepare context." })
    .trim()
    .min(2, "Company name helps us prepare context.")
    .max(96, "Keep it under 96 characters."),
  website: optionalWebsiteSchema,
  headcount: z.enum(HEADCOUNT_OPTIONS, {
    required_error: "Select a team size.",
  }),
  timeline: z.enum(TIMELINE_OPTIONS, {
    required_error: "Select your activation timeline.",
  }),
  focus: z
    .array(z.enum(FOCUS_AREAS))
    .min(1, "Pick at least one area where you need help.")
    .max(FOCUS_AREAS.length, "Pick the priorities that matter most."),
  message: z
    .string({ required_error: "Share a bit more context so we can prepare." })
    .trim()
    .min(24, "Share a bit more context so we can prepare."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
