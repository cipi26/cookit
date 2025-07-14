
"use server"

import { handleError } from "@/helpers/handleError";
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation";

export const signIn = async (formData: FormData) => {
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(data);

  handleError(error?.message);

  redirect("/discover");
}