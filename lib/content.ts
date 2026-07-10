/**
 * ============================================================================
 *  content.ts — THE single source of truth for your Closer Hub.
 * ============================================================================
 *
 *  Edit THIS file to update the entire site. You should never need to touch
 *  any JSX/component to change copy, numbers, links, videos, images, or color.
 *
 *  Anything marked `// REPLACE:` is placeholder content you should swap for
 *  your real details before going live. See the README for a field-by-field
 *  guide and instructions for swapping in real videos / images / your CV.
 * ============================================================================
 */

// ----------------------------- Types --------------------------------------

export interface Identity {
  /** Your name, shown in the hero and footer. */
  name: string;
  /** Short handle / positioning label, e.g. "High-Ticket Closer". */
  handle: string;
  /** One-line tagline used in meta + subtle places. */
  tagline: string;
}

export interface Hero {
  /** The big above-the-fold promise. Keep it to one punchy line. */
  headline: string;
  /** Supporting line that adds specificity / credibility. */
  subheadline: string;
  /** Primary button label, e.g. "Book a call". */
  ctaText: string;
}

export interface Vsl {
  /** Loom / YouTube / Vimeo URL for your Video Sales Letter. Click-to-play. */
  videoUrl: string;
  /** Optional poster image shown before play (path under /public or full URL). */
  poster?: string;
}

export interface Stat {
  /** The number as a string, e.g. "82", "1.2", "27". Count-up parses this. */
  value: string;
  /** Optional prefix, e.g. "$". */
  prefix?: string;
  /** Optional suffix, e.g. "%", "M", "K+". */
  suffix?: string;
  /** Small label under the number. */
  label: string;
}

export interface ProofVideo {
  /** Loom / YouTube / Vimeo URL. */
  url: string;
  /** One line stating exactly what this video demonstrates. */
  caption: string;
}

export interface TextTestimonial {
  type: "text";
  /** The quote. */
  content: string;
  /** Who said it. */
  author: string;
  /** Optional headline result, e.g. "$48k closed in 30 days". */
  result?: string;
}

export interface ImageTestimonial {
  type: "image";
  /** Path under /public or a full URL. A screenshot of a paycheck / DM / result. */
  imageUrl: string;
  /** Alt text (required for accessibility). */
  alt: string;
  /** Optional caption / who it's from. */
  author?: string;
  /** Optional headline result. */
  result?: string;
}

export type Testimonial = TextTestimonial | ImageTestimonial;

