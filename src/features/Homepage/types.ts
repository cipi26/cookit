export type HomeRecipeTypes = {
  name: string;
  likes: string;
  image: string;
  recipe: {
    info: {
      cookTime: string;
      servings: string;
      difficulty: "Easy" | "Medium" | "Hard";
      tags: string[];
      description: string;
      caloriesPerServing: string;
    };
    ingredients: string[];
    instructions: string;
  };
  user: {
    name: string;
    image: string;
  };
};

export type HomeCommentTypes = {
  name: string;
  content: string;
  image: string;
  liked: boolean;
  likes: string;
  time: string;
};
