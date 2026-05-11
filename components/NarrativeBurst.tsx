interface NarrativeBurstProps {
  narrative: {
    title: string;
    paragraphs: string[];
  };
  buyCta: string;
  buyEnabled: boolean;
  pumpLink?: string;
}

export default function NarrativeBurst({ narrative, buyCta, buyEnabled, pumpLink }: NarrativeBurstProps) {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-magenta/10 via-transparent to-cyan/10" />
      <div className="container mx-auto max-w-5xl relative">
        <h2 className="text-5xl md:text-7xl font-display font-black mb-16 text-center bg-gradient-to-r from-magenta via-cyan to-magenta bg-clip-text text-transparent">
          {narrative.title}
        </h2>
        <div className="space-y-12 text-xl md:text-2xl leading-loose">
          {narrative.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-fg/90 text-center max-w-4xl mx-auto font-light">{paragraph}</p>
          ))}
        </div>
        
        {buyEnabled && pumpLink && (
          <div className="mt-16 text-center">
            <a
              href={pumpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              TAKE THE DUMP
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
