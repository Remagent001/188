interface TeamMember {
  name: string;
  title: string;
  photo?: string;
}

interface TeamGridProps {
  members: TeamMember[];
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">The Team</p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold">Meet Your Stylists</h2>
          <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div key={member.name} className="group text-center">
              {/* Photo placeholder */}
              <div className="aspect-square bg-[#1a1a1a] mb-4 overflow-hidden relative">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-white/10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-[#c9a96e]/0 group-hover:bg-[#c9a96e]/10 transition-colors duration-300" />
              </div>
              <h3 className="text-white font-semibold text-sm">{member.name}</h3>
              <p className="text-[#c9a96e] text-xs uppercase tracking-wider mt-1">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export type { TeamMember };
