export function Schematic() {
  return (
    <svg
      className="schematic-svg"
      viewBox="0 0 1280 280"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="pipe schematic"
    >
      <defs>
        <pattern
          id="hatch"
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="6" stroke="#0e1410" strokeWidth="1" />
        </pattern>
        <marker
          id="arr"
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

      {/* BEFORE side */}
      <text x="20" y="26" fontFamily="JetBrains Mono" fontSize="11" fill="#0e1410" letterSpacing="2">
        BEFORE — UNCAUGHT LEAKAGE
      </text>
      <rect x="20" y="60" width="120" height="42" fill="none" stroke="#0e1410" strokeWidth="1.5" />
      <text x="80" y="86" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">
        Lead intake
      </text>
      <path
        className="flow-slow"
        d="M140 81 L260 81 L260 130 L150 130"
        fill="none"
        stroke="#0e1410"
        strokeWidth="2"
      />
      <circle className="leak-lg" cx="200" cy="81" r="6" fill="#c8451c" />
      <text x="200" y="56" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#c8451c" letterSpacing="1.5">
        LEAK 14%
      </text>

      <rect x="20" y="110" width="120" height="42" fill="none" stroke="#0e1410" strokeWidth="1.5" />
      <text x="80" y="136" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">
        CRM
      </text>
      <path
        className="flow-slow"
        d="M140 131 L200 131 L200 175 L320 175 L320 200 L240 200 L240 220 L380 220"
        fill="none"
        stroke="#0e1410"
        strokeWidth="2"
      />
      <circle className="leak" cx="320" cy="175" r="5" fill="#c8451c" />
      <circle className="leak" cx="240" cy="200" r="5" fill="#c8451c" style={{ animationDelay: ".4s" }} />
      <text x="380" y="226" fontFamily="Inter" fontSize="13" fill="#0e1410">
        Sheet · &quot;Master tracker&quot;
      </text>

      <rect x="20" y="160" width="120" height="42" fill="none" stroke="#0e1410" strokeWidth="1.5" />
      <text x="80" y="186" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">
        Email replies
      </text>
      <path
        className="flow-slow"
        d="M140 181 L300 181 L300 245 L520 245"
        fill="none"
        stroke="#0e1410"
        strokeWidth="2"
      />
      <text x="525" y="248" fontFamily="Inter" fontSize="13" fill="#0e1410">
        Slack DM ad-hoc
      </text>

      {/* divider */}
      <line x1="640" y1="20" x2="640" y2="260" stroke="#0e1410" strokeWidth="1.5" strokeDasharray="3 4" />

      {/* AFTER side */}
      <text x="660" y="26" fontFamily="JetBrains Mono" fontSize="11" fill="#0e1410" letterSpacing="2">
        AFTER — DEVONEL ROUTING
      </text>

      <rect x="660" y="60" width="120" height="42" fill="none" stroke="#0e1410" strokeWidth="1.5" />
      <text x="720" y="86" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">
        Lead intake
      </text>

      <circle cx="820" cy="81" r="14" fill="url(#hatch)" stroke="#0e1410" strokeWidth="1.5" />
      <line className="valve-handle" x1="820" y1="63" x2="820" y2="99" stroke="#0e1410" strokeWidth="1.5" />
      <text x="820" y="50" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#0e1410" letterSpacing="1.5">
        VALVE 01
      </text>
      <path
        className="flow"
        d="M780 81 L806 81 M834 81 L920 81"
        stroke="#0e1410"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arr)"
      />

      <rect x="920" y="60" width="160" height="42" fill="#0e1410" />
      <text x="1000" y="86" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="12" fill="#eef0eb" letterSpacing="2">
        ROUTER · n8n
      </text>

      <path
        className="flow"
        d="M1080 81 L1140 81 L1140 60"
        stroke="#0e1410"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arr)"
      />
      <text x="1180" y="64" textAnchor="middle" fontFamily="Inter" fontSize="12" fill="#0e1410">
        CRM
      </text>
      <path
        className="flow"
        d="M1080 81 L1180 81"
        stroke="#0e1410"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arr)"
      />
      <text x="1230" y="86" textAnchor="middle" fontFamily="Inter" fontSize="12" fill="#0e1410">
        Owner
      </text>

      <path
        className="flow-slow"
        d="M1000 102 L1000 150 L780 150 L780 200"
        stroke="#0e1410"
        strokeWidth="2"
        fill="none"
      />
      <rect x="720" y="200" width="120" height="42" fill="none" stroke="#0e1410" strokeWidth="1.5" />
      <text x="780" y="226" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">
        Audit log
      </text>

      <circle cx="900" cy="220" r="22" fill="none" stroke="#0e1410" strokeWidth="1.5" />
      <path className="gauge-needle" d="M900 220 L915 208" stroke="#c8451c" strokeWidth="2" />
      <circle cx="900" cy="220" r="2" fill="#0e1410" />
      <text x="900" y="262" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#0e1410" letterSpacing="1.5">
        FLOW · OK
      </text>

      <rect x="960" y="180" width="180" height="60" fill="none" stroke="#0e1410" strokeWidth="1.5" />
      <text
        x="1050"
        y="200"
        textAnchor="middle"
        fontFamily="JetBrains Mono"
        fontSize="10"
        fill="#0e1410"
        letterSpacing="1.5"
        className="router-glow"
      >
        PAGER · ON-CALL
      </text>
      <text x="1050" y="220" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#0e1410">
        Devonel pod
      </text>
      <text x="1050" y="234" textAnchor="middle" fontFamily="Inter" fontSize="11" fill="#2c3530" fontStyle="italic">
        &quot;we get woken up first&quot;
      </text>
    </svg>
  );
}
