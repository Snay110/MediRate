import { useParams } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDoctorById } from "@/features/auth/api/doctorListApi";
import type { Doctor } from "@/features/auth/api/doctorListApi";

export default function DoctorDetailPage() {
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctorsId = async () => {
      try {
        const data = await getDoctorById(id!);
        setDoctor(data!);
      } catch (err: unknown) {
        if (err instanceof Error)
          setError(err.message ?? "Failed to fetch doctors");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctorsId();
  }, [id]);

  if (!id) return <main>Invalid rote: no id</main>;
  if (loading) return <main>Loading...</main>;
  if (error) {
    const err = error as { status?: number; data?: unknown };
    return <main>Error: {err.status ?? JSON.stringify(err)}</main>;
  }
  if (!doctor) return <main>Not found</main>;
  function handleClick() {
    navigate(ROUTES.ADD_REVIEW);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-440 px-4">
        <section>

      <div className="bg-gray-900 shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <img
          src={
            doctor.image || undefined
          }
          alt={doctor.firstName}
          className="w-32 h-32 mx-auto rounded-full border-4 border-indigo-500 shadow-md object-cover"
        />
        <h1 className="mt-4 text-2xl font-bold text-white">
          {doctor.firstName}
        </h1>
        <p className="text-indigo-400 font-medium">{doctor.specialty}</p>
        <div className="flex justify-center items-center gap-1 mt-3">
          <span className="text-yellow-400 text-lg">⭐️</span>
          <span className="text-white">{doctor.rating}/100</span>
        </div>
        <p className="mt-2 text-gray-300">
          Experience:{" "}
          <span className="font-semibold">{doctor.experience} years</span>
        </p>
        <p className="mt-4 text-gray-400 leading-relaxed">
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
