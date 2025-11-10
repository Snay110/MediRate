import useSWR from "swr";
import { getReviews } from "../reviews/getReviews";
import type { Review } from "../../../doctor/doctorListApi";

export function useReviews() {
  const {
    data: reviews = [],
    error,
    isLoading,
  } = useSWR<Review[]>("reviews", getReviews);
  return { reviews, error, isLoading };
}
