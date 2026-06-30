"use client";

type Props = {
  className?: string;
  accent?: string;
  count?: number;
};

/**
 * Animated equalizer / wave bars, useful as a percussion/music motif.
 */
export default function WaveBars({
  className = "",
  accent = "#0170B9",
  count = 28,
}: Props) {
  return (
    <div
      className={`flex items-end gap-1.5 h-24 ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => {
        const delay = (i % 7) * 0.12;
        const height = 25 + ((i * 37) % 70);
        return (
          <span
            key={i}
            className="block w-1.5 rounded-full"
            style={{
              height: `${height}%`,
              background: `linear-gradient(to top, ${accent}, ${accent}55)`,
              animation: `wave 1.2s ease-in-out ${delay}s infinite`,
              transformOrigin: "bottom",
            }}
          />
        );
      })}
    </div>
  );
}
