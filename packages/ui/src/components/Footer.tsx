import type { SiteConfig } from "../types/site";

interface FooterProps {
  site: SiteConfig;
}

export function Footer({ site }: FooterProps) {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-2xl">
              18<span className="text-[#c9a96e]">|</span>8
            </span>
            <span className="text-white/60 text-xs uppercase tracking-widest leading-tight">
              Fine Men's<br />Salon
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            A classic barbershop for the modern gentleman in {site.address.city}, {site.address.state}.
          </p>
          {/* Social */}
          <div className="flex gap-4">
            {site.social.facebook && (
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer"
                className="hover:text-[#c9a96e] transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            )}
            {site.social.instagram && (
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer"
                className="hover:text-[#c9a96e] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            )}
            {site.social.yelp && (
              <a href={site.social.yelp} target="_blank" rel="noopener noreferrer"
                className="hover:text-[#c9a96e] transition-colors" aria-label="Yelp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.73l-4.38 1.44c-.76.25-1.5-.4-1.35-1.18l.86-4.6a1.1 1.1 0 011.77-.63l3.52 3.16a1.1 1.1 0 01-.42 1.81zm-6.64 3.94l.44 4.6a1.1 1.1 0 01-1.56 1.07l-4.16-1.87a1.1 1.1 0 01-.18-1.9l3.72-2.73a1.1 1.1 0 011.74.83zm-5.84-9.44l2.36 4.06a1.1 1.1 0 01-.9 1.65l-4.6.17a1.1 1.1 0 01-.95-1.69l2.24-4.23a1.1 1.1 0 011.85.04zm-1.1 10.6l-2.97-3.6a1.1 1.1 0 01.5-1.78l4.44-1.2a1.1 1.1 0 011.27 1.53l-1.47 4.4a1.1 1.1 0 01-1.77.65zm7.8-11.88l-.23 4.61a1.1 1.1 0 01-1.9.73l-3.3-3.36a1.1 1.1 0 01.6-1.85l4.5-.96a1.1 1.1 0 011.05 1.4 1.1 1.1 0 01-.72.43z"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-4">Hours</h4>
          <ul className="space-y-2 text-sm">
            {site.hours.map((h) => (
              <li key={h.label} className="flex justify-between gap-4">
                <span>{h.label}</span>
                <span className={h.time === "Closed" ? "text-red-400" : "text-white/90"}>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Quick Links */}
        <div className="space-y-6">
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-4">Location</h4>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-[#c9a96e] transition-colors leading-relaxed"
            >
              {site.address.street}{site.address.suite && `, ${site.address.suite}`}<br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </a>
            <div className="mt-2">
              <a href={`tel:${site.phone}`} className="text-sm hover:text-[#c9a96e] transition-colors">
                {site.phoneFormatted}
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-1.5 text-sm">
              {[
                ["Services", "/services"],
                ["Products", "/products"],
                ["About", "/about"],
                ["Reviews", "/reviews"],
                ["Careers", "/careers"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-[#c9a96e] transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-xs text-white/30">
        © {new Date().getFullYear()} 18|8 Fine Men's Salon {site.locationName}. All rights reserved.
      </div>
    </footer>
  );
}
