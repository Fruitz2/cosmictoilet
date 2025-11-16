"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

export default function LiquidGradient() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-magenta/[0.03] via-transparent to-cyan/[0.02] ${
          reducedMotion ? "" : "animate-liquid"
        }`}
        style={{
          filter: "blur(100px)",
          transform: "scale(1.5)",
        }}
      />
      <div 
        className={`absolute inset-0 bg-gradient-to-tr from-cyan/[0.02] via-transparent to-magenta/[0.03] ${
          reducedMotion ? "" : "animate-liquid"
        }`}
        style={{
          filter: "blur(120px)",
          transform: "scale(1.5)",
          animationDelay: "-10s",
        }}
      />
    </div>
  );
}
