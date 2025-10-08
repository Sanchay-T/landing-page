import CallToActionSection from "@/components/landing/cta-section";
import ContactSection from "@/components/landing/contact-section";
import FAQSection from "@/components/landing/faq-section";
import PricingSection from "@/components/landing/pricing-section";
import { SectionHeading } from "@/components/landing/section-heading";
import { TextAnimate } from "@/components/ui/text-animate";

export default function CommitChapter() {
  return (
    <>
      <section id="commit" className="mx-auto mt-32 max-w-7xl px-6 md:mt-40 md:px-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Commit · Chapter Three"
            title="Choose the right engagement with our operators at your side."
            className="md:max-w-xl"
            description={undefined}
          />
          <TextAnimate
            as="p"
            className="max-w-xl text-sm text-muted-foreground md:text-base"
            animation="slideUp"
            by="line"
            delay={0.2}
            duration={0.6}
          >
            Wrap with pricing, FAQs, and a direct introduction to the operator pod that will stand up your automation program.
          </TextAnimate>
        </header>
      </section>
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <CallToActionSection />
    </>
  );
}
