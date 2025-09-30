import { supabase } from "@/shared/lib/supabase";

export interface Doctor {
  id: string;
  firstName: string;
  specialty: string;
  experience: number;
  rating: number;
  image: string;
  description: string;
}

export const getDoctors = async (): Promise<Doctor[]> => {
  const { data, error } = await supabase
    .from<"doctors", Doctor>("doctors")
    .select("*");
  if (error) throw error;
  return data ?? [];
};

export const getDoctorById = async (id: string): Promise<Doctor | null> => {
  const { data, error } = await supabase
    .from("doctors")
    .select<"*", Doctor>("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};
