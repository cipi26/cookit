"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { signUpSchema } from "@auth/signup/schema";
import { AuthFormStateType } from "@auth/types";
import { z } from "zod";

const checkValidUsername = async (username: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .maybeSingle();
  if (error) console.log(error);
  if (error)
    return { username: "Failed to check username availability. Please try again" };
  else {
    if (data) return { username: "Username already exists" };
    return { status: true };
  }
};

export const signUp = async (
  prevState: AuthFormStateType<"signup">,
  formData: FormData
): Promise<AuthFormStateType<"signup">> => {

  const unvalidatedData = {
    email: formData.get("email"),
    password: formData.get("password"),
    username: formData.get("username"),
    full_name: formData.get("full_name"),
  };

  const parse = signUpSchema.safeParse(unvalidatedData);
  if (!parse.success)
    return {
      status: "invalid_schema",
      error: z.flattenError(parse.error),
    };

  const usernameValidation = await checkValidUsername(parse.data.username);
  if (!!usernameValidation.username)
    return {
      status: "username_taken",
      message: usernameValidation.username,
    };
  
  const { email, full_name, password, username } = parse.data;

  const data = {
    email,
    password,
    options: {
      data: {
        username,
        full_name
      },
    },
  };

  const supabase = await createClient();
  const { error } = await supabase.auth.signUp(data);

  if (error)
    return {
      message: error.message,
      status: "supabase_error",
    };

    redirect("/discover");
};
