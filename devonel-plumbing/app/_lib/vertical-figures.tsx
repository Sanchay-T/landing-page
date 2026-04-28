/**
 * Three portrait (380×680) vertical schematics for /option-d's right-side
 * rectangle. Every <path> + box border has pathLength="1" and an inline
 * `--start` style (0..1) which the parent .vf-* CSS uses to compute
 * stroke-dashoffset = 1 - clamp(0, (var(--p) - var(--start)) * 5, 1).
 */
// React 19's CSSProperties type has no index for `--*` custom properties.
// Untyped return so the SVG element `style` prop accepts the helper output.
// eslint-disable-next-line
const start = (s: number): any => ({ "--start": String(s) });

/* ---------------- FIG. 01 — Intake leakage (vertical) ---------------- */
export function VFigure1() {
  return (
    <svg className="vf-svg" viewBox="0 0 380 680" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-label="Intake leakage routing diagram">
      <defs>
        <pattern id="vf1-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#0e1410" strokeWidth="1" />
        </pattern>
        <marker id="vf1-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill="#0e1410" />
        </marker>
      </defs>

      {/* BEFORE — top half */}
      <text className="vf-label" style={start(0.02)} x="20" y="28" fontFamily="JetBrains Mono" fontSize="11" fill="#0e1410" letterSpacing="2">BEFORE — UNCAUGHT LEAKAGE</text>

      <path className="vf-box" style={start(0.06)} d="M20 50 H140 V92 H20 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.08)} x="80" y="76" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">Lead intake</text>

      <path className="vf-box" style={start(0.10)} d="M20 110 H140 V152 H20 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.12)} x="80" y="136" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">CRM</text>

      <path className="vf-box" style={start(0.14)} d="M20 170 H140 V212 H20 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.16)} x="80" y="196" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">Email replies</text>

      {/* Tangled pipes flowing right with leaks */}
      <path className="vf-pipe" style={start(0.18)} d="M140 71 L220 71 L220 130 L160 130" stroke="#0e1410" strokeWidth="2" fill="none" pathLength="1" />
      <circle className="vf-leak" style={start(0.22)} cx="220" cy="92" r="5" fill="#c8451c" />
      <text className="vf-label" style={start(0.24)} x="240" y="90" fontFamily="JetBrains Mono" fontSize="9" fill="#c8451c" letterSpacing="1.5">LEAK 14%</text>

      <path className="vf-pipe" style={start(0.20)} d="M140 131 L200 131 L200 175 L300 175 L300 232 L240 232" stroke="#0e1410" strokeWidth="2" fill="none" pathLength="1" />
      <circle className="vf-leak" style={start(0.24)} cx="300" cy="195" r="4.5" fill="#c8451c" />
      <text className="vf-label" style={start(0.26)} x="240" y="248" fontFamily="Inter" fontSize="11" fill="#0e1410">Master tracker</text>

      <path className="vf-pipe" style={start(0.22)} d="M140 191 L260 191 L260 280 L320 280" stroke="#0e1410" strokeWidth="2" fill="none" pathLength="1" />
      <text className="vf-label" style={start(0.28)} x="240" y="296" fontFamily="Inter" fontSize="11" fill="#0e1410">Slack DM ad-hoc</text>

      {/* Divider */}
      <line className="vf-divider" style={start(0.30)} x1="20" y1="320" x2="360" y2="320" stroke="#0e1410" strokeWidth="1.5" strokeDasharray="3 4" pathLength="1" />

      {/* AFTER — bottom half */}
      <text className="vf-label" style={start(0.32)} x="20" y="352" fontFamily="JetBrains Mono" fontSize="11" fill="#0e1410" letterSpacing="2">AFTER — DEVONEL ROUTING</text>

      <path className="vf-box" style={start(0.34)} d="M120 376 H260 V418 H120 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.36)} x="190" y="402" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">Lead intake</text>

      <path className="vf-pipe" style={start(0.38)} d="M190 418 L190 446" stroke="#0e1410" strokeWidth="2" fill="none" pathLength="1" />

      <circle className="vf-valve-ring" style={start(0.39)} cx="190" cy="462" r="14" fill="url(#vf1-hatch)" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <line className="vf-valve-handle" x1="172" y1="462" x2="208" y2="462" stroke="#0e1410" strokeWidth="1.5" />
      <text className="vf-label" style={start(0.41)} x="226" y="466" fontFamily="JetBrains Mono" fontSize="9" fill="#0e1410" letterSpacing="1.5">VALVE 01</text>

      <path className="vf-pipe" style={start(0.42)} d="M190 478 L190 504" stroke="#0e1410" strokeWidth="2" fill="none" markerEnd="url(#vf1-arr)" pathLength="1" />

      <rect className="vf-router" style={start(0.43)} x="100" y="510" width="180" height="40" fill="#0e1410" />
      <text className="vf-label" style={start(0.45)} x="190" y="535" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="12" fill="#eef0eb" letterSpacing="2">ROUTER · n8n</text>

      {/* Fan-out 3 outputs */}
      <path className="vf-pipe" style={start(0.46)} d="M190 550 L190 580 L70 580 L70 605" stroke="#0e1410" strokeWidth="2" fill="none" markerEnd="url(#vf1-arr)" pathLength="1" />
      <path className="vf-pipe" style={start(0.46)} d="M190 580 L190 605" stroke="#0e1410" strokeWidth="2" fill="none" markerEnd="url(#vf1-arr)" pathLength="1" />
      <path className="vf-pipe" style={start(0.46)} d="M190 580 L310 580 L310 605" stroke="#0e1410" strokeWidth="2" fill="none" markerEnd="url(#vf1-arr)" pathLength="1" />

      <text className="vf-label" style={start(0.48)} x="70" y="624" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">CRM</text>
      <text className="vf-label" style={start(0.48)} x="190" y="624" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">Owner</text>
      <text className="vf-label" style={start(0.48)} x="310" y="624" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">Audit log</text>

      {/* Stat */}
      <text className="vf-label vf-label-stat" style={start(0.52)} x="20" y="660" fontFamily="Newsreader" fontStyle="italic" fontSize="22" fill="#c39a3c">$214k recovered</text>
    </svg>
  );
}

