import { useParams } from "react-router-dom";
import { getUserId } from "../userId";
import { mutate } from "swr";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY as string;

export function useAddReviews(doctorId: string) {
  const { id: doctor_id } = useParams<{ id: string }>();
  console.log("Nice ID", doctorId);

  async function postReviews(comment: string) {
    const user_id = await getUserId();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/reviews`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        doctor_id,
        user_id,
        comment,
        user_name: "Anonymous",
      }),
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("request failed", response.status, errorText);
      return;
    }
    mutate(["reviews", doctor_id]);
    let result;
    try {
      result = await response.json();
    } catch {
      result = null;
    }
    console.log("Server response", result || "");
  }
  return postReviews;
}
