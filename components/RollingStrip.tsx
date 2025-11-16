"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

interface RollingStripProps {
  messages: string[];
}

export default function RollingStrip({ messages }: RollingStripProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  return (
    <div className="relative overflow-hidden py-8 bg-gradient-to-r from-magenta/5 via-transparent to-cyan/5">
      <div className="flex animate-marquee">
        {[...messages, ...messages].map((message, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-12 text-xl md:text-2xl font-light text-fg/50 uppercase tracking-widest"
          >
            {message}
          </div>
        ))}
      </div>
    </div>
  );
}
