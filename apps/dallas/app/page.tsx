"use client";

import { useState } from "react";

const locations = [
  {
    id: "wv",
    name: "Uptown – West Village",
    address: "3699 McKinney Ave, Suite 402",
    city: "Dallas, TX 75204",
    phone: "(214) 305-2079",
    hours: "Mon–Fri 10AM–8PM · Sat 9AM–7PM · Sun 10AM–6PM",
    url: "https://eighteeneightwv.com",
    bookingUrl: "https://www.phorest.com/salon/eighteeneightfinemenssalons",
    mapsUrl: "https://www.google.com/maps/place/18%2F8+Fine+Men's+Salons+-+Dallas/@32.809337,-96.796878,20z/data=!4m6!3m5!1s0x864e9ed410184a6f:0x374c19c2117e17e8!8m2!3d32.809337!4d-96.796878!16s%2Fg%2F11bbwmjnpj?entry=ttu",
    bg: "bg-[url('/images/wv-bg.jpg')]",
  },
  {
    id: "phv",
    name: "Preston Hollow Village",
    address: "7949 Walnut Hill Lane, Suite 125",
    city: "Dallas, TX 75230",
    phone: "(214) 305-2579",
    hours: "Mon–Thu 10AM–8PM · Fri 10AM–7PM · Sat 9AM–7PM",
    url: "https://eighteeneightphv.com",
    bookingUrl: "https://www.phorest.com/salon/eighteeneightfinemenssalons1",
    mapsUrl: "https://www.google.com/maps/place/18%2F8+Fine+Men's+Salons+-+Preston+Hollow+Village/@32.8812492,-96.7727938,18.75z/data=!4m15!1m8!3m7!1s0x864e9fc25e7e722f:0xd8e42af220886ac0!2s7949+Walnut+Hill+Ln,+Dallas,+TX+75230!3b1!8m2!3d32.8813252!4d-96.7723675!16s%2Fg%2F11b8yg36m_!3m5!1s0x864e9fc25838d3e1:0x24434360a57ca049!8m2!3d32.8813427!4d-96.7721315!16s%2Fg%2F11bv6pg4w7?entry=ttu",
    bg: "bg-[url('/images/phv-bg.jpg')]",
  },
];

export default function DallasSelector() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-5 bg-gradient-to-b from-black to-transparent">
        <a href="https://eighteeneight.com">
          <img src="/images/logo.gif" alt="18|8 Fine Men's Salon" className="h-14 rounded" />
        </a>
      </header>

      {/* Split screen */}
      <div className="flex flex-col md:flex-row flex-1 min-h-screen">
        {locations.map((loc) => (
          <a
            key={loc.id}
            href={loc.url}
            className={`
              relative flex-1 flex items-end justify-start p-10 md:p-16 overflow-hidden
              transition-all duration-700 ease-in-out cursor-pointer group
              ${hovered === loc.id ? "md:flex-[1.4]" : hovered ? "md:flex-[0.6]" : "md:flex-1"}
            `}
            onMouseEnter={() => setHovered(loc.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Background image placeholder + overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: loc.id === "wv"
                  ? "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80')"
                  : "url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1920&q=80')",
                backgroundColor: loc.id === "wv" ? "#1a1008" : "#0a1018",
              }}
              aria-hidden="true"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 transition-opacity duration-500" />
            {/* Dimming overlay when other is hovered */}
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                hovered && hovered !== loc.id ? "opacity-50" : "opacity-0"
              }`}
            />

            {/* Content */}
            <div className="relative z-10 max-w-sm">
              <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3 font-medium">
                Dallas, TX
              </p>
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
                18<span className="text-[#aa0000]">|</span>8<br />
                {loc.name}
              </h2>
              <div className="w-10 h-px bg-[#aa0000] mb-5" />
              <p className="text-white/60 text-sm mb-1">{loc.address}</p>
              <p className="text-white/60 text-sm mb-4">{loc.city}</p>
              <p className="text-white/40 text-xs mb-1">{loc.phone}</p>
              <p className="text-white/40 text-xs mb-8">{loc.hours}</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={loc.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 bg-[#aa0000] hover:bg-[#880000] text-white font-bold text-xs uppercase tracking-widest px-5 py-3 transition-colors"
                >
                  Book Now for {loc.name}
                </a>
                <span className="inline-flex items-center gap-2 border border-white/20 hover:border-[#aa0000] text-white/60 hover:text-[#aa0000] font-bold text-xs uppercase tracking-widest px-5 py-3 transition-colors">
                  Visit This Location
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 border border-white/20 hover:border-[#aa0000] text-white/60 hover:text-[#aa0000] text-xs uppercase tracking-widest px-4 py-3 transition-colors"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Map
                </a>
              </div>
            </div>

            {/* Vertical divider label for desktop */}
            {loc.id === "wv" && (
              <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 items-center">
                <div className="h-16 w-px bg-white/20" />
              </div>
            )}
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-4 text-white/20 text-xs border-t border-white/10 bg-black">
        © {new Date().getFullYear()} 18|8 Fine Men's Salon Dallas &nbsp;·&nbsp;{" "}
        <a href="https://eighteeneight.com" className="hover:text-[#aa0000] transition-colors">
          eighteeneight.com
        </a>
      </footer>
    </div>
  );
}
