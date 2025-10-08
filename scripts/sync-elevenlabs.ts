import { resolve } from "node:path";
import process from "node:process";

import { config as loadEnv } from "dotenv";
import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

const envPath = resolve(process.cwd(), ".env.local");
loadEnv({ path: envPath, override: false });
loadEnv({ override: false });

const apiKey = process.env.ELEVENLABS_API_KEY;
const agentId = process.env.ELEVENLABS_AGENT_ID;

if (!apiKey) {
  console.error("Missing ELEVENLABS_API_KEY. Add it to .env.local or export it before running the script.");
  process.exit(1);
}

if (!agentId) {
  console.error("Missing ELEVENLABS_AGENT_ID. Add it to .env.local or export it before running the script.");
  process.exit(1);
}

type ClientToolSpec = {
  name: string;
  description: string;
  expectsResponse?: boolean;
  responseTimeoutSecs?: number;
  parameters?: Record<string, unknown>;
};

const CONTACT_FIELDS = ["name", "email", "company", "website", "headcount", "timeline", "message"] as const;
const FOCUS_OPTIONS = [
  "Inbound qualification",
  "Customer support",
  "Customer success expansion",
  "Revenue operations",
  "Product feedback loops",
] as const;

const toolSpecs: ClientToolSpec[] = [
  {
    name: "openContactSection",
    description:
      "Scroll to the contact intake, expand it if collapsed, and optionally focus a specific field so the visitor can see the form you want to discuss.",
    expectsResponse: true,
    responseTimeoutSecs: 30,
    parameters: {
      type: "object",
      properties: {
        sectionId: {
          type: "string",
          description: "Optional DOM id of the contact section to open (defaults to #contact).",
        },
        focusField: {
          type: "string",
          description: "Contact field to focus after opening the form.",
          enum: CONTACT_FIELDS,
        },
      },
    },
  },
  {
    name: "updateContactField",
    description: "Populate a specific contact intake field with the provided value on the current page.",
    expectsResponse: true,
    responseTimeoutSecs: 30,
    parameters: {
      type: "object",
      required: ["field", "value"],
      properties: {
        field: {
          type: "string",
          enum: CONTACT_FIELDS,
          description: "Which contact form field to update.",
        },
        value: {
          type: "string",
          description: "The value to insert into the contact form field.",
        },
      },
    },
  },
  {
    name: "syncFocusAreas",
    description:
      "Toggle the multi-select contact intake focus chips so they match the provided selections exactly (items not provided are deselected).",
    expectsResponse: true,
    responseTimeoutSecs: 45,
    parameters: {
      type: "object",
      properties: {
        selections: {
          type: "array",
          description: "List of focus areas that should remain selected after the update.",
          items: {
            type: "string",
            description: "Focus area option to toggle on.",
            enum: FOCUS_OPTIONS,
          },
        },
      },
    },
  },
  {
    name: "submitContactForm",
    description: "Submit the visible contact intake form as if the visitor clicked the submit button.",
    expectsResponse: true,
    responseTimeoutSecs: 60,
  },
  {
    name: "toggleVoiceAgent",
    description:
      "Enable or disable the voice concierge for this visitor. When disabled the widget will stay muted until re-enabled.",
    expectsResponse: true,
    responseTimeoutSecs: 15,
    parameters: {
      type: "object",
      properties: {
        enabled: {
          type: "boolean",
          description: "Set to true to enable the voice agent, false to mute it for the remainder of the session.",
        },
      },
    },
  },
];

type ToolRecord = {
  id: string;
  name: string;
};

async function upsertClientTools(client: ElevenLabsClient): Promise<ToolRecord[]> {
  const existingToolsResponse = await client.conversationalAi.tools.list();
  const existing = new Map(
    existingToolsResponse.tools
      .filter((tool) => tool.toolConfig.type === "client")
      .map((tool) => [tool.toolConfig.name, tool]),
  );

  const ensured: ToolRecord[] = [];

  for (const spec of toolSpecs) {
    const request = {
      toolConfig: {
        type: "client" as const,
        name: spec.name,
        description: spec.description,
        expectsResponse: spec.expectsResponse ?? true,
        responseTimeoutSecs: spec.responseTimeoutSecs,
        parameters: spec.parameters,
      },
    };

    const current = existing.get(spec.name);
    if (current) {
      const updated = await client.conversationalAi.tools.update(current.id, request);
      ensured.push({ id: updated.id, name: spec.name });
      continue;
    }

    const created = await client.conversationalAi.tools.create(request);
    ensured.push({ id: created.id, name: spec.name });
  }

  return ensured;
}

async function ensureAgentToolAssignments(
  client: ElevenLabsClient,
  toolIds: string[],
): Promise<void> {
  const agent = await client.conversationalAi.agents.get(agentId);
  const existingPrompt = agent.conversationConfig?.agent?.prompt ?? {};
  const currentIds = new Set(existingPrompt.toolIds ?? []);
  let didChange = false;

  for (const id of toolIds) {
    if (!currentIds.has(id)) {
      currentIds.add(id);
      didChange = true;
    }
  }

  const nextToolIds = Array.from(currentIds);

  await client.conversationalAi.agents.update(agentId, {
    conversationConfig: {
      agent: {
        prompt: {
          toolIds: nextToolIds,
        },
      },
    },
    platformSettings: {
      overrides: {
        conversationConfigOverride: {
          conversation: {
            textOnly: false,
          },
        },
      },
    },
  });

  console.log(`Updated agent ${agentId} with ${nextToolIds.length} tool IDs and ensured voice mode.`);
}

async function main() {
  const client = new ElevenLabsClient({
    apiKey,
  });

  const tools = await upsertClientTools(client);
  console.log(
    `Ensured ${tools.length} client tool(s): ${tools.map((tool) => tool.name).join(", ")}`,
  );

  await ensureAgentToolAssignments(
    client,
    tools.map((tool) => tool.id),
  );

  console.log("ElevenLabs agent sync complete.");
}

main().catch((error) => {
  console.error("Failed to sync ElevenLabs configuration.");
  console.error(error);
  process.exit(1);
});
