interface FooterProps {
  strings: any;
}

export default function Footer({ strings }: FooterProps) {
  return (
    <footer className="relative py-16 px-6 border-t border-ring/20 mt-32">
      <div className="container mx-auto max-w-4xl text-center space-y-6">
        <p className="text-fg/60 text-sm">{strings.footer.legal}</p>
        <p className="text-fg/40 text-xs">{strings.footer.region}</p>
        <p className="text-fg/30 text-xs mt-8">
          © {new Date().getFullYear()} Cosmic Toilet
        </p>
      </div>
    </footer>
  );
}
