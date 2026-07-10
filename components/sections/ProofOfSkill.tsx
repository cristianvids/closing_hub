import { content } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { VideoEmbed } from "@/components/ui/VideoEmbed";

export function ProofOfSkill() {
  const { proofVideos, identity } = content;

  return (
    <Section id="proof" className="relative">
      {/* Emphasis backdrop — this is the strongest proof on the page. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 accent-glow opacity-70"
        aria-hidden="true"
      />

      <div className="relative">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Proof of skill
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            Don&apos;t take my word for it. Watch me close.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-white/55">
            A real call, and my breakdown of exactly what made it land. This is
            the part most closers can&apos;t show you.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-6">
          {proofVideos.map((video, i) => (
            <Reveal
              key={video.url + i}
              delay={i * 0.1}
              className="flex flex-col"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-white/50">
                  {i === 0 ? "The raw close" : "The breakdown"}
                </span>
              </div>
              <VideoEmbed
                url={video.url}
                title={`${identity.name} — ${
                  i === 0 ? "raw close" : "call breakdown"
                }`}
              />
              <p className="mt-4 text-pretty text-base leading-relaxed text-white/70">
                {video.caption}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
