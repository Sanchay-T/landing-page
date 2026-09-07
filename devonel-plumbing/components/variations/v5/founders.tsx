/**
 * v5 founders.
 *
 * The buyer question is "who am I actually hiring, and will they be on the
 * call?", and on a product site the honest answer is an account record, not a
 * team page. So this is two `.v5-spec` cards side by side on the 12-column
 * grid: square, flat, bordered, no shadow, because `tokens.css` section 14
 * reserves the radius and the one frame shadow for a real capture and a person
 * is not one. Copy is `docs/goal/COPY.md` section 6, under that section's v5
 * tone note ("founder cards styled as account rows with a status line, 'on
 * every project'").
 *
 * Four decisions worth writing down:
 *
 * 1. No portrait, no avatar, no initials in a circle. The named failure point
 *    for this section in `docs/goal/03-design-research.md` section 5 is
 *    "portrait cropping ... long names wrapping under the avatar", and every
 *    one of its sub-failures comes from an image slot. There is no image slot
 *    here. The variation's rule is that a picture on this page is a real
 *    capture of shipped software; a generated face would be the fake artefact
 *    the whole direction exists to avoid, and no photograph of either founder
 *    is in `docs/goal/ASSET-INVENTORY.md`.
 *
 * 2. The record is a `<dl>`, so each fact is labelled by what it is. Mono for
 *    the field key, body face for the value: the same split the rest of the
 *    page uses, where mono means data and Geist means language. The keys are
 *    lowercase because they are keys in a record, not headings over content.
 *
 * 3. The status line is text, not a coloured pill. `tokens.css` section 14
 *    spends the accent dot on `.v5-frame__cap`, where it marks a real capture;
 *    a spec card gets none. So "on every project" is set in ink against the
 *    muted record type beside it, and carries its weight by being the one
 *    thing in the card head that is not grey.
 *
 * 4. Two people, and only two. COPY.md prints a third, optional role line and
 *    gates it on that person's consent, and `docs/goal/01-business-brief.md`
 *    section 8 puts the contractors and both founders' employment history on
 *    the never-publish list. Nothing here is outside COPY.md section 6.
 *
 * Sanchay's card carries one field more than Umayr's, because the source gives
 * him one credential more and inventing a fourth line to square the columns
 * would be the failure this page is built against. The cards are stretched to
 * one height at 1024 and up, so the difference lands as space inside a record
 * rather than as two cards of different sizes.
 */

type Field = {
  /** The record key. Lowercase mono: this is a field name, not a heading. */
  label: string;
  /** A single-value field. */
  value?: string;
  /** A multi-value field: one responsibility per line. */
  values?: readonly string[];
};

type Founder = {
  id: string;
  name: string;
  fields: readonly Field[];
};

const FOUNDERS: readonly Founder[] = [
  {
    id: "sanchay",
    name: "Sanchay Thalnerkar",
    fields: [
      { label: "role", value: "Builds the systems." },
      { label: "city", value: "Mumbai" },
      {
        label: "owns",
        values: [
          "Agent harnesses",
          "Verification loops",
          "Browser automation",
          "Generated media pipelines",
        ],
      },
      { label: "also", value: "Builds and sells clinic software in Australia and India." },
    ],
  },
  {
    id: "umayr",
    name: "Umayr Sheik",
    fields: [
      { label: "role", value: "Relationship and commercial lead." },
      { label: "city", value: "Dubai" },
      {
        label: "owns",
        values: [
          "Prompt craft and creative direction",
          "Data and analytics",
          "Enterprise AI context",
        ],
      },
    ],
  },
];

export function Founders() {
  return (
    <section id="founders" className="v5-founders" aria-labelledby="founders-title">
      <div className="v5-container">
        <div className="v5-founders__head">
          <p className="v5-mono v5-eyebrow">Who you work with</p>

          <h2 id="founders-title" className="v5-founders__title">
            Two founders. Both of them on your project.
          </h2>

          <p className="v5-lead v5-measure">
            You talk to the people who build the work and price it, from the first message to
            handover.
          </p>
        </div>

        <ul className="v5-founders__grid">
          {FOUNDERS.map((founder) => (
            <li key={founder.id} className="v5-spec v5-fdr">
              <p className="v5-spec__cap v5-mono v5-fdr__cap">
                <span>founder</span>
                <span className="v5-fdr__status">on every project</span>
              </p>

              <div className="v5-spec__body v5-fdr__body">
                <h3 className="v5-fdr__name">{founder.name}</h3>

                <dl className="v5-fdr__fields">
                  {founder.fields.map((field) => (
                    <div key={field.label} className="v5-fdr__field">
                      <dt className="v5-mono v5-fdr__label">{field.label}</dt>
                      <dd className="v5-fdr__value">
                        {field.values ? (
                          <ul className="v5-fdr__owns">
                            {field.values.map((line) => (
                              <li key={line}>{line}</li>
                            ))}
                          </ul>
                        ) : (
                          field.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </li>
          ))}
        </ul>

        {/* The rule runs the full width of the grid above it; the sentence
            keeps its own measure, so the line reads as the section's closing
            stamp rather than as a third card. */}
        <div className="v5-founders__standing">
          <p>Two cities, one thread, and no layer between you and the people building.</p>
        </div>
      </div>
    </section>
  );
}
