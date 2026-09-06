type MarkProps = {
  className?: string;
  /**
   * Give the mark a name only where it stands alone as the studio's identifier.
   * Beside the "Devonel" wordmark it is decoration and should stay unnamed, so
   * a screen reader hears the wordmark once instead of twice.
   */
  title?: string;
};

/**
 * The Devonel mark: a valve seen from above. Ring, crosshair, centre dot.
 *
 * Geometry is traced from `app/icon.svg` on a 32 unit square, but every fill
 * and stroke is `currentColor` and the ground is transparent, so the mark takes
 * the ink of whatever variation renders it and none of the old site's palette
 * travels with it. This is the only logo allowed anywhere on the site.
 */
export function Mark({ className, title }: MarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      focusable="false"
      {...(title ? { role: "img", "aria-label": title } : { "aria-hidden": true })}
    >
      <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="3" y1="16" x2="29" y2="16" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="3" x2="16" y2="29" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="3.5" fill="currentColor" />
    </svg>
  );
}
