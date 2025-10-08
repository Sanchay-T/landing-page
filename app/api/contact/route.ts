import { NextResponse } from "next/server";
import { z } from "zod";

import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/schemas/contact";

export async function POST(request: Request) {
  try {
    const raw = await request.json();
    const parsed = contactFormSchema.parse(raw);

    const submission: ContactFormValues & {
      submittedAt: string;
      ipAddress: string | null;
      userAgent: string | null;
    } = {
      ...parsed,
      focus: Array.from(new Set(parsed.focus)),
      submittedAt: new Date().toISOString(),
      ipAddress: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null,
      userAgent: request.headers.get("user-agent"),
    };

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseServiceRoleKey) {
      const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/contact_intakes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseServiceRoleKey,
          Authorization: `Bearer ${supabaseServiceRoleKey}`,
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          ...submission,
          focus: submission.focus,
        }),
      });

      if (!supabaseResponse.ok) {
        const errorBody = await supabaseResponse.text();
        console.error("Supabase contact persistence failed", errorBody);
        return NextResponse.json(
          { error: "We couldn't store your request just yet. Our operators have been notified." },
          { status: 502 },
        );
      }
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.error("Contact webhook failed", errorBody);
        return NextResponse.json(
          { error: "We couldn't deliver your request. Please try again soon." },
          { status: 502 },
        );
      }
    }

    return NextResponse.json({
      message: "Thanks! Our operator team will reach out shortly.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed.", issues: error.issues },
        { status: 422 },
      );
    }

    console.error("Contact form submission failed", error);
    return NextResponse.json(
      {
        error: "We hit a snag submitting your request. Give it another try in a moment.",
      },
      { status: 500 },
    );
  }
}
