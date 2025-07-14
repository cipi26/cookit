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
  ingredients: string[],
  instructions: string
}