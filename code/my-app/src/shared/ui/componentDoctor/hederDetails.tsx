import type { Doctor } from "@/features/auth/api/doctorListApi";

export function HeaderDetails({ doctor }: { doctor: Doctor }) {
  return (
    <main>
      <header className="display: flex; flex-direction: column; align-items: center; padding: 20px;">
        {doctor.first_name}
        {doctor.specialty}
      </header>
    </main>
  );
}
