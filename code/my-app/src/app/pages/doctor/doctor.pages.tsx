import { useNavigate } from "react-router-dom";
import { useGetDoctorsQuery } from "@/shared/api/doctorApi";
import type { Doctor } from "@/shared/api/doctorApi";

export default function DoctorPages() {
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
    <main className="p-6 bg-gray-900 min-h-screen">
      <ul role="list" className="divide-y divide-gray-800">
        {data.map((d: Doctor) => (
          <li
            key={d.id}
            className="flex justify-between gap-x-6 py-5 cursor-pointer hover:bg-gray-800/40 rounded-xl px-4 transition"
            role="button"
            tabIndex={0}
            onClick={() => navigate(`/doctors/${d.id}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                navigate(`/doctors/${d.id}`);
              }
            }}
          >
            <div className="flex min-w-0 gap-x-4">
              <img
                src={
                  d.image.startsWith("http")
                    ? d.image
                    : "https://via.placeholder.com/150"
                }
                alt={d.Fristname}
                className="size-12 flex-none rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold text-white">
                  {d.Fristname}
                </p>
                <p className="mt-1 truncate text-xs text-gray-400">
                  {d.speciality}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm text-white">⭐ {d.rating}</p>
              <p className="mt-1 text-xs text-gray-400">
                {d.experience} years exp
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const Component = DoctorPages;
