interface ReasonRowProps {
  reasons: {
    title: string;
    items: Array<{ h: string; p: string }>;
  };
}

export default function ReasonRow({ reasons }: ReasonRowProps) {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-black text-center mb-16 text-gradient">
          {reasons.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.items.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-subtle/50 backdrop-blur-sm border border-ring/20 hover:border-cyan/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-magenta/10 to-cyan/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="relative text-2xl font-bold mb-4 text-cyan">
                {item.h}
              </h3>
              <p className="relative text-fg/70 leading-relaxed">
                {item.p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
