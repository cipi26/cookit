"use server"

import { createClient } from "@/utils/supabase/server";
import { RecipeTypes } from "../types";
import { handleError } from "@/helpers/handleError";

export const getRecipeById = async(id: string): Promise<RecipeTypes | null> => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("recipes").select(`
    id,
    name,
    image,
    description,
    likes,
    users (
      full_name
    ),
    info,
    tags,
    instructions,
    ingredients
    `).eq("id", id).single();
  handleError(error?.message);

  const newData = {
    ...data,
    users: data?.users[0] || data?.users
  }

  return newData as RecipeTypes;
}