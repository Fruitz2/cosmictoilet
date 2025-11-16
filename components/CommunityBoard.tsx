interface CommunityBoardProps {
  community: {
    title: string;
    body: string;
  };
  tgLink: string;
}

export default function CommunityBoard({ community, tgLink }: CommunityBoardProps) {
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
          <a
            href={tgLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Join Telegram →
          </a>
        </div>
      </div>
    </section>
  );
}
