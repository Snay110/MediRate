import { memo } from "react";
import type { Doctor } from "../auth/api/doctorListApi";

type Props = {
  doctor: Doctor;
};

export const DoctorCard = memo(({ doctor }: Props) => {
  return (
    <main className="p-6 bg-gray-100 ">
      <div className="mt-6 rounded-md">
        <img
          src={doctor.image}
          alt={doctor.first_name}
          className="h-42 w-full rounded-xl object-cover transition group-hover:scale-105"
        />
        <h2 className="mt-3 text-lg font-semibold text-gray-900">
          {doctor.first_name}
        </h2>
        <p className="text-sm text-gray-500">{doctor.specialty}</p>
        <p className="mt-2 text-sm text-gray-700 line-clamp-2">
          {doctor.description}
        </p>
        <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
          <span>⭐ {doctor.rating}</span>
          <span className="underline">
            {doctor.experience} Years of experience
          </span>
        </div>
      </div>
    </main>
  );
});
