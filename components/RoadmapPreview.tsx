import Link from "next/link";

interface RoadmapPreviewProps {
  roadmapPreview: {
    title: string;
    bullets: string[];
  };
}

export default function RoadmapPreview({ roadmapPreview }: RoadmapPreviewProps) {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-7xl font-display font-black mb-20 text-center bg-gradient-to-r from-magenta via-cyan to-magenta bg-clip-text text-transparent">
          {roadmapPreview.title}
        </h2>
        <div className="grid gap-6">
          {roadmapPreview.bullets.map((bullet, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-gradient-to-r from-cyan/5 to-magenta/5 border border-fg/10 hover:border-magenta/30 transition-all duration-300">
              <p className="text-xl md:text-2xl text-fg/70 font-light">{bullet}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
