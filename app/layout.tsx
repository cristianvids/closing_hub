import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { content } from "@/lib/content";
import { hexToRgbChannels } from "@/lib/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const { seo, identity } = content;

// Build a valid metadataBase; fall back gracefully if siteUrl is a placeholder.
function safeMetadataBase(url: string): URL | undefined {
  try {
    return new URL(url);
  } catch {
    return undefined;
  }
}

export const metadata: Metadata = {
  metadataBase: safeMetadataBase(seo.siteUrl),
  title: seo.title,
  description: seo.description,
  applicationName: identity.name,
  authors: [{ name: identity.name }],
  keywords: [
    "high-ticket closer",
    "sales closer",
    "remote closer",
    identity.name,
  ],
  openGraph: {
    type: "website",
    title: seo.title,
    description: seo.description,
    url: seo.siteUrl,
    siteName: identity.name,
    // If seo.ogImage is set, use it; otherwise Next serves the dynamic
    // app/opengraph-image.tsx automatically.
    ...(seo.ogImage ? { images: [{ url: seo.ogImage }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    ...(seo.ogImage ? { images: [seo.ogImage] } : {}),
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const accentChannels = hexToRgbChannels(content.theme.accentColor);

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Inject the accent color from content.ts as a CSS variable so the
            whole site recolors from one hex. */}
        <style
          dangerouslySetInnerHTML={{
            __html: `:root{--accent:${accentChannels};}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
