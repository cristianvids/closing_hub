/**
 * Converts a hex color (e.g. "#2E6BFF" or "#28f") into space-separated RGB
 * channels ("46 107 255") for use in the `--accent` CSS variable, which powers
 * the Tailwind `accent` color with alpha support.
 */
export function hexToRgbChannels(hex: string): string {
  const cleaned = hex.replace("#", "").trim();

  const full =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((c) => c + c)
          .join("")
      : cleaned;

  const int = parseInt(full, 16);
  if (Number.isNaN(int) || full.length !== 6) {
    // Fallback to a sensible electric blue if the hex is malformed.
    return "46 107 255";
  }

  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `${r} ${g} ${b}`;
}
