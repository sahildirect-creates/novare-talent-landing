"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-[rgba(3,0,20,0.8)] backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <nav className="section-padding flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="text-[var(--color-violet-accent)]"
            >
              <path
                d="M8 4L16 28L20 16L28 4H20L16 14L12 4H8Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-lg font-bold text-white">
              Novare Talent
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-white transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="/Dashboard"
              className="glow-button text-white text-sm font-medium px-5 py-2 rounded-full"
            >
              Apply to Hire
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-[var(--color-bg-primary)]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-white hover:text-[var(--color-lavender)] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/Dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
                className="glow-button text-white font-medium px-8 py-3 rounded-full mt-4"
              >
                Apply to Hire
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
