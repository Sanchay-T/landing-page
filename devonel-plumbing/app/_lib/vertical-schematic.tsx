export function VerticalSchematic() {
  return (
    <svg
      className="schematic-svg-v"
      viewBox="0 0 480 980"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      aria-label="vertical pipe schematic"
    >
      <defs>
        <pattern
          id="hatch-v"
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="6" stroke="#0e1410" strokeWidth="1" />
        </pattern>
        <marker
          id="arr-v"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="9"
          markerHeight="9"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill="#0e1410" />
        </marker>
      </defs>

      {/* ============ BEFORE (top half) ============ */}
      <text x="20" y="28" fontFamily="JetBrains Mono" fontSize="11" fill="#0e1410" letterSpacing="2">
        BEFORE — UNCAUGHT LEAKAGE
      </text>

      {/* Three input boxes stacked vertically on the left */}
      <rect x="20" y="60" width="150" height="42" fill="none" stroke="#0e1410" strokeWidth="1.5" />
      <text x="95" y="86" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">
        Lead intake
      </text>

      <rect x="20" y="130" width="150" height="42" fill="none" stroke="#0e1410" strokeWidth="1.5" />
      <text x="95" y="156" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">
        CRM
      </text>

      <rect x="20" y="200" width="150" height="42" fill="none" stroke="#0e1410" strokeWidth="1.5" />
      <text x="95" y="226" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">
        Email replies
      </text>

      {/* Tangled pipes flowing right */}
      <path
        className="flow-slow"
        d="M170 81 L260 81 L260 145 L200 145"
        fill="none"
        stroke="#0e1410"
        strokeWidth="2"
      />
      <circle className="leak-lg" cx="260" cy="105" r="6" fill="#c8451c" />
      <text x="280" y="100" fontFamily="JetBrains Mono" fontSize="10" fill="#c8451c" letterSpacing="1.5">
        LEAK 14%
      </text>

      <path
        className="flow-slow"
        d="M170 151 L220 151 L220 200 L320 200 L320 280 L240 280 L240 320 L420 320"
        fill="none"
        stroke="#0e1410"
        strokeWidth="2"
      />
      <circle className="leak" cx="320" cy="200" r="5" fill="#c8451c" />
      <circle className="leak" cx="240" cy="280" r="5" fill="#c8451c" style={{ animationDelay: ".4s" }} />

      <path
        className="flow-slow"
        d="M170 221 L300 221 L300 380 L420 380"
        fill="none"
        stroke="#0e1410"
        strokeWidth="2"
      />

      {/* Annotations near the right side */}
      <text x="240" y="350" fontFamily="Inter" fontSize="13" fill="#0e1410">
        Sheet · &quot;Master tracker&quot;
      </text>
      <text x="240" y="408" fontFamily="Inter" fontSize="13" fill="#0e1410">
        Slack DM ad-hoc
      </text>

      {/* Divider */}
      <line
        x1="20"
        y1="470"
        x2="460"
        y2="470"
        stroke="#0e1410"
        strokeWidth="1.5"
        strokeDasharray="3 4"
      />

      {/* ============ AFTER (bottom half) ============ */}
      <text x="20" y="510" fontFamily="JetBrains Mono" fontSize="11" fill="#0e1410" letterSpacing="2">
        AFTER — DEVONEL ROUTING
      </text>

      {/* Lead intake — centered top of bottom half */}
      <rect x="165" y="540" width="150" height="42" fill="none" stroke="#0e1410" strokeWidth="1.5" />
      <text x="240" y="566" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">
        Lead intake
      </text>

      {/* Pipe down to valve */}
      <path
        className="flow"
        d="M240 582 L240 612"
        stroke="#0e1410"
        strokeWidth="2"
        fill="none"
      />

      {/* Valve */}
      <circle cx="240" cy="630" r="16" fill="url(#hatch-v)" stroke="#0e1410" strokeWidth="1.5" />
      <line className="valve-handle-v" x1="222" y1="630" x2="258" y2="630" stroke="#0e1410" strokeWidth="1.5" />
      <text x="282" y="634" fontFamily="JetBrains Mono" fontSize="9" fill="#0e1410" letterSpacing="1.5">
        VALVE 01
      </text>

      {/* Pipe down to router */}
      <path
        className="flow"
        d="M240 648 L240 680"
        stroke="#0e1410"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arr-v)"
      />

      {/* Router */}
      <rect x="140" y="688" width="200" height="42" fill="#0e1410" />
      <text
        x="240"
        y="714"
        textAnchor="middle"
        fontFamily="JetBrains Mono"
        fontSize="12"
        fill="#eef0eb"
        letterSpacing="2"
      >
        ROUTER · n8n
      </text>

      {/* Fan-out down */}
      <path
        className="flow"
        d="M240 730 L240 760 L100 760 L100 790"
        stroke="#0e1410"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arr-v)"
      />
      <path
        className="flow"
        d="M240 760 L240 790"
        stroke="#0e1410"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arr-v)"
      />
      <path
        className="flow"
        d="M240 760 L380 760 L380 790"
        stroke="#0e1410"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arr-v)"
      />

      {/* Output labels */}
      <text x="100" y="810" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">
        CRM
      </text>
      <text x="240" y="810" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">
        Owner
      </text>
      <text x="380" y="810" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">
        Audit log
      </text>

      {/* Gauge bottom-left */}
      <circle cx="60" cy="900" r="22" fill="none" stroke="#0e1410" strokeWidth="1.5" />
      <path className="gauge-needle-v" d="M60 900 L75 888" stroke="#c8451c" strokeWidth="2" />
      <circle cx="60" cy="900" r="2" fill="#0e1410" />
      <text
        x="60"
        y="942"
        textAnchor="middle"
        fontFamily="JetBrains Mono"
        fontSize="10"
        fill="#0e1410"
        letterSpacing="1.5"
      >
        FLOW · OK
      </text>

      {/* Pager box bottom-right */}
      <rect x="130" y="860" width="320" height="76" fill="none" stroke="#0e1410" strokeWidth="1.5" />
      <text
        x="290"
        y="884"
        textAnchor="middle"
        fontFamily="JetBrains Mono"
        fontSize="10"
        fill="#0e1410"
        letterSpacing="1.5"
        className="router-glow"
      >
        PAGER · ON-CALL
      </text>
      <text x="290" y="906" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">
        Devonel pod
      </text>
      <text
        x="290"
        y="924"
        textAnchor="middle"
        fontFamily="Inter"
        fontSize="11"
        fill="#2c3530"
        fontStyle="italic"
      >
        &quot;we get woken up first&quot;
      </text>
    </svg>
  );
}
