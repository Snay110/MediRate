import { baseApi } from "@/features/auth/api/baseApi";

export type Doctor = {
  id: string;
  firstName: string;
  speciality: string;
  rating: number;
  experience: number;
  image: string;
  description: string;
};

export const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDoctors: build.query<Doctor[], void>({
      query: () => "",
    }),

    getDoctorByI: build.query<Doctor, string>({
      query: (id) => `/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetDoctorsQuery, useGetDoctorByIQuery } = doctorApi;
