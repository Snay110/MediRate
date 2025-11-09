import { memo } from "react";

import { useReviews } from "./hooks/useReviews";

export const ReviewsList = memo(() => {
  const { reviews, isLoading, error } = useReviews();

  if (isLoading) {
    return <p>Loading reviews...</p>;
  }
  if (error) {
    return <p>Error loading reviews.</p>;
  }

  if (!reviews || reviews.length === 0) {
    return <p>No reviews 11111.</p>;
  }

  return (
    <ul className="flex flex-col gap-3 mt-4">
      {reviews.map((review) => (
        <li
          key={review.id}
          className="rounded-xl border border-gray-200 p-4 shadow-sm bg-white"
        >
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-gray-800">{review.full_name}</h4>
            <span className="text-yellow-500 font-medium">
              ⭐ {review.rating}/5
            </span>
          </div>
          {review.comment && (
            <p className="text-gray-600 mt-2">{review.comment}</p>
          )}
        </li>
      ))}
    </ul>
  );
});

export default ReviewsList;
