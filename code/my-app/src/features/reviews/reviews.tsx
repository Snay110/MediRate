import { getReviews } from "../auth/api/doctorListApi";
import useSWR from "swr";
import type { Review } from "../auth/api/doctorListApi";
import { useParams } from "react-router-dom";

export function DoctorReviews({ doctorId }: { doctorId: string }) {
  const { id } = useParams<{ id: string }>();
  const {
    data: reviews,
    error,
    isLoading,
  } = useSWR<Review[] | null>(id ? ["reviews", id] : null, () =>
    getReviews(id!),
  );

  if (!id) return <main>Invalid rote: no id</main>;
  if (isLoading) return <main>Loading...</main>;
  if (error) {
    const err = error as { status?: number; data?: unknown };
    return <main>Error: {err.status ?? JSON.stringify(err)}</main>;
  }
  if (!reviews) return <main>Not found</main>;
  return (
    <main>
      <section>
        {reviews.map((review) => (
          <div key={review.id} className="mb-4 p-4 bg-white rounded shadow">
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
    </main>
  );
}
