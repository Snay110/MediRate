import { useTypeParams } from "@/shared/lib/getRouteParams";
import type { PathParams,ROUTES } from "@/shared/modal/routes";
export default function AddReviewPages() {
  const { id } = useTypeParams<PathParams[typeof ROUTES.DOCTOR ]>();
  return <main>{id}</main>;
}
