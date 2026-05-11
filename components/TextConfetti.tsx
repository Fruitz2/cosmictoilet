"use client";

import { useState } from "react";
import { prefersReducedMotion } from "@/lib/a11y";

interface Particle {
  id: number;
  x: number;
  y: number;
  char: string;
  color: string;
}

export default function TextConfetti({ children, className }: { children: React.ReactNode; className?: string }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const chars = ["✦", "~", "!", "+", "◆", "○"];
  const colors = ["var(--magenta)", "var(--cyan)"];

  const createParticles = (e: React.MouseEvent) => {
    if (prefersReducedMotion()) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      char: chars[Math.floor(Math.random() * chars.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    
    setParticles(prev => [...prev, ...newParticles]);
    
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.includes(p)));
    }, 1000);
  };

  return (
    <div 
      className={`relative inline-block ${className}`}
      onMouseEnter={(e) => {
        setIsHovered(true);
        createParticles(e);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <div className="pointer-events-none absolute inset-0">
        {particles.map(particle => (
          <span
            key={particle.id}
            className="absolute animate-confetti text-xs font-bold"
            style={{
              left: particle.x,
              top: particle.y,
              color: particle.color,
              animation: `confetti 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
            }}
          >
            {particle.char}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(
              ${Math.random() * 200 - 100}px,
              ${Math.random() * -100 - 50}px
            ) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
