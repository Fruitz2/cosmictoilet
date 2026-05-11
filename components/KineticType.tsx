"use client";

import { useState, useEffect } from "react";
import { getHeroVariant } from "@/lib/ab";
import { prefersReducedMotion } from "@/lib/a11y";

interface KineticTypeProps {
  variants: string[][];
}

export default function KineticType({ variants }: KineticTypeProps) {
  const [selectedVariant, setSelectedVariant] = useState<string[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    const { variant } = getHeroVariant(variants);
    setSelectedVariant(variant);
    setMounted(true);
  }, [variants]);

  if (!mounted) return null;

  return (
    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-center">
      {selectedVariant.map((line, i) => (
        <span
          key={i}
          className={`block ${i === 0 ? "text-magenta" : "text-cyan"} ${
            reducedMotion ? "" : "animate-float"
          }`}
          style={{
            animationDelay: `${i * 0.1}s`,
          }}
        >
          {line}
        </span>
      ))}
    </h1>
  );
}
