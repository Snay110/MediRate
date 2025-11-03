import { SUPABASE_KEY, SUPABASE_URL } from "@/shared/lib/supabase";
export async function userRegister(email: string, password: string) {
  try {
    const response = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
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
