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

  const doubled = [...messages, ...messages];

  return (
    <div className="relative overflow-hidden py-8 bg-subtle/50 backdrop-blur-sm">
      <div className={`flex gap-12 whitespace-nowrap ${reducedMotion ? "" : "animate-marquee"}`}>
        {doubled.map((msg, i) => (
          <span
            key={i}
            className="text-lg font-mono text-cyan/70 uppercase tracking-widest"
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}

<style jsx>{`
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee 30s linear infinite;
  }
`}</style>