export interface About {
  /** A few tight lines. Who you are and why you close. */
  bio: string;
  /** Optional headshot (path under /public or full URL). */
  photoUrl?: string;
  /** Key credentials / offers you've closed for. */
  credentials: string[];
  /** Link to your CV/resume PDF (path under /public or full URL). */
  cvUrl: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface Contact {
  /** One line on the type of offer / availability you're after. */
  lookingFor: string;
  /** Calendly (or any booking) URL. */
  calendlyUrl: string;
  /** WhatsApp number in international format WITHOUT the + or spaces, e.g. "15551234567". */
  whatsapp: string;
  /** Email address. */
  email: string;
}

export interface Seo {
  /** Browser tab + link-preview title. */
  title: string;
  /** Link-preview description (WhatsApp / DMs / search). Keep under ~160 chars. */
  description: string;
  /**
   * Optional static OG image (path under /public or full URL). If omitted, the
   * site auto-generates a sharp OG card from your content at /opengraph-image.
   */
  ogImage?: string;
  /** Your final deployed URL, e.g. "https://yourname.com". Needed for correct OG links. */
  siteUrl: string;
}

export interface Theme {
  /** Single bold accent color as a hex string. Recolors the whole site. */
  accentColor: string;
}

export interface SiteContent {
  identity: Identity;
  hero: Hero;
  vsl: Vsl;
  stats: Stat[];
  proofVideos: ProofVideo[];
  testimonials: Testimonial[];
  about: About;
  contact: Contact;
  social: SocialLink[];
  seo: Seo;
  theme: Theme;
}

// --------------------------- Your content ---------------------------------

export const content: SiteContent = {
  identity: {
    name: "Alex Rivera", // REPLACE: your name
    handle: "High-Ticket Closer", // REPLACE: your positioning label
    tagline: "I turn booked calls into collected cash.", // REPLACE
  },

  hero: {
    // REPLACE: the single most important line on the page — who you are + the promise.
    headline: "I close high-ticket offers so founders keep building, not selling.",
    // REPLACE: supporting line — add specificity that builds instant credibility.
    subheadline:
      "5+ years on the phones for coaching, agency, and SaaS offers. 82% show-to-close on qualified calls, $2M+ collected. Watch a real close below.",
    ctaText: "Book a call", // REPLACE if you prefer different wording
  },

  vsl: {
    // REPLACE: your VSL. Accepts Loom, YouTube, or Vimeo URLs.
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    poster: "/placeholders/vsl-poster.svg", // REPLACE: optional custom poster
  },

  // REPLACE all values below with your real numbers.
  stats: [
    { value: "82", suffix: "%", label: "Close rate on qualified calls" },
    { prefix: "$", value: "2.1", suffix: "M", label: "Cash collected" },
    { prefix: "$", value: "6.5", suffix: "K", label: "Avg. deal size" },
    { value: "1,400", suffix: "+", label: "Calls taken" },
  ],

  // REPLACE both URLs + captions. (a) a raw real close, (b) your breakdown of it.
  proofVideos: [
    {
      url: "https://www.loom.com/share/00000000000000000000000000000000",
      caption:
        "Raw recording of a live close — objection handling on price to a signed $8k deal.",
    },
    {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      caption:
        "My breakdown of the call above — the exact framing, tonality, and pivots that landed it.",
    },
  ],

  // REPLACE with your real testimonials. Mix text quotes and image screenshots.
  // For image cards, drop the file in /public/placeholders and point imageUrl at it.
  // PRIVACY: redact client names on any paycheck / DM screenshots before uploading.
  testimonials: [
    {
      type: "text",
      content:
        "Alex plugged into our offer and was closing at a higher rate than our founder within two weeks. Total pro on the phones.",
      author: "Jordan M. — Coaching offer owner",
      result: "$120k added in 60 days",
    },
    {
      type: "image",
      imageUrl: "/placeholders/testimonial-1.svg",
      alt: "Screenshot of a Stripe dashboard showing collected payments (client details redacted).",
      author: "Stripe — collected payments",
      result: "$48k collected in one month",
    },
    {
      type: "text",
      content:
        "Reliable, coachable, and hungry. Showed up to every call prepared and never needed hand-holding on follow-up.",
      author: "Sam K. — Agency sales lead",
    },
    {
      type: "image",
      imageUrl: "/placeholders/testimonial-2.svg",
      alt: "Screenshot of a client DM praising the closer's performance (name redacted).",
      author: "Client DM",
      result: "Top closer, 2 months running",
    },
  ],

  about: {
    // REPLACE: a few tight lines. Lead with proof, not life story.
    bio: "I'm a high-ticket closer with 5+ years selling coaching, agency, and SaaS offers between $3k–$25k. I live in the CRM, tighten follow-up, and treat every booked call like it's the only one that matters.",
    photoUrl: "/placeholders/headshot.svg", // REPLACE: your headshot (optional)
    credentials: [
      // REPLACE with your real credentials / offers you've closed for.
      "Closed for 3 offers doing $200k+/mo",
      "Trained by [program / mentor]",
      "Fluent in HighLevel, Close, HubSpot",
      "Available 30+ dials/day, timezone-flexible",
    ],
    cvUrl: "/placeholders/cv.pdf", // REPLACE: your CV/resume PDF
  },

  contact: {
    // REPLACE: one line on exactly what you want next.
    lookingFor:
      "Looking to join one strong offer as a commission (or base + commission) closer. Available to start immediately.",
    calendlyUrl: "https://calendly.com/your-handle/intro", // REPLACE
    whatsapp: "15551234567", // REPLACE: intl format, digits only (no + or spaces)
    email: "you@example.com", // REPLACE
  },

  // REPLACE with your real profiles. Remove any you don't use.
  social: [
    { label: "LinkedIn", url: "https://linkedin.com/in/your-handle" },
    { label: "Instagram", url: "https://instagram.com/your-handle" },
    { label: "X", url: "https://x.com/your-handle" },
  ],

  seo: {
    // REPLACE all of these before launch.
    title: "Alex Rivera — High-Ticket Closer",
    description:
      "82% close rate. $2M+ collected. Watch a real close, then book a call. High-ticket closer available now.",
    // ogImage: "/placeholders/og.png", // Optional. Leave commented to auto-generate.
    siteUrl: "https://your-domain.com", // REPLACE with your deployed URL
  },

  theme: {
    accentColor: "#2E6BFF", // A sharp electric blue. Change to make it yours.
  },
};
