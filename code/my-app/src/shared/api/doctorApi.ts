import { baseApi } from "@/shared/api/baseApi";
import type { Doctor } from "@/types/doctor";

export const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDoctors: build.query<Doctor[],void>({
      query: () => "doctors",
    }),
  }),
  overrideExisting: false,
});

export const { useGetDoctorsQuery } = doctorApi;
