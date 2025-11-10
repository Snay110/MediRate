import { DoctorReviews } from "@/features/auth/api/reviews/reviews";
import { AboutDoctor } from "@/shared/ui/componentDoctorDetails/aboutDoctor";
import InputReviews from "@/features/auth/api/reviews/inputReviews";
import { useDoctors } from "@/features/auth/api/hooks/useDoctors";
import { Footer } from "@/shared/ui/footer";

export default function DoctorDetailPage() {
  const { doctor, isLoading, error, id } = useDoctors();

  if (!id)
    return (
      <main className="flex min-h-[200px] justify-center items-center">
        Invalid rote: no id
      </main>
    );
  if (isLoading)
    return (
      <main className="flex min-h-[200px] justify-center items-center">
        Loading...
      </main>
    );
  if (error) {
    const err = error as { status?: number; data?: unknown };
    return (
      <main className="flex min-h-[200px] justify-center items-center">
        Error: {err.status ?? JSON.stringify(err)}
      </main>
    );
  }
  if (!doctor)
    return (
      <main className="flex min-h-[200px] justify-center items-center">
        Not found
      </main>
    );

  return (
    <main className="bg-gray-150 min-h-screen  p-12 ">
      <AboutDoctor doctor={doctor!} />
      <InputReviews />
      <DoctorReviews id={id!} />
      <Footer />
    </main>
  );
}

export const Component = DoctorDetailPage;
