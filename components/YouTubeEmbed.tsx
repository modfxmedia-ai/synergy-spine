import Image from "next/image";

type Props = {
  /** 11-character YouTube video id. */
  id: string;
  /** Accessible title for the video. */
  title: string;
  /** Optional aspect ratio class — defaults to 16/9. */
  aspect?: string;
};

/**
 * Lightweight YouTube embed: shows the official thumbnail with a play overlay
 * and links out to youtube.com/watch?v={id}. Avoids the heavy YouTube iframe
 * on initial page load and keeps the layout fast.
 */
export default function YouTubeEmbed({ id, title, aspect = "aspect-video" }: Props) {
  const watchUrl = `https://www.youtube.com/watch?v=${id}`;
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  return (
    <a
      href={watchUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${title} on YouTube`}
      className={`group relative block ${aspect} w-full overflow-hidden rounded-2xl bg-brand-navyDark ring-1 ring-black/5 shadow-lg`}
    >
      <Image
        src={thumb}
        alt={title}
        fill
        sizes="(min-width: 1024px) 600px, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
        unoptimized
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-navyDark shadow-2xl transition group-hover:scale-110">
          <span
            className="absolute inset-0 rounded-full ring-2 ring-white/40 animate-pulseRing"
            aria-hidden="true"
          />
          <svg
            className="w-7 h-7 translate-x-0.5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      <span className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-bold text-white/85">
        <span>YouTube</span>
        <span className="opacity-0 group-hover:opacity-100 transition">Watch →</span>
      </span>
    </a>
  );
}