/* ---------------- FIG. 02 — KYC re-verification (vertical) ---------------- */
export function VFigure2() {
  return (
    <svg className="vf-svg" viewBox="0 0 380 680" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-label="KYC re-verification routing diagram">
      <defs>
        <marker id="vf2-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill="#0e1410" />
        </marker>
      </defs>

      {/* BEFORE — vertical chain */}
      <text className="vf-label" style={start(0.02)} x="20" y="28" fontFamily="JetBrains Mono" fontSize="11" fill="#0e1410" letterSpacing="2">BEFORE — 9-DAY BACKLOG</text>

      <path className="vf-box" style={start(0.06)} d="M120 50 H260 V92 H120 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.08)} x="190" y="76" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">Submission</text>

      <path className="vf-pipe" style={start(0.10)} d="M190 92 L190 118" stroke="#0e1410" strokeWidth="2" fill="none" markerEnd="url(#vf2-arr)" pathLength="1" />

      <path className="vf-box" style={start(0.12)} d="M70 124 H310 V216 H70 Z" fill="none" stroke="#c8451c" strokeWidth="2.5" pathLength="1" />
      <text className="vf-label" style={start(0.14)} x="190" y="158" textAnchor="middle" fontFamily="Newsreader" fontStyle="italic" fontWeight="500" fontSize="34" fill="#c8451c">9-day queue</text>
      <text className="vf-label" style={start(0.16)} x="190" y="186" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#c8451c" letterSpacing="2">MANUAL REVIEW</text>
      <text className="vf-label" style={start(0.18)} x="190" y="204" textAnchor="middle" fontFamily="Inter" fontSize="11" fill="#c8451c" fontStyle="italic">backlog grows</text>

      <path className="vf-pipe" style={start(0.22)} d="M190 216 L190 246" stroke="#0e1410" strokeWidth="2" fill="none" markerEnd="url(#vf2-arr)" pathLength="1" />

      <path className="vf-box" style={start(0.24)} d="M120 252 H260 V292 H120 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.26)} x="190" y="276" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">Approve / reject</text>

      {/* Divider */}
      <line className="vf-divider" style={start(0.30)} x1="20" y1="320" x2="360" y2="320" stroke="#0e1410" strokeWidth="1.5" strokeDasharray="3 4" pathLength="1" />

      {/* AFTER — fan out */}
      <text className="vf-label" style={start(0.32)} x="20" y="352" fontFamily="JetBrains Mono" fontSize="11" fill="#0e1410" letterSpacing="2">AFTER — DEVONEL ROUTING</text>

      <path className="vf-box" style={start(0.34)} d="M120 376 H260 V418 H120 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.36)} x="190" y="402" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">Submission</text>

      <path className="vf-pipe" style={start(0.38)} d="M190 418 L190 446" stroke="#0e1410" strokeWidth="2" fill="none" markerEnd="url(#vf2-arr)" pathLength="1" />

      <rect className="vf-router" style={start(0.40)} x="100" y="452" width="180" height="40" fill="#0e1410" />
      <text className="vf-label" style={start(0.42)} x="190" y="477" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="12" fill="#eef0eb" letterSpacing="2">CLASSIFIER</text>

      {/* Two lanes */}
      <path className="vf-pipe" style={start(0.44)} d="M190 492 L190 522 L80 522 L80 552" stroke="#0e1410" strokeWidth="2" fill="none" markerEnd="url(#vf2-arr)" pathLength="1" />
      <path className="vf-box" style={start(0.46)} d="M20 558 H140 V604 H20 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.48)} x="80" y="582" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">Fast lane</text>
      <text className="vf-label" style={start(0.50)} x="80" y="598" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#c39a3c" letterSpacing="2">14 HR</text>

      <path className="vf-pipe" style={start(0.45)} d="M190 522 L300 522 L300 552" stroke="#0e1410" strokeWidth="2" fill="none" markerEnd="url(#vf2-arr)" pathLength="1" />
      <path className="vf-box" style={start(0.47)} d="M240 558 H360 V604 H240 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.49)} x="300" y="582" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">Slow lane</text>
      <text className="vf-label" style={start(0.51)} x="300" y="598" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#0e1410" letterSpacing="2">2 DAYS</text>

      {/* Stat */}
      <text className="vf-label vf-label-stat" style={start(0.55)} x="20" y="660" fontFamily="Newsreader" fontStyle="italic" fontSize="22" fill="#c39a3c">$148k saved · 22 hr/wk freed</text>
    </svg>
  );
}

