import { useTypeParams } from "@/shared/lib/getRouteParams";
export default function AddReviewPages() {
  const { id } = useTypeParams<{ id: string }>();
  return <main>{id}</main>;
}
