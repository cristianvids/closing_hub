import { content } from "@/lib/content";

export function Footer() {
  const { identity, social } = content;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-content flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white">{identity.name}</p>
          <p className="text-sm text-white/40">{identity.tagline}</p>
        </div>

        {social.length > 0 && (
          <nav aria-label="Social links">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      <p className="mx-auto mt-8 w-full max-w-content text-center text-xs text-white/30 sm:text-left">
        © {year} {identity.name}. All rights reserved.
      </p>
    </footer>
  );
}
