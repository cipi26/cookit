"use server"

import { handleError } from "@/helpers/handleError";
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation";

export const signOut = async () => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  handleError(error?.message);

  redirect("/");
}