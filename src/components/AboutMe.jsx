"use client";

import { motion } from "framer-motion";

/** Minimal content, presented as a path */
const steps = [
  {
    title: "Education",
    lines: ["Master in Bioengineering, Specialization in Biomedical Engineering", "FEUP & ICBAS, Porto, PT"],
    accent: "coral",
  },
  {
    title: "Focus",
    lines: ["Biomedical Data Science", "AI • Machine Learning • Web"],
    accent: "sea",
  },
  {
    title: "Experience",
    lines: ["Deep Learning Intern", "@ INESC TEC"],
    accent: "ink",
  },
  {
    title: "Leadership",
    lines: ["IEEE EMBS Vice-Chair", "Community + events + organizing"],
    accent: "coral",
  },
  {
    title: "Languages",
    lines: ["Portuguese (Native)", "English (Full Professional) • French (Limited)"],
    accent: "sea",
  },
  {
    title: "Life",
    lines: ["Sports • new hobbies • meeting people", "Traveling • always curious"],
    accent: "ink",
  },
];

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

/** Simple footprint (pure CSS) */
function Footprint({ side, accent }) {
  const accentMap = {
    coral: "bg-[var(--coral)]/25",
    sea: "bg-[var(--sea)]/18",
    ink: "bg-black/10",
  };

  return (
    <div
      className={[
        "relative h-14 w-10",
        side === "left" ? "-rotate-[16deg]" : "rotate-[14deg]",
      ].join(" ")}
      aria-hidden="true"
    >
      {/* heel */}
      <div
        className={`absolute bottom-0 left-1/2 h-8 w-7 -translate-x-1/2 ${accentMap[accent]}`}
      />
      {/* toes */}
      <div className={`absolute top-0 left-1 h-3 w-3 ${accentMap[accent]}`} />
      <div className={`absolute top-1 left-4 h-3 w-3 ${accentMap[accent]}`} />
      <div className={`absolute top-3 left-6 h-2.5 w-2.5 ${accentMap[accent]}`} />
      <div className={`absolute top-5 left-6 h-2.5 w-2.5 ${accentMap[accent]}`} />
    </div>
  );
}

export default function AboutMe() {
  return (
    <section id="about" className="relative overflow-hidden]">
      {/* match hero background */}
      <Grain />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 bg-[#FFD6A6]/60 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-56 right-[-120px] h-[560px] w-[560px] bg-[#A8E6E1]/45 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex items-center gap-2 border border-black/15 bg-white/60 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-black/70">
            <span className="h-2 w-2 bg-[var(--sea)]" />
            ABOUT
          </p>

          <h2 className="mt-6 font-display text-5xl leading-[0.92] tracking-[-0.02em] text-[var(--ink)] md:text-6xl">
            A little path of
            <span className="text-[var(--coral)]"> where I’ve been</span>.
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/70">
            Scroll down — each step is a small highlight. Nothing loud. Just the essentials.
          </p>
        </motion.div>

        <div className="relative mt-14">
          {/* subtle winding path line */}
          <svg
            className="pointer-events-none absolute left-1/2 top-0 hidden -translate-x-1/2 md:block"
            width="520"
            height="980"
            viewBox="0 0 520 980"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M260 20 C140 120, 380 220, 260 320 C140 420, 380 520, 260 620 C140 720, 380 820, 260 940"
              stroke="rgba(23,37,37,0.12)"
              strokeWidth="2"
              strokeDasharray="6 10"
            />
          </svg>

          <div className="flex flex-col gap-10 md:gap-12">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              const accentClass =
                s.accent === "coral"
                  ? "text-[var(--coral)]"
                  : s.accent === "sea"
                  ? "text-[var(--sea)]"
                  : "";

              return (
                <motion.div
                  key={`${s.title}-${i}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.55 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="relative grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]"
                >
                  {/* left text */}
                  <div
                    className={
                      isLeft
                        ? "md:pr-10"
                        : "md:pr-10 md:opacity-0 md:pointer-events-none"
                    }
                  >
                    <div className="border border-black/10 bg-white/55 px-4 py-3">
                      <p className="text-xs font-semibold tracking-[0.16em] text-black/55">
                        {s.title.toUpperCase()}
                      </p>
                      <p className="mt-1 text-base font-medium text-[var(--ink)]">
                        <span className={accentClass}>{s.lines[0]}</span>
                      </p>
                      <p className="mt-1 text-sm text-black/65">{s.lines[1]}</p>
                    </div>
                  </div>

                  {/* footprint */}
                  <motion.div
                    className="mx-auto flex items-center gap-3"
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Footprint side={isLeft ? "left" : "right"} accent={s.accent} />
                  </motion.div>

                  {/* right text */}
                  <div
                    className={
                      !isLeft
                        ? "md:pl-10"
                        : "md:pl-10 md:opacity-0 md:pointer-events-none"
                    }
                  >
                    <div className="border border-black/10 bg-white/55 px-4 py-3">
                      <p className="text-xs font-semibold tracking-[0.16em] text-black/55">
                        {s.title.toUpperCase()}
                      </p>
                      <p className="mt-1 text-base font-medium text-[var(--ink)]">
                        <span className={accentClass}>{s.lines[0]}</span>
                      </p>
                      <p className="mt-1 text-sm text-black/65">{s.lines[1]}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.p
          className="mt-16 text-sm text-black/60"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Next: projects & experiments ↓
        </motion.p>
      </div>

    </section>
  );
}
