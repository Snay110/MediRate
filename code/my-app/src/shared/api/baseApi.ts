import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_KEY as string,
);

export const API_KEY = import.meta.env.VITE_API_KEY;
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL as string,
  }),
  endpoints: () => ({}),
});
