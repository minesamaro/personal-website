"use client";
import { motion } from "framer-motion";

const skills = [
  { label: "Python", tone: "ink" },
  { label: "Data Analysis", tone: "ink" },
  { label: "Machine Learning", tone: "ink" },
  { label: "Web Development", tone: "ink" },
  { label: "Interpersonal Communication", tone: "ink" },
  { label: "Leadership", tone: "ink" },
  { label: "Teamwork", tone: "ink" },
  { label: "Problem Solving", tone: "ink" },
  { label: "Critical Thinking", tone: "ink" },
];

function toneClass(tone) {
  if (tone === "coral") return "text-[var(--coral)]";
  if (tone === "sea") return "text-[var(--sea)]";
  return "text-[var(--ink)]";
}

function TideLine() {
  return (
    <motion.svg
      className="mt-6 w-full"
      viewBox="0 0 800 60"
      fill="none"
      aria-hidden="true"
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.path
        d="M0 30 C 80 10, 160 50, 240 30 C 320 10, 400 50, 480 30 C 560 10, 640 50, 720 30 C 760 20, 780 20, 800 30"
        stroke="rgba(23,37,37,0.18)"
        strokeWidth="2"
        strokeDasharray="6 10"
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

export default function SkillsFlowers() {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex items-center gap-2 border border-black/15 bg-white/60 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-black/70">
            <span className="h-2 w-2 bg-[var(--sea)]" />
            SKILLS
          </p>

          <h2 className="mt-6 font-display text-5xl leading-[0.92] tracking-[-0.02em] text-[var(--ink)] md:text-6xl">
            A bouquet of things I’m{" "}
            <span className="text-[var(--coral)]">good at</span>.
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/70">
            The mix: technical + human + calm under pressure.
          </p>

          <TideLine />
        </motion.div>

        {/* list (bigger than your old tiny list) */}
        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{ duration: 0.45, delay: i * 0.03, ease: "easeOut" }}
              className="flex items-baseline gap-3 border-b border-black/10 pb-3"
            >
              <span className="text-xl" aria-hidden="true">
                🌸
              </span>
              <span className={["font-sans text-lg font-semibold", toneClass(s.tone)].join(" ")}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* tiny footer note */}
        <motion.p
          className="mt-12 text-sm text-black/60"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          A bit of code, a bit of people, a lot of care.
        </motion.p>
      </div>

    </section>
  );
}