/* ---------------- FIG. 03 — Returns triage (vertical) ---------------- */
export function VFigure3() {
  return (
    <svg className="vf-svg" viewBox="0 0 380 680" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-label="Returns triage routing diagram">
      <defs>
        <marker id="vf3-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill="#0e1410" />
        </marker>
      </defs>

      {/* BEFORE — long vertical chain */}
      <text className="vf-label" style={start(0.02)} x="20" y="28" fontFamily="JetBrains Mono" fontSize="11" fill="#0e1410" letterSpacing="2">BEFORE — 2.3-DAY HANDLE TIME</text>

      <path className="vf-box" style={start(0.06)} d="M120 50 H260 V86 H120 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.08)} x="190" y="72" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">Email</text>

      <path className="vf-pipe" style={start(0.10)} d="M190 86 L190 110" stroke="#0e1410" strokeWidth="2" fill="none" markerEnd="url(#vf3-arr)" pathLength="1" />

      <path className="vf-box" style={start(0.12)} d="M120 116 H260 V152 H120 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.14)} x="190" y="132" textAnchor="middle" fontFamily="Inter" fontSize="12" fill="#0e1410">Inbox</text>
      <text className="vf-label" style={start(0.16)} x="190" y="146" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#c8451c" letterSpacing="2">24 HR</text>

      <path className="vf-pipe" style={start(0.18)} d="M190 152 L190 176" stroke="#0e1410" strokeWidth="2" fill="none" markerEnd="url(#vf3-arr)" pathLength="1" />

      <path className="vf-box" style={start(0.20)} d="M120 182 H260 V218 H120 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.22)} x="190" y="198" textAnchor="middle" fontFamily="Inter" fontSize="12" fill="#0e1410">Human classify</text>
      <text className="vf-label" style={start(0.24)} x="190" y="212" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#c8451c" letterSpacing="2">18 HR</text>

      <path className="vf-pipe" style={start(0.26)} d="M190 218 L190 244" stroke="#0e1410" strokeWidth="2" fill="none" markerEnd="url(#vf3-arr)" pathLength="1" />

      <path className="vf-box" style={start(0.28)} d="M120 250 H260 V286 H120 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.30)} x="190" y="266" textAnchor="middle" fontFamily="Inter" fontSize="12" fill="#0e1410">Reply</text>
      <text className="vf-label" style={start(0.32)} x="190" y="280" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#c8451c" letterSpacing="2">12 HR</text>

      {/* Divider */}
      <line className="vf-divider" style={start(0.36)} x1="20" y1="318" x2="360" y2="318" stroke="#0e1410" strokeWidth="1.5" strokeDasharray="3 4" pathLength="1" />

      {/* AFTER — auto triage fan-out */}
      <text className="vf-label" style={start(0.38)} x="20" y="350" fontFamily="JetBrains Mono" fontSize="11" fill="#0e1410" letterSpacing="2">AFTER — DEVONEL TRIAGE</text>

      <path className="vf-box" style={start(0.40)} d="M120 374 H260 V414 H120 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.42)} x="190" y="398" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">Email</text>

      <path className="vf-pipe" style={start(0.44)} d="M190 414 L190 442" stroke="#0e1410" strokeWidth="2" fill="none" markerEnd="url(#vf3-arr)" pathLength="1" />

      <rect className="vf-router" style={start(0.46)} x="100" y="448" width="180" height="40" fill="#0e1410" />
      <text className="vf-label" style={start(0.48)} x="190" y="473" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="12" fill="#eef0eb" letterSpacing="2">AUTO TRIAGE</text>

      {/* 3 lanes */}
      <path className="vf-pipe" style={start(0.50)} d="M190 488 L190 516 L70 516 L70 542" stroke="#0e1410" strokeWidth="2" fill="none" markerEnd="url(#vf3-arr)" pathLength="1" />
      <path className="vf-box" style={start(0.52)} d="M20 548 H120 V594 H20 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.54)} x="70" y="572" textAnchor="middle" fontFamily="Inter" fontSize="12" fill="#0e1410">Refund</text>
      <text className="vf-label" style={start(0.56)} x="70" y="588" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#0e1410" letterSpacing="2">AUTO</text>

      <path className="vf-pipe" style={start(0.51)} d="M190 516 L190 542" stroke="#0e1410" strokeWidth="2" fill="none" markerEnd="url(#vf3-arr)" pathLength="1" />
      <path className="vf-box" style={start(0.53)} d="M140 548 H240 V594 H140 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.55)} x="190" y="572" textAnchor="middle" fontFamily="Inter" fontSize="12" fill="#0e1410">Exchange</text>
      <text className="vf-label" style={start(0.57)} x="190" y="588" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#0e1410" letterSpacing="2">AUTO</text>

      <path className="vf-pipe" style={start(0.52)} d="M190 516 L310 516 L310 542" stroke="#0e1410" strokeWidth="2" fill="none" markerEnd="url(#vf3-arr)" pathLength="1" />
      <path className="vf-box" style={start(0.54)} d="M260 548 H360 V594 H260 Z" fill="none" stroke="#0e1410" strokeWidth="1.5" pathLength="1" />
      <text className="vf-label" style={start(0.56)} x="310" y="572" textAnchor="middle" fontFamily="Inter" fontSize="12" fill="#0e1410">Edge case</text>
      <text className="vf-label" style={start(0.58)} x="310" y="588" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#c39a3c" letterSpacing="2">HUMAN</text>

      {/* Stat */}
      <text className="vf-label vf-label-stat" style={start(0.62)} x="20" y="660" fontFamily="Newsreader" fontStyle="italic" fontSize="22" fill="#c39a3c">4 hr handle · $74k saved</text>
    </svg>
  );
}
