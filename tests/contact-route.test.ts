import assert from "node:assert/strict";

import { POST } from "@/app/api/contact/route";
import {
  FOCUS_AREAS,
  HEADCOUNT_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/schemas/contact";

async function invokeContactRoute(body: unknown) {
  const request = new Request("http://localhost/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return POST(request);
}

async function testValidSubmission() {
  const validPayload = {
    name: "Taylor Rivera",
    email: "taylor@example.com",
    company: "Devonel",
    website: "https://devonel.ai",
    headcount: HEADCOUNT_OPTIONS[0],
    timeline: TIMELINE_OPTIONS[0],
    focus: [FOCUS_AREAS[0], FOCUS_AREAS[1], FOCUS_AREAS[0]],
    message: "We need a pod to automate inbound lead filtering and scoring.",
  };

  const response = await invokeContactRoute(validPayload);
  assert.equal(response.status, 200, "valid submission should succeed");
  const data = (await response.json()) as { message?: string };
  assert.equal(
    data.message,
    "Thanks! Our operator team will reach out shortly.",
    "valid submission returns thank-you message",
  );
}

async function testValidationError() {
  const invalidPayload = {
    name: "A",
    email: "not-an-email",
    company: "D",
    website: "bad-url",
    headcount: "unknown",
    timeline: TIMELINE_OPTIONS[0],
    focus: [],
    message: "Too short",
  };

  const response = await invokeContactRoute(invalidPayload);
  assert.equal(response.status, 422, "invalid submission returns 422");
  const data = (await response.json()) as { error?: string; issues?: unknown };
  assert.equal(data.error, "Validation failed.");
  assert.ok(Array.isArray(data.issues) && data.issues.length > 0, "issues returned");
}

async function testSupabasePersistence() {
  const validPayload = {
    name: "Taylor Rivera",
    email: "taylor@example.com",
    company: "Devonel",
    website: "https://devonel.ai",
    headcount: HEADCOUNT_OPTIONS[0],
    timeline: TIMELINE_OPTIONS[0],
    focus: [FOCUS_AREAS[0]],
    message: "We need a pod to automate inbound lead filtering and scoring.",
  };

  const originalFetch = global.fetch;
  const calls: Array<{ url: string; options?: RequestInit }> = [];
  const SUPABASE_URL = "https://example.supabase.co";
  const SUPABASE_KEY = "service-role-key";
  process.env.SUPABASE_URL = SUPABASE_URL;
  process.env.SUPABASE_SERVICE_ROLE_KEY = SUPABASE_KEY;

  global.fetch = (async (url: RequestInfo | URL, options?: RequestInit) => {
    calls.push({ url: String(url), options });
    return new Response(JSON.stringify([{ id: 42 }]), { status: 201 });
  }) as typeof fetch;

  try {
    const response = await invokeContactRoute(validPayload);
    assert.equal(response.status, 200, "valid submission should succeed with Supabase");
    assert.equal(calls.length, 1, "one request sent to Supabase");
    const [call] = calls;
    assert.equal(call.url, `${SUPABASE_URL}/rest/v1/contact_intakes`, "contact intakes endpoint used");
    assert.equal(call.options?.method, "POST");
    const headers = new Headers(call.options?.headers);
    assert.equal(headers.get("apikey"), SUPABASE_KEY, "apikey header set");
    assert.equal(headers.get("Authorization"), `Bearer ${SUPABASE_KEY}`, "auth header set");
  } finally {
    global.fetch = originalFetch;
    delete process.env.SUPABASE_URL;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;
  }
}

async function testSupabaseFailure() {
  const validPayload = {
    name: "Taylor Rivera",
    email: "taylor@example.com",
    company: "Devonel",
    website: "https://devonel.ai",
    headcount: HEADCOUNT_OPTIONS[0],
    timeline: TIMELINE_OPTIONS[0],
    focus: [FOCUS_AREAS[0]],
    message: "We need a pod to automate inbound lead filtering and scoring.",
  };

  const originalFetch = global.fetch;
  process.env.SUPABASE_URL = "https://example.supabase.co";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "service-role-key";

  global.fetch = (async () =>
    new Response(JSON.stringify({ message: "not allowed" }), { status: 401 })) as typeof fetch;

  try {
    const response = await invokeContactRoute(validPayload);
    assert.equal(response.status, 502, "supabase failure should bubble as 502");
    const data = (await response.json()) as { error?: string };
    assert.equal(
      data.error,
      "We couldn't store your request just yet. Our operators have been notified.",
    );
  } finally {
    global.fetch = originalFetch;
    delete process.env.SUPABASE_URL;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;
  }
}

async function run() {
  await testValidSubmission();
  await testValidationError();
  await testSupabasePersistence();
  await testSupabaseFailure();
  console.log("contact route tests passed");
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
