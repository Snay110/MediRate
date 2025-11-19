import { memo } from "react";
import type { Review } from "@/features/doctor/doctorListApi";

export function _ReviewsItem({ review }: { review: Review }) {
  return (
    <div className="mb-4 p-4 bg-gray-100 rounded shadow">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-gray-800">
          {review.full_name || review.full_name}
        </h4>
        <span className="text-yellow-500 font-medium">
          ⭐️ {review.rating}/5
        </span>
      </div>
      {review.comment && <p className="text-gray-600 mt-2">{review.comment}</p>}
    </div>
  );
}

export default memo(_ReviewsItem);
