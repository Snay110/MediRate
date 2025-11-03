import { supabase } from "@/shared/lib/supabase";
export interface Doctor {
  id: string;
  first_name: string;
  specialty: string;
  experience: number;
  rating: number;
  image: string;
  description: string;
  price: number;
}

export interface Review {
  id: string;
  doctor_id: string;
  user_id: string;
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

export const getDoctorById = async ({
  id,
}: {
  id: string;
}): Promise<Doctor | null> => {
  const { data, error } = await supabase
    .from("doctors")
    .select<"*", Doctor>("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};
