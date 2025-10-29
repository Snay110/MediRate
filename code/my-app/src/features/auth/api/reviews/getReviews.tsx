const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY as string;

export async function getReviews(doctorId: string) {
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
