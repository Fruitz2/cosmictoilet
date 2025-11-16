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
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-7xl font-display font-black text-center mb-20 bg-gradient-to-r from-cyan via-magenta to-cyan bg-clip-text text-transparent">
          {bullishMenu.title}
        </h2>
        
        <div className="grid gap-8 mb-16">
          {bullishMenu.items.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-gradient-to-r from-magenta/5 to-cyan/5 backdrop-blur-sm border border-fg/10 hover:border-cyan/30 transition-all duration-300"
            >
              <p className="text-xl md:text-2xl text-fg/70 font-light text-center">{item}</p>
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
