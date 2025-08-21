import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API_KEY = import.meta.env.VITE_API_KEY;
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_KEY,
  }),
  endpoints: () => ({}),
});
