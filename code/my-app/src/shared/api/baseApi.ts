import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://68963c8d039a1a2b2891d8a3.mockapi.io/Doctor",
  }),
  endpoints: () => ({}),
});
