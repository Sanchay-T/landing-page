import { z } from "zod";

export const conversationTranscriptEntrySchema = z.object({
  role: z.enum(["agent", "user", "system"]),
  content: z.string().trim().min(1),
  timestamp: z.string().optional(),
});

export const conversationLeadSchema = z
  .object({
    name: z.string().trim().min(1).optional(),
    email: z.string().trim().email().optional(),
    company: z.string().trim().min(1).optional(),
    phone: z.string().trim().min(6).optional(),
    intent: z.string().trim().min(1).optional(),
  })
  .optional();

export const conversationEventSchema = z.object({
  sessionId: z.string().trim().min(1, "Session ID is required"),
  status: z
    .enum(["initiated", "in_progress", "completed", "abandoned", "handoff"])
    .default("in_progress")
    .optional(),
  summary: z.string().trim().optional(),
  lead: conversationLeadSchema,
  transcript: z.array(conversationTranscriptEntrySchema).optional(),
  formDraft: z.record(z.any()).optional(),
  metadata: z.record(z.any()).optional(),
});

export type ConversationEventInput = z.infer<typeof conversationEventSchema>;
