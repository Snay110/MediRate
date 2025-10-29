import useSWR from "swr";
import { FetchDoctor } from "../getDoctor";
import type { Doctor } from "../../doctorListApi";

export function useDoctor() {
  const {
    data: doctors = [],
    error,
    isLoading,
  } = useSWR<Doctor[]>("doctors", FetchDoctor);
  return { doctors, error, isLoading };
}
