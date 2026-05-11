"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

export default function TextOrbit() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  const text = "flush the bear • orbit the bull • ";

  return (
    <div 
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        className={`${reducedMotion || paused ? "" : "animate-orbit"}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ pointerEvents: "auto" }}
      >
        <defs>
          <path
            id="circle"
            d="M 250, 250 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
          />
        </defs>
        <text className="fill-cyan/50 text-sm font-mono uppercase tracking-widest">
          <textPath href="#circle">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
