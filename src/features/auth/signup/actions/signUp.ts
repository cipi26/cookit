"use server"

import { handleError } from "@/helpers/handleError";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const signUp = async (formData: FormData) => {

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        username: formData.get("username") as string,
        full_name: formData.get("full_name") as string,
      },
    },
  };

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp(data);

  handleError(error?.message);

  redirect("/discover");
}