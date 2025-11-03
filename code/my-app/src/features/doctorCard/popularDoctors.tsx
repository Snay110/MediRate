import { DoctorCard } from "@/features/doctorCard/doctorCard";
import { useDoctor } from "@/features/auth/api/reviews/hooks/useDoctor";

export function PopularDoctor() {
  const { doctors, error, isLoading } = useDoctor();

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

  if (doctors.length === 0) {
    return (
      <main className="p-6 text-center text-lg text-gray-400">
        No doctors found
      </main>
    );
  }
  const popular = doctors.slice(0, 3);
  return (
    <main>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Popular Doctors
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {popular.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
