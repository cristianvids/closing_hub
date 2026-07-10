import { content } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12 3a1 1 0 0 1 1 1v9.59l2.3-2.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42l2.3 2.3V4a1 1 0 0 1 1-1zM5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z" />
    </svg>
  );
}

export function About() {
  const { about, identity } = content;

  return (
    <Section id="about">
      <div className="grid items-center gap-10 md:grid-cols-[auto,1fr] md:gap-12">
        {about.photoUrl && (
          <Reveal from="right" className="mx-auto md:mx-0">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-white/10 sm:h-48 sm:w-48">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={about.photoUrl}
                alt={`${identity.name}, ${identity.handle}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        )}

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              About
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {identity.name}
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-white/65">
              {about.bio}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="mt-6 flex flex-wrap gap-2">
              {about.credentials.map((cred) => (
                <li
                  key={cred}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-white/70"
                >
                  {cred}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8">
              <CTAButton
                href={about.cvUrl}
                variant="secondary"
                icon={<DownloadIcon />}
              >
                Download CV
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
