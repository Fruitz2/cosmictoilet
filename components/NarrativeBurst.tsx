interface NarrativeBurstProps {
  narrative: {
    title: string;
    body: string;
  };
  buyCta?: string;
  buyEnabled?: boolean;
  pumpLink?: string;
}

export default function NarrativeBurst({ narrative, buyCta, buyEnabled, pumpLink }: NarrativeBurstProps) {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-magenta/5" />
      <div className="container mx-auto max-w-4xl text-center relative">
        <h2 className="text-4xl md:text-5xl font-display font-black mb-8 text-gradient">
          {narrative.title}
        </h2>
        <p className="text-xl leading-relaxed text-fg/80 mb-12">
          {narrative.body}
        </p>
        
        {buyEnabled && pumpLink && buyCta && (
          <a
            href={pumpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            {buyCta}
          </a>
        )}
      </div>
    </section>
  );
}
