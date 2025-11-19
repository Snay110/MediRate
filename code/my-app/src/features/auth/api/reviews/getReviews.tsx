import { SUPABASE_KEY, SUPABASE_URL } from "@/shared/lib/supabase";
import { userToken } from "../user/userToken";

export async function getReviews({ doctorId }: { doctorId: string }) {
  const token = await userToken();;

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/reviews?select=*&doctor_id=eq.${doctorId}&order=created_at.desc`,
    {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  console.log("GET reviews status:", response.status);

  if (!response.ok) {
    const txt = await response.text();
    console.error("Error fetching reviews:", response.status, txt);
    return null;
  }

  return response.json();
}
