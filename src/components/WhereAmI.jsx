"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import visitedCountries from "../data/visitedCountries.json";

export default function WhereAmI() {
  const [svgContent, setSvgContent] = useState("");
  const [pinPos, setPinPos] = useState({ x: 0, y: 0 });
  const svgContainerRef = useRef(null);

  // Theme colors
  const colors = useMemo(() => {
    if (typeof window === "undefined") {
      return {
        sea: "#2C7C82",
        land: "rgba(23,37,37,0.10)",
        border: "rgba(23,37,37,0.22)",
      };
    }
    const cs = getComputedStyle(document.documentElement);
    return {
      sea: cs.getPropertyValue("--sea").trim() || "#2C7C82",
      land: "rgba(23,37,37,0.10)",
      border: "rgba(23,37,37,0.22)",
    };
  }, []);

  // Load & style SVG
  useEffect(() => {
    fetch("/world.svg")
      .then((res) => res.text())
      .then((text) => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(text, "image/svg+xml");

        const svgEl = svgDoc.querySelector("svg");
        if (svgEl) {
          svgEl.setAttribute("preserveAspectRatio", "none");
          svgEl.setAttribute("width", "100%");
          svgEl.setAttribute("height", "100%");
          svgEl.style.display = "block";
        }

        svgDoc.querySelectorAll("path").forEach((path) => {
          const country =
            path.getAttribute("name") ||
            path.getAttribute("class") ||
            path.getAttribute("id") ||
            "";

          const isVisited = visitedCountries.includes(country);

          path.style.fill = isVisited ? colors.sea : colors.land;
          path.style.stroke = colors.border;
          path.style.strokeWidth = "0.6";
          path.style.opacity = isVisited ? "0.9" : "0.85";
          path.style.pointerEvents = "none"; // 🔒 no hover, no listeners
        });

        const serializer = new XMLSerializer();
        setSvgContent(serializer.serializeToString(svgDoc));
      });
  }, [colors.sea, colors.land, colors.border]);

  // Pin positioning (Portugal)
  useEffect(() => {
    const updatePin = () => {
      const container = svgContainerRef.current;
      if (!container) return;

      const svgEl = container.querySelector("svg");
      if (!svgEl) return;

      const portugalPaths = Array.from(
        svgEl.querySelectorAll(
          "path.Portugal, path[name='Portugal'], path[id='Portugal']"
        )
      );
      if (!portugalPaths.length) return;

      const centroids = portugalPaths.map((path) => {
        const bbox = path.getBBox();
        return { x: bbox.x + bbox.width / 2, y: bbox.y + bbox.height / 2 };
      });

      const avgX = centroids.reduce((s, c) => s + c.x, 0) / centroids.length;
      const avgY = centroids.reduce((s, c) => s + c.y, 0) / centroids.length;

      const svgRect = svgEl.getBoundingClientRect();
      const vb = svgEl.viewBox.baseVal;
      if (!vb || vb.width === 0 || vb.height === 0) return;

      setPinPos({
        x: (avgX / vb.width) * svgRect.width,
        y: (avgY / vb.height) * svgRect.height,
      });
    };

    //updatePin();
    //window.addEventListener("resize", updatePin);
    return () => window.removeEventListener("resize", updatePin);
  }, [svgContent]);

  return (
    <section id="where" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          {/* Left copy */}
          <div>
            <p className="inline-flex items-center gap-2 border border-black/15 bg-white/60 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-black/70">
              <span className="h-2 w-2 bg-[var(--sea)]" />
              WHERE
            </p>

            <h2 className="mt-6 font-display text-5xl leading-[0.92] tracking-[-0.02em] text-[var(--ink)] md:text-6xl">
              Places I’ve{" "}
              <span className="text-[var(--coral)]">walked</span> through.
            </h2>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-black/70">
              A map of places that shaped me.
            </p>

            <p className="mt-8 text-sm text-black/60">
              Turquoise marks visited places.
            </p>
          </div>

          {/* Map */}
          <div className="relative">
            <div
              ref={svgContainerRef}
              className="relative border border-black/10 bg-white/35 px-3 py-3"
              //style={{ aspectRatio: "16 / 10" }}
            >
              <div
                className="world-map h-full w-full"
                dangerouslySetInnerHTML={{ __html: svgContent }}
              />

              {/* Pin */}
              {pinPos.x > 0 && pinPos.y > 0 && (
                <Image
                  src="/pin.png"
                  alt="Portugal Pin"
                  width={26}
                  height={26}
                  style={{
                    position: "absolute",
                    top: `${pinPos.y}px`,
                    left: `${pinPos.x}px`,
                    transform: "translate(-50%, -100%)",
                    pointerEvents: "none",
                    filter: "drop-shadow(0 6px 12px rgba(0,0,0,.12))",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
