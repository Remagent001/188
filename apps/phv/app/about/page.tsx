import { TeamGrid } from "../../components/TeamGrid";
import { BookingCTA } from "../../components/BookingCTA";
import site from "../../config/site";

export const metadata = {
  title: `About Us | ${site.seo.title}`,
  description:
    "Learn about 18|8 Fine Men's Salon Preston Hollow Village in Dallas. Our story, our mission, and the team behind the experience.",
};

const team = [
  { name: "Stylist Name", title: "Master Stylist",  photo: "https://randomuser.me/api/portraits/men/36.jpg" },
  { name: "Stylist Name", title: "Barber",           photo: "https://randomuser.me/api/portraits/men/48.jpg" },
  { name: "Stylist Name", title: "Senior Stylist",   photo: "https://randomuser.me/api/portraits/men/62.jpg" },
  { name: "Stylist Name", title: "Barber",           photo: "https://randomuser.me/api/portraits/men/78.jpg" },
  { name: "Stylist Name", title: "Stylist",          photo: "https://randomuser.me/api/portraits/women/32.jpg" },
  { name: "Stylist Name", title: "Master Barber",    photo: "https://randomuser.me/api/portraits/men/58.jpg" },
  { name: "Stylist Name", title: "Stylist",          photo: "https://randomuser.me/api/portraits/women/71.jpg" },
  { name: "Stylist Name", title: "Barber",           photo: "https://randomuser.me/api/portraits/men/27.jpg" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f5f5f5] pt-24 pb-16 px-4 text-center">
        <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">Our Story</p>
        <h1 className="text-[#212934] text-4xl sm:text-5xl font-bold mb-4">
          About 18|8 Preston Hollow Village
        </h1>
        <div className="w-12 h-px bg-[#aa0000] mx-auto mt-5" />
        <p className="text-gray-500 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          A classic barbershop experience reimagined for the modern gentleman — in the heart of
          Dallas's Preston Hollow Village.
        </p>
      </section>

      {/* About text */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left column */}
            <div>
              <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">Who We Are</p>
              <h2 className="text-[#212934] text-3xl font-bold mb-5">
                An Experience Unlike Any Other
              </h2>
              <div className="w-12 h-px bg-[#aa0000] mb-8" />
              <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
                <p>
                  18|8 Fine Men's Salon was founded on a simple but powerful belief: men deserve
                  a grooming experience that goes far beyond a basic haircut. We set out to reinvent
                  the traditional barbershop model — combining the craft and culture of classic
                  barbering with the expertise and elevated service environment previously thought to
                  only exist in high-end women's salons.
                </p>
                <p>
                  At our Preston Hollow Village location, we've created a space designed exclusively
                  for men. A place where you can arrive, decompress, and leave looking and feeling
                  exceptional. Every service is performed with precision, care, and a commitment
                  to your individual look.
                </p>
                <p>
                  We believe grooming is personal. That's why every visit begins with a real
                  conversation — about your hair, your lifestyle, your goals. Our stylists and
                  barbers combine their expertise with personalized product recommendations to ensure
                  your results last well beyond the salon.
                </p>
              </div>
            </div>

            {/* Right column — pillars */}
            <div className="space-y-8">
              {[
                {
                  title: "Elevated Expertise",
                  body: "Our team brings the skills and knowledge typically found in premier women's salons into a space made for men — without compromise.",
                },
                {
                  title: "The Personalized Approach",
                  body: "No two clients are the same. We take the time to understand your hair type, your style preferences, and your routine to deliver results tailored to you.",
                },
                {
                  title: "A Space Made for Men",
                  body: "From the environment to the products to the conversation — everything at 18|8 is curated with the modern gentleman in mind.",
                },
                {
                  title: "Community Commitment",
                  body: "We're proud to serve the Preston Hollow community and to be a trusted part of the neighborhood at Preston Hollow Village.",
                },
              ].map((pillar) => (
                <div key={pillar.title} className="border-l-2 border-[#aa0000] pl-6">
                  <h3 className="text-[#212934] font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats/highlights */}
      <section className="bg-[#f5f5f5] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-100">
            {[
              { number: "18|8", label: "Since 2010" },
              { number: "8+", label: "Services Offered" },
              { number: "100%", label: "Men's Focus" },
              { number: "5★", label: "Client Rated" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#f5f5f5] p-8 text-center">
                <p className="text-[#aa0000] text-3xl font-bold mb-2">{stat.number}</p>
                <p className="text-gray-400 text-xs uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamGrid members={team} />

      {/* Booking CTA */}
      <BookingCTA
        site={site}
        heading="Come Meet the Team"
        subtext="Book your first appointment and experience the difference for yourself."
      />
    </>
  );
}
