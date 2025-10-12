import { getReviews } from "@/features/auth/api/doctorListApi";
import useSWR from "swr";
import type { Review } from "@/features/auth/api/doctorListApi";

export function DoctorReviews({ id }: { id: string }) {
  if (!id) return <div>No doctor ID provided</div>;

  const {
    data: reviews,
    error,
    isLoading,
  } = useSWR<Review[] | null>(["reviews", id], () => getReviews(id));

  if (isLoading) return <div>Loading reviews...</div>;
  if (error) return <div>Error loading reviews</div>;
  if (!reviews || reviews.length === 0) return <div>No reviews yet.</div>;

  return (
    <section className="mt-6">
      <h1 className="flex justify-center p-6 text-4xl text-gray-800 ">
        {" "}
        Ratings and reviews
      </h1>
      {reviews.map((review) => (
        <div key={review.id} className="mb-4 p-4 bg-gray-50 rounded shadow">
          <div className="font-semibold text-sm text-gray-700">
            {review.user_name} — {review.rating} ⭐️
          </div>
          <p className="text-gray-600 text-sm">{review.comment}</p>
          <span className="text-xs text-gray-400">
            {new Date(review.created_at).toLocaleDateString()}
          </span>
        </div>
      ))}
    </section>
  );
}
