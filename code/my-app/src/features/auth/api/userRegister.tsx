// import { supabase } from "@/shared/lib/supabase";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY as string;

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
    // const { data, error } = await supabase.auth.signInWithPassword({
    //   email,
    //   password,
    // });
    // console.log("login", data, error);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("request failed", response.status, errorText);
      return;
    }
    // const { data: sessionData } = await supabase.auth.getSession();
    // const ton = sessionData?.session?.access_token;
    // console.log("token after register", ton);
    // return { ...data, ton };
  } catch (err) {
    console.error("Network error", err);
  }
}

// // регистрация
// export async function signUp(email: string, password: string) {
//   const { data, error } = await supabase.auth.signUp({ email, password });
//   if (error) throw new Error(error.message);
//   return data;
// }

// // вход
// export async function signIn(email: string, password: string) {
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });
//   if (error) throw new Error(error.message);
//   return data;
// }

// // выход
// export async function signOut() {
//   const { error } = await supabase.auth.signOut();
//   if (error) throw new Error(error.message);
//   return true;
// }

// // сброс пароля
// export async function resetPassword(email: string) {
//   const { data, error } = await supabase.auth.resetPasswordForEmail(email);
//   if (error) throw new Error(error.message);
//   return data;
// }
