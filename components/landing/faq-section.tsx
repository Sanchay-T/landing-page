"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How quickly can Devonel launch our first agent?",
    answer:
      "Most teams ship a production-ready agent in 3–4 weeks. Week 1 focuses on discovery and playbook design, Week 2 on build + integrations, and Weeks 3–4 on pilot, refinement, and go-live.",
  },
  {
    question: "What does ongoing operator support include?",
    answer:
      "Your plan includes weekly reviews, prompt tuning, analytics, and human-in-the-loop escalation. Devonel operators monitor performance dashboards and step in when high-value conversations need a human touch.",
  },
  {
    question: "Can agents work with our existing CRM and ticketing tools?",
    answer:
      "Yes — we integrate with HubSpot, Salesforce, Intercom, Zendesk, Slack, Notion, Zapier, and custom APIs. We map data flows to keep your systems of record accurate.",
  },
  {
    question: "How do you keep agents compliant with brand and regulations?",
    answer:
      "We run governance checklists, maintain audit trails, and configure policy guardrails. For regulated industries, we collaborate with your legal and compliance teams before launch.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto mt-28 max-w-4xl px-6 md:mt-36 md:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
          Answers to common questions about Devonel.
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Need something specific? Reach out and we’ll scope an agent or
          automation plan tailored to your team.
        </p>
      </div>
      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="rounded-2xl border border-border/70 bg-background/75 p-5"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-foreground">
                  {faq.question}
                </span>
                <span className="text-2xl font-semibold text-primary">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen ? (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
