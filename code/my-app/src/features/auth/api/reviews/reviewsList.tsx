import type { Review } from "../doctorListApi";
import { memo } from "react";

export const ReviewList = memo(({ review }: { review: Review }) => {
  return (
    <section>
      <div className="font-semibold text-sm text-gray-700">
        {review.user_name} — {review.rating} ⭐️
      </div>
      <p className="text-gray-600 text-sm">{review.comment}</p>
      <span className="text-xs text-gray-400">
        {new Date(review.created_at).toLocaleDateString()}
      </span>
    </section>
  );
});
