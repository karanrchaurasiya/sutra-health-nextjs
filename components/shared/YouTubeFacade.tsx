"use client";

import { useState } from "react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
}

/**
 * Lazy-load YouTube facade.
 *
 * Loads only a thumbnail image on first paint and swaps in the real
 * iframe on click/keypress. This avoids loading YouTube's player JS
 * for every visitor regardless of whether they watch the video —
 * meaningfully better LCP and no layout shift from an unrequested
 * third-party script.
 *
 * The old lifequality.org.in site did this in vanilla JS; the previous
 * Next.js version regressed to an always-on iframe. This restores the
 * original behavior as a proper client component.
 */
export default function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Play video: ${title}`}
      className="group absolute inset-0 h-full w-full cursor-pointer border-0 bg-cover bg-center p-0"
      style={{
        backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
      }}
    >
      <span className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50 transition-colors duration-300 group-hover:from-black/15 group-hover:to-black/60" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#65966F] shadow-[0_10px_34px_rgba(101,150,111,0.5)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-white sm:h-20 sm:w-20">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ml-1 h-7 w-7 text-[#173F35] sm:h-8 sm:w-8"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
