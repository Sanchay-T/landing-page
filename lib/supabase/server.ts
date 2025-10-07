import { createClient, SupabaseClient } from "@supabase/supabase-js";

type ServiceRoleClient = SupabaseClient<unknown, "public", unknown>;

let client: ServiceRoleClient | null = null;

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

function createServiceRoleClient(): ServiceRoleClient {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Supabase service role environment variables are not configured.");
  }

  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
    global: {
      headers: {
        "X-Client-Info": "devonel-site-contact-handler",
      },
    },
  });
}

export function getServiceRoleClient() {
  if (client) {
    return client;
  }

  try {
    client = createServiceRoleClient();
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Supabase client unavailable:", error instanceof Error ? error.message : error);
    }
    client = null;
  }

  return client;
}

export type ContactSubmissionRecord = {
  name: string;
  email: string;
  company: string;
  website: string | null;
  headcount: string;
  timeline: string;
  focus: string[];
  message: string;
  submitted_at: string;
  ip_address: string | null;
  user_agent: string | null;
};

export async function storeContactSubmission(payload: ContactSubmissionRecord) {
  const supabase = getServiceRoleClient();
  if (!supabase) {
    return { error: null } as const;
  }

  const { error } = await supabase.from("contact_submissions").insert(payload);
  return { error } as const;
}
