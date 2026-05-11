"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

export default function FlushWipe() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  if (reducedMotion) {
    return <div className="h-px bg-gradient-to-r from-magenta via-cyan to-magenta opacity-20" />;
  }

  return (
    <div ref={ref} className="relative h-32 overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-r from-magenta/20 via-cyan/30 to-magenta/20 ${
          isVisible ? "animate-flush" : "opacity-0"
        }`}
        style={{
          mask: "radial-gradient(circle at center, black, transparent)",
          WebkitMask: "radial-gradient(circle at center, black, transparent)",
        }}
      />
      <style jsx>{`
        @keyframes flush {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: scale(3) rotate(180deg);
            opacity: 0;
          }
        }
        .animate-flush {
          animation: flush 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}
