import type { Doctor } from "@/features/auth/api/doctorListApi";

export function HeaderDetails({ doctor }: { doctor: Doctor }) {
  return (
    <main>
      <header className="flex flex-col rounded-md bg-gray-300 items-center p-4 shadow-sm bg-gradient-to-r from-gray-200 to-gray-300 w-full">
        <div className="text-3xl font-bold text-gray-800 ">
          {doctor.first_name}
        </div>
        <div className="text-xl font-semibold text-gray-800">
          {doctor.specialty}
        </div>
      </header>
    </main>
  );
}
