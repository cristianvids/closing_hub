import { content } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1zM5 9v10h14V9H5z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.46 15.02L2 22l5.1-1.34A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 0 1 6.87 12.4l.15.24-.86 3.14-3.22-.85-.23.14a8.1 8.1 0 1 1-2.68-15.2zM8.53 7.3c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34 1 2.5c.12.16 1.7 2.7 4.2 3.68 2.08.82 2.5.66 2.96.62.46-.04 1.48-.6 1.69-1.19.2-.58.2-1.08.14-1.19-.06-.1-.22-.16-.46-.28-.24-.12-1.48-.73-1.7-.81-.23-.08-.4-.12-.56.12-.16.24-.64.8-.79.97-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.32-.74-1.8-.18-.42-.38-.42-.53-.43h-.45z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1.6 2L12 12l7.4-5H4.6zM20 8.24l-7.4 5a1 1 0 0 1-1.2 0L4 8.24V17h16V8.24z" />
    </svg>
  );
}

export function Contact() {
  const { contact, identity } = content;
  const whatsappUrl = `https://wa.me/${contact.whatsapp}`;
  const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
    `Closing role — reaching out to ${identity.name}`
  )}`;

  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent px-6 py-14 text-center sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute inset-0 accent-glow" aria-hidden="true" />
        <div className="relative">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s put me on your offer.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-white/60">
              {contact.lookingFor}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton
                href={contact.calendlyUrl}
                icon={<CalendarIcon />}
                className="w-full sm:w-auto"
              >
                Book a call
              </CTAButton>
              <CTAButton
                href={whatsappUrl}
                variant="secondary"
                icon={<WhatsAppIcon />}
                className="w-full sm:w-auto"
              >
                WhatsApp
              </CTAButton>
              <CTAButton
                href={mailtoUrl}
                variant="secondary"
                icon={<MailIcon />}
                external={false}
                className="w-full sm:w-auto"
              >
                Email
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
