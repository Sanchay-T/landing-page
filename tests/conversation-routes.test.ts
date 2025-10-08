import assert from "node:assert/strict";

import { POST as requestConversationToken } from "@/app/api/conversation-token/route";
import { POST as logConversationEvent } from "@/app/api/conversations/route";

async function testTokenSuccess() {
  const originalFetch = global.fetch;
  process.env.ELEVENLABS_API_KEY = "test-key";
  process.env.ELEVENLABS_AGENT_ID = "agent_123";

  global.fetch = (async (url: RequestInfo | URL) => {
    assert.equal(
      String(url),
      "https://api.elevenlabs.io/v1/convai/conversation/token?agent_id=agent_123",
      "token endpoint invoked",
    );
    return new Response(JSON.stringify({ token: "token-abc" }), { status: 200 });
  }) as typeof fetch;

  try {
    const response = await requestConversationToken(
      new Request("http://localhost/api/conversation-token", { method: "POST" }),
    );
    assert.equal(response.status, 200, "token request succeeds");
    const data = (await response.json()) as { token?: string };
    assert.equal(data.token, "token-abc");
  } finally {
    global.fetch = originalFetch;
    delete process.env.ELEVENLABS_API_KEY;
    delete process.env.ELEVENLABS_AGENT_ID;
  }
}

async function testTokenFailure() {
  const originalFetch = global.fetch;
  process.env.ELEVENLABS_API_KEY = "test-key";
  process.env.ELEVENLABS_AGENT_ID = "agent_123";

  global.fetch = (async () =>
    new Response(JSON.stringify({ error: "not allowed" }), { status: 403 })) as typeof fetch;

  try {
    const response = await requestConversationToken(
      new Request("http://localhost/api/conversation-token", { method: "POST" }),
    );
    assert.equal(response.status, 502, "token failure returns 502");
  } finally {
    global.fetch = originalFetch;
    delete process.env.ELEVENLABS_API_KEY;
    delete process.env.ELEVENLABS_AGENT_ID;
  }
}

async function testLogConversationSuccess() {
  const originalFetch = global.fetch;
  process.env.SUPABASE_URL = "https://example.supabase.co";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "service-role-key";

  const calls: Array<{ url: string; options?: RequestInit }> = [];
  global.fetch = (async (url: RequestInfo | URL, options?: RequestInit) => {
    calls.push({ url: String(url), options });
    return new Response(JSON.stringify([{ id: "session-1" }]), { status: 201 });
  }) as typeof fetch;

  const body = {
    sessionId: "session-1",
    status: "completed",
    lead: {
      name: "Jordan",
      email: "jordan@example.com",
    },
    summary: "Qualified inbound lead",
    transcript: [
      { role: "agent", content: "Hello" },
      { role: "user", content: "Need help" },
    ],
    formDraft: {
      headcount: "1-10",
      focus: ["Inbound qualification"],
    },
  };

  try {
    const response = await logConversationEvent(
      new Request("http://localhost/api/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }),
    );
    assert.equal(response.status, 200, "conversation logged");
    assert.equal(calls.length, 1, "one supabase call");
    const [call] = calls;
    assert.equal(
      call.url,
      "https://example.supabase.co/rest/v1/conversation_sessions?on_conflict=session_id",
      "conversation table endpoint",
    );
    const headers = new Headers(call.options?.headers);
    assert.equal(headers.get("apikey"), "service-role-key");
    assert.equal(headers.get("Authorization"), "Bearer service-role-key");
  } finally {
    global.fetch = originalFetch;
    delete process.env.SUPABASE_URL;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;
  }
}

async function testLogConversationValidation() {
  const response = await logConversationEvent(
    new Request("http://localhost/api/conversations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sessionId: "" }),
    }),
  );
  assert.equal(response.status, 422, "invalid payload rejected");
}

async function testLogConversationFailure() {
  const originalFetch = global.fetch;
  process.env.SUPABASE_URL = "https://example.supabase.co";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "service-role-key";

  global.fetch = (async () => new Response("", { status: 500 })) as typeof fetch;

  const body = {
    sessionId: "session-1",
    status: "completed",
    lead: {
      name: "Jordan",
      email: "jordan@example.com",
    },
  };

  try {
    const response = await logConversationEvent(
      new Request("http://localhost/api/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }),
    );
    assert.equal(response.status, 502, "supabase error surfaced");
  } finally {
    global.fetch = originalFetch;
    delete process.env.SUPABASE_URL;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;
  }
}

async function run() {
  await testTokenSuccess();
  await testTokenFailure();
  await testLogConversationSuccess();
  await testLogConversationValidation();
  await testLogConversationFailure();
  console.log("conversation route tests passed");
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
