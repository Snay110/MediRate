import { useParams } from "react-router-dom";
import { useGetDoctorByIQuery } from "@/features/auth/api/doctorApi";
import { ROUTES } from "@/shared/model/routes";
import { useNavigate } from "react-router-dom";

export default function DoctorDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useGetDoctorByIQuery(id!, {
    skip: !id,
  });
  const navigate = useNavigate();

  if (!id) return <main>Invalid rote: no id</main>;
  if (isLoading) return <main>Loading...</main>;
  if (isError) {
    const err = error as { status?: number; data?: unknown };
    return <main>Error: {err.status ?? JSON.stringify(err)}</main>;
  }
  if (!data) return <main>Not found</main>;
  function handleClick() {
    navigate(ROUTES.ADD_REVIEW);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="bg-gray-900 shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <img
          src={
            "https://www.shutterstock.com/image-photo/portrait-handsome-male-doctor-stethoscope-600nw-2480850611.jpg"
          }
          alt={data.firstName}
          className="w-32 h-32 mx-auto rounded-full border-4 border-indigo-500 shadow-md object-cover"
        />
        <h1 className="mt-4 text-2xl font-bold text-white">{data.firstName}</h1>
        <p className="text-indigo-400 font-medium">{data.speciality}</p>
        <div className="flex justify-center items-center gap-1 mt-3">
          <span className="text-yellow-400 text-lg">⭐️</span>
          <span className="text-white">{data.rating}/100</span>
        </div>
        <p className="mt-2 text-gray-300">
          Experience:{" "}
          <span className="font-semibold">{data.experience} years</span>
        </p>
        <p className="mt-4 text-gray-400 leading-relaxed">{data.description}</p>
        <button
          onClick={handleClick}
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow"
        >
          Leave a Review
        </button>
      </div>
    </main>
  );
}

export const Component = DoctorDetailPage;
