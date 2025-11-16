interface ReasonRowProps {
  reasons: Array<{ icon: string; text: string }>;
}

export default function ReasonRow({ reasons }: ReasonRowProps) {
  return (
    <section className="py-12 md:py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-display font-black text-center mb-12 md:mb-16 bg-gradient-to-r from-magenta via-cyan to-magenta bg-clip-text text-transparent">
          Why This Toilet?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="group relative p-6 md:p-8 rounded-2xl bg-subtle/50 backdrop-blur-sm border border-ring/20 hover:border-cyan/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-magenta/10 to-cyan/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative text-5xl mb-4 animate-float" style={{ animationDelay: `${i * 0.1}s` }}>
                {item.icon}
              </div>
              <p className="relative text-base md:text-lg text-fg/80 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
