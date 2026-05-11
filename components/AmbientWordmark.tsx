"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

export default function AmbientWordmark() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: -2 }}>
      <h1 
        className="text-[20vw] font-display font-black text-transparent"
        style={{
          WebkitTextStroke: "1px rgba(63, 230, 255, 0.09)",
          opacity: 0.07,
          background: "radial-gradient(circle at center, transparent 20%, rgba(13, 15, 20, 1) 70%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        COSMIC TOILET
      </h1>
    </div>
  );
}
