"use client";

import { useState, useEffect } from "react";
import TextConfetti from "./TextConfetti";

interface StickySideBuyProps {
  buyEnabled: boolean;
  pumpLink?: string;
  buyCta: string;
}

export default function StickySideBuy({ buyEnabled, pumpLink, buyCta }: StickySideBuyProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!buyEnabled || !pumpLink) return null;

  return (
    <div
      className={`fixed right-8 top-1/2 -translate-y-1/2 z-30 hidden xl:block transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <TextConfetti>
        <a
          href={pumpLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex writing-mode-vertical-rl px-4 py-8 bg-gradient-to-b from-magenta to-cyan text-bg font-bold rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
          style={{ writingMode: "vertical-rl" }}
        >
          {buyCta}
        </a>
      </TextConfetti>
    </div>
  );
}
