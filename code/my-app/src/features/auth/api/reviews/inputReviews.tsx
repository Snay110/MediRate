import { useInputReviews } from "@/features/auth/api/hooks/useInputReviews";

export default function InputReviews() {
  const { comment, setComment, handleSubmit } = useInputReviews();
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-xl mx-auto flex-col  items-center gap-3 mt-4 "
    >
      <h2 className="text-2xl font-semibold mt-10 mb-4  py-6 text-center text-gray-800">
        Ratings and Reviews
      </h2>
      <div className="flex flex-row max-w-xl mx-auto ">
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
      </div>
    </form>
  );
}
