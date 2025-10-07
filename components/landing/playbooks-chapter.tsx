import ProcessSection from "@/components/landing/process-section";
import ServicesSection from "@/components/landing/services-section";
import IndustriesSection from "@/components/landing/industries-section";

const phases = [
  {
    title: "Scope with conviction",
    description:
      "Co-create requirements with our operators in discovery workshops so we can chart integrations, governance, and handoff standards together.",
  },
  {
    title: "Launch with safeguards",
    description:
      "Pilot automations inside your existing systems, layering QA checkpoints and fallback procedures before opening the floodgates to production traffic.",
  },
  {
    title: "Scale with telemetry",
    description:
      "Stack shared dashboards, training playbacks, and optimization cadences that keep revenue and compliance leaders aligned as we expand coverage.",
  },
];

const proofPoints = [
  "Operators join your daily standups until the pod is self-sufficient.",
  "We maintain the runbook library and surface experiments worth repeating.",
  "Every integration path comes with a rollback plan and ownership matrix.",
];

export default function PlaybooksChapter() {
  return (
    <>
      <section
        id="playbooks"
        className="mx-auto mt-32 max-w-7xl px-6 md:mt-40 md:px-8"
        aria-labelledby="playbooks-heading"
      >
        <header className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,340px)] md:items-start md:gap-14">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
              Playbooks · Chapter Two
            </p>
            <div className="space-y-3">
              <h2
                id="playbooks-heading"
                className="text-3xl font-semibold leading-tight text-foreground md:text-4xl"
              >
                See how our operators scope, launch, and scale your agents.
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                We run every engagement through the same proven lifecycle. Start with shared context, graduate to
                governed launches, and graduate into durable growth loops without losing sight of compliance.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-background/75 p-6 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.9)] md:max-w-sm md:self-start md:p-7">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
              What stays consistent
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              {proofPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 inline-flex size-1.5 rounded-full bg-[rgb(var(--brand-accent-rgb))]" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs uppercase tracking-[0.24em] text-white/40">
              Operators stay embedded until your team requests a transition.
            </p>
          </div>
        </header>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {phases.map((phase) => (
            <div
              key={phase.title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-transparent p-6 transition-shadow hover:shadow-[0_25px_80px_-55px_rgba(15,23,42,0.9)]"
            >
              <h3 className="text-lg font-semibold text-white">
                {phase.title}
              </h3>
              <p className="mt-3 text-sm text-white/70">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>
      <ProcessSection />
      <ServicesSection />
      <IndustriesSection />
    </>
  );
}
