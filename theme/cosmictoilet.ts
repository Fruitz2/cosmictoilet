export const theme = {
  name: "Cosmic Toilet",
  colors: {
    bg: "#0D0F14",           // deep-space charcoal
    fg: "#EEF3F8",           // porcelain white
    magenta: "#FF3FD1",      // HOT MAGENTA
    cyan: "#3FE6FF",         // ELECTRIC CYAN
    accent: "#3FE6FF",       // primary accent (cyan)
    accent2: "#FF3FD1",      // secondary accent (magenta)
    subtle: "#121620",       // panel
    ring: "#7DEBFF",         // focus rings / borders
    gradient: ["#FF3FD1","#3FE6FF"], // magenta→cyan
    star: "#FFF0B3"          // warm star specks
  },
  fonts: {
    display: "var(--font-display)", // Space Grotesk
    body: "var(--font-body)",       // Inter
    mono: "var(--font-mono)"        // JetBrains Mono
  },
  radius: { xl: "1.25rem" },
  shadows: {
    glowCyan: "0 0 48px color-mix(in srgb, var(--accent) 35%, transparent)",
    glowMagenta: "0 0 48px color-mix(in srgb, var(--accent2) 35%, transparent)"
  },
  borders: {
    neon: "1.5px solid color-mix(in srgb, var(--ring) 60%, transparent)"
  }
};
