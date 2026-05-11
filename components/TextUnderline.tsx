"use client";

export default function TextUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block group">
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-magenta to-cyan transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </span>
  );
}
