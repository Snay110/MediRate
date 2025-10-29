import { useNavigate } from "react-router-dom";
import { useDoctor } from "@/features/auth/api/reviews/hooks/useDoctor";
import { DoctorCard } from "@/features/doctorCard/doctorCard";
import { useParams } from "react-router-dom";
import { Footer } from "@/shared/ui/footer";

export function DoctorPage() {
  const { doctors, error, isLoading } = useDoctor();
  const { id } = useParams<{ id: string }>();
  console.log("id", id);

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
    <main className="p-6 bg-gray-50 ">
      <h1 className="mb-6 text2x1  font-bold text-gray-800">Popular doctors</h1>
      <ul className="display  grid bg-gray-100 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors.map((item) => (
          <li
            key={item.id}
            role="button"
            tabIndex={0}
            className="group cursor-pointer rounded-2xl  p-4 shadow-md transition hover:shadow-lg"
            onClick={() => navigate(`/doctors/${item.id}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                navigate(`/doctors/${item.id}`);
              }
            }}
          >
            <DoctorCard doctor={item} />
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  );
}

export const Component = DoctorPage;
