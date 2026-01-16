"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* sand base */}
      <div className="absolute inset-0 bg-[var(--sand)]" />

      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.22'/%3E%3C/svg%3E\")",
        }}
      />

      {/* sun glow */}
      <div className="absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 bg-[#FFD6A6]/65 blur-[120px]" />

      {/* sea glow */}
      <div className="absolute -bottom-56 right-[-120px] h-[560px] w-[560px] bg-[#A8E6E1]/55 blur-[120px]" />
    </div>
  );
}
