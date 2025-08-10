import { baseApi } from "@/shared/api/baseApi";

export type Doctor = {
  id: string;
  firstName: string; //ФИО
  specialty: string; //Специализация
  rating: number; //Рейтинг
  experience: number; //Опыт работы
  image: string; //путь к изображению врача
  description: string; // Био. для карточки и диталей
};

export const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDoctors: build.query<Doctor[], void>({
      query: () => "doctors",
    }),

    getDoctorByI: build.query<Doctor, string>({
      query: (id) => `doctors/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetDoctorsQuery, useGetDoctorByIQuery } = doctorApi;
