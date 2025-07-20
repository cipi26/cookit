"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { signInSchema } from "@auth/signin/schema";
import { AuthFormStateType } from "../types";
import { z } from "zod";

export const signIn = async (
  prevState: AuthFormStateType<"signin">,
  formData: FormData
): Promise<AuthFormStateType<"signin">> => {
  const unvalidatedData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const parse = signInSchema.safeParse(unvalidatedData);

  if (!parse.success)
    return { status: "invalid_schema", error: z.flattenError(parse.error) };

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(parse.data);

  if (error)
    return {
      message: error.message,
      status: "supabase_error",
    };

  redirect("/discover");
};
