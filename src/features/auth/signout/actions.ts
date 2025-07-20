"use server";

import { handleError } from "@/utils/handleError";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const signOut = async () => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  error?.message && handleError(error.message);

  redirect("/");
};
