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
 *
 *  POSITIONING NOTE: this copy is written for a mentorship-trained closer
 *  coming up from setting — skill proven on roleplays, real phone hours from
 *  setting, closing track record still being built. Keep every claim honest:
 *  hiring managers verify everything on the first call.
 * ============================================================================
 */

// ----------------------------- Types --------------------------------------

export interface Identity {
  /** Your name, shown in the hero and footer. */
  name: string;
  /** Short handle / positioning label, e.g. "Trained High-Ticket Closer". */
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
  /** Secondary button label, scrolls to the proof section. */
  secondaryCtaText: string;
}

export interface Vsl {
  /** Loom / YouTube / Vimeo URL for your Video Sales Letter. Click-to-play. */
  videoUrl: string;
  /** Optional poster image shown before play (path under /public or full URL). */
  poster?: string;
  /** Small caption under the VSL embed. */
  caption: string;
}

export interface Stat {
  /** The number as a string, e.g. "78", "1.2", "230". Count-up parses this. */
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
  /** Short chip label above the video, e.g. "The roleplay close". */
  label: string;
  /** One line stating exactly what this video demonstrates. */
  caption: string;
}

export interface ProofSection {
  /** Small uppercase eyebrow above the heading. */
  eyebrow: string;
  /** The section heading. This is your strongest claim — make it land. */
  heading: string;
  /** One or two supporting sentences under the heading. */
  intro: string;
}

export interface SocialProofSection {
  /** Small uppercase eyebrow above the heading. */
  eyebrow: string;
  /** The section heading. */
  heading: string;
}

export interface TextTestimonial {
  type: "text";
  /** The quote. */
  content: string;
  /** Who said it. */
  author: string;
  /** Optional headline result, e.g. "94% show rate, 3 months straight". */
  result?: string;
}

export interface ImageTestimonial {
  type: "image";
  /** Path under /public or a full URL. A screenshot of a leaderboard / DM / results. */
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
  /** A few tight lines. Who you are and why you're a safe bet. */
  bio: string;
  /** Optional headshot (path under /public or full URL). */
  photoUrl?: string;
  /** Key credentials: training, setting experience, tools, availability. */
  credentials: string[];
  /** Link to your CV/resume PDF (path under /public or full URL). */
  cvUrl: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface Contact {
  /** The closing section heading — your ask, stated with confidence. */
  heading: string;
  /** One line on the type of seat / arrangement you're after. */
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
  proof: ProofSection;
  proofVideos: ProofVideo[];
  socialProof: SocialProofSection;
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
    tagline: "Trained to close. Proven on the phones.", // REPLACE
  },

  hero: {
    // REPLACE: the single most important line on the page — trained skill + the honest ask.
    headline: "Trained 1-on-1 to close. All I'm missing is your offer.",
    // REPLACE: stack your three credibility pillars — setting hours, mentorship, proof below.
    subheadline:
      "8 months as an appointment setter on a high-ticket coaching offer — 230+ sets booked at a 78% show rate. Then I invested in 1-on-1 closing mentorship instead of waiting for someone to train me. Watch me run a full close below.",
    ctaText: "Book a call", // REPLACE if you prefer different wording
    secondaryCtaText: "Watch me close",
  },

  vsl: {
    // REPLACE: your VSL. Accepts Loom, YouTube, or Vimeo URLs.
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    poster: "/placeholders/vsl-poster.svg", // REPLACE: optional custom poster
    caption: "▶ Tap to watch my 90-second pitch",
  },

  // REPLACE all values below with your real setting numbers. These are metrics
  // you actually own — don't inflate them, they get verified.
  stats: [
    { value: "1,200", suffix: "+", label: "Dials made" },
    { value: "230", suffix: "+", label: "Sets booked" },
    { value: "78", suffix: "%", label: "Show rate on my sets" },
    { prefix: "$", value: "180", suffix: "K", label: "Revenue closed off my sets" },
  ],

  proof: {
    eyebrow: "Proof of skill",
    // REPLACE if you want different wording — this is your strongest claim.
    heading: "Skill isn't the question. Watch me close.",
    intro:
      "No cherry-picked highlight reel — I don't have a thousand logged closes yet, and I won't pretend to. Instead: a full unedited roleplay close, and a breakdown that shows you how I think on a call.",
  },

