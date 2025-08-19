import { useParams } from "react-router-dom";
import { useGetDoctorByIQuery } from "@/shared/api/doctorApi";

export default function DoctorDetailPages() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useGetDoctorByIQuery(id!, {
    skip: !id,
  });

  if (!id) return <main>Invalid rote: no id</main>;
  if (isLoading) return <main>Loading...</main>;
  if (isError) {
    const err = error as { status?: number; data?: unknown };
    return <main>Error: {err.status ?? JSON.stringify(err)}</main>;
  }
  if (!data) return <main>Not found</main>;

  return (
    <main className="p-4">
      <h1 className="text-x1 font-semibold">(data.firstName)</h1>
      <img src={data.image} alt={error} />
      <p>(data.experience)</p>
      <p>(data. specialty)</p>
      <p>(data.rating)</p>
    </main>
  );
}

export const Component = DoctorDetailPages;
