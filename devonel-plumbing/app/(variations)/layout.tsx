import { Suspense } from "react";
import { MiniSwitcher } from "./mini-switcher";

/**
 * Shared shell for /v1../v5. It adds nothing visual to the variations, only the
 * review chrome. Each variation owns its own tokens, palette and type inside
 * its own folder.
 *
 * The Suspense boundary is required: MiniSwitcher reads `?chrome=0` with
 * useSearchParams, which would otherwise opt every variation out of static
 * rendering.
 */
export default function VariationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Suspense fallback={null}>
        <MiniSwitcher />
      </Suspense>
    </>
  );
}
