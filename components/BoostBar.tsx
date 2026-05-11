"use client";

import { useState, useEffect } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

export default function BoostBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-bg/20">
      <div
        className="h-full bg-gradient-to-r from-magenta to-cyan transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
