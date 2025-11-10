import { SUPABASE_KEY, SUPABASE_URL } from "@/shared/lib/supabase";
export async function userRegister({
  email,
  password,
  full_name,
}: {
  email: string;
  password: string;
  full_name: string;
}) {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/users`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        full_name,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("request failed", response.status, errorText);
      return;
    }
  } catch (err) {
    console.error("Network error", err);
  }
}
