import useSWR from "swr";
import type { Doctor } from "../../../doctor/doctorListApi";
import { useParams } from "react-router-dom";
import { getDoctorById } from "../../../doctor/doctorListApi";

export function useDoctors() {
  const { id } = useParams<{ id: string }>();
  const {
    data: doctor,
    error,
    isLoading,
  } = useSWR<Doctor | null>(id ? ["doctor", id] : null, () =>
    getDoctorById({ id: id! }),
  );

  return { doctor, error, isLoading, id };
}
