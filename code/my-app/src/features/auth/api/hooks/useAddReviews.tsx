import { getUserId } from "../user/userId";
import { mutate } from "swr";
import { userToken } from "../user/userToken";
import { SUPABASE_URL, SUPABASE_KEY } from "@/shared/lib/supabase";

export function useAddReviews() {
  async function postReviews({ comment, full_name, rating, doctorId }: {
    comment: string,
    full_name: string,
    rating: number,
    doctorId: string
  }) {
    const token = await userToken;
    const user_id = await getUserId();
    const url = `${SUPABASE_URL}/rest/v1/reviews?select=*&doctor_id=eq.${doctorId}&order=created_at.desc`;
    console.log(
      "POST REVIEWS URL:",
      url,
      comment,
      full_name,
      rating,
      doctorId,
      user_id
    );

    const response = await fetch(url, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },

      body: JSON.stringify({
        doctorId,
        user_id,
        comment,
        full_name,
        rating,
      }),
    });
    const text = await response.text();
    console.log("POST reviews status:", response.status);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("request failed", response.status, errorText);
      return;
    }
    mutate(["reviews", doctorId]);
    try {
      return JSON.parse(text);
    } catch {
      null;
    }
  }
  return postReviews;
}
