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

// export async function signUp(email: string, password: string) {
//   return supabase.auth.signUp({ email, password });
// }

// export async function signIn(email: string, password: string) {
//   return supabase.auth.signInWithPassword({ email, password });
// }
