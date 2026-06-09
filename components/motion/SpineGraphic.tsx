"use client";

type Props = {
  className?: string;
  glowColor?: string;
};

/**
 * Animated spine illustration. Vertebrae fade-in in sequence, nerve impulses
 * pulse outward, and a subtle "flow" travels down the spinal cord.
 */
export default function SpineGraphic({
  className = "",
  glowColor = "#F5C518",
}: Props) {
  return (
    <svg
      viewBox="0 0 200 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="spineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B9BDB" />
          <stop offset="100%" stopColor="#0170B9" />
        </linearGradient>
        <radialGradient id="spineGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={glowColor} stopOpacity="0.45" />
          <stop offset="100%" stopColor={glowColor} stopOpacity="0" />
        </radialGradient>
        <filter id="spineSoftGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Soft halo */}
      <circle cx="100" cy="180" r="120" fill="url(#spineGlow)" />

      {/* Spinal cord line */}
      <path
        d="M100 20 C 90 80, 110 130, 100 180 S 90 280, 100 340"
        stroke="url(#spineGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Travelling pulse */}
      <circle r="4" fill={glowColor} filter="url(#spineSoftGlow)">
        <animateMotion
          dur="3.6s"
          repeatCount="indefinite"
          path="M100 20 C 90 80, 110 130, 100 180 S 90 280, 100 340"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.1;0.9;1"
          dur="3.6s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Vertebrae stack */}
      {Array.from({ length: 12 }).map((_, i) => {
        const y = 30 + i * 26;
        const wOffset = Math.sin(i * 0.6) * 6;
        return (
          <g key={i}>
            {/* Nerve branches */}
            <path
              d={`M${100 + wOffset - 14} ${y} L ${60 - i % 3 * 4} ${y - 6}`}
              stroke="#3B9BDB"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.35"
            />
            <path
              d={`M${100 + wOffset + 14} ${y} L ${140 + i % 3 * 4} ${y - 6}`}
              stroke="#3B9BDB"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.35"
            />

            {/* Vertebra */}
            <rect
              x={86 + wOffset}
              y={y - 9}
              width="28"
              height="18"
              rx="6"
              fill="white"
              stroke="url(#spineGrad)"
              strokeWidth="1.5"
              style={{
                transformOrigin: `${100 + wOffset}px ${y}px`,
                animation: `breath 5s ease-in-out ${i * 0.18}s infinite`,
              }}
            />
            <circle
              cx={100 + wOffset}
              cy={y}
              r="2.5"
              fill={glowColor}
              style={{
                animation: `twinkle 3.6s ease-in-out ${i * 0.22}s infinite`,
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}
