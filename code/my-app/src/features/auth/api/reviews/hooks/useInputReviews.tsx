import { useState } from "react";
import { getReviews } from "../getReviews";
import { useParams } from "react-router-dom";

export function useInputReviews() {
  const [comment, setComment] = useState("");
  const { id: doctor_id } = useParams<{ id: string }>();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!doctor_id) return;
    if (!comment.trim()) return;
    await getReviews({ doctorId: doctor_id });
    setComment("");
  }

  return { comment, setComment, handleSubmit };
}
