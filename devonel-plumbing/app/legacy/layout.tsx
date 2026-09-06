import "./legacy.css";

/**
 * Archive layout. Its only job is to scope `legacy.css` to `/legacy/*` so the
 * pre-redesign option pages keep rendering while the five new variations are
 * built. Nothing under this folder is part of the redesign, and the whole
 * folder is deleted in the final cleanup pass.
 */
export default function LegacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
