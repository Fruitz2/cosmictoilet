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
    { href: "#home", label: strings.menu.home },
    { href: "#lore", label: strings.menu.lore },
    { href: "#token", label: strings.menu.token },
    { href: "#roadmap", label: strings.menu.roadmap },
    { href: "#community", label: "Community" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="container mx-auto max-w-6xl">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-display font-bold bg-gradient-to-r from-magenta to-cyan bg-clip-text text-transparent">
            🚽
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-medium transition-colors hover:text-cyan text-fg/70"
              >
                {item.label}
              </a>
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
              className="text-fg/70 hover:text-cyan transition-colors flex items-center gap-2"
              aria-label="X (Twitter)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>{strings.menu.x}</span>
            </a>
            
            <a
              href={links.tg}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg/70 hover:text-cyan transition-colors flex items-center gap-2"
              aria-label="Telegram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.094.037.308.021.475z"/>
              </svg>
              <span>{strings.menu.tg}</span>
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
        </nav>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-ring/20 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 font-medium transition-colors hover:text-cyan text-fg/70"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
