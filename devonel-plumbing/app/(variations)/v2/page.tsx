import type { Metadata } from "next";
import { VariationScaffold } from "../scaffold";
import { variations } from "../variations";

const variation = variations[1];

export const metadata: Metadata = {
  title: `${variation.n}. ${variation.name} — Devonel redesign`,
  description: variation.thesis,
};

export default function Page() {
  return <VariationScaffold variation={variation} />;
}
