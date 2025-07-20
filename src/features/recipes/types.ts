export type FeedRecipeTypes = {
  id: string,
  name: string,
  image: string,
  likes: number,
  users: {
    full_name: string
  }
}

export type RecipeTypes = FeedRecipeTypes & {
  description: string,
  tags: string[],
  info: {
    cookTime: string,
    servings: number,
    difficulty: number,
    caloriesPerServing: string
  },
  ingredients: string[],
  instructions: string
}