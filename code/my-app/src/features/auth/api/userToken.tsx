import { supabase } from "@/shared/lib/supabase";

export async function userToken() {
  const { data, error } = await supabase.auth.getSession();
  console.log("full Session data", data);
  console.log("Session error", error);
  const session = data?.session;
  const token = session?.access_token;
  console.log("TOKEN", token);
  return token;
}
