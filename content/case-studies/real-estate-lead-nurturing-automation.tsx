import type { CaseStudy } from "@/lib/case-studies/types";

const RealEstateLeadNurturingArticle = () => {
  return (
    <article className="mx-auto flex w-full max-w-5xl flex-col gap-12">
      <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Company Overview</h2>
        <p>
          Pinnacle Realty Group is a boutique real estate agency based in Austin, Texas, specializing in residential properties across the city's rapidly growing tech corridor. With a team of 18 licensed agents and a portfolio of over 200 active listings ranging from starter condos to luxury estates, Pinnacle has built a reputation for personalized service and deep market knowledge.
        </p>
        <p>
          Founded in 2016 by veteran broker Jennifer Hammond, the agency experienced steady growth, handling approximately 350 transactions annually with an average sale price of $485,000. Despite their success, the leadership team recognized a critical bottleneck: their manual lead management process couldn't keep pace with the volume of inquiries generated from Zillow, Realtor.com, their website, and social media campaigns.
        </p>
        <p className="rounded-2xl border border-white/10 bg-white/5 p-6 italic">
          "We were generating quality leads, but we were drowning in them," explains Hammond. "Our agents were spending 60-70% of their day on the phone qualifying prospects, scheduling tours, and sending follow-up emails. The actual showing appointments and closing deals—the high-value activities—were getting squeezed into the margins."
        </p>
      </section>

      <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">The Challenge</h2>
        <p>
          Pinnacle Realty Group faced three interconnected challenges that were constraining their growth and agent satisfaction:
        </p>

        <h3 className="text-xl font-semibold text-foreground">1. Lead Response Time Lag</h3>
        <p>
          Industry research shows that responding to a real estate lead within 5 minutes increases conversion rates by 900% compared to waiting 30 minutes. However, Pinnacle's average response time hovered around 15 minutes during business hours and could extend to several hours in the evenings and weekends—precisely when many prospective buyers were browsing listings.
        </p>
        <p className="rounded-2xl border border-white/10 bg-white/5 p-6 italic">
          "We'd get a hot lead at 8 PM on a Saturday night," recalls senior agent Marcus Rodriguez, "and by the time someone followed up Monday morning, that prospect had already scheduled three tours with our competitors."
        </p>

        <h3 className="text-xl font-semibold text-foreground">2. Inefficient Lead Qualification</h3>
        <p>
          Not all leads are created equal. Pinnacle's agents were spending significant time on unqualified prospects—tire kickers, out-of-budget buyers, or those not ready to purchase for 12+ months. Without an efficient screening process, agents couldn't prioritize their time effectively.
        </p>
        <p>
          The team estimated that roughly 40% of their initial conversations were with prospects who weren't genuinely ready to engage, representing hundreds of wasted hours each quarter.
        </p>

        <h3 className="text-xl font-semibold text-foreground">3. Missed Follow-Ups and Inconsistent Communication</h3>
        <p>
          Between showings, open houses, negotiations, and closings, agents struggled to maintain consistent follow-up with prospects in their pipeline. The agency's CRM system required manual data entry, which was frequently skipped or delayed during busy periods.
        </p>
        <p className="rounded-2xl border border-white/10 bg-white/5 p-6 italic">
          "I'd finish a full day of back-to-back showings and realize I had 15 leads from the past three days I hadn't followed up with," admits agent Chloe Patterson. "By then, the moment had passed, and those prospects had gone cold."
        </p>
        <p>
          The agency estimated they were losing 15-20% of potential clients simply due to inconsistent or delayed follow-up communication.
        </p>
      </section>

      <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">The Solution</h2>
        <p>
          In July 2024, Pinnacle Realty Group partnered with Devonel to deploy an integrated AI agent system combining voice and chat capabilities for lead qualification and tour scheduling. The solution was designed to work 24/7, providing instant responses while seamlessly integrating with Pinnacle's existing technology stack.
        </p>

        <h3 className="text-xl font-semibold text-foreground">Voice AI Agent: "Alex"</h3>
        <p>
          Devonel configured a conversational voice AI agent named "Alex" to handle inbound phone calls. Alex was trained on Pinnacle's property inventory, neighborhood expertise, and qualification criteria, enabling natural conversations that felt genuinely helpful rather than robotic.
        </p>
        <p>Key capabilities included:</p>
        <ul className="space-y-2 pl-6">
          <li className="list-disc">Answering questions about specific properties, neighborhoods, schools, and amenities</li>
          <li className="list-disc">Qualifying leads based on budget, timeline, and property preferences</li>
          <li className="list-disc">Scheduling property tours directly on agent calendars</li>
          <li className="list-disc">Capturing detailed notes and updating the CRM in real-time</li>
          <li className="list-disc">Routing urgent or complex inquiries to the appropriate agent</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground">Chat AI Agent: "Riley"</h3>
        <p>
          The chat agent "Riley" handled inquiries through Pinnacle's website, Facebook Messenger, and SMS text messaging. Riley provided instant responses to common questions while qualifying leads through conversational intelligence.
        </p>
        <p>Riley's workflow included:</p>
        <ul className="space-y-2 pl-6">
          <li className="list-disc">Engaging website visitors within 10 seconds of inquiry</li>
          <li className="list-disc">Sending automated follow-ups to email and form submissions</li>
          <li className="list-disc">Sharing property details, photos, and virtual tour links</li>
          <li className="list-disc">Pre-qualifying prospects before agent handoff</li>
          <li className="list-disc">Scheduling appointments directly from chat conversations</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground">Technology Integration</h3>
        <p>The technical architecture leveraged Devonel's no-code automation platform built on n8n workflows:</p>
        <ul className="space-y-2 pl-6">
          <li className="list-disc"><strong>CRM:</strong> Followed Up Boss (bidirectional sync for contacts, notes, and activities)</li>
          <li className="list-disc"><strong>Calendar:</strong> Google Calendar integration for all 18 agents</li>
          <li className="list-disc"><strong>MLS:</strong> Direct feed from Austin Board of Realtors for real-time listing data</li>
          <li className="list-disc"><strong>Phone System:</strong> Twilio integration for voice calls and SMS</li>
        </ul>
      </section>

      <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Realistic AI Conversation Examples</h2>

        <div className="space-y-6">
          <div>
            <h4 className="mb-3 text-lg font-semibold text-foreground">Example 1: Voice AI Qualifying a Buyer</h4>
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 font-mono text-sm">
              <p className="mb-2 text-primary"><strong>Alex (AI):</strong> "Good afternoon, thank you for calling Pinnacle Realty Group. This is Alex. How can I help you today?"</p>
              <p className="mb-2 text-muted-foreground"><strong>Caller:</strong> "Hi, I saw a listing on Zillow for a house on Meadowbrook Drive. Is it still available?"</p>
              <p className="mb-2 text-primary"><strong>Alex:</strong> "Absolutely, I can help you with that. The property at 2847 Meadowbrook Drive is still available. It's a beautiful 4-bedroom, 3-bath home listed at $625,000. Are you currently working with one of our agents, or is this your first time reaching out?"</p>
              <p className="mb-2 text-muted-foreground"><strong>Caller:</strong> "First time. I'm just starting to look around."</p>
              <p className="mb-2 text-primary"><strong>Alex:</strong> "Perfect. I'd love to learn a bit more about what you're looking for so I can help you find the right properties. Are you currently renting, or do you own a home you'll be selling?"</p>
              <p className="mb-2 text-muted-foreground"><strong>Caller:</strong> "We're renting right now, but we're pre-approved for a loan."</p>
              <p className="mb-2 text-primary"><strong>Alex:</strong> "That's great that you're already pre-approved—it really strengthens your position. What's your budget range for your new home?"</p>
              <p className="mb-2 text-muted-foreground"><strong>Caller:</strong> "We're approved up to $650,000, but we'd prefer to stay around $600,000."</p>
              <p className="text-primary"><strong>Alex:</strong> "Perfect, the Meadowbrook property fits right in that range. I'd love to get you scheduled for a tour. Our agent Sarah Chen specializes in that neighborhood and has availability tomorrow at 3 PM or Saturday at 10 AM. What works better for you?"</p>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-semibold text-foreground">Example 2: Chat AI Handling Website Inquiry</h4>
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 font-mono text-sm">
              <p className="mb-2 text-primary"><strong>Riley (AI):</strong> Hi there! I'm Riley with Pinnacle Realty. I noticed you're checking out our new listings. Are you looking for something specific?</p>
              <p className="mb-2 text-muted-foreground"><strong>Visitor:</strong> just browsing</p>
              <p className="mb-2 text-primary"><strong>Riley:</strong> No problem at all! If you don't mind me asking, are you thinking about buying in the next few months, or just getting a feel for the market?</p>
              <p className="mb-2 text-muted-foreground"><strong>Visitor:</strong> probably serious in the next 2-3 months. looking in the $400-500k range</p>
              <p className="mb-2 text-primary"><strong>Riley:</strong> That's a great price range—lots of options in Austin right now. Are you interested in a particular area? (North Austin, Downtown, East Side, South Austin, etc.)</p>
              <p className="mb-2 text-muted-foreground"><strong>Visitor:</strong> preferably east side, need good schools</p>
              <p className="text-primary"><strong>Riley:</strong> Perfect. East Austin has some fantastic family neighborhoods with excellent schools. I've got three properties that match perfectly. I can send you the details right now, or I can have one of our agents (who specializes in East Austin schools) give you a call to walk you through them and set up tours if anything catches your eye. What would you prefer?</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Results</h2>
        <p>
          After three months of operation, Pinnacle Realty Group measured significant improvements across all key metrics:
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h4 className="mb-2 text-3xl font-bold text-primary">42%</h4>
            <p className="text-sm">Increase in property tours booked</p>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h4 className="mb-2 text-3xl font-bold text-primary">90 sec</h4>
            <p className="text-sm">Average response time (down from 15 min)</p>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h4 className="mb-2 text-3xl font-bold text-primary">89%</h4>
            <p className="text-sm">Lead satisfaction score</p>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h4 className="mb-2 text-3xl font-bold text-primary">22 hrs</h4>
            <p className="text-sm">Saved per agent per week</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground">Tour Bookings: +42%</h3>
        <p>
          The agency went from averaging 87 property tours per month to 123 tours per month—a 42% increase. More importantly, the show-up rate for AI-scheduled tours was 78%, compared to 71% for manually scheduled tours, as the automated confirmation and reminder system kept appointments top-of-mind.
        </p>

        <h3 className="text-xl font-semibold text-foreground">Response Time: 15 Minutes → 90 Seconds</h3>
        <p>
          Average lead response time dropped from 15 minutes to 90 seconds during business hours, and from hours (or next-day) to 90 seconds during evenings and weekends. This dramatic improvement in responsiveness captured leads at their peak moment of interest.
        </p>

        <h3 className="text-xl font-semibold text-foreground">Lead Satisfaction: 89%</h3>
        <p>Post-contact surveys revealed an 89% satisfaction score from prospects who interacted with the AI agents. Common positive feedback included:</p>
        <ul className="space-y-2 pl-6">
          <li className="list-disc">"Got answers immediately, even at 10 PM"</li>
          <li className="list-disc">"Didn't feel like I was talking to a robot"</li>
          <li className="list-disc">"Really appreciated how organized and easy the scheduling was"</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground">Agent Time Savings: 22 Hours Per Agent Per Week</h3>
        <p>
          Agents reported saving an average of 22 hours per week on lead qualification, scheduling, and administrative tasks. This time was redirected toward high-value activities:
        </p>
        <ul className="space-y-2 pl-6">
          <li className="list-disc">Additional property showings</li>
          <li className="list-disc">Relationship building with serious buyers</li>
          <li className="list-disc">Marketing and listing presentations</li>
          <li className="list-disc">Professional development</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground">Revenue Impact: $2.1M Additional Annual Revenue</h3>
        <p>
          With 42% more tours and a consistent conversion rate, Pinnacle projected an additional 42 closed transactions annually. At their average sale price of $485,000 and 2.5% commission, this represented approximately $2.1 million in additional annual revenue.
        </p>
        <p>
          The cost of Devonel's AI agent system was $4,800 per month, delivering an ROI of over 50:1 in the first year.
        </p>
      </section>

      <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Agent Feedback</h2>
        <p>
          The true measure of success came from the agents themselves, who initially harbored concerns about AI replacing the personal touch that defined Pinnacle's brand.
        </p>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="mb-2 text-sm font-semibold text-foreground">Marcus Rodriguez, Senior Agent:</p>
            <p className="text-sm italic">
              "I was skeptical at first—I thought clients would hate talking to a robot. But the AI is so natural, and honestly, it handles the repetitive stuff better than I do. Now when I get a lead, they're already qualified, interested, and scheduled. I just show up, build the relationship, and close the deal. My conversion rate has actually gone up because I'm spending time with serious buyers instead of chasing tire kickers."
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="mb-2 text-sm font-semibold text-foreground">Chloe Patterson, Agent:</p>
            <p className="text-sm italic">
              "The evening and weekend coverage has been a game-changer. I used to feel guilty taking time off because I knew leads were coming in. Now I can have dinner with my family on a Saturday night and know that every inquiry is being handled professionally. I check the CRM Sunday morning and see five new qualified leads with tours already scheduled for the upcoming week. It's incredible."
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="mb-2 text-sm font-semibold text-foreground">Jennifer Hammond, Broker/Owner:</p>
            <p className="text-sm italic">
              "This was one of the best business decisions we've made. The ROI speaks for itself, but beyond the numbers, it's improved agent morale, client satisfaction, and our brand reputation. We're known as the agency that responds instantly and makes the process effortless. That's exactly the competitive advantage we needed in this market."
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Conclusion</h2>
        <p>
          Pinnacle Realty Group's partnership with Devonel demonstrates the transformative potential of AI agents in real estate. By automating lead qualification and tour scheduling while maintaining a personalized, conversational experience, the agency achieved remarkable results: 42% more tours, 90-second response times, and over $2 million in additional projected annual revenue.
        </p>
        <p>
          More importantly, the implementation freed agents to focus on what they do best—building relationships and closing deals—while ensuring every prospect receives immediate, professional attention regardless of when they reach out.
        </p>
        <p className="rounded-2xl border border-white/10 bg-white/5 p-6 italic">
          As Jennifer Hammond reflects: "We're not replacing the human element of real estate—we're amplifying it. The AI handles the repetitive tasks flawlessly, so our agents can bring their full expertise and emotional intelligence to the moments that matter most. That's the future of real estate, and we're already living it."
        </p>
        <p>
          For real estate agencies facing similar challenges with lead response time, qualification inefficiency, and inconsistent follow-up, Pinnacle's success story provides a clear blueprint: strategic AI implementation doesn't diminish the personal touch—it enables it.
        </p>
      </section>

      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">About Devonel</p>
        <p className="mt-2">
          Devonel is an AI agent studio specializing in operator-led automation for growing businesses. We design, deploy, and optimize intelligent AI agents that handle repetitive tasks while maintaining the strategic oversight that ensures continuous improvement.
        </p>
      </div>
    </article>
  );
};

export const realEstateLeadNurturingPost: CaseStudy = {
  slug: "real-estate-lead-nurturing-automation",
  title: "Real Estate Agency Books 42% More Tours with AI-Powered Lead Nurturing",
  description: "How Pinnacle Realty Group automated lead qualification and tour scheduling with Devonel's AI agents, reducing response time from 15 minutes to 90 seconds and increasing property tours by 42%.",
  date: "2024-11-15",
  industry: "Real Estate",
  company: "Pinnacle Realty Group",
  results: [
    "42% increase in property tours",
    "90-second average response time",
    "89% lead satisfaction score",
    "$2.1M additional annual revenue"
  ],
  published: true,
  tags: ["Real Estate", "Lead Nurturing", "AI Automation", "Voice AI", "n8n"],
  component: RealEstateLeadNurturingArticle,
};
