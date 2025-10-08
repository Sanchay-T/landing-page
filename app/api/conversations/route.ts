import { NextResponse } from "next/server";
import { z } from "zod";

import { conversationEventSchema } from "@/lib/schemas/conversation";

export async function POST(request: Request) {
  try {
    const raw = await request.json();
    const parsed = conversationEventSchema.parse(raw);

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      return NextResponse.json({ status: "skipped" }, { status: 200 });
    }

    const payload = {
      session_id: parsed.sessionId,
      status: parsed.status ?? "in_progress",
      summary: parsed.summary ?? null,
      lead_name: parsed.lead?.name ?? null,
      lead_email: parsed.lead?.email ?? null,
      lead_company: parsed.lead?.company ?? null,
      lead_phone: parsed.lead?.phone ?? null,
      lead_intent: parsed.lead?.intent ?? null,
      transcript: parsed.transcript ?? null,
      form_draft: parsed.formDraft ?? null,
      metadata: parsed.metadata ?? null,
      last_event_at: new Date().toISOString(),
    };

    const response = await fetch(`${supabaseUrl}/rest/v1/conversation_sessions?on_conflict=session_id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseServiceRoleKey,
        Authorization: `Bearer ${supabaseServiceRoleKey}`,
        Prefer: "resolution=merge-duplicates,return=representation",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Supabase conversation persistence failed", errorBody);
      return NextResponse.json(
        {
          error: "We couldn’t save the conversation notes. Please refresh and try again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ status: "stored" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed.", issues: error.issues }, { status: 422 });
    }

    console.error("Conversation logging failed", error);
    return NextResponse.json(
      { error: "Unexpected error while saving the conversation." },
      { status: 500 },
    );
  }
}
