import { supabase } from "@/shared/lib/supabase";

export async function getUserId(): Promise<string | null> {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;

  const session = data.session;
  if (!session || !session.user) return null;

  return session.user.id;
}

export async function userToken() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const token = session?.access_token;
  return token;
}
