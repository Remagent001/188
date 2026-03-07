interface Review {
  author: string;
  rating: number;
  text: string;
  source?: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
  locationName: string;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? "text-[#aa0000]" : "text-white/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection({ reviews, locationName }: ReviewsSectionProps) {
  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">Client Reviews</p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold">What Our Clients Say</h2>
          <div className="w-12 h-px bg-[#aa0000] mx-auto mt-5" />
          <p className="text-white/50 text-sm mt-4">About 18|8 {locationName}</p>
        </div>

        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-[#111] border border-white/5 p-6 flex flex-col gap-4">
                <Stars rating={review.rating} />
                <p className="text-white/70 text-sm leading-relaxed italic">"{review.text}"</p>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-white font-medium text-sm">{review.author}</span>
                  {review.source && (
                    <span className="text-white/30 text-xs uppercase tracking-wider">{review.source}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-white/30 text-sm">Reviews coming soon.</p>
        )}
      </div>
    </section>
  );
}

export type { Review };
