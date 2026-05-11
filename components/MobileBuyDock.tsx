"use client";

interface MobileBuyDockProps {
  buyEnabled: boolean;
  pumpLink?: string;
  buyCta: string;
}

export default function MobileBuyDock({ buyEnabled, pumpLink, buyCta }: MobileBuyDockProps) {
  if (!buyEnabled || !pumpLink) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-bg/90 backdrop-blur-xl border-t border-ring/20 lg:hidden">
      <a
        href={pumpLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full text-center flex justify-center items-center gap-2"
      >
        {buyCta}
      </a>
    </div>
  );
}
