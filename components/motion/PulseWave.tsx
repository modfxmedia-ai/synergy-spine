"use client";

type Props = {
  className?: string;
  accent?: string;
};

/**
 * Animated nervous system "wave" — concentric pulse rings and a sine
 * wave that travels across, evoking energy flow.
 */
export default function PulseWave({
  className = "",
  accent = "#0170B9",
}: Props) {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="pulseGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={accent} stopOpacity="0" />
          <stop offset="50%" stopColor={accent} stopOpacity="1" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Concentric rings */}
      {[0, 0.6, 1.2].map((delay, i) => (
        <circle
          key={i}
          cx="60"
          cy="100"
          r="20"
          stroke={accent}
          strokeWidth="2"
          fill="none"
          style={{
            transformOrigin: "60px 100px",
            animation: `pulseRing 2.6s ease-out ${delay}s infinite`,
            opacity: 0,
          }}
        />
      ))}
      <circle cx="60" cy="100" r="10" fill={accent} />
      <circle
        cx="60"
        cy="100"
        r="14"
        fill="none"
        stroke={accent}
        strokeOpacity="0.4"
        strokeWidth="2"
        style={{ animation: "breath 4s ease-in-out infinite" }}
      />

      {/* Sine wave */}
      <path
        d="M70 100 Q 110 40, 150 100 T 230 100 T 310 100 T 390 100"
        stroke="url(#pulseGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="600"
        style={{ animation: "drawLine 3s ease-in-out infinite alternate" }}
      />

      {/* Dot riding the wave */}
      <circle r="4" fill="#F5C518">
        <animateMotion
          dur="3.6s"
          repeatCount="indefinite"
          path="M70 100 Q 110 40, 150 100 T 230 100 T 310 100 T 390 100"
        />
      </circle>
    </svg>
  );
}
