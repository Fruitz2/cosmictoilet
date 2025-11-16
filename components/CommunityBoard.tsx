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
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="relative p-20 rounded-3xl bg-gradient-to-br from-magenta/5 to-cyan/5">
          <h2 className="text-5xl md:text-6xl font-display font-black mb-12 bg-gradient-to-r from-magenta via-cyan to-magenta bg-clip-text text-transparent">
            {community.title}
          </h2>
          <p className="text-2xl text-fg/70 mb-12 font-light">
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
