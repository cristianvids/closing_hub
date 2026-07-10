import { content } from "@/lib/content";
import type { Testimonial } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

function ResultBadge({ result }: { result?: string }) {
  if (!result) return null;
  return (
    <span className="mt-4 inline-flex w-fit items-center rounded-full bg-accent/[0.12] px-3 py-1 text-sm font-semibold text-accent">
      {result}
    </span>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  const base =
    "flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-200 hover:border-white/20";

  if (item.type === "image") {
    return (
      <figure className={base}>
        <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-800">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.imageUrl}
            alt={item.alt}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        </div>
        <figcaption className="mt-4 flex flex-col">
          {item.author && (
            <span className="text-sm font-medium text-white/60">
              {item.author}
            </span>
          )}
          <ResultBadge result={item.result} />
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className={base}>
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 fill-accent/40"
        aria-hidden="true"
      >
        <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5A3.67 3.67 0 0 1 9.17 8V6zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H15.5A3.67 3.67 0 0 1 19.17 8V6z" />
      </svg>
      <blockquote className="mt-4 flex-1 text-pretty text-base leading-relaxed text-white/80">
        &ldquo;{item.content}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex flex-col">
        <span className="text-sm font-semibold text-white">{item.author}</span>
        <ResultBadge result={item.result} />
      </figcaption>
    </figure>
  );
}

export function SocialProof() {
  const { testimonials } = content;

  return (
    <Section id="results" ariaLabel="Testimonials and results">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Social proof
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
          Results and receipts.
        </h2>
      </Reveal>

      {/* Masonry-style columns keep mixed card heights clean without gaps. */}
      <div className="mt-12 [column-fill:_balance] gap-6 sm:columns-2 lg:columns-3">
        {testimonials.map((item, i) => (
          <Reveal
            key={i}
            delay={(i % 3) * 0.08}
            className="mb-6 break-inside-avoid"
          >
            <TestimonialCard item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
