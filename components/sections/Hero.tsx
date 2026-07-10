import { content } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { VideoEmbed } from "@/components/ui/VideoEmbed";

export function Hero() {
  const { identity, hero, vsl, contact } = content;

  return (
    <header className="relative overflow-hidden">
      {/* Ambient accent glow behind the hero. */}
      <div className="pointer-events-none absolute inset-0 accent-glow" aria-hidden="true" />

      <Section className="relative pt-20 sm:pt-28">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-accent-pulse" />
              {identity.handle}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/60 sm:text-xl">
              {hero.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <CTAButton href={contact.calendlyUrl} className="w-full sm:w-auto">
                {hero.ctaText}
              </CTAButton>
              <CTAButton
                href="#proof"
                variant="secondary"
                external={false}
                className="w-full sm:w-auto"
              >
                {hero.secondaryCtaText}
              </CTAButton>
            </div>
          </Reveal>

          {/* VSL — prominent, click-to-play, no autoplay-with-sound. */}
          <Reveal delay={0.2} className="mt-14 w-full max-w-3xl">
            <VideoEmbed
              url={vsl.videoUrl}
              poster={vsl.poster}
              title={`${identity.name} — video sales letter`}
            />
            <p className="mt-3 text-sm text-white/40">{vsl.caption}</p>
          </Reveal>
        </div>
      </Section>
    </header>
  );
}
