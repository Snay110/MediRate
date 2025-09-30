import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { PopularDoctors } from "@/shared/ui/popularDoctors";
import { getDoctors } from "@/features/auth/api/doctorListApi";
import type { Doctor } from "@/features/auth/api/doctorListApi";

export default function DoctorPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();
        setDoctors(data);
      } catch (err: unknown) {
        if(err instanceof Error)
        setError(err.message ?? "Failed to fetch doctors");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return <main className="p-6 text-center text-lg text-gray-600">Загрузка...</main>;
  }

  if (error) {
    return <main className="p-6 text-center text-lg text-red-500">Ошибка: {error}</main>;
  }

  if (!doctors.length) {
    return <main className="p-6 text-center text-lg text-gray-400">Доктор не найден</main>;
  }

  return (
    <main className="p-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Популярные врачи</h1>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
         

            <div className="mt-4">
              <img
                src={item.image}
                alt={item.firstName}
                className="h-32 w-full rounded-xl object-cover transition group-hover:scale-105"
              />
              <h2 className="mt-3 text-lg font-semibold text-gray-900">
                {item.firstName}
              </h2>
              <p className="text-sm text-gray-500">{item.specialty}</p>
              <p className="mt-2 text-sm text-gray-700 line-clamp-2">{item.description}</p>
              <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                <span>⭐ {item.rating}</span>
                <span>{item.experience} лет опыта</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const Component = DoctorPage;