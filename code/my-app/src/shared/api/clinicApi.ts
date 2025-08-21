import { baseApi } from "@/shared/api/baseApi";

export const clinicApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getClinics: build.query({
      query: () => "clinics",
    }),
  }),
  overrideExisting: false,
});

export const { useGetClinicsQuery } = clinicApi;
