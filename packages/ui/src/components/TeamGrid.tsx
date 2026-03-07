"use client";

import { useState } from "react";

interface TeamMember {
  name: string;
  title: string;
  photo?: string;
  bio?: string;
}

interface TeamGridProps {
  members: TeamMember[];
}

// Desktop: flip card on hover to show bio
function DesktopCard({ member }: { member: TeamMember }) {
  const [flipped, setFlipped] = useState(false);
  const hasBio = !!member.bio;

  return (
    <div
      className={`text-center ${hasBio ? "cursor-pointer" : ""}`}
      onMouseEnter={() => hasBio && setFlipped(true)}
      onMouseLeave={() => hasBio && setFlipped(false)}
      onClick={() => hasBio && setFlipped(!flipped)}
    >
      <div
        className="aspect-square mb-4 relative"
        style={{ perspective: "1000px" }}
      >
        <div
          className="w-full h-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front — photo */}
          <div
            className="absolute inset-0 bg-[#1a1a1a] overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-16 h-16 text-white/10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
            )}
          </div>

          {/* Back — bio */}
          <div
            className="absolute inset-0 bg-[#c9a96e] flex flex-col items-center justify-center p-5"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <p className="text-black/80 text-xs leading-relaxed text-center">
              {member.bio}
            </p>
          </div>
        </div>
      </div>
      <h3 className="text-white font-semibold text-sm">{member.name}</h3>
      <p className="text-[#c9a96e] text-xs uppercase tracking-wider mt-1">{member.title}</p>
    </div>
  );
}

// Mobile: tap to expand bio below
function MobileCard({ member }: { member: TeamMember }) {
  const [expanded, setExpanded] = useState(false);
  const hasBio = !!member.bio;

  return (
    <div
      className={`text-center ${hasBio ? "cursor-pointer" : ""}`}
      onClick={() => hasBio && setExpanded(!expanded)}
    >
      <div className="aspect-square mb-4 bg-[#1a1a1a] overflow-hidden">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-16 h-16 text-white/10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
        )}
      </div>
      <h3 className="text-white font-semibold text-sm">{member.name}</h3>
      <p className="text-[#c9a96e] text-xs uppercase tracking-wider mt-1">{member.title}</p>
      {hasBio && expanded && (
        <p className="text-white/60 text-sm leading-relaxed mt-3 text-left">
          {member.bio}
        </p>
      )}
    </div>
  );
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

        {/* Mobile: 1 column, tap to expand */}
        <div className="grid grid-cols-1 gap-8 md:hidden">
          {members.map((member, index) => (
            <MobileCard key={index} member={member} />
          ))}
        </div>

        {/* Desktop: multi-column, flip on hover */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <DesktopCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export type { TeamMember };
