import { SUPABASE_KEY, SUPABASE_URL } from "@/shared/lib/supabase";

export async function fetchDoctor() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/doctors?select=*`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer${SUPABASE_KEY}`,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("request failed", res.status, errorText);
    return;
  }
  return res.json();
}
