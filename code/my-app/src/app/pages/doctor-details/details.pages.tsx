import { useParams } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";
import { useNavigate } from "react-router-dom";
import { getDoctorById } from "@/features/auth/api/doctorListApi";
import type { Doctor } from "@/features/auth/api/doctorListApi";
import useSWR from "swr";
import { HeaderDetails } from "@/shared/ui/componentDoctor/hederDetails";
import { DoctorReviews } from "@/features/reviews/reviews";

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
    <>
      <HeaderDetails doctor={doctor} />
      <main className="bg-gray-50 min-h-screen  p-12 ">
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
                <button
                  onClick={handleClick}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-4 border border-indigo-600 text-indigo-600 font-medium text-sm"
                >
                  Leave a Review
                </button>
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 px-4 font-medium text-sm">
                  Book Appointment
                </button>
              </div>
            </div>

            <div className="flex-shrink-0">
              <img
                src={doctor.image || undefined}
                alt={doctor.first_name}
                className="w-36 h-36 rounded-lg object-cover border border-gray-300 shadow-sm"
              />
            </div>
          </div>
          <DoctorReviews doctorId={id} />
        </section>
      </main>
    </>
  );
}

export const Component = DoctorDetailPage;
