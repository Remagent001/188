import type { SiteConfig } from "../types/site";

interface ServiceItem {
  name: string;
  description: string;
}

interface ServiceDetailPageProps {
  title: string;
  intro?: string;
  photo: string;
  services: ServiceItem[];
  site: SiteConfig;
}

export function ServiceDetailPage({
  title,
  intro,
  photo,
  services,
  site,
}: ServiceDetailPageProps) {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#111] pt-24 pb-10 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">Services</p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold uppercase">{title}</h1>
          <div className="w-16 h-px bg-[#aa0000] mt-5" />
          {intro && (
            <p className="text-white/60 text-sm mt-5 max-w-2xl leading-relaxed">{intro}</p>
          )}
        </div>
      </section>

      {/* Photo + services */}
      <section className="bg-[#0d0d0d] py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

          {/* Photo */}
          <div className="lg:w-2/5 shrink-0">
            <div className="sticky top-24">
              <img
                src={photo}
                alt={title}
                className="w-full object-cover"
                style={{ maxHeight: "600px" }}
              />
            </div>
          </div>

          {/* Services grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {services.map((service) => (
                <div key={service.name} className="border-t border-white/10 pt-6">
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-3">
                    {service.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-[#aa0000] py-14 px-4 text-center">
        <h2 className="text-black text-2xl sm:text-3xl font-bold mb-3">
          Ready to Book?
        </h2>
        <p className="text-black/70 mb-7 text-sm max-w-md mx-auto">
          Schedule your appointment online — it only takes a minute.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={site.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-[#111] text-white font-bold uppercase tracking-widest px-10 py-4 text-sm transition-colors"
          >
            Book Now
          </a>
          <a
            href={`tel:${site.phone}`}
            className="border-2 border-black hover:bg-black hover:text-white text-black font-bold uppercase tracking-widest px-10 py-4 text-sm transition-colors"
          >
            Call {site.phoneFormatted}
          </a>
        </div>
      </section>
    </>
  );
}
