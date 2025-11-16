interface CommunityBoardProps {
  community: {
    title: string;
    body: string;
  };
  socials: Array<{
    icon: string;
    label: string;
    href: string;
  }>;
}

export default function CommunityBoard({ community, socials }: CommunityBoardProps) {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="relative p-16 rounded-3xl bg-gradient-to-br from-magenta/10 to-cyan/10 backdrop-blur-sm border border-ring/20">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-8 text-gradient">
            {community.title}
          </h2>
          <p className="text-xl text-fg/80 mb-10">
            {community.body}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <span className="text-2xl">{social.icon}</span>
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
