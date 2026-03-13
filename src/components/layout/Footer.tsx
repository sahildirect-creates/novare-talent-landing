import { Instagram } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS, CONTACT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                className="text-[var(--color-violet-accent)]"
              >
                <path
                  d="M8 4L16 28L20 16L28 4H20L16 14L12 4H8Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-lg font-bold">Novare Talent</span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">
              India&apos;s elite talent network. Connecting top 1% institute graduates with companies building the future.
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              Incubated at SINE, IIT Bombay
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Discover
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.discover.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Connect
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <span className="text-sm text-[var(--color-text-secondary)]">
                  +91 {CONTACT.phone}
                </span>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} Novare Talent Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-[var(--color-text-muted)] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
