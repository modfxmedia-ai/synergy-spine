"use client";

type Props = {
  className?: string;
  accent?: string;
};

/**
 * Decorative orbit graphic, three particles orbiting a glowing core.
 * Used to evoke synergy / balance.
 */
export default function OrbitGraphic({
  className = "",
  accent = "#0170B9",
}: Props) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Core */}
      <div className="absolute inset-0 grid place-items-center">
        <div
          className="h-16 w-16 rounded-full blur-xl opacity-60"
          style={{ background: accent }}
        />
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <div
          className="relative h-12 w-12 rounded-full animate-breath"
          style={{
            background: `radial-gradient(circle at 30% 30%, #FFE066, ${accent})`,
            boxShadow: `0 0 40px ${accent}`,
          }}
        />
      </div>

      {/* Pulse rings */}
      {[0, 0.8, 1.6].map((d, i) => (
        <div key={i} className="absolute inset-0 grid place-items-center">
          <div
            className="h-12 w-12 rounded-full border-2"
            style={{
              borderColor: accent,
              animation: `pulseRing 2.6s ease-out ${d}s infinite`,
              opacity: 0,
            }}
          />
        </div>
      ))}

      {/* Orbit rings + particles */}
      {[
        { size: 140, color: "#F5C518", duration: 12, reverse: false, delay: 0 },
        { size: 200, color: "#0170B9", duration: 18, reverse: true, delay: 0 },
        { size: 260, color: "#3B9BDB", duration: 24, reverse: false, delay: 0 },
      ].map((o, i) => (
        <div
          key={i}
          className="absolute inset-0 grid place-items-center pointer-events-none"
        >
          <div
            className="rounded-full border border-dashed"
            style={{
              width: o.size,
              height: o.size,
              borderColor: `${o.color}33`,
              animation: `spinSlow ${o.duration}s linear ${o.reverse ? "reverse" : "normal"} infinite`,
            }}
          >
            <div
              className="absolute h-3 w-3 rounded-full"
              style={{
                top: -6,
                left: "50%",
                marginLeft: -6,
                background: o.color,
                boxShadow: `0 0 14px ${o.color}`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
