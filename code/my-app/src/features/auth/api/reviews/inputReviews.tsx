import { useState } from "react";
import { useAddReviews } from "@/features/auth/api/reviews/hooks/usePostReviews";
import { useParams } from "react-router-dom";

export function InputReviews({ doctorId }: { doctorId: string }) {
  const [comment, setComment] = useState("");
  const addReviews = useAddReviews(doctorId);
  const { id: doctor_id } = useParams<{ id: string }>();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!doctor_id) return;
    if (!comment.trim()) return;
    console.error("Нет doctor_id в URL");
    await addReviews(comment);
    setComment("");
  }

  return (
    <section className="max-w-xl mx-auto ">
      <h2 className="text-2xl font-semibold mt-10 mb-4  py-6 text-center text-gray-800">
        Ratings and Reviews
      </h2>
      <form onSubmit={handleSubmit} className="flex items-center gap-3 mt-4">
        <input
          value={comment}
          placeholder="Write a review..."
          onChange={(e) => setComment(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg p-2 text-sm
               bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700
               text-white text-sm font-medium transition-colors"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
