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

async function run() {
  await testValidSubmission();
  await testValidationError();
  console.log("contact route tests passed");
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
