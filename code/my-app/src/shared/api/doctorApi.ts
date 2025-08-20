import { baseApi } from "@/shared/api/baseApi";

export type Doctors = {
  id: string;
  Fristname: string; //ФИО
  speciality: string; //Специализация
  rating: number; //Рейтинг
  experience: number; //Опыт работы
  image: string; //путь к изображению врача
  description: string; // Био. для карточки и диталей
};

export const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDoctors: build.query<Doctor[], void>({
      query: () => "doctor",
      query: () => "doctors",
    }),

    getDoctorByI: build.query<Doctor, string>({
      query: (id) => `doctors/${id}`,
      query: (id) => `doctors/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetDoctorsQuery } = doctorApi;
