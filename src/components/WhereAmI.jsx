"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import visitedCountries from "../data/visitedCountries.json";

export default function WhereAmI() {
  const [svgContent, setSvgContent] = useState("");
  const [hoveredCountry, setHoveredCountry] = useState("");
  const [pinPos, setPinPos] = useState({ x: 0, y: 0 });
  const svgContainerRef = useRef(null);

  // Load and process SVG
  useEffect(() => {
    fetch("/world.svg")
      .then((res) => res.text())
      .then((text) => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(text, "image/svg+xml");

        svgDoc.querySelectorAll("path").forEach((path) => {
          const country =
            path.getAttribute("name") ||
            path.getAttribute("class") ||
            path.getAttribute("id") ||
            "";

          path.setAttribute(
            "style",
            `fill:${
              visitedCountries.includes(country) ? "#c47ff6ff" : "#CCCCCC"
            };stroke:#555;stroke-width:0.5;cursor:pointer;transition:fill 0.3s;`
          );

          path.setAttribute("onmouseover", "window.countryHover(evt)");
          path.setAttribute("onmouseout", "window.countryHoverOut(evt)");
        });

        const serializer = new XMLSerializer();
        setSvgContent(serializer.serializeToString(svgDoc));
      });
  }, []);

  // Handle hover
  useEffect(() => {
    window.countryHover = (evt) => {
      const country =
        evt.target.getAttribute("name") ||
        evt.target.getAttribute("class") ||
        evt.target.getAttribute("id") ||
        "";
      setHoveredCountry(country);
      evt.target.style.fill = "#FF5733"; // hover color
    };

    window.countryHoverOut = (evt) => {
      const country =
        evt.target.getAttribute("name") ||
        evt.target.getAttribute("class") ||
        evt.target.getAttribute("id") ||
        "";
      setHoveredCountry("");
      evt.target.style.fill = visitedCountries.includes(country)
        ? "#c47ff6ff"
        : "#CCCCCC"; // reset color
    };
  }, []);

  // Update pin on resize or SVG load
  useEffect(() => {
    const updatePin = () => {
      if (!svgContainerRef.current) return;
      const svgEl = svgContainerRef.current.querySelector("svg");
      if (!svgEl) return;

      const portugalPaths = Array.from(
        svgEl.querySelectorAll("path.Portugal, path[name='Portugal']")
      );
      if (!portugalPaths.length) return;

      const centroids = portugalPaths.map((path) => {
        const bbox = path.getBBox();
        return { x: bbox.x + bbox.width / 2, y: bbox.y + bbox.height / 2 };
      });

      const avgX =
        centroids.reduce((sum, c) => sum + c.x, 0) / centroids.length;
      const avgY =
        centroids.reduce((sum, c) => sum + c.y, 0) / centroids.length;

      const svgRect = svgEl.getBoundingClientRect();
      const scaleX = svgRect.width / svgEl.viewBox.baseVal.width;
      const scaleY = svgRect.height / svgEl.viewBox.baseVal.height;

      setPinPos({ x: avgX * scaleX, y: avgY * scaleY });
    };

    updatePin();
    window.addEventListener("resize", updatePin);
    return () => window.removeEventListener("resize", updatePin);
  }, [svgContent]);

  return (
    <div>
      <h2 className="text-3xl text-white font-bold mb-8 py-5 px-16 bg-gray-900 text-center">
        Where Am I?
      </h2>

      <div
        className="relative w-full max-w-6xl mx-auto mt-10 text-center"
        ref={svgContainerRef}
        style={{ width: "100%", height: "auto" }}
      >
        {/* SVG Map */}
        <div
          className="world-map"
          dangerouslySetInnerHTML={{ __html: svgContent }}
          style={{ width: "100%", height: "auto" }}
        />

        {/* Country Name */}
        <p className="mt-4 text-md text-white h-6">{hoveredCountry}</p>

        {/* Pin */}
        {pinPos.x > 0 && pinPos.y > 0 && (
          <Image
            src="/pin.png"
            alt="Portugal Pin"
            width={30}
            height={30}
            style={{
              position: "absolute",
              top: `${pinPos.y}px`,
              left: `${pinPos.x}px`,
              transform: "translate(-50%, -100%)",
              pointerEvents: "none",
            }}
          />
        )}
      </div>
    </div>
  );
}
