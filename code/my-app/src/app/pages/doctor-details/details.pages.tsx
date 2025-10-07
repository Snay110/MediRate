import { useParams } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";
import { useNavigate } from "react-router-dom";
import { getDoctorById } from "@/features/auth/api/doctorListApi";
import type { Doctor } from "@/features/auth/api/doctorListApi";
import useSWR from "swr";
import { HeaderDetails } from "@/shared/ui/componentDoctor/hederDetails";

export default function DoctorDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    data: doctor,
    error,
    isLoading,
  } = useSWR<Doctor | null>(id ? ["doctor", id] : null, () =>
    getDoctorById(id!),
  );

  if (!id) return <main>Invalid rote: no id</main>;
  if (isLoading) return <main>Loading...</main>;
  if (error) {
    const err = error as { status?: number; data?: unknown };
    return <main>Error: {err.status ?? JSON.stringify(err)}</main>;
  }
  if (!doctor) return <main>Not found</main>;

  function handleClick() {
    navigate(ROUTES.ADD_REVIEW);
  }

  return (
    <main className="bg-gray-50 min-h-screen justify-center items-center flex flex-col gap-8 py-8">
      <HeaderDetails doctor={doctor} />
      <section>
        <div className="bg-gray-100 border border-gray-300 shadow-xl rounded-2xl p-20 max-w-md w-full text-center">
          <img
            src={doctor.image || undefined}
            alt={doctor.first_name}
            className="w-42 h-42 mx-auto rounded-xl border-4 border-indigo-500 shadow-md object-cover"
          />
          <h1 className="mt-4 text-2xl font-bold text-gray-900 ">
            {doctor.first_name}
          </h1>
          <p className="text-indigo-400 font-medium">{doctor.specialty}</p>
          <div className="flex justify-center items-center gap-1 mt-3  text-gray-900">
            <span className="text-yellow-400 text-lg">⭐️</span>
            <span className=" text-gray-900">{doctor.rating}/100</span>
          </div>
          <p className="mt-2 text-gray-900">
            Experience:{" "}
            <span className="font-semibold">{doctor.experience} years</span>
          </p>
          <p className="mt-4 text-gray-900 leading-relaxed">
            {doctor.description}
          </p>
          <button
            onClick={handleClick}
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow"
          >
            Leave a Review
          </button>
        </div>
      </section>
    </main>
  );
}

export const Component = DoctorDetailPage;
