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

function TeamCard({ member }: { member: TeamMember }) {
  const [flipped, setFlipped] = useState(false);
  const hasBio = !!member.bio;

  return (
    <div
      className={`text-center ${hasBio ? "cursor-pointer" : ""}`}
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
            className="absolute inset-0 bg-gray-100 overflow-hidden"
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
                <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
            )}
            {hasBio && (
              <div className="absolute bottom-2 right-2 bg-[#aa0000] text-white text-[10px] uppercase tracking-wider px-2 py-1 opacity-70">
                Tap to read bio
              </div>
            )}
          </div>

          {/* Back — bio */}
          <div
            className="absolute inset-0 bg-[#212934] flex flex-col items-center justify-center p-5"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <p className="text-white/80 text-xs leading-relaxed text-center">
              {member.bio}
            </p>
            <p className="text-[#aa0000] text-[10px] uppercase tracking-wider mt-4 opacity-70">
              Tap to flip back
            </p>
          </div>
        </div>
      </div>
      <h3 className="text-[#212934] font-semibold text-sm">{member.name}</h3>
      <p className="text-[#aa0000] text-xs uppercase tracking-wider mt-1">{member.title}</p>
    </div>
  );
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">The Team</p>
          <h2 className="text-[#212934] text-3xl sm:text-4xl font-bold">Meet Your Stylists</h2>
          <div className="w-12 h-px bg-[#aa0000] mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export type { TeamMember };
