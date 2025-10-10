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
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
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

export const getReviews = async (
  doctorId: string,
): Promise<Review[] | null> => {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("doctor_id", doctorId)
    .order("created_at", { ascending: false })
    .limit(10);
  if (error) throw error;
  return data;
};
