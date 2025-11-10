import { DoctorList } from "@/features/doctor/doctorList";
import { Footer } from "@/shared/ui/footer";

export function DoctorPage() {
  return (
    <main className="p-6 bg-gray-50 ">
      <DoctorList />
      <Footer />
    </main>
  );
}

export const Component = DoctorPage;
