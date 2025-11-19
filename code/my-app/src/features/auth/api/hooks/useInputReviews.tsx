import { useState } from "react";

export function useInputReviews() {
  const [comment, setComment] = useState("");

  return { comment, setComment };
}
