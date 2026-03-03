import { ReviewsSection } from "@repo/ui/components/ReviewsSection";
import { BookingCTA } from "@repo/ui/components/BookingCTA";
import site from "../../config/site";

export const metadata = {
  title: `Client Reviews | ${site.seo.title}`,
  description:
    "Read what clients are saying about 18|8 Fine Men's Salon Preston Hollow Village in Dallas. Leave a review on Google or Yelp.",
};

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-24 pb-16 px-4 text-center">
        <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">
          18|8 Preston Hollow Village
        </p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Client Reviews</h1>
        <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
        <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          We let our work and our clients speak for us. Read what the gentlemen of Preston Hollow
          have to say about their experience at 18|8.
        </p>
      </section>

      {/* Reviews section */}
      <ReviewsSection reviews={[]} locationName={site.locationName} />

      {/* Encourage reviews */}
      <section className="bg-[#111] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Share Your Experience</p>
          <h2 className="text-white text-3xl font-bold mb-4">How Was Your Visit?</h2>
          <div className="w-12 h-px bg-[#c9a96e] mx-auto mb-6" />
          <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
            If you've visited 18|8 Preston Hollow Village, we'd love to hear from you. Your feedback
            helps us improve and helps other Dallas gentlemen find us. Please take a moment to leave
            a review on Google or Yelp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={site.social.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black font-bold uppercase tracking-widest px-8 py-4 text-xs transition-colors"
            >
              Leave a Review on Yelp
            </a>
            <a
              href="https://search.google.com/local/writereview?placeid=PLACEHOLDER_PLACE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-white/20 text-white/70 hover:border-white hover:text-white font-bold uppercase tracking-widest px-8 py-4 text-xs transition-colors"
            >
              Leave a Review on Google
            </a>
          </div>

          <p className="text-white/30 text-xs mt-6">
            Thank you for helping us grow and for being part of the 18|8 community.
          </p>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCTA
        site={site}
        heading="Ready to Experience It Yourself?"
        subtext="Join the many gentlemen who make 18|8 Preston Hollow their grooming destination."
      />
    </>
  );
}
