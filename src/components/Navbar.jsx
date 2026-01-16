"use client";

import { useEffect, useMemo, useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "where", label: "Where" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [active, setActive] = useState("about");
  const ids = useMemo(() => LINKS.map((l) => l.id), []);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.15, 0.3, 0.5],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <ul className="flex items-center gap-8">
        {LINKS.map((l) => {
          const isActive = active === l.id;
          return (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={scrollTo(l.id)}
                className={[
                  "font-display text-lg tracking-tight transition",
                  isActive
                    ? "text-[var(--ink)]"
                    : "text-black/45 hover:text-black/75",
                ].join(" ")}
              >
                {l.label}
                {/* active marker */}
                <span
                  className={[
                    "mx-auto mt-1 block h-[2px] w-4 transition",
                    isActive ? "bg-[var(--coral)]" : "bg-transparent",
                  ].join(" ")}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
