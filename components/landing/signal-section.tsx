import Marquee from "@/components/magicui/marquee";
import { MagicTweet, TweetCard, TweetSkeleton } from "@/components/ui/tweet-card";
import type { Tweet } from "react-tweet/api";

const FEATURED_TWEET_ID = "1441032681968212480";

const FEATURED_STATIC_TWEET: Tweet = {
  __typename: "Tweet",
  lang: "en",
  created_at: "2025-01-07T13:30:00.000Z",
  display_text_range: [0, 193],
  entities: {
    hashtags: [],
    urls: [],
    user_mentions: [],
    symbols: [],
  },
  id_str: "1732455555555555555",
  text:
    "Devonel operators rebuilt our escalation tree in under a week. The agent now resolves 62% of renewal blockers before humans intervene.",
  user: {
    id_str: "1689000000000000000",
    name: "Priya Malhotra",
    profile_image_url_https: "https://i.pravatar.cc/150?img=47",
    profile_image_shape: "Circle",
    screen_name: "revops_priya",
    verified: true,
    verified_type: "Business",
    is_blue_verified: true,
  },
  edit_control: {
    edit_tweet_ids: ["1732455555555555555"],
    editable_until_msecs: "1732457155000",
    is_edit_eligible: false,
    edits_remaining: "0",
  },
  isEdited: false,
  isStaleEdit: false,
  favorite_count: 512,
  conversation_count: 33,
  news_action_type: "conversation",
  possibly_sensitive: false,
};

const signalHighlights = [
  {
    title: "Proof before a proposal",
    description:
      "Operators publish field notes and clips daily so stakeholders feel the lift long before procurement signs off.",
  },
  {
    title: "Compliance on the feed",
    description:
      "Every share blurs sensitive data, keeps approvals inline, and shows the controls that finance and legal expect.",
  },
  {
    title: "Momentum you can forward",
    description:
      "Drop a Devonel thread into board updates or partner chats—the metrics, quotes, and clips are already packaged.",
  },
];

const staticSignalTweets: Tweet[] = [
  {
    __typename: "Tweet",
    lang: "en",
    created_at: "2025-01-14T09:12:00.000Z",
    display_text_range: [0, 194],
    entities: { hashtags: [], urls: [], user_mentions: [], symbols: [] },
    id_str: "1733000100000000000",
    text:
      "Handed Devonel our backlog of flagged support tickets. Their agent cleared 487 in 48 hours and surfaced the 6 that truly needed human nuance.",
    user: {
      id_str: "1620000000000000000",
      name: "Jordan Ellis",
      profile_image_url_https: "https://i.pravatar.cc/150?img=12",
      profile_image_shape: "Circle",
      screen_name: "ellis_ops",
      verified: true,
      verified_type: "Business",
      is_blue_verified: true,
    },
    edit_control: {
      edit_tweet_ids: ["1733000100000000000"],
      editable_until_msecs: "1733001700000",
      is_edit_eligible: false,
      edits_remaining: "0",
    },
    isEdited: false,
    isStaleEdit: false,
    favorite_count: 284,
    conversation_count: 19,
    news_action_type: "conversation",
    possibly_sensitive: false,
  },
  {
    __typename: "Tweet",
    lang: "en",
    created_at: "2025-01-18T16:21:00.000Z",
    display_text_range: [0, 187],
    entities: { hashtags: [], urls: [], user_mentions: [], symbols: [] },
    id_str: "1733400200000000000",
    text:
      "Week two with Devonel and our SDR inbox now triages itself. Every qualified lead lands in HubSpot with call notes drafted for the rep.",
    user: {
      id_str: "1630000000000000000",
      name: "Mina Cho",
      profile_image_url_https: "https://i.pravatar.cc/150?img=25",
      profile_image_shape: "Circle",
      screen_name: "demand_mina",
      verified: false,
      verified_type: "",
      is_blue_verified: true,
    },
    edit_control: {
      edit_tweet_ids: ["1733400200000000000"],
      editable_until_msecs: "1733401800000",
      is_edit_eligible: false,
      edits_remaining: "0",
    },
    isEdited: false,
    isStaleEdit: false,
    favorite_count: 341,
    conversation_count: 22,
    news_action_type: "conversation",
    possibly_sensitive: false,
  },
  {
    __typename: "Tweet",
    lang: "en",
    created_at: "2025-01-20T11:45:00.000Z",
    display_text_range: [0, 207],
    entities: { hashtags: [], urls: [], user_mentions: [], symbols: [] },
    id_str: "1733600300000000000",
    text:
      "Devonel’s agent stitched into Zendesk + Jira overnight. We now ship verified bug reports with repro videos without our CSMs touching a dashboard.",
    user: {
      id_str: "1640000000000000000",
      name: "Cassidy Moore",
      profile_image_url_https: "https://i.pravatar.cc/150?img=33",
      profile_image_shape: "Circle",
      screen_name: "cass_codes",
      verified: true,
      verified_type: "Business",
      is_blue_verified: true,
    },
    edit_control: {
      edit_tweet_ids: ["1733600300000000000"],
      editable_until_msecs: "1733601900000",
      is_edit_eligible: false,
      edits_remaining: "0",
    },
    isEdited: false,
    isStaleEdit: false,
    favorite_count: 298,
    conversation_count: 17,
    news_action_type: "conversation",
    possibly_sensitive: false,
  },
  {
    __typename: "Tweet",
    lang: "en",
    created_at: "2025-01-22T07:02:00.000Z",
    display_text_range: [0, 197],
    entities: { hashtags: [], urls: [], user_mentions: [], symbols: [] },
    id_str: "1733800400000000000",
    text:
      "Finance finally loves an automation update. Devonel agents reconcile payouts nightly and attach every exception with operator commentary.",
    user: {
      id_str: "1650000000000000000",
      name: "Hakeem Alvarez",
      profile_image_url_https: "https://i.pravatar.cc/150?img=9",
      profile_image_shape: "Circle",
      screen_name: "ledgerloop",
      verified: false,
      verified_type: "",
      is_blue_verified: false,
    },
    edit_control: {
      edit_tweet_ids: ["1733800400000000000"],
      editable_until_msecs: "1733802000000",
      is_edit_eligible: false,
      edits_remaining: "0",
    },
    isEdited: false,
    isStaleEdit: false,
    favorite_count: 189,
    conversation_count: 11,
    news_action_type: "conversation",
    possibly_sensitive: false,
  },
  {
    __typename: "Tweet",
    lang: "en",
    created_at: "2025-01-24T18:30:00.000Z",
    display_text_range: [0, 205],
    entities: { hashtags: [], urls: [], user_mentions: [], symbols: [] },
    id_str: "1734000500000000000",
    text:
      "Stood up a Devonel agent just for partner onboarding. It now assembles playbooks, loops in humans for approvals, and DMs the partner before our team wakes up.",
    user: {
      id_str: "1660000000000000000",
      name: "Arianna Steele",
      profile_image_url_https: "https://i.pravatar.cc/150?img=41",
      profile_image_shape: "Circle",
      screen_name: "ari_ops",
      verified: true,
      verified_type: "Business",
      is_blue_verified: true,
    },
    edit_control: {
      edit_tweet_ids: ["1734000500000000000"],
      editable_until_msecs: "1734002100000",
      is_edit_eligible: false,
      edits_remaining: "0",
    },
    isEdited: false,
    isStaleEdit: false,
    favorite_count: 356,
    conversation_count: 24,
    news_action_type: "conversation",
    possibly_sensitive: false,
  },
  {
    __typename: "Tweet",
    lang: "en",
    created_at: "2025-01-26T12:18:00.000Z",
    display_text_range: [0, 201],
    entities: { hashtags: [], urls: [], user_mentions: [], symbols: [] },
    id_str: "1734200600000000000",
    text:
      "Devonel spun up a forecasting agent that chats with Salesforce. Sales leaders get a morning digest with stuck deals, clips, and recommended nudges.",
    user: {
      id_str: "1670000000000000000",
      name: "Leo Martínez",
      profile_image_url_https: "https://i.pravatar.cc/150?img=15",
      profile_image_shape: "Circle",
      screen_name: "leadsbyleo",
      verified: true,
      verified_type: "Business",
      is_blue_verified: true,
    },
    edit_control: {
      edit_tweet_ids: ["1734200600000000000"],
      editable_until_msecs: "1734202200000",
      is_edit_eligible: false,
      edits_remaining: "0",
    },
    isEdited: false,
    isStaleEdit: false,
    favorite_count: 401,
    conversation_count: 29,
    news_action_type: "conversation",
    possibly_sensitive: false,
  },
];

