"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full border-t border-black/15 bg-white/60 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Left */}
            <div>
              <p className="inline-flex items-center gap-2 border border-black/15 bg-white/55 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-black/70">
                <span className="h-2 w-2 bg-[var(--coral)]" />
                CONTACT
              </p>

            <h2 className="mt-6 font-display text-4xl leading-[1] tracking-[-0.02em] text-[var(--ink)] md:text-5xl">
              Thanks for
              <span className="text-[var(--sea)]"> stopping by</span>.
            </h2>

            <p className="mt-4 max-w-md text-lg leading-relaxed text-black/70">
              If something here resonated, feel free to reach out.
              I’m always happy to talk ideas, projects, or next steps.
            </p>
          </div>

            {/* Right */}
            <div className="md:text-right">
              <p className="text-xs font-semibold tracking-[0.16em] text-black/55">
                EMAIL
              </p>
              <a
                href="mailto:22.maria.amaro@gmail.com"
                className="mt-2 inline-block text-lg font-semibold text-[var(--ink)] border-b border-black/30 pb-1 transition hover:border-black/60"
              >
                22.maria.amaro@gmail.com
              </a>

              <p className="mt-6 text-xs font-semibold tracking-[0.16em] text-black/55">
                SOCIAL
              </p>
              <a
                href="https://www.linkedin.com/in/mariaamaro22"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold tracking-wide text-black/65 border-b border-black/25 pb-1 transition hover:border-black/60 hover:text-black/85"
              >
                LinkedIn →
              </a>

              <p className="mt-10 text-sm text-black/55">
                © {new Date().getFullYear()} Maria Amaro
              </p>
              <p className="text-sm text-black/50">
                Designed & built with care.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
