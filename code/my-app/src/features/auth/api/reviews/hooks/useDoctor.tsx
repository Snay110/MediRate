import useSWR from "swr";
import { fetchDoctor } from "../getDoctor";
import type { Doctor } from "../../doctorListApi";

export function useDoctor() {
  const {
    data: doctors = [],
    error,
    isLoading,
  } = useSWR<Doctor[]>("doctors", fetchDoctor);
  return { doctors, error, isLoading };
}
