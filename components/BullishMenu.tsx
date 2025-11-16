interface BullishMenuProps {
  bullishMenu: {
    title: string;
    items: string[];
    disclaimer: string;
  };
  buyCta?: string;
  buyEnabled?: boolean;
  pumpLink?: string;
}

export default function BullishMenu({ bullishMenu, buyCta, buyEnabled, pumpLink }: BullishMenuProps) {
  return (
    <section className="py-24 px-6 bg-subtle/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-display font-black text-center mb-12 text-gradient">
          {bullishMenu.title}
        </h2>
        
        <div className="space-y-4 mb-8">
          {bullishMenu.items.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-bg/50 backdrop-blur-sm border border-ring/20 hover:border-magenta/50 transition-all duration-300"
            >
              <p className="text-lg font-mono text-fg/80">{item}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-fg/50 mb-8">
          {bullishMenu.disclaimer}
        </p>
        
        {buyEnabled && pumpLink && buyCta && (
          <div className="text-center">
            <a
              href={pumpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              {buyCta}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
