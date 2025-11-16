import Link from "next/link";

interface RoadmapPreviewProps {
  roadmapPreview: {
    title: string;
    bullets: string[];
  };
  buyCta?: string;
  buyEnabled?: boolean;
  pumpLink?: string;
}

export default function RoadmapPreview({ roadmapPreview, buyCta, buyEnabled, pumpLink }: RoadmapPreviewProps) {
  return (
    <section className="py-24 px-6 bg-subtle/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-display font-black text-center mb-12 text-gradient">
          {roadmapPreview.title}
        </h2>
        
        <div className="space-y-6 mb-12">
          {roadmapPreview.bullets.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-6 rounded-xl bg-bg/50 backdrop-blur-sm border border-ring/20 hover:border-cyan/50 transition-all duration-300"
            >
              <span className="text-2xl">→</span>
              <p className="text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/roadmap"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View Full Orbitmap →
          </Link>
          
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
      </div>
    </section>
  );
}
