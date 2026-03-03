const services = [
  {
    title: "Men's Haircuts",
    href: "/services/mens-haircuts",
    description: "Precision cuts including the Classic Cut, Executive Cut, fades, and more — each with a relaxing scalp massage and hot towel finish.",
    icon: "✂",
  },
  {
    title: "Straight-Razor Shaves",
    href: "/services/straight-razor-shaves",
    description: "The closest shave you've ever had — classic straight razor, warm lather, and a hot towel finish.",
    icon: "🪒",
  },
  {
    title: "Hair Coloring & Blending",
    href: "/services/hair-coloring",
    description: "Semi-permanent and permanent coloring options, plus seamless gray blending for a natural, youthful look.",
    icon: "🎨",
  },
  {
    title: "Men's Facials",
    href: "/services/mens-facials",
    description: "Rejuvenating facial treatments tailored for men's skin — cleanse, exfoliate, and revitalize.",
    icon: "✨",
  },
  {
    title: "Scalp Treatments",
    href: "/services/scalp-treatments",
    description: "Specialized treatments targeting hair loss, dryness, and scalp health for your best hair.",
    icon: "💆",
  },
  {
    title: "Nail Treatments",
    href: "/services/nail-treatments",
    description: "Man-icures and pedicures — clean, groomed, and professional. No polish required.",
    icon: "💅",
  },
  {
    title: "Men's Waxing",
    href: "/services/mens-waxing",
    description: "Clean, precise waxing to keep you looking sharp and polished — ears, nose, brows, and more.",
    icon: "🌿",
  },
  {
    title: "Groom & Bachelor Packages",
    href: "/services/groom-bachelor-packages",
    description: "Special event packages for grooms and groomsmen — look your absolute best on the big day.",
    icon: "🤵",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">What We Offer</p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold">Premium Grooming Services</h2>
          <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {services.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group bg-[#0a0a0a] hover:bg-[#111] p-8 flex flex-col gap-4 transition-colors"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3 className="text-white font-semibold group-hover:text-[#c9a96e] transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1">{service.description}</p>
              <span className="text-[#c9a96e] text-xs uppercase tracking-wider flex items-center gap-1 mt-2">
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
