"use server";

import { handleError } from "@/utils/handleError";
import { createClient } from "@/utils/supabase/server";
import { FeedRecipeTypes } from "@/features/recipes/types";

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
  
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  !!error?.message && handleError(error?.message);

  if (!data) return [];

  return data.map((recipe) => ({
    ...recipe,
    users: recipe.users?.[0] || recipe.users,
  })) as FeedRecipeTypes[];
};
