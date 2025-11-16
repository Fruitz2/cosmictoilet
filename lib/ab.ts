"use client";

export function getHeroVariant(variants: string[][]) {
  // Check URL for locked variant
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const variant = params.get("variant");
    
    if (variant === "a") return { variant: variants[0], index: 0 };
    if (variant === "b") return { variant: variants[1], index: 1 };
    if (variant === "c") return { variant: variants[2], index: 2 };
  }
  
  // Random selection
  const index = Math.floor(Math.random() * variants.length);
  return { variant: variants[index], index };
}

export function lockVariant(index: number) {
  if (typeof window === "undefined") return;
  
  const letter = ["a", "b", "c"][index];
  const url = new URL(window.location.href);
  url.searchParams.set("variant", letter);
  window.history.replaceState({}, "", url.toString());
}
