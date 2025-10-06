import type { CaseStudy } from "@/lib/case-studies/types";

const EcommerceCartRecoveryArticle = () => {
  return (
    <article className="mx-auto flex w-full max-w-5xl flex-col gap-12">
      <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Company Overview</h2>
        <p>
          Lumina Home Goods is a direct-to-consumer e-commerce brand specializing in artisanal home décor and sustainable furnishings. Founded in 2019, the Portland-based company has grown to $7.2M in annual revenue with a catalog of over 850 products ranging from handcrafted lighting fixtures to eco-friendly textiles.
        </p>
        <p>
          With an average order value of $187 and 68% of revenue coming from first-time customers, Lumina's growth strategy centered on customer acquisition through paid social media and influencer partnerships. However, like many e-commerce brands, they faced a persistent challenge: cart abandonment rates hovering around 71%, leaving significant revenue on the table.
        </p>
        <p>
          The company operates with a lean team of 14 employees, including a five-person marketing department responsible for customer retention, email campaigns, and conversion optimization. Prior to implementing AI agents, their cart recovery process was manual, inconsistent, and unable to scale with their growing traffic.
        </p>
      </section>

      <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">The Challenge</h2>
        <h3 className="text-xl font-semibold text-foreground">High Cart Abandonment, Low Recovery Rates</h3>
        <p>
          Lumina Home Goods was experiencing typical e-commerce pain points that were becoming increasingly costly:
        </p>
        <ul className="space-y-2 pl-6">
          <li className="list-disc">71% cart abandonment rate across all traffic sources</li>
          <li className="list-disc">Only 12% of abandoned carts were being recovered through their existing email sequence</li>
          <li className="list-disc">Manual triage process where the marketing team spent 18-22 hours weekly reviewing abandoned carts and deciding which ones warranted personalized outreach</li>
          <li className="list-disc">Generic recovery emails that didn't account for cart value, customer history, or behavioral signals</li>
          <li className="list-disc">No real-time intervention for high-value carts abandoned during business hours</li>
        </ul>
        <p className="rounded-2xl border border-white/10 bg-white/5 p-6 italic">
          "We were leaving money on the table every single day," said Marcus Chen, Head of E-commerce at Lumina. "Our team would spend Tuesday mornings reviewing weekend cart abandonment data, trying to manually identify which customers to prioritize. By the time we'd craft personalized emails, the moment had passed. We knew we needed a smarter, more automated approach."
        </p>

        <h3 className="text-xl font-semibold text-foreground">Technical Limitations</h3>
        <p>
          Lumina's existing marketing technology stack included Shopify for e-commerce, Klaviyo for email marketing, and HubSpot as their CRM. While these tools were powerful individually, they lacked the intelligence layer needed to:
        </p>
        <ul className="space-y-2 pl-6">
          <li className="list-disc">Identify cart abandonment patterns in real-time</li>
          <li className="list-disc">Score abandoned carts based on likelihood to convert</li>
          <li className="list-disc">Personalize messaging based on product category, customer history, and behavioral data</li>
          <li className="list-disc">Test and optimize recovery strategies automatically</li>
          <li className="list-disc">Escalate high-value opportunities to the sales team for personalized outreach</li>
        </ul>
        <p>
          The marketing team had implemented a basic three-email abandoned cart sequence in Klaviyo, but it was one-size-fits-all and showing diminishing returns. They needed a solution that could intelligently orchestrate their recovery efforts without requiring engineering resources they didn't have.
        </p>
      </section>

      <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">The Solution: Devonel AI Agents</h2>
        <p>
          After evaluating several automation platforms and agencies, Lumina chose Devonel for their operator-led AI automation approach. Rather than implementing a rigid, rules-based system, Devonel designed AI agents that could analyze cart abandonment data, make intelligent decisions, and continuously optimize the recovery process.
        </p>

        <h3 className="text-xl font-semibold text-foreground">The AI Agent Workflow</h3>
        <p>
          Devonel built a multi-agent system using n8n as the orchestration platform, integrated seamlessly with Lumina's existing tech stack:
        </p>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-3 text-lg font-semibold text-foreground">1. Detection Agent</h4>
            <ul className="space-y-2 pl-6 text-sm">
              <li className="list-disc">Monitors Shopify webhooks for cart abandonment events in real-time</li>
              <li className="list-disc">Enriches each event with customer data from HubSpot</li>
              <li className="list-disc">Captures behavioral signals (time on site, pages viewed, previous purchases)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-3 text-lg font-semibold text-foreground">2. Scoring Agent</h4>
            <ul className="space-y-2 pl-6 text-sm">
              <li className="list-disc">Uses machine learning to score each abandoned cart on probability to convert (0-100)</li>
              <li className="list-disc">Factors include cart value, product categories, customer lifetime value, time of day, and historical patterns</li>
              <li className="list-disc">Segments carts into High Priority (score 70+), Medium Priority (40-69), and Low Priority (&lt;40)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-3 text-lg font-semibold text-foreground">3. Strategy Agent</h4>
            <ul className="space-y-2 pl-6 text-sm">
              <li className="list-disc">Determines the optimal recovery approach for each segment</li>
              <li className="list-disc">High Priority: Immediate personalized email + SMS, escalation to sales team if no response within 2 hours</li>
              <li className="list-disc">Medium Priority: Personalized email sequence with dynamic product recommendations</li>
              <li className="list-disc">Low Priority: Standard email sequence with discount offer after 24 hours</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-3 text-lg font-semibold text-foreground">4. Content Generation Agent</h4>
            <ul className="space-y-2 pl-6 text-sm">
              <li className="list-disc">Generates personalized email copy based on products in cart, customer history, and current promotions</li>
              <li className="list-disc">Adapts tone and messaging based on customer segment (new vs. returning, budget vs. premium)</li>
              <li className="list-disc">A/B tests subject lines and calls-to-action automatically</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-3 text-lg font-semibold text-foreground">5. Optimization Agent</h4>
            <ul className="space-y-2 pl-6 text-sm">
              <li className="list-disc">Continuously monitors conversion rates by segment, time of day, and messaging variant</li>
              <li className="list-disc">Adjusts scoring models based on what's actually converting</li>
              <li className="list-disc">Provides weekly reports on performance trends and recommendations</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground">Integration Architecture</h3>
        <p>
          The solution was built entirely using no-code and low-code tools, requiring zero custom development from Lumina's team:
        </p>
        <ul className="space-y-2 pl-6">
          <li className="list-disc"><strong>n8n</strong> as the central orchestration platform, hosting all AI agents and workflow logic</li>
          <li className="list-disc"><strong>Shopify webhooks</strong> for real-time cart abandonment events</li>
          <li className="list-disc"><strong>OpenAI GPT-4</strong> for dynamic content generation and natural language processing</li>
          <li className="list-disc"><strong>Klaviyo API</strong> for email delivery and campaign management</li>
          <li className="list-disc"><strong>HubSpot API</strong> for customer data enrichment and sales team notifications</li>
          <li className="list-disc"><strong>Twilio</strong> for SMS delivery on high-priority carts</li>
          <li className="list-disc"><strong>Google Sheets</strong> for performance dashboards and team visibility</li>
        </ul>
        <p className="rounded-2xl border border-white/10 bg-white/5 p-6 italic">
          "What impressed us about Devonel was their operator-led approach," said Sarah Mitchell, CMO at Lumina. "They didn't just build a workflow and walk away. They actively monitored the agents, tuned the models, and provided strategic recommendations throughout. It felt like having an AI strategist on our team."
        </p>
      </section>

      <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Results: Measurable Business Impact</h2>
        <p>
          After eight weeks of the AI agent system running at full capacity, Lumina Home Goods achieved remarkable results:
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h4 className="mb-2 text-3xl font-bold text-primary">34%</h4>
            <p className="text-sm">Increase in cart recovery rate (from 12% to 16.1%)</p>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h4 className="mb-2 text-3xl font-bold text-primary">$156K</h4>
            <p className="text-sm">Projected additional annual revenue</p>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h4 className="mb-2 text-3xl font-bold text-primary">18 hrs</h4>
            <p className="text-sm">Per week saved by marketing team</p>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h4 className="mb-2 text-3xl font-bold text-primary">92%</h4>
            <p className="text-sm">Reduction in time-to-first-contact</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground">Revenue Impact</h3>
        <ul className="space-y-2 pl-6">
          <li className="list-disc">34% increase in cart recovery rate (from 12% to 16.1%)</li>
          <li className="list-disc">22% boost in revenue from recovered carts ($13,000/month increase)</li>
          <li className="list-disc">$156,000 projected additional annual revenue from improved cart recovery alone</li>
          <li className="list-disc">Average order value of recovered carts increased by 8% due to better product recommendations</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground">Efficiency Gains</h3>
        <ul className="space-y-2 pl-6">
          <li className="list-disc">18 hours per week saved by the marketing team (previously spent on manual cart review)</li>
          <li className="list-disc">92% reduction in time-to-first-contact for abandoned carts (from 14 hours average to 73 minutes)</li>
          <li className="list-disc">47% of high-priority carts now receive outreach within 30 minutes of abandonment</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground">Customer Experience</h3>
        <ul className="space-y-2 pl-6">
          <li className="list-disc">28% higher email open rates compared to the generic sequence (38% vs. 29.7%)</li>
          <li className="list-disc">41% improvement in click-through rates due to personalized product recommendations</li>
          <li className="list-disc">15% reduction in unsubscribe rates from abandoned cart emails (better targeting meant less spam perception)</li>
        </ul>

        <p className="rounded-2xl border border-white/10 bg-white/5 p-6 italic">
          "The ROI was clear within the first month," Marcus Chen noted. "We're recovering an extra $13K monthly, and my team has reclaimed nearly a full workweek to focus on strategic initiatives instead of manual email triage. It's been transformational."
        </p>
      </section>

      <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Key Learnings</h2>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-3 text-lg font-semibold text-foreground">1. Context Matters More Than Discounts</h4>
            <p className="text-sm">
              Lumina discovered that personalized messaging based on the specific products in cart outperformed generic discount offers by 34%. Customers responded better to messages that demonstrated understanding of their needs rather than blanket price reductions.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-3 text-lg font-semibold text-foreground">2. Timing is Critical</h4>
            <p className="text-sm">
              The AI agents' ability to test and optimize send times for different customer segments revealed that one-size-fits-all timing was leaving significant revenue on the table. High-value customers preferred morning outreach, while budget-conscious shoppers converted better with evening emails.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-3 text-lg font-semibold text-foreground">3. Human-AI Collaboration Amplifies Results</h4>
            <p className="text-sm">
              The highest performing strategy combined AI-driven automation with human touch. High-value carts (&gt;$400) that received AI-triggered escalation to the sales team for personalized phone calls had a 58% recovery rate, far exceeding email-only approaches.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-3 text-lg font-semibold text-foreground">4. Continuous Optimization is Essential</h4>
            <p className="text-sm">
              The agents' performance improved by 18% between week 1 and week 8 as the machine learning models learned from actual conversion data. Static, rules-based automation would have missed these optimization opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Conclusion</h2>
        <p>
          Lumina Home Goods' cart recovery transformation demonstrates the power of operator-led AI automation in e-commerce. By implementing intelligent agents that could analyze, decide, and optimize in real-time, they achieved a 34% improvement in cart recovery while giving their team 18 hours back each week.
        </p>
        <p>
          The key to success wasn't just the technology—it was Devonel's approach of combining AI capabilities with strategic oversight and continuous optimization. For e-commerce brands struggling with cart abandonment, the lesson is clear: intelligent automation can turn lost opportunities into recovered revenue, at scale.
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

export const ecommerceCartRecoveryPost: CaseStudy = {
  slug: "ecommerce-cart-recovery-ai-agents",
  title: "How Lumina Home Goods Recovered 34% More Abandoned Carts with AI Agents",
  description: "Discover how a $7M e-commerce brand transformed their cart recovery process using Devonel's operator-led AI automation, recovering 34% more abandoned carts and adding $156K in annual revenue.",
  date: "2025-01-15",
  industry: "E-commerce",
  company: "Lumina Home Goods",
  results: [
    "34% increase in cart recovery rate",
    "22% boost in recovery revenue",
    "18 hours per week saved",
    "$156K additional annual revenue"
  ],
  published: true,
  tags: ["E-commerce", "Cart Recovery", "AI Automation", "Revenue Growth", "n8n"],
  component: EcommerceCartRecoveryArticle,
};
