import { useParams } from "react-router-dom";
import { getDoctorById } from "@/features/auth/api/doctorListApi";
import type { Doctor } from "@/features/auth/api/doctorListApi";
import useSWR from "swr";
import { DoctorReviews } from "@/features/auth/api/reviews/reviews";
import { AboutDoctor } from "@/shared/ui/componentDoctorDetails/aboutDoctor";
import { Footer } from "@/shared/ui/footer";

export default function DoctorDetailPage() {
  const { id } = useParams<{ id: string }>();

  const {
    data: doctor,
    error,
    isLoading,
  } = useSWR<Doctor | null>(id ? ["doctor", id] : null, () =>
    getDoctorById({ id: id! }),
  );

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
      <DoctorReviews id={id!} />
      <Footer />
    </main>
  );
}

export const Component = DoctorDetailPage;
