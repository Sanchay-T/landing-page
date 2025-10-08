import { NextResponse } from "next/server";

const ELEVENLABS_TOKEN_ENDPOINT = "https://api.elevenlabs.io/v1/convai/conversation/token" as const;

export async function POST(_request: Request) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const agentId = process.env.ELEVENLABS_AGENT_ID;

  if (!apiKey || !agentId) {
    return NextResponse.json(
      {
        error: "Conversational agent is not configured. Please add ELEVENLABS_API_KEY and ELEVENLABS_AGENT_ID.",
      },
      { status: 500 },
    );
  }

  const url = new URL(ELEVENLABS_TOKEN_ENDPOINT);
  url.searchParams.set("agent_id", agentId);

  try {
    const response = await fetch(url.toString(), {
      headers: {
        "xi-api-key": apiKey,
      },
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Failed to retrieve ElevenLabs conversation token", errorBody);
      return NextResponse.json(
        { error: "We couldn’t initialize the voice agent just yet. Please try again." },
        { status: 502 },
      );
    }

    const data = (await response.json()) as { token?: string };

    if (!data?.token) {
      console.error("ElevenLabs token response missing token", data);
      return NextResponse.json(
        { error: "We couldn’t initialize the voice agent just yet. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ token: data.token });
  } catch (error) {
    console.error("Failed to contact ElevenLabs", error);
    return NextResponse.json(
      { error: "We couldn’t initialize the voice agent just yet. Please try again." },
      { status: 502 },
    );
  }
}
