"use server"

import { handleError } from "@/helpers/handleError";
import { createClient } from "@/utils/supabase/server"
import { FeedRecipeTypes } from "@/features/discover/types";

export const getRecipes = async (): Promise<FeedRecipeTypes[]> => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("recipes").select(`
    id,
    name,
    image,
    likes,
    users (
      full_name
    )
    `);
  handleError(error?.name);

  if (!data) return [];

  return data.map((recipe) => ({
    ...recipe,
    users: recipe.users?.[0] || recipe.users
  })) as FeedRecipeTypes[];
}