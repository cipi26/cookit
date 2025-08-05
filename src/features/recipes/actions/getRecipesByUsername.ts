"use server";

import { handleError } from "@/utils/handleError";
import { createClient } from "@/utils/supabase/server";
import { FeedRecipeTypes } from "../types";

export const getRecipesByUsername = async (username: string) => {
  const supabase = await createClient();

  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("id,full_name")
    .eq("username", username)
    .single();

  if (userError) handleError(userError.message);

  const { data, error } = await supabase
    .from("recipes")
    .select(
      `id,
    name,
    image,
    likes,
    users(full_name)
    `
    )
    .eq("user_id", userData?.id);

  if (error) handleError(error.message);

  if (!data || !userData?.full_name) return {recipes: [], full_name: ""};

  return {
    recipes: data.map((recipe) => ({
      ...recipe,
      users: recipe.users?.[0] || recipe.users,
    })) as FeedRecipeTypes[],
    full_name: userData?.full_name as string,
  };
};
