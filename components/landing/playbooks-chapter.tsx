import ProcessSection from "@/components/landing/process-section";
import ServicesSection from "@/components/landing/services-section";
import IndustriesSection from "@/components/landing/industries-section";

export default function PlaybooksChapter() {
  return (
    <>
      <section id="playbooks" className="mx-auto mt-32 max-w-7xl px-6 md:mt-40 md:px-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
              Playbooks · Chapter Two
            </p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              See how our operators scope, launch, and scale your agents.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-muted-foreground md:text-base">
            Follow the service playbooks we run with every client—from discovery workshops to managed runbooks and
            tailored industry accelerators.
          </p>
        </header>
      </section>
      <ProcessSection />
      <ServicesSection />
      <IndustriesSection />
    </>
  );
}