const marqueeRows = [
  staticSignalTweets.filter((_, index) => index % 2 === 0),
  staticSignalTweets.filter((_, index) => index % 2 === 1),
];

export default function SignalSection() {
  return (
    <section id="signal" className="mx-auto mt-32 max-w-7xl px-6 md:mt-40 md:px-8">
      <div className="grid gap-10 rounded-3xl border border-white/10 bg-background/70 p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:p-12">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
            Signal · Social Proof
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Operators share Devonel wins where your buyers already scroll.
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            High-signal posts spotlight how human-led agents protect brand tone, escalate the right work, and return time to your team.
          </p>
          <ul className="space-y-4">
            {signalHighlights.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2 size-2 shrink-0 rounded-full bg-[rgb(var(--brand-accent-rgb))]"
                />
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-white md:text-base">{item.title}</p>
                  <p className="text-sm text-muted-foreground md:text-base">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center md:justify-end">
          <TweetCard
            id={FEATURED_TWEET_ID}
            fallback={<TweetSkeleton className="w-full max-w-lg" />}
            className="w-full max-w-lg bg-background/80"
            staticTweet={FEATURED_STATIC_TWEET}
          />
        </div>
      </div>

      <div className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-background/50 p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-x-12 top-0 h-40 bg-gradient-to-b from-white/10 via-transparent to-transparent blur-3xl" />
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[35%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(var(--brand-accent-rgb),0.25),transparent_70%)] blur-2xl md:block" />
        <div className="relative space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60">
              LIVE OPERATOR FEED
            </p>
            <p className="text-sm text-muted-foreground sm:max-w-sm">
              A rolling marquee of real operator updates—hover to pause and dive into the cards your buyers screenshot.
            </p>
          </div>

          <div className="space-y-6">
            {marqueeRows.map((row, rowIndex) => (
              <Marquee
                key={`signal-marquee-${rowIndex}`}
                className="[--gap:2.5rem]"
                pauseOnHover
                reverse={rowIndex % 2 === 1}
                repeat={3}
              >
                {row.map((tweet) => (
                  <div
                    key={tweet.id_str}
                    className="flex w-[260px] sm:w-[300px] md:w-[340px] justify-center"
                  >
                    <MagicTweet
                      tweet={tweet}
                      className="w-full transform-gpu bg-background/80 shadow-[0_28px_60px_-40px_rgba(8,9,20,0.95)] transition-transform duration-500 hover:-translate-y-2 hover:rotate-[0.8deg] hover:shadow-[0_40px_80px_-42px_rgba(8,9,20,0.95)]"
                    />
                  </div>
                ))}
              </Marquee>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

