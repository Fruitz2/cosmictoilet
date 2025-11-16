"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

export default function LiquidGradient() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  return (
    <div className="fixed inset-0" style={{ zIndex: -1 }}>
      <div
        className={`absolute inset-0 ${
          reducedMotion ? "" : "animate-liquid"
        }`}
        style={{
          background: `radial-gradient(ellipse at 30% 20%, var(--magenta) 0%, transparent 40%),
                       radial-gradient(ellipse at 70% 80%, var(--cyan) 0%, transparent 40%),
                       linear-gradient(180deg, var(--bg) 0%, transparent 100%)`,
          opacity: 0.08,
        }}
      />
    </div>
  );
}
