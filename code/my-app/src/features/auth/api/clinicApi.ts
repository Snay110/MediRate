import { baseApi } from "@/features/auth/api/baseApi";

export const clinicApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getClinics: build.query({
      query: () => "clinics",
    }),
  }),
  overrideExisting: false,
});

export const { useGetClinicsQuery } = clinicApi;
