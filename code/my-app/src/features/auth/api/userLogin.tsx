import { userToken } from "./userToken";
import { SUPABASE_KEY, SUPABASE_URL } from "@/shared/lib/supabase";

export async function userLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const token = userToken();
  try {
    const response = await fetch(
      `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
      {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email,
          password,
        }),
      },
    );
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Login failed", errorText);
      return null;
    }
    const data = await response.json();
    console.log("Logged in", data);
    return data;
  } catch (err) {
    console.error("Network error", err);
    return null;
  }
}
