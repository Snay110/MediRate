import useSWR from "swr";
import type { Doctor } from "@/features/auth/api/doctorListApi";
import { useNavigate } from "react-router-dom";
import { getDoctors } from "@/features/auth/api/doctorListApi";

export default function DoctorPage() {
  const {
    data: doctors = [],
    error,
    isLoading,
  } = useSWR<Doctor[]>("doctors", getDoctors);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <main className="p-6 text-center text-lg text-gray-600">Loading...</main>
    );
  }

  if (error) {
    return (
      <main className="p-6 text-center text-lg text-red-500">
        Error: {error}
      </main>
    );
  }

  if (!doctors.length) {
    return (
      <main className="p-6 text-center text-lg text-gray-400">
        No doctors found
      </main>
    );
  }
  return (
    <main className="p-6 bg-gray-100 ">
      <h1 className="mb-6 text2x1  font-bold text-gray-800">Popular doctors</h1>
      <ul className="display  grid bg-gray-100 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors.map((item) => (
          <li
            key={item.id}
            role="button"
            tabIndex={0}
            className="group cursor-pointer rounded-2xl bg-white p-4 shadow-md transition hover:shadow-lg"
            onClick={() => navigate(`/doctors/${item.id}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                navigate(`/doctors/${item.id}`);
              }
            }}
          >
            <div className="mt-6 rounded-md">
              <img
                src={item.image}
                alt={item.first_name}
                className="h-42 w-full rounded-xl object-cover transition group-hover:scale-105"
              />
              <h2 className="mt-3 text-lg font-semibold text-gray-900">
                {item.first_name}
              </h2>
              <p className="text-sm text-gray-500">{item.specialty}</p>
              <p className="mt-2 text-sm text-gray-700 line-clamp-2">
                {item.description}
              </p>
              <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                <span>⭐ {item.rating}</span>
                <span className="underline">
                  {item.experience} Years of experience
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const Component = DoctorPage;
