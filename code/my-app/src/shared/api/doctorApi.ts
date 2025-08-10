import { baseApi } from "@/shared/api/baseApi";

export type Doctors = {
  id: string;
  firstName: string;
  specialty: string;
  rating: number;
  experience: number;
  image: string;
  description: string;
};

export const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDoctors: build.query<Doctors[], void>({
      query: () => "doctors",
    }),
  }),
  overrideExisting: false,
});

export const { useGetDoctorsQuery } = doctorApi;
