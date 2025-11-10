import { useParams } from "react-router-dom";
import { getUserId } from "../user/userId";
import { mutate } from "swr";
import { userToken } from "../user/userToken";
import { SUPABASE_URL, SUPABASE_KEY } from "@/shared/lib/supabase";

export function AddReviews() {
  const { id: doctor_id } = useParams<{ id: string }>();

  async function postReviews(comment: string, full_name: string) {
    const token = await userToken();
    const user_id = await getUserId();
    const response = await fetch(`${SUPABASE_URL}}/rest/v1/reviews`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        doctor_id,
        user_id,
        comment,
        full_name,
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
