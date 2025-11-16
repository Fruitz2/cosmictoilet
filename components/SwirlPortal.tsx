"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

export default function SwirlPortal({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  return (
    <div className="relative inline-block">
      {/* Background swirl effect */}
      <div 
        className="absolute inset-0 -m-12 flex items-center justify-center pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <div 
          className={`w-[300px] h-[300px] rounded-full ${
            reducedMotion ? "" : "animate-swirl"
          }`}
          style={{
            background: "conic-gradient(from 0deg at 50% 50%, var(--magenta), var(--cyan), var(--magenta))",
            opacity: 0.3,
            filter: "blur(20px)",
          }}
        />
      </div>
      
      {/* Content */}
      {children}
    </div>
  );
}
