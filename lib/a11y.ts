"use client";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  return mediaQuery.matches;
}

export function setupFocusRing() {
  if (typeof document === "undefined") return;
  
  // Add keyboard navigation class
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("keyboard-nav");
    }
  });

  document.addEventListener("mousedown", () => {
    document.body.classList.remove("keyboard-nav");
  });
}

export function announceToScreenReader(message: string) {
  if (typeof document === "undefined") return;
  
  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", "polite");
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}
