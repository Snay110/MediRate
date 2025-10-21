import { useState } from "react";
import { useAddReviews } from "@/features/auth/api/reviews/hooksPostReviews/usePostReviews";
import { useParams } from "react-router-dom";

export function InputReviews({ doctorId }: { doctorId: string }) {
  const [comment, setComment] = useState("");
  const addReviews = useAddReviews(doctorId);
  const { id: doctor_id } = useParams<{ id: string }>();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!comment.trim) return;
    if (!doctor_id) return;
    console.error("Нет doctor_id в URL");
    await addReviews(comment);
    setComment("");
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-center text-gray-800">
        Ratings and Reviews
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          value={comment}
          autoComplete="reviews"
          onChange={(e) => setComment(e.target.value)}
          className="block w-full border-b-2 max-w-xl mx-auto p-2  border-gray-300 bg-transparent py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-800 sm:text-sm"
          type="text"
        />
        <button
          type="submit"
          className="flex-1  bg-gray-100 hover:bg-gray-200 rounded-lg p-4 border border-gray-600 text-gray-700 py-2 font-medium text-sm"
        >
          Book Appointment
        </button>
      </form>
    </section>
  );
}