  // REPLACE both URLs. The captions below double as your recording brief:
  // (1) a full mock sales call — discovery → pitch → objections → close, one take;
  // (2) you analyzing a sales call on camera, showing your read of the game.
  proofVideos: [
    {
      url: "https://www.loom.com/share/00000000000000000000000000000000",
      label: "The roleplay close",
      caption:
        "A full mock sales call, one take, no edits — discovery, pitch, two price objections, and the close. Exactly how I'd run it on your offer.",
    },
    {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      label: "The breakdown",
      caption:
        "Me breaking down a sales call — the framing, tonality shifts, and pivots that make it land. This is the sales IQ your closers either have or don't.",
    },
  ],

  socialProof: {
    eyebrow: "Social proof",
    heading: "What the people I've worked for say.",
  },

  // REPLACE with your real testimonials: your setting manager on work ethic and
  // numbers, your closing mentor on skill, plus screenshots (leaderboards,
  // booked-calls dashboards, manager DMs).
  // PRIVACY: redact names and personal info on any screenshots before uploading.
  testimonials: [
    {
      type: "text",
      content:
        "Alex was the most consistent setter on my team — first on the dialer every morning, best show rate, zero excuses. When he told me he'd been training to close, I wasn't surprised. He'll outwork your whole floor.",
      author: "Jordan M. — Sales manager, coaching offer", // REPLACE
      result: "78% show rate, 8 months straight",
    },
    {
      type: "image",
      imageUrl: "/placeholders/testimonial-1.svg",
      alt: "Screenshot of a booked-calls dashboard showing appointment-setting results (details redacted).",
      author: "CRM — sets booked", // REPLACE
      result: "230+ qualified sets",
    },
    {
      type: "text",
      content:
        "I've trained a lot of closers 1-on-1. Alex runs a cleaner discovery than most people already taking calls. He doesn't need more training — he needs live reps on a real offer.",
      author: "Sam K. — Closing mentor", // REPLACE with your mentor's name/program
    },
    {
      type: "image",
      imageUrl: "/placeholders/testimonial-2.svg",
      alt: "Screenshot of a message from a sales manager praising performance (name redacted).",
      author: "Manager DM", // REPLACE
      result: "Top setter, 3 months running",
    },
  ],

  about: {
    // REPLACE: a few tight lines. The angle: you didn't wait to be developed —
    // you built the skill on your own dime, and setting proved the work ethic.
    bio: "I spent 8 months setting for a high-ticket coaching offer — living in the CRM, tightening follow-up, and listening to every closer's calls after my shift. Instead of waiting for a company to develop me, I paid for 1-on-1 closing mentorship and drilled roleplays daily. The skill is built. Now I want the seat to prove it.",
    photoUrl: "/placeholders/headshot.svg", // REPLACE: your headshot (optional)
    credentials: [
      // REPLACE with your real credentials.
      "1-on-1 closing mentorship with [mentor/program]",
      "8 months setting for a $200k+/mo offer",
      "Daily live roleplay reps",
      "Fluent in HighLevel, Close, HubSpot",
      "Available full-time, timezone-flexible",
    ],
    cvUrl: "/placeholders/cv.pdf", // REPLACE: your CV/resume PDF
  },

  contact: {
    heading: "Give me a seat. I'll earn the keep.",
    // REPLACE: your honest ask — closing seat or setter-to-closer ramp, and how
    // you de-risk the hire (commission trial, start on sets, etc.).
    lookingFor:
      "Looking for a closing seat — or a setter-to-closer ramp — on a proven offer. I'll take a commission-only trial to prove it: you risk nothing, I close or I don't. Available to start immediately.",
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
      "Mentorship-trained closer with 8 months of real phone hours setting. Watch a full roleplay close, then book a call. Available now.",
    // ogImage: "/placeholders/og.png", // Optional. Leave commented to auto-generate.
    siteUrl: "https://your-domain.com", // REPLACE with your deployed URL
  },

  theme: {
    accentColor: "#2E6BFF", // A sharp electric blue. Change to make it yours.
  },
};
