# Closer Hub

A single-page personal landing site for a high-ticket sales closer — built as a
sales call in page form (hook → proof → close), not a portfolio. Dark, premium,
mobile-first, and fast. Every piece of content lives in **one file** so you can
update the whole site without touching any code.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**,
deploy-ready for **Vercel**.

---

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. The page ships with realistic placeholder content
so it looks real out of the box. The placeholder copy is written for a
**mentorship-trained closer coming up from appointment setting** — skill proven
via a roleplay close and call breakdown, setting stats as the credibility floor.
Keep every claim honest; hiring managers verify everything on the first call.

Other commands:

```bash
npm run build   # production build (run this before deploying)
npm start       # serve the production build locally
npm run lint    # lint
```

---

## Edit everything in one file: `lib/content.ts`

**This is the only file you need to edit.** Copy, numbers, links, videos, images,
testimonials, contact info, and the accent color all live here. Every component
reads from it — you should never have to open a component to change content.

Anything marked `// REPLACE:` is placeholder content to swap before you go live.

Here's what each section controls:

| Field in `content.ts` | Controls |
| --- | --- |
| `identity` | Your name, positioning label ("handle"), and tagline. |
| `hero` | The big above-the-fold headline, subheadline, and both button labels (`ctaText`, `secondaryCtaText`). |
| `vsl` | Your video sales letter (click-to-play). `videoUrl`, optional `poster`, and the `caption` under it. |
| `stats` | The metrics row. Each item: `{ prefix?, value, suffix?, label }`. |
| `proof` | The proof section's `eyebrow`, `heading`, and `intro` paragraph. |
| `proofVideos` | The two centerpiece videos — each with a chip `label` and one-line `caption`. Default setup: (1) a roleplay close, (2) a call breakdown. |
| `socialProof` | The testimonial section's `eyebrow` and `heading`. |
| `testimonials` | Social-proof cards. Mix `type: 'text'` quotes and `type: 'image'` screenshots (see below). |
| `about` | Bio, optional `photoUrl`, `credentials` list, and `cvUrl` (your CV PDF). |
| `contact` | The closing `heading`, `lookingFor` line + `calendlyUrl`, `whatsapp`, `email`. |
| `social` | Footer social links. |
| `seo` | Link-preview title/description, optional `ogImage`, and your final `siteUrl`. |
| `theme.accentColor` | One hex value that recolors the entire site. |

### Change the accent color

Set `theme.accentColor` in `content.ts` to any hex (e.g. `"#2E6BFF"`). It cascades
through buttons, highlights, glows, and the auto-generated preview card. That's the
whole change — nothing else to touch.

---

## Swap in your real media

### Videos (VSL + proof)

`vsl.videoUrl` and each `proofVideos[].url` accept a normal **Loom, YouTube, or
Vimeo** share link — paste it as-is. The site parses it and embeds correctly.

```ts
// All of these work:
"https://www.youtube.com/watch?v=XXXXXXXXXXX"
"https://youtu.be/XXXXXXXXXXX"
"https://vimeo.com/123456789"
"https://www.loom.com/share/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

Videos are **click-to-play** — nothing loads until the visitor taps play, and it
never autoplays with sound.

**What to record for the proof section** (the captions in `content.ts` double as
your recording brief):

1. **The roleplay close** — a full mock sales call in one take, no edits:
   discovery → pitch → at least two objections → the close. Have a friend or
   your mentor play the prospect and tell them to push back for real. Unedited
   matters: it's what makes it credible. Once you have real closing calls on an
   offer (and permission to share), swap this for a raw recording of a real close.
2. **The breakdown** — you on camera analyzing a sales call (one of your own, or
   a public one): call out the framing, tonality shifts, and pivots and why they
   work. This shows sales IQ, which is exactly what a manager is trying to assess
   in a beginner.

### Images (testimonials + headshot)

Drop image files into `public/placeholders/` (or anywhere under `public/`) and
point the field at the path, e.g. `imageUrl: "/placeholders/my-screenshot.png"`.

For an image testimonial card:

```ts
{
  type: "image",
  imageUrl: "/placeholders/stripe-payout.png",
  alt: "Stripe payout screenshot",   // required — describes the image
  author: "Stripe — collected",       // optional
  result: "$48k collected in 30 days" // optional badge
}
```

> **Privacy:** Before uploading paycheck, Stripe, or DM screenshots, **redact
> client names and any personal info.** Blur or box them out. It looks more
> professional and keeps you clean.

### Your CV

Replace `public/placeholders/cv.pdf` with your real CV PDF (keep the path, or
update `about.cvUrl` to your new filename).

---

## Link-preview card (Open Graph)

When your link is pasted into WhatsApp, DMs, iMessage, or email, the preview card
matters — it's part of the first impression. This site **auto-generates** a sharp
card from your `content.ts` (name, positioning, top stats, accent color) at
`/opengraph-image`. You don't have to design anything.

- Want a custom image instead? Set `seo.ogImage: "/placeholders/og.png"` in
  `content.ts` and it takes over.
- **Set `seo.siteUrl` to your real deployed URL** so preview links resolve
  correctly.

---

## Deploy to Vercel

1. Push this repo to GitHub (already on your branch).
2. Go to <https://vercel.com/new>, import the repo. Vercel auto-detects Next.js —
   no configuration needed. Click **Deploy**.
3. After the first deploy, copy your live URL and set it as `seo.siteUrl` in
   `content.ts`, then push again (so OG links resolve).

### Connect a custom domain

1. In the Vercel project → **Settings → Domains → Add**, enter your domain.
2. At your registrar, add the DNS records Vercel shows you (usually an `A` record
   to Vercel's IP for the apex, and a `CNAME` to `cname.vercel-dns.com` for `www`).
3. Wait for DNS to propagate (minutes to a couple hours). Vercel issues HTTPS
   automatically.
4. Update `seo.siteUrl` to your custom domain and push.

---

## Project structure

```
app/
  layout.tsx            Root layout, fonts, SEO/OG metadata, accent-color injection
  page.tsx              Composes the sections top to bottom
  globals.css           Tailwind + base tokens + reduced-motion handling
  opengraph-image.tsx   Dynamic link-preview card generated from content.ts
  icon.svg              Favicon
components/
  sections/             Hero, StatsBar, ProofOfSkill, SocialProof, About, Contact, Footer
  ui/                   VideoEmbed, CountUp, Reveal, CTAButton, Section (reusable pieces)
lib/
  content.ts            ← THE file you edit
  theme.ts              Accent hex → CSS variable helper
  video.ts              Loom/YouTube/Vimeo URL parser
public/placeholders/    Swappable placeholder images + cv.pdf
```

## Notes

- **Accessible:** semantic landmarks, alt text, keyboard-navigable buttons,
  visible focus rings, and full `prefers-reduced-motion` support (animations turn
  off for users who ask for that).
- **Performant:** videos load only on click; images lazy-load; fonts are
  self-hosted via `next/font` (no external requests).
