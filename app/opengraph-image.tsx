import { ImageResponse } from "next/og";
import { content } from "@/lib/content";
import { hexToRgbChannels } from "@/lib/theme";

// Route segment config
export const runtime = "edge";
export const alt = content.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamically generated Open Graph card (the link-preview image shown in
 * WhatsApp / DMs / iMessage / email). Auto-built from content.ts, so it stays
 * in sync with your name, positioning, and accent color. If you'd rather use a
 * fixed image, set `seo.ogImage` in content.ts and it takes over.
 */
export default function OpengraphImage() {
  const { identity, seo, stats, theme } = content;
  const [r, g, b] = hexToRgbChannels(theme.accentColor).split(" ");
  const accent = `rgb(${r}, ${g}, ${b})`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0B",
          padding: "70px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: 300,
            width: 700,
            height: 500,
            background: `radial-gradient(closest-side, rgba(${r},${g},${b},0.28), transparent)`,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: accent,
            }}
          />
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 30 }}>
            {identity.handle}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "white",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            {identity.name}
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 34,
              marginTop: 20,
              maxWidth: 950,
            }}
          >
            {seo.description}
          </div>
        </div>

        <div style={{ display: "flex", gap: 50 }}>
          {stats.slice(0, 3).map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: accent, fontSize: 44, fontWeight: 700 }}>
                {(s.prefix ?? "") + s.value + (s.suffix ?? "")}
              </div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 22 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
