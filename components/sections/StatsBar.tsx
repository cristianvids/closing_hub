import { content } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

export function StatsBar() {
  const { stats } = content;

  return (
    <Section ariaLabel="Key metrics" className="py-10 sm:py-12">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8">
        <dl className="grid grid-cols-2 gap-6 sm:gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className="flex flex-col items-center text-center"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </dd>
              <span
                aria-hidden="true"
                className="mt-2 text-sm leading-snug text-white/50"
              >
                {stat.label}
              </span>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
