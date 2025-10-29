const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY as string;

export async function FetchDoctor() {
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
