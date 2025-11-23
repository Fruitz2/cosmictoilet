import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cosmic Toilet — flush the bear. orbit the bull.",
  description: "Magenta–cyan porcelain portal. Logo-only visuals, kinetic type, ridiculous but clean. Flush the bear. Orbit the bull.",
  keywords: "cosmic toilet, memecoin, solana, flush the bear, orbit the bull, diamond flush",
  authors: [{ name: "Cosmic Toilet Team" }],
  creator: "Cosmic Toilet",
  metadataBase: new URL("https://cosmictoilet.xyz"),
  openGraph: {
    title: "Cosmic Toilet",
    description: "flush the bear. orbit the bull.",
    url: "https://cosmictoilet.xyz",
    siteName: "Cosmic Toilet",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Cosmic Toilet - flush the bear. orbit the bull.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmic Toilet",
    description: "flush the bear. orbit the bull.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased min-h-screen bg-bg`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
