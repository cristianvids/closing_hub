/**
 * Parses a Loom / YouTube / Vimeo / Fathom share URL into an embeddable iframe
 * URL. Used by VideoEmbed so you can paste a normal share link into content.ts.
 *
 * Supported inputs:
 *   - YouTube:  https://www.youtube.com/watch?v=ID | https://youtu.be/ID
 *   - Vimeo:    https://vimeo.com/ID
 *   - Loom:     https://www.loom.com/share/ID
 *   - Fathom:   https://fathom.video/share/ID | https://fathom.video/embed/ID
 *               | https://fathom.video/calls/ID
 */
export type VideoProvider = "youtube" | "vimeo" | "loom" | "fathom" | "unknown";

export interface ParsedVideo {
  provider: VideoProvider;
  /** The iframe `src` to embed. `autoplay` adds autoplay-on-click (never sound-on-load). */
  embedUrl: string;
}

export function parseVideoUrl(url: string, autoplay = false): ParsedVideo {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");

    // YouTube
    if (host === "youtube.com" || host === "m.youtube.com") {
      const id = u.searchParams.get("v") ?? "";
      return {
        provider: "youtube",
        embedUrl: `https://www.youtube-nocookie.com/embed/${id}${
          autoplay ? "?autoplay=1&rel=0" : "?rel=0"
        }`,
      };
    }
    if (host === "youtu.be") {
      const id = u.pathname.slice(1);
      return {
        provider: "youtube",
        embedUrl: `https://www.youtube-nocookie.com/embed/${id}${
          autoplay ? "?autoplay=1&rel=0" : "?rel=0"
        }`,
      };
    }

    // Vimeo
    if (host === "vimeo.com") {
      const id = u.pathname.split("/").filter(Boolean)[0] ?? "";
      return {
        provider: "vimeo",
        embedUrl: `https://player.vimeo.com/video/${id}${
          autoplay ? "?autoplay=1" : ""
        }`,
      };
    }

    // Loom
    if (host === "loom.com") {
      const id = u.pathname.split("/").filter(Boolean).pop() ?? "";
      return {
        provider: "loom",
        embedUrl: `https://www.loom.com/embed/${id}${
          autoplay ? "?autoplay=1" : ""
        }`,
      };
    }

    // Fathom — accepts a /share/, /calls/, or already-/embed/ link. The last
    // path segment is the recording id; we always render the /embed/ form.
    if (host === "fathom.video") {
      const id = u.pathname.split("/").filter(Boolean).pop() ?? "";
      return {
        provider: "fathom",
        embedUrl: `https://fathom.video/embed/${id}${
          autoplay ? "?autoplay=1" : ""
        }`,
      };
    }

    return { provider: "unknown", embedUrl: url };
  } catch {
    return { provider: "unknown", embedUrl: url };
  }
}
