import { HomeCommentTypes, HomeRecipeTypes } from "../types";

export const PumpkinSoup: HomeRecipeTypes = {
  name: "Pumpkin Soup",
  likes: "6.7M",
  image: "https://iuvxxguustzadtalgqyr.supabase.co/storage/v1/object/public/images/recipes/94b21388-f8c2-43bb-a1d5-9e2a59ba42d9.jpg",
  recipe: {
    info: {
      cookTime: "35 mins",
      servings: "4",
      difficulty: "Easy",
      tags: ["Soup", "Vegetarian", "Lunch"],
      description: "Creamy and flavorful pumpkin soup perfect for a cozy meal.",
      caloriesPerServing: "180 kcal",
    },
    ingredients: [
      "1 small pumpkin, peeled and chopped",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "4 cups vegetable broth",
      "1 cup heavy cream",
      "Salt and pepper",
      "Nutmeg",
      "Olive oil",
    ],
    instructions:
      "1. In a large pot, heat the olive oil and sauté the onion and garlic until soft.\n2. Add the chopped pumpkin and cook for 5 minutes.\n3. Pour in the vegetable broth and bring to a boil.\n4. Reduce the heat and simmer for 20 minutes, or until the pumpkin is tender.\n5. Use an immersion blender to puree the soup until smooth.\n6. Stir in the heavy cream and season with salt, pepper, and a pinch of nutmeg.\n7. Serve hot with crusty bread.",
  },
  user: {
    name: "Aurelia Baiza",
    image: "https://iuvxxguustzadtalgqyr.supabase.co/storage/v1/object/public/images/avatars/aisha_mohammed.jpg",
  },
};

export const BBQRibs: HomeRecipeTypes = {
  name: "BBQ Ribs",
  likes: "9.0M",
  image: "https://iuvxxguustzadtalgqyr.supabase.co/storage/v1/object/public/images/recipes/36624421-12a2-40ad-a3c6-d818adc98fb5.jpg",
  recipe: {
    info: {
      cookTime: "2 hours",
      servings: "6",
      difficulty: "Medium",
      tags: ["American", "BBQ", "Dinner"],
      description: "Tender and juicy BBQ ribs with a smoky and sweet glaze.",
      caloriesPerServing: "700 kcal",
    },
    ingredients: [
      "3 racks baby back ribs",
      "2 tablespoons paprika",
      "1 tablespoon garlic powder",
      "1 tablespoon onion powder",
      "1 teaspoon black pepper",
      "1 teaspoon salt",
      "1 cup BBQ sauce",
    ],
    instructions:
      "1. Preheat the oven to 300°F (150°C).\n2. In a small bowl, mix the paprika, garlic powder, onion powder, black pepper, and salt.\n3. Rub the spice mixture all over the ribs.\n4. Wrap the ribs in aluminum foil and place on a baking sheet.\n5. Bake for 2 hours, or until the ribs are tender.\n6. Preheat the grill to medium-high heat.\n7. Remove the ribs from the foil and brush with BBQ sauce.\n8. Grill the ribs for 5-10 minutes, basting with more BBQ sauce, until caramelized.\n9. Serve hot with extra BBQ sauce on the side.",
  },
  user: {
    name: "Stacee Wieberdink",
    image: "https://iuvxxguustzadtalgqyr.supabase.co/storage/v1/object/public/images/avatars/elena_petrova.jpg",
  },
};

export const BananaPancakes: HomeRecipeTypes = {
  name: "Banana Pancakes",
  likes: "8.0M",
  image: "https://iuvxxguustzadtalgqyr.supabase.co/storage/v1/object/public/images/recipes/3bc42820-20e0-447d-a762-9d1aa42b3fe1.jpg",
  recipe: {
    info: {
      cookTime: "20 mins",
      servings: "4",
      difficulty: "Easy",
      tags: ["Breakfast", "Pancakes", "Vegetarian"],
      description:
        "Fluffy and delicious banana pancakes perfect for a weekend breakfast.",
      caloriesPerServing: "300 kcal",
    },
    ingredients: [
      "1 cup all-purpose flour",
      "1 tablespoon sugar",
      "1 teaspoon baking powder",
      "1/2 teaspoon baking soda",
      "1/4 teaspoon salt",
      "1 cup buttermilk",
      "1 egg",
      "2 tablespoons melted butter",
      "2 ripe bananas, mashed",
      "Butter for cooking",
    ],
    instructions:
      "1. In a large bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.\n2. In another bowl, whisk together the buttermilk, egg, and melted butter.\n3. Add the wet ingredients to the dry ingredients and mix until just combined.\n4. Fold in the mashed bananas.\n5. Heat a griddle or non-stick skillet over medium heat and grease with butter.\n6. Pour 1/4 cup of batter for each pancake onto the griddle.\n7. Cook until bubbles form on the surface, then flip and cook until golden brown.\n8. Serve the pancakes with maple syrup and extra butter.",
  },
  user: {
    name: "Karima Ansaldo",
    image: "https://iuvxxguustzadtalgqyr.supabase.co/storage/v1/object/public/images/avatars/nora_jensen.jpg",
  },
};

export const MerleRacoComment: HomeCommentTypes = {
  name: "Merle Raco",
  content:
    "Wow, this recipe looks absolutely mouthwatering! The combination of flavors and ingredients has me drooling already. Can't wait to give it a try!",
  image: "https://iuvxxguustzadtalgqyr.supabase.co/storage/v1/object/public/images/avatars/carlosr.jpg",
  liked: true,
  likes: "23k",
  time: "2h",
};
