import { useNavigate } from "react-router-dom";
import { useGetDoctorsQuery } from "@/shared/api/doctorApi";
import type { Doctor } from "@/shared/api/doctorApi";

export default function DoctorPages() {
  const { data, isLoading, isError, error } = useGetDoctorsQuery();
  const navigate = useNavigate();
  if (isLoading) return <main>Loading...</main>;
  if (isError) {
    const err = error as { status?: number; data?: unknown };
    return <main>Error: {err.status ?? JSON.stringify(err)}</main>;
  }
  if (!data) return <main>Not found</main>;

  return (
    <main className="p-4">
      {data.map((d: Doctor) => (
        <div
          key={d.id}
          role="button"
          tabIndex={0}
          onClick={() => {
            navigate(`doctors/${d.id}`);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "") {
              e.preventDefault();
              navigate(`doctors/${d.id}`);
            }
          }}
          className="cursor-pointer"
        >
          <h1 className="text-x1 font-semibold">(d.firstName)</h1>
          <img src={d.image} alt={error} />
          <p>(d.experience)</p>
          <p>(d. specialty)</p>
          <p>(d.rating)</p>
        </div>
      ))}
    </main>
  );
}

export const Component = DoctorPages;
