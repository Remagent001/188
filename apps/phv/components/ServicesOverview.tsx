const services = [
  {
    title: "Men's Haircuts",
    href: "/services/mens-haircuts",
    description:
      "Precision cuts including the Classic Cut, Executive Cut, fades, and more — each with a relaxing scalp massage and hot towel finish.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM6 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
      </svg>
    ),
  },
  {
    title: "Straight-Razor Shaves",
    href: "/services/straight-razor-shaves",
    description:
      "The closest shave you've ever had — classic straight razor, warm lather, and a hot towel finish.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18M3 6l4 12h10l4-12M9 10h6M9 14h6" />
      </svg>
    ),
  },
  {
    title: "Hair Coloring & Blending",
    href: "/services/hair-coloring",
    description:
      "Semi-permanent and permanent coloring options, plus seamless gray blending for a natural, youthful look.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Men's Skin Treatments",
    href: "/services/mens-facials",
    description:
      "Rejuvenating skin treatments tailored for men — deep cleanse, exfoliation, and hydration for your best skin.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M8 14c-2.5 1-4 2.5-4 4v1h16v-1c0-1.5-1.5-3-4-4" />
      </svg>
    ),
  },
  {
    title: "Scalp Treatments",
    href: "/services/scalp-treatments",
    description:
      "Specialized treatments targeting hair loss, dryness, and scalp health for your best hair.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a9 9 0 0 1 9 9c0 4-3 7-7 7H4l2-4a9 9 0 0 1-3-5" />
        <path d="M9 12h.01M12 10h.01M15 12h.01" />
      </svg>
    ),
  },
  {
    title: "Facial Hair Sculpting",
    href: "/services/facial-hair-sculpting",
    description:
      "Expert beard shaping, mustache styling, and precision edge-ups to keep your facial hair sharp and defined.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 2 5 5 5 8c0 2 1 4 2.5 5.5C9 15 10 17 10 19h4c0-2 1-4 2.5-5.5C18 12 19 10 19 8c0-3-3-6-7-6z" />
        <path d="M9 19h6M10 22h4" />
      </svg>
    ),
  },
  {
    title: "Men's Waxing",
    href: "/services/mens-waxing",
    description:
      "Clean, precise waxing to keep you looking sharp and polished — ears, nose, brows, and more.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Groom & Bachelor Packages",
    href: "/services/groom-bachelor-packages",
    description:
      "Special event packages for grooms and groomsmen — look your absolute best on the big day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v4M8 7l-2-4M16 7l2-4M6 7h12l-2 13H8L6 7z" />
        <path d="M9 11h6M9 15h4" />
      </svg>
    ),
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">What We Offer</p>
          <h2 className="text-[#212934] text-3xl sm:text-4xl font-bold">Premium Grooming Services</h2>
          <div className="w-12 h-px bg-[#aa0000] mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {services.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group bg-white hover:bg-gray-50 p-8 flex flex-col gap-4 transition-colors"
            >
              <div className="w-10 h-10 text-[#aa0000]">
                {service.icon}
              </div>
              <h3 className="text-[#212934] font-semibold group-hover:text-[#aa0000] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
              <span className="text-[#aa0000] text-xs uppercase tracking-wider flex items-center gap-1 mt-2">
                Learn More
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
