import { ecommerceCartRecoveryPost } from "@/content/case-studies/ecommerce-cart-recovery-ai-agents";
import { healthcarePatientOperationsPost } from "@/content/case-studies/healthcare-patient-operations-automation";
import { realEstateLeadNurturingPost } from "@/content/case-studies/real-estate-lead-nurturing-automation";
import type { CaseStudy } from "@/lib/case-studies/types";

const allCaseStudies: CaseStudy[] = [
  ecommerceCartRecoveryPost,
  healthcarePatientOperationsPost,
  realEstateLeadNurturingPost,
];

export function getAllCaseStudies() {
  return allCaseStudies;
}

export function getPublishedCaseStudies() {
  return allCaseStudies.filter((caseStudy) => caseStudy.published);
}

export function findCaseStudyBySlug(slug: string) {
  return allCaseStudies.find((caseStudy) => caseStudy.slug === slug);
}
