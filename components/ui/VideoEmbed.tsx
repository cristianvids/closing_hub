"use client";

import { useState } from "react";
import { parseVideoUrl } from "@/lib/video";

interface VideoEmbedProps {
  url: string;
  /** Accessible title for the iframe / play button. */
  title: string;
  /** Optional poster image (path under /public or full URL). */
  poster?: string;
  className?: string;
}

/**
 * Click-to-play video embed. Renders a lightweight poster + play button and
 * only injects the (heavy) provider iframe after the user clicks — so nothing
 * loads on page load. On click it autoplays, but never auto-plays with sound
 * on page load. Supports Loom, YouTube, and Vimeo URLs.
 */
export function VideoEmbed({ url, title, poster, className = "" }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const { embedUrl, provider } = parseVideoUrl(url, true);

  return (
    <div
      className={`group relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-800 ${className}`}
    >
      {playing ? (
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 flex h-full w-full items-center justify-center"
        >
          {/* Poster: image if provided, otherwise a subtle branded backdrop. */}
          {poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={poster}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-90"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-ink-700 to-ink-900" />
          )}

          <div className="absolute inset-0 accent-glow opacity-60" />

          {/* Play button */}
          <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent shadow-[0_8px_30px_rgb(var(--accent)/0.5)] transition-transform duration-200 group-hover:scale-110 sm:h-20 sm:w-20">
            <svg
              viewBox="0 0 24 24"
              className="ml-1 h-7 w-7 fill-white sm:h-8 sm:w-8"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>

          {provider === "unknown" && (
            <span className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white/70">
              Add a Loom, YouTube, Vimeo, or Fathom URL in content.ts
            </span>
          )}
        </button>
      )}
    </div>
  );
}
