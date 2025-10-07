import CallToActionSection from "@/components/landing/cta-section";
import ContactSection from "@/components/landing/contact-section";
import FAQSection from "@/components/landing/faq-section";
import PricingSection from "@/components/landing/pricing-section";

export default function CommitChapter() {
  return (
    <>
      <section id="commit" className="mx-auto mt-32 max-w-7xl px-6 md:mt-40 md:px-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
              Commit · Chapter Three
            </p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Choose the right engagement with our operators at your side.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-muted-foreground md:text-base">
            Wrap with pricing, FAQs, and a direct introduction to the operator pod that will stand up your
            automation program.
          </p>
        </header>
      </section>
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <CallToActionSection />
    </>
  );
}

