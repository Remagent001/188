import { CareersSection } from "@repo/ui/components/CareersSection";

export const metadata = {
  title: "Careers | 18|8 Fine Men's Salon Preston Hollow Village | Dallas, TX",
  description:
    "Join the team at 18|8 Fine Men's Salon Preston Hollow Village in Dallas. We're looking for talented hairstylists, barbers, and front desk professionals.",
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-24 pb-16 px-4 text-center">
        <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">
          18|8 Preston Hollow Village
        </p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Join Our Team</h1>
        <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
        <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          Build your career in a positive, exciting environment where talent is celebrated and
          excellence is the standard. We're always looking for the best.
        </p>
      </section>

      {/* Why work here */}
      <section className="bg-[#111] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Grow Your Clientele",
                body: "We invest in marketing that brings clients directly to you, so you can focus on what you do best.",
              },
              {
                title: "Ongoing Education",
                body: "Stay at the cutting edge with regular training, technique workshops, and product education.",
              },
              {
                title: "Competitive Compensation",
                body: "Commission-based pay, bonuses, and a benefits structure designed to reward your performance and loyalty.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3 p-6">
                <div className="w-8 h-px bg-[#c9a96e] mb-2" />
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers form section */}
      <CareersSection />
    </>
  );
}
