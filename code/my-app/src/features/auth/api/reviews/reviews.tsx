import { getReviews } from "./getReviews";
import useSWR from "swr";
import type { Review } from "@/features/auth/api/doctorListApi";
import { useState } from "react";
import { ReviewList } from "./reviewsList";
import { motion, AnimatePresence } from "framer-motion";
import { useInputReviews } from "./hooks/useInputReviews";

export function DoctorReviews({ id }: { id: string }) {
  const [visibleCount, setVisibleCount] = useState(5);
  const { comment, setComment, handleSubmit } = useInputReviews();
  if (!id) return <div>No doctor ID provided</div>;

  const {
    data: reviews,
    error,
    isLoading,
  } = useSWR<Review[] | null>(["reviews", id], () =>
    getReviews({ doctorId: id }),
  );

  if (isLoading)
    return (
      <div className="flex min-h-[200px] justify-center items-center">
        Loading reviews...
      </div>
    );
  if (error)
    return (
      <div className="flex min-h-[200px] justify-center items-center">
        Error loading reviews
      </div>
    );
  if (!reviews || reviews.length === 0)
    return (
      <div className="flex min-h-[200px] justify-center items-center">
        No reviews yet.
      </div>
    );

  return (
    <>
      <section className="max-w-xl mx-auto ">
        <h2 className="text-2xl font-semibold mt-10 mb-4  py-6 text-center text-gray-800">
          Ratings and Reviews
        </h2>
        <form onSubmit={handleSubmit} className="flex items-center gap-3 mt-4">
          <input
            value={comment}
            placeholder="Write a review..."
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg p-2 text-sm
               bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700
               text-white text-sm font-medium transition-colors"
          >
            Submit
          </button>
        </form>
      </section>
      <section className="mt-6 max-w-xl mx-auto flex flex-col   bg-white ">
        <AnimatePresence>
          {reviews.slice(0, visibleCount).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.05,
              }}
              className="mb-4 p-4 bg-gray-100 rounded shadow"
            >
              <ReviewList review={review!} />
            </motion.div>
          ))}
        </AnimatePresence>

        {visibleCount < reviews.length && (
          <button
            className="ml-auto items-end px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700
               text-white text-sm font-medium transition-colors"
            onClick={() => setVisibleCount(visibleCount + 10)}
          >
            More...
          </button>
        )}
      </section>
    </>
  );
}
