import AboutSection from "@/components/landing/about-section";
import ClientSection from "@/components/landing/client-section";
import CallToActionSection from "@/components/landing/cta-section";
import FAQSection from "@/components/landing/faq-section";
import HeroSection from "@/components/landing/hero-section";
import ServicesSection from "@/components/landing/services-section";
import PricingSection from "@/components/landing/pricing-section";
import ProcessSection from "@/components/landing/process-section";
import IndustriesSection from "@/components/landing/industries-section";
import TestimonialsSection from "@/components/landing/testimonials-section";
import ServicesFeatureSection from "@/components/landing/services-feature-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ClientSection />
      <ServicesFeatureSection />
      <ServicesSection />
      <ProcessSection />
      <IndustriesSection />
      <SphereMask />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CallToActionSection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
