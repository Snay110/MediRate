import { SUPABASE_KEY, SUPABASE_URL } from "@/shared/lib/supabase";

export async function getReviews({ doctorId }: { doctorId: string }) {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/reviews?select=*&doctor_id=eq.${doctorId}&order=created_at.desc`,
    {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
      },
    },
  );
  if (!response.ok) {
    console.error("Error fetching reviews");
    return null;
  }
  return response.json();
}
