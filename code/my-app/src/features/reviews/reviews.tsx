import { getReviews } from "@/features/auth/api/doctorListApi";
import useSWR from "swr";
import type { Review } from "@/features/auth/api/doctorListApi";
import { useState } from "react";
import { ReviewList } from "./reviewsList";

export function DoctorReviews({ id }: { id: string }) {
  const [visibleCount, setVisibleCount] = useState(5);
  if (!id) return <div>No doctor ID provided</div>;

  const {
    data: reviews,
    error,
    isLoading,
  } = useSWR<Review[] | null>(["reviews", id], () => getReviews(id));

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
    <section className="mt-6 max-w-xl mx-auto  bg-white ">
      {reviews.slice(0, visibleCount).map((review) => (
        <div key={review.id} className="mb-4 p-4 bg-gray-100 rounded shadow">
          <ReviewList review={review!} />
        </div>
      ))}

      {visibleCount < reviews.length && (
        <button onClick={() => setVisibleCount(visibleCount + 10)}>
          More...
        </button>
      )}
    </section>
  );
}
