"use server";

import { handleError } from "@/utils/handleError";
import { createClient } from "@/utils/supabase/server";
import { UserProfileHeaderType } from "../types";
import { notFound } from "next/navigation";

export const getUserProfileHeader = async (username: string): Promise<UserProfileHeaderType> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("avatar, username, full_name")
    .eq("username", username)
    .maybeSingle();

  if (error) handleError(error.message);

  if (!data) notFound();

  return data as UserProfileHeaderType;
};
