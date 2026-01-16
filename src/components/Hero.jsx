"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function Grain() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.22'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden]">
      {/* background */}
      <Grain />
      {/* <div className="pointer-events-none absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 bg-[#FFD6A6]/70 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-56 right-[-120px] h-[560px] w-[560px] bg-[#A8E6E1]/55 blur-[110px]" /> */}

      {/* frame */}
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-28">
        <div className="grid min-h-[calc(100vh-7rem)] grid-cols-1 items-center gap-12 md:grid-cols-[1fr_420px]">
          {/* left: personal intro */}
          <div>
            {/* <motion.p
              className="inline-flex items-center gap-2 border border-black/15 bg-white/60 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-black/70"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="h-2 w-2 bg-[var(--coral)]" />
              HI, I’M MARIA
            </motion.p> */}
            <motion.h1
              className="mt-6 font-display text-6xl leading-[0.88] tracking-[-0.02em] text-[var(--ink)] md:text-8xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              {/* Color pops: coral + sea + ink */}
              <span className="text-[var(--ink)]">Maria Amaro</span>{" "}
            </motion.h1>

            <motion.p
              className="mt-5 max-w-xl text-lg leading-relaxed text-black/70"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
            >
              <span className="font-semibold text-[var(--sea)]/90">Biomedical Engineer.</span>
              <br />
              <span className="font-semibold text-[var(--sea)]/90">Data scientist.</span>
              <br />
              Building ML & web stuff.
            </motion.p>

            {/* clean, personal links */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <a
                href="#about"
                className="group inline-flex items-center gap-2 border-b-2 border-black/70 pb-1 text-sm font-semibold tracking-wide text-black/80 hover:text-black"
              >
                ABOUT <span className="transition group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 border-b-2 border-black/30 pb-1 text-sm font-semibold tracking-wide text-black/60 hover:border-black/60 hover:text-black/80"
              >
                PROJECTS <span className="transition group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border-b-2 border-black/30 pb-1 text-sm font-semibold tracking-wide text-black/60 hover:border-black/60 hover:text-black/80"
              >
                CONTACT <span className="transition group-hover:translate-x-0.5">→</span>
              </a>
            </motion.div>

            {/* tiny “handmade” stamps (optional but nice)
            <motion.div
              className="mt-7 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26 }}
            >
              {["Portugal → Australia", "ML + Web"].map((t) => (
                <span
                  key={t}
                  className="border border-black/15 bg-white/60 px-3 py-1 text-sm text-black/65"
                >
                  {t}
                </span>
              ))}
            </motion.div> */}
          </div>

          {/* right: your portrait (the only image) */}
          <motion.div
            className="relative mx-auto w-full max-w-[420px]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* print frame (sharp) */}
            <div className="relative border border-black/15 bg-white/70 shadow-[14px_18px_0_rgba(0,0,0,.08)]">
              {/* tape accents */}
              <div className="absolute -top-4 left-10 h-8 w-28 rotate-[-6deg] border border-black/10 bg-[var(--coral)]/22" />
              <div className="absolute -bottom-4 right-10 h-8 w-32 rotate-[5deg] border border-black/10 bg-[var(--sea)]/18" />

              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Maria Amaro"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* caption strip */}
              <div className="border-t border-black/10 bg-white/70 px-4 py-3">
                <p className="text-sm text-black/60">
                  AI • web projects • good vibes
                </p>
              </div>
            </div>

            {/* small accent squares (no rounding) */}
            <motion.div
              className="pointer-events-none absolute -left-6 -top-6 h-16 w-16 border border-black/10 bg-white/50"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -right-6 -bottom-6 h-16 w-16 border border-black/10 bg-white/50"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

    </section>
  );
}
