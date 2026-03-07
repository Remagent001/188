const services = [
  {
    title: "Men's Haircuts",
    href: "/services/mens-haircuts",
    description:
      "Precision cuts including the Classic Cut, Executive Cut, fades, and more — each with a relaxing scalp massage and hot towel finish.",
    icon: "/images/icons/icon-haircuts.svg",
  },
  {
    title: "Straight-Razor Shaves",
    href: "/services/straight-razor-shaves",
    description:
      "The closest shave you've ever had — classic straight razor, warm lather, and a hot towel finish.",
    icon: "/images/icons/icon-shaves.svg",
  },
  {
    title: "Hair Coloring & Blending",
    href: "/services/hair-coloring",
    description:
      "Semi-permanent and permanent coloring options, plus seamless gray blending for a natural, youthful look.",
    icon: "/images/icons/icon-coloring.svg",
  },
  {
    title: "Men's Skin Treatments",
    href: "/services/mens-facials",
    description:
      "Rejuvenating skin treatments tailored for men — deep cleanse, exfoliation, and hydration for your best skin.",
    icon: "/images/icons/icon-skin.svg",
  },
  {
    title: "Scalp Treatments",
    href: "/services/scalp-treatments",
    description:
      "Specialized treatments targeting hair loss, dryness, and scalp health for your best hair.",
    icon: "/images/icons/icon-scalp.svg",
  },
  {
    title: "Facial Hair Sculpting",
    href: "/services/facial-hair-sculpting",
    description:
      "Expert beard shaping, mustache styling, and precision edge-ups to keep your facial hair sharp and defined.",
    icon: "/images/icons/icon-sculpting.svg",
  },
  {
    title: "Men's Waxing",
    href: "/services/mens-waxing",
    description:
      "Clean, precise waxing to keep you looking sharp and polished — ears, nose, brows, and more.",
    icon: "/images/icons/icon-wax.svg",
  },
  {
    title: "Groom & Bachelor Packages",
    href: "/services/groom-bachelor-packages",
    description:
      "Special event packages for grooms and groomsmen — look your absolute best on the big day.",
    icon: "/images/icons/icon-bachelor.svg",
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
              <img src={service.icon} alt={service.title} className="w-10 h-10" />
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
