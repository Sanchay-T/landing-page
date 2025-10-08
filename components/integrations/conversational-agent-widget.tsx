"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Mode, Role, Status } from "@elevenlabs/client";
import { Conversation } from "@elevenlabs/client";
import { Loader2, MessageCircle, Mic, MicOff, PhoneCall, PhoneOff, Save, Sparkles, X } from "lucide-react";
import { toast } from "sonner";

import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { QUALIFIER_STORAGE_KEY } from "@/lib/marketing";
import { HEADCOUNT_OPTIONS, TIMELINE_OPTIONS } from "@/lib/schemas/contact";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "devonel-conversation-widget";

type LeadDraft = {
  name: string;
  email: string;
  company: string;
  intent: string;
  headcount: string;
  timeline: string;
  notes: string;
};

type TranscriptEntry = {
  id: string;
  role: "agent" | "user";
  content: string;
  timestamp: string;
};

const DEFAULT_LEAD: LeadDraft = {
  name: "",
  email: "",
  company: "",
  intent: "",
  headcount: "",
  timeline: "",
  notes: "",
};

type StoredState = {
  sessionId: string;
  transcript: TranscriptEntry[];
  lead: LeadDraft;
  startedAt?: string | null;
};

function hasLeadSignal(lead: LeadDraft) {
  return Boolean(
    lead.name ||
      lead.email ||
      lead.company ||
      lead.intent ||
      lead.headcount ||
      lead.timeline ||
      lead.notes,
  );
}

