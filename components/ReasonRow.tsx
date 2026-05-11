interface ReasonRowProps {
  reasons: Array<{ icon: string; text: string }>;
}

export default function ReasonRow({ reasons }: ReasonRowProps) {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="group flex items-start gap-6">
              <div className="text-6xl flex-shrink-0 opacity-80 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <p className="text-xl md:text-2xl text-fg/70 leading-relaxed font-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
