"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

export default function SwirlPortal() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  return (
    <div 
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <div 
        className="relative w-[600px] h-[600px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Conic gradient ring */}
        <div 
          className={`absolute inset-0 rounded-full ${
            reducedMotion || hovered ? "" : "animate-swirl"
          }`}
          style={{
            background: "conic-gradient(from 0deg at 50% 50%, var(--magenta), var(--cyan), var(--magenta))",
            opacity: 0.3,
            filter: "blur(2px)",
          }}
        />
        
        {/* Inner mask */}
        <div 
          className="absolute inset-8 rounded-full bg-bg"
          style={{ zIndex: 1 }}
        />
        
        {/* Sheen sweep */}
        {!reducedMotion && (
          <div 
            className="absolute inset-0 rounded-full animate-orbit"
            style={{
              background: "linear-gradient(90deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%)",
              mixBlendMode: "overlay",
            }}
          />
        )}
        
        {/* Breathing scale */}
        <div 
          className={`absolute inset-0 rounded-full ${
            reducedMotion ? "" : "animate-pulse-slow"
          }`}
          style={{
            background: "radial-gradient(circle at center, transparent 30%, var(--cyan) 50%, transparent 70%)",
            opacity: 0.1,
            transform: "scale(1.05)",
          }}
        />
      </div>
    </div>
  );
}
