"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface HeaderProps {
  strings: any;
  links: any;
}

export default function Header({ strings, links }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: strings.menu.home },
    { href: "/lore", label: strings.menu.lore },
    { href: "/token", label: strings.menu.token },
    { href: "/roadmap", label: strings.menu.roadmap },
    { href: "/press", label: strings.menu.press },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-bg/80 backdrop-blur-xl border-b border-ring/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image 
              src="/logo.png" 
              alt="Cosmic Toilet" 
              width={40} 
              height={40}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-display font-bold text-xl hidden sm:inline text-gradient">
              COSMIC TOILET
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover:text-cyan ${
                  pathname === item.href ? "text-cyan" : "text-fg/70"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center space-x-4">
            {strings.buyEnabled && links.pump && (
              <a
                href={links.pump}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hidden sm:flex items-center gap-2"
                aria-label="Buy on Pump.fun"
              >
                <ExternalLink size={18} />
                <span>{strings.menu.buy}</span>
              </a>
            )}
            
            <a
              href={links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg/70 hover:text-cyan transition-colors"
              aria-label="X (Twitter)"
            >
              {strings.menu.x}
            </a>
            
            <a
              href={links.tg}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg/70 hover:text-cyan transition-colors"
              aria-label="Telegram"
            >
              {strings.menu.tg}
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-fg/70 hover:text-cyan"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-ring/20 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 font-medium transition-colors hover:text-cyan ${
                  pathname === item.href ? "text-cyan" : "text-fg/70"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
