import { useNavigate } from "react-router-dom";
import { useGetDoctorsQuery } from "@/features/auth/api/doctorApi";
import type { Doctor } from "@/features/auth/api/doctorApi";
import { PopularDoctors } from "@/shared/ui/popularDoctors";

export default function DoctorPage() {
  const { data, isLoading, isError, error } = useGetDoctorsQuery();
  const navigate = useNavigate();

  if (isLoading) return <main className="p-4 text-white">Loading...</main>;
  if (isError) {
    const err = error as { status?: number; data?: unknown };
    return (
      <main className="p-4 text-red-500">
        Error: {err.status ?? JSON.stringify(err)}
      </main>
    );
  }
  if (!data) return <main className="p-4 text-gray-400">Not found</main>;

  return (
    <main>
      <ul role="list" className="divide-y bg-gray-50">
        {data.map((item: Doctor) => (
          <li
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => navigate(`/doctors/${item.id}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                navigate(`/doctors/${item.id}`);
              }
            }}
          >
            <PopularDoctors />
          </li>
        ))}
      </ul>
    </main>
  );
}

export const Component = DoctorPage;