function extractLeadClues(message: string, lead: LeadDraft): Partial<LeadDraft> | null {
  const result: Partial<LeadDraft> = {};
  const lower = message.toLowerCase();

  if (!lead.email) {
    const emailMatch = message.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
    if (emailMatch) {
      result.email = emailMatch[0].toLowerCase();
    }
  }

  if (!lead.name) {
    const nameMatch = message.match(/(?:my name is|i'm|i am|this is)\s+([a-zA-Z]+(?:\s+[a-zA-Z\-']+)?)/i);
    if (nameMatch) {
      result.name = nameMatch[1].replace(/[^a-zA-Z\s'-]/g, "").trim();
    }
  }

  if (!lead.company) {
    const companyMatch = message.match(/(?:from|at)\s+([A-Z][A-Za-z0-9&'\-\s]{2,})/);
    if (companyMatch) {
      const company = companyMatch[1].trim();
      if (company && !company.toLowerCase().includes("email")) {
        result.company = company;
      }
    }
  }

  if (!lead.headcount) {
    const headcountMatch = message.match(/(1-10|11-50|51-200|200\+)/);
    if (headcountMatch && HEADCOUNT_OPTIONS.includes(headcountMatch[1] as (typeof HEADCOUNT_OPTIONS)[number])) {
      result.headcount = headcountMatch[1];
    }
  }

  if (!lead.timeline) {
    const timelineMatch = lower.match(/(0-4 weeks|1-3 months|3\+ months|next month|next week|this quarter)/);
    if (timelineMatch) {
      const phrase = timelineMatch[1];
      if (phrase.includes("0-4 weeks")) result.timeline = "0-4 weeks";
      else if (phrase.includes("1-3 months") || phrase.includes("next month")) result.timeline = "1-3 months";
      else result.timeline = "3+ months";
    }
  }

  if (!lead.intent) {
    const intentMatch = message.match(/(?:looking for|need|needing|interested in|evaluate)\s+([^\.\n]+)/i);
    if (intentMatch) {
      result.intent = intentMatch[1].trim();
    }
  }

  if (!result.notes && message.trim()) {
    const nextNotes = lead.notes ? `${lead.notes}\n${message.trim()}` : message.trim();
    result.notes = nextNotes.split("\n").slice(-6).join("\n");
  }

  return Object.keys(result).length > 0 ? result : null;
}

function safeParseStoredState(value: string | null): StoredState | null {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value) as StoredState;
    if (parsed && parsed.sessionId) {
      return parsed;
    }
    return null;
  } catch (error) {
    console.warn("Failed to parse stored conversation state", error);
    return null;
  }
}

export function ConversationalAgentWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const [status, setStatus] = useState<Status>("disconnected");
  const [mode, setMode] = useState<Mode>("listening");
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);
  const [lead, setLead] = useState<LeadDraft>(DEFAULT_LEAD);
  const [isMuted, setIsMuted] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  const [isEnding, setIsEnding] = useState(false);
  const [isPersisting, setIsPersisting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [autoStartAttempted, setAutoStartAttempted] = useState(false);

  const conversationRef = useRef<Conversation | null>(null);
  const transcriptRef = useRef<TranscriptEntry[]>([]);
  const leadRef = useRef<LeadDraft>(DEFAULT_LEAD);
  const sessionIdRef = useRef<string | null>(null);
  const startedAtRef = useRef<string | null>(null);
  const autoStartTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const leadHasSignal = useMemo(() => hasLeadSignal(lead), [lead]);

  const persistSessionState = useCallback(
    (entries: TranscriptEntry[], draft: LeadDraft) => {
      if (typeof window === "undefined") return;
      if (!sessionIdRef.current) {
        sessionIdRef.current = crypto.randomUUID();
      }
      const payload: StoredState = {
        sessionId: sessionIdRef.current,
        transcript: entries,
        lead: draft,
        startedAt: startedAtRef.current,
      };
      try {
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      } catch (error) {
        console.warn("Unable to persist conversation widget state", error);
      }
    },
    [],
  );

  const hydrateFromStorage = useCallback(() => {
    if (typeof window === "undefined") return;
    const stored = safeParseStoredState(window.sessionStorage.getItem(STORAGE_KEY));
    if (stored) {
      sessionIdRef.current = stored.sessionId || crypto.randomUUID();
      startedAtRef.current = stored.startedAt ?? null;
      transcriptRef.current = stored.transcript ?? [];
      leadRef.current = stored.lead ?? DEFAULT_LEAD;
      setTranscript(stored.transcript ?? []);
      setLead(stored.lead ?? DEFAULT_LEAD);
    } else {
      sessionIdRef.current = crypto.randomUUID();
      startedAtRef.current = null;
    }
  }, []);

  const updateLead = useCallback((update: Partial<LeadDraft>) => {
    setLead((prev) => {
      const next = { ...prev, ...update };
      leadRef.current = next;
      return next;
    });
  }, []);

  const addTranscriptEntry = useCallback(
    (entry: Omit<TranscriptEntry, "id" | "timestamp"> & { timestamp?: string }) => {
      setTranscript((prev) => {
        const nextEntry: TranscriptEntry = {
          id: crypto.randomUUID(),
          role: entry.role,
          content: entry.content,
          timestamp: entry.timestamp ?? new Date().toISOString(),
        };
        const next = [...prev, nextEntry].slice(-200);
        transcriptRef.current = next;
        persistSessionState(next, leadRef.current);
        return next;
      });
    },
    [persistSessionState],
  );

  const persistQualifierContext = useCallback(
    (draft: LeadDraft) => {
      if (typeof window === "undefined") return;
      const context: Record<string, string> = {};
      if (draft.email) context.email = draft.email;
      if (draft.headcount && HEADCOUNT_OPTIONS.includes(draft.headcount as (typeof HEADCOUNT_OPTIONS)[number])) {
        context.teamSize = draft.headcount;
      }
      if (draft.intent) context.priority = draft.intent;
      if (Object.keys(context).length > 0) {
        try {
          window.sessionStorage.setItem(QUALIFIER_STORAGE_KEY, JSON.stringify(context));
        } catch (error) {
          console.warn("Unable to persist qualifier context", error);
        }
      }
    },
    [],
  );

  useEffect(() => {
    hydrateFromStorage();
  }, [hydrateFromStorage]);

  useEffect(() => {
    persistSessionState(transcriptRef.current, leadRef.current);
    persistQualifierContext(leadRef.current);
  }, [lead, persistQualifierContext, persistSessionState]);

  useEffect(() => {
    return () => {
      if (autoStartTimerRef.current) {
        clearTimeout(autoStartTimerRef.current);
      }
      if (conversationRef.current) {
        conversationRef.current.endSession().catch(() => undefined);
      }
    };
  }, []);

  const persistConversation = useCallback(
    async (statusUpdate: "initiated" | "in_progress" | "completed" | "abandoned" | "handoff") => {
      if (!sessionIdRef.current) return;
      if (transcriptRef.current.length === 0 && !hasLeadSignal(leadRef.current)) {
        return;
      }

      setIsPersisting(true);
      try {
        const response = await fetch("/api/conversations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId: sessionIdRef.current,
            status: statusUpdate,
            summary: leadRef.current.intent || transcriptRef.current.slice(-1)[0]?.content || null,
            lead: {
              name: leadRef.current.name || undefined,
              email: leadRef.current.email || undefined,
              company: leadRef.current.company || undefined,
              intent: leadRef.current.intent || undefined,
              headcount: leadRef.current.headcount || undefined,
              timeline: leadRef.current.timeline || undefined,
            },
            formDraft: {
              notes: leadRef.current.notes || undefined,
              headcount: leadRef.current.headcount || undefined,
              timeline: leadRef.current.timeline || undefined,
            },
            transcript: transcriptRef.current,
            metadata: {
              source: "landing-page",
              startedAt: startedAtRef.current,
              endedAt: new Date().toISOString(),
            },
          }),
        });

        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          throw new Error(typeof data?.error === "string" ? data.error : "Failed to store conversation");
        }

        if (statusUpdate === "completed") {
          toast.success("Voice concierge saved to operator queue.");
          if (typeof window !== "undefined") {
            window.sessionStorage.removeItem(STORAGE_KEY);
          }
          sessionIdRef.current = crypto.randomUUID();
          startedAtRef.current = null;
          transcriptRef.current = [];
          setTranscript([]);
        } else {
          toast.info("Conversation snapshot synced.");
        }
      } catch (error) {
        console.error("Failed to persist conversation", error);
        toast.error(
          error instanceof Error ? error.message : "We couldn’t sync the conversation. Please try again.",
        );
      } finally {
        setIsPersisting(false);
      }
    },
    [lead],
  );

  const stopConversation = useCallback(
    async (statusUpdate: "completed" | "abandoned") => {
      if (isEnding) return;
      setIsEnding(true);
      setErrorMessage(null);
      try {
        if (conversationRef.current) {
          await conversationRef.current.endSession();
        }
      } catch (error) {
        console.warn("Failed to end ElevenLabs session", error);
      } finally {
        conversationRef.current = null;
        setStatus("disconnected");
        setMode("listening");
        setIsMuted(false);
        await persistConversation(statusUpdate);
        setIsEnding(false);
      }
    },
    [isEnding, persistConversation],
  );

  const handleMessage = useCallback(
    ({ message, source }: { message: string; source: Role }) => {
      if (!message?.trim()) return;
      const role = source === "ai" ? "agent" : "user";
      addTranscriptEntry({ role, content: message.trim() });
      if (role === "user") {
        const clues = extractLeadClues(message, leadRef.current);
        if (clues) {
          updateLead(clues);
        }
      }
    },
    [addTranscriptEntry, updateLead],
  );

  const startConversation = useCallback(
    async (triggeredByUser: boolean) => {
      if (isStarting || conversationRef.current) return;
      setIsStarting(true);
      setErrorMessage(null);
      if (!sessionIdRef.current) {
        sessionIdRef.current = crypto.randomUUID();
      }
      if (!startedAtRef.current) {
        startedAtRef.current = new Date().toISOString();
      }
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        const response = await fetch("/api/conversation-token", { method: "POST" });
        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          throw new Error(
            typeof data?.error === "string"
              ? data.error
              : "We couldn’t initialise the voice agent. Please try again.",
          );
        }
        const { token } = (await response.json().catch(() => ({}))) as { token?: string };
        if (!token) {
          throw new Error("Missing token from voice agent.");
        }

        const conversation = await Conversation.startSession({
          connectionType: "webrtc",
          conversationToken: token,
          onStatusChange: ({ status: nextStatus }) => setStatus(nextStatus),
          onModeChange: ({ mode: nextMode }) => setMode(nextMode),
          onMessage: handleMessage,
          onDisconnect: () => {
            setStatus("disconnected");
            setMode("listening");
            conversationRef.current = null;
            persistConversation("completed").catch(() => undefined);
          },
          onError: (message) => {
            setErrorMessage(message);
            toast.error(message);
          },
        });
        conversationRef.current = conversation;
        setStatus("connected");
        setMode("listening");
        setIsMuted(false);
        await persistConversation("initiated");
        toast.success("Operator concierge connected.");
      } catch (error) {
        console.error("Failed to start ElevenLabs conversation", error);
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Microphone permissions blocked. Please enable access and try again.",
        );
        if (!triggeredByUser) {
          toast.message(
            "Tap ‘Start concierge’ so the voice operator can greet you as soon as you’re ready.",
          );
        } else {
          toast.error(
            error instanceof Error
              ? error.message
              : "We couldn’t start the concierge just yet. Please retry.",
          );
        }
      } finally {
        setIsStarting(false);
        setAutoStartAttempted(true);
      }
    },
    [handleMessage, persistConversation, isStarting],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (autoStartAttempted) return;
    autoStartTimerRef.current = setTimeout(() => {
      startConversation(false).catch(() => undefined);
    }, 1600);
  }, [autoStartAttempted, startConversation]);

  const toggleMute = useCallback(() => {
    const conversation = conversationRef.current;
    if (!conversation) return;
    const nextMuted = !isMuted;
    conversation.setMicMuted(nextMuted);
    setIsMuted(nextMuted);
  }, [isMuted]);

  const widgetStatusLabel = useMemo(() => {
    switch (status) {
      case "connected":
        return mode === "speaking" ? "Speaking" : "Listening";
      case "connecting":
        return "Connecting";
      case "disconnecting":
        return "Ending";
      default:
        return "Offline";
    }
  }, [mode, status]);

  const statusColor = useMemo(() => {
    if (status === "connected") {
      return mode === "speaking" ? "bg-emerald-400" : "bg-amber-400";
    }
    if (status === "connecting") return "bg-sky-400";
    return "bg-white/40";
  }, [mode, status]);

  const handleManualSave = useCallback(() => {
    persistConversation("in_progress").catch(() => undefined);
  }, [persistConversation]);

  const handleManualReset = useCallback(() => {
    if (conversationRef.current) {
      conversationRef.current.endSession().catch(() => undefined);
    }
    conversationRef.current = null;
    setStatus("disconnected");
    setMode("listening");
    setIsMuted(false);
    sessionIdRef.current = crypto.randomUUID();
    startedAtRef.current = null;
    transcriptRef.current = [];
    leadRef.current = DEFAULT_LEAD;
    setTranscript([]);
    setLead(DEFAULT_LEAD);
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      <button
        type="button"
        className={cn(
          "pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-white/10",
          isOpen ? "opacity-80 hover:opacity-100" : "opacity-60 hover:opacity-90",
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Sparkles className="size-4 text-[rgb(var(--brand-accent-rgb))]" />
        Concierge
        <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-white/70">
          <span className={cn("size-1.5 rounded-full", statusColor)} />
          {widgetStatusLabel}
        </span>
      </button>

      <div
        className={cn(
          "pointer-events-auto w-[min(90vw,360px)] overflow-hidden rounded-3xl border border-white/10 bg-black/85 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.9)] backdrop-blur",
          isOpen ? "opacity-100" : "pointer-events-none hidden opacity-0",
        )}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <MessageCircle className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Operator concierge</p>
              <p className="text-xs text-white/60">Live agent simulation greets every visitor.</p>
            </div>
          </div>
          <button
            type="button"
            className="rounded-full border border-white/10 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close concierge"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="flex max-h-[28rem] flex-col gap-4 px-5 py-4 text-sm text-white">
          {errorMessage && (
            <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-3 text-xs text-rose-100">
              {errorMessage}
            </div>
          )}

          <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs">
            <div className="flex flex-col">
              <span className="font-semibold uppercase tracking-[0.24em] text-white/70">Status</span>
              <span className="text-sm text-white">{widgetStatusLabel}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleMute}
                disabled={!conversationRef.current}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
              >
                {isMuted ? <MicOff className="size-4" /> : <Mic className="size-4" />}
              </button>
            </div>
          </div>

          <div className="h-48 overflow-y-auto rounded-2xl border border-white/10 bg-black/60 p-3 text-xs text-white/85">
            {transcript.length === 0 ? (
              <p className="text-white/60">
                The agent greets visitors, qualifies their intent, and summarises the call in real time. Click start if you don’t
                hear them yet.
              </p>
            ) : (
              <ul className="space-y-2">
                {transcript.map((entry) => (
                  <li
                    key={entry.id}
                    className={cn(
                      "flex flex-col gap-1 rounded-xl border px-3 py-2",
                      entry.role === "agent"
                        ? "border-[rgb(var(--brand-accent-rgb))/30] bg-[rgb(var(--brand-accent-rgb)/0.12)] text-white"
                        : "border-white/10 bg-white/5 text-white/85",
                    )}
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/50">
                      {entry.role === "agent" ? "Operator" : "Visitor"}
                    </span>
                    <span className="text-sm leading-relaxed text-white/90">{entry.content}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">Lead capture</p>
            <div className="grid gap-3">
              <Input
                value={lead.name}
                onChange={(event) => updateLead({ name: event.target.value })}
                placeholder="Name"
                className="h-10 border-white/10 bg-white/5 text-sm text-white placeholder:text-white/40"
              />
              <Input
                value={lead.email}
                onChange={(event) => updateLead({ email: event.target.value })}
                placeholder="Email"
                className="h-10 border-white/10 bg-white/5 text-sm text-white placeholder:text-white/40"
                type="email"
              />
              <Input
                value={lead.company}
                onChange={(event) => updateLead({ company: event.target.value })}
                placeholder="Company"
                className="h-10 border-white/10 bg-white/5 text-sm text-white placeholder:text-white/40"
              />
              <Input
                value={lead.intent}
                onChange={(event) => updateLead({ intent: event.target.value })}
                placeholder="Intent / priority"
                className="h-10 border-white/10 bg-white/5 text-sm text-white placeholder:text-white/40"
              />
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={lead.headcount}
                  onChange={(event) => updateLead({ headcount: event.target.value })}
                  className="h-10 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white focus:border-white/30 focus:outline-none"
                >
                  <option value="" className="bg-black text-white/80">
                    Team size
                  </option>
                  {HEADCOUNT_OPTIONS.map((option) => (
                    <option key={option} value={option} className="bg-black text-white">
                      {option}
                    </option>
                  ))}
                </select>
                <select
                  value={lead.timeline}
                  onChange={(event) => updateLead({ timeline: event.target.value })}
                  className="h-10 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white focus:border-white/30 focus:outline-none"
                >
                  <option value="" className="bg-black text-white/80">
                    Timeline
                  </option>
                  {TIMELINE_OPTIONS.map((option) => (
                    <option key={option} value={option} className="bg-black text-white">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <Textarea
                value={lead.notes}
                onChange={(event) => updateLead({ notes: event.target.value })}
                placeholder="Call notes"
                rows={3}
                className="border-white/10 bg-white/5 text-sm text-white placeholder:text-white/40"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <ShimmerButton
              onClick={() => startConversation(true)}
              disabled={isStarting || status === "connected"}
              shimmerColor="rgb(250, 204, 21)"
              shimmerDuration="2.2s"
              className="w-full justify-center border border-white/15 bg-[linear-gradient(90deg,#151519,#06060a)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="flex items-center justify-center gap-2">
                {isStarting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Connecting…
                  </>
                ) : (
                  <>
                    <PhoneCall className="size-4" />
                    Start concierge
                  </>
                )}
              </span>
            </ShimmerButton>

            <button
              type="button"
              onClick={() => stopConversation("completed")}
              disabled={status !== "connected" || isEnding}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isEnding ? <Loader2 className="size-4 animate-spin" /> : <PhoneOff className="size-4" />}
              End & sync
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleManualSave}
                disabled={isPersisting || (!leadHasSignal && transcript.length === 0)}
                className="flex h-10 flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isPersisting ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />} Snapshot
              </button>
              <button
                type="button"
                onClick={handleManualReset}
                className="flex h-10 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-white/10"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
