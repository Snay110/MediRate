import { useParams } from "react-router-dom";
import { getDoctorById } from "@/features/auth/api/doctorListApi";
import type { Doctor } from "@/features/auth/api/doctorListApi";
import useSWR from "swr";
import { DoctorReviews } from "@/features/reviews/reviews";
import { InputReviews } from "@/shared/ui/componentDoctorDetails/inputReviews";

export default function DoctorDetailPage() {
  const { id } = useParams<{ id: string }>();

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

  return (
    <>
      <main className="bg-gray-150 min-h-screen  p-12 ">
        <section className="max-w-xl mx-auto mt-6 p-8 bg-white rounded-lg shadow-xl border">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">
                {doctor.first_name}
              </h1>
              <p className="text-sm text-gray-600">{doctor.specialty}</p>
              <div className="flex gap-2 mt-3 text-gray-800 font-medium text-sm">
                <span>{doctor.rating} /5⭐️</span>
                <span>
                  Experience: <span>{doctor.experience} years</span>
                </span>
              </div>
              <p className="mt-4 text-gray-800 font-semibold">
                {doctor.description}
              </p>

              <p>Praise{doctor.price}$</p>
              <div className="mt-6 flex gap-4">
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-4 border border-indigo-600 text-indigo-600 font-medium text-sm">
                  Leave a Review
                </button>
              </div>
            </div>

            <div className="flex-shrink-0">
              <img
                src={doctor.image || undefined}
                alt={doctor.first_name}
                className="w-36 h-36 rounded-lg object-cover border ring-2 border-gray-300 shadow-sm"
              />
            </div>
          </div>

          <InputReviews doctorId={id!} />
          <DoctorReviews id={id!} />
        </section>
      </main>
    </>
  );
}

export const Component = DoctorDetailPage;
