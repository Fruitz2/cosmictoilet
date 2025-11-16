"use client";

import { useState, useEffect } from "react";

interface UrgencyRibbonProps {
  showUrgencyRibbon: boolean;
  urgencyMessages: string[];
}

export default function UrgencyRibbon({ showUrgencyRibbon, urgencyMessages }: UrgencyRibbonProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!showUrgencyRibbon || urgencyMessages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % urgencyMessages.length);
    }, 12000);

    return () => clearInterval(interval);
  }, [showUrgencyRibbon, urgencyMessages]);

  if (!showUrgencyRibbon || urgencyMessages.length === 0) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-30 bg-gradient-to-r from-magenta to-cyan p-3">
      <p className="text-center text-bg font-bold animate-pulse">
        {urgencyMessages[currentIndex]}
      </p>
    </div>
  );
}
