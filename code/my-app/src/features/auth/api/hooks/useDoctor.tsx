import useSWR from "swr";
import { fetchDoctor } from "@/features/doctor/getDoctor";
import type { Doctor } from "../../../doctor/doctorListApi";

export function useDoctor() {
  const {
    data: doctors = [],
    error,
    isLoading,
  } = useSWR<Doctor[]>("doctors", fetchDoctor);
  return { doctors, error, isLoading };
}
