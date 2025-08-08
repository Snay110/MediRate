import { useTypeParams } from "@/shared/lib/getRouteParams";
export default function DoctorDetailPages() {
  const { id } = useTypeParams<{ id: string }>();
  return <main>{id}</main>;
}
