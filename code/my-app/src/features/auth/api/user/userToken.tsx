import { supabase } from "@/shared/lib/supabase";

export async function userToken() {
  const { data, error } = await supabase.auth.getSession();

  console.log("Session error", error);
  const session = data?.session;
  const token = session?.access_token;

  return token;
}
