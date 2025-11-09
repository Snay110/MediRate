import useSWR from "swr";
import { getReviews } from "../getReviews";
import type { Review } from "../../doctorListApi";

export function useReviews() {
  const {
    data: reviews = [],
    error,
    isLoading,
  } = useSWR<Review[]>("reviews", getReviews);
  return { reviews, error, isLoading };
}
