"use server";

import { createClient } from "@/utils/supabase/server";
import { UserIntroduction } from "../types";
import { handleError } from "@/utils/handleError";
import { notFound } from "next/navigation";

export const getUserIntroduction = async (
  username: string
): Promise<UserIntroduction> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("bio,created_at")
    .eq("username", username)
    .single();

  if (error) handleError(error.message);
  if (!data) notFound();

  return data as UserIntroduction;
};
