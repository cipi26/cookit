import { getRecipesByUsername } from "@/features/recipes/actions/getRecipesByUsername";
import RecipeCard from "@/features/recipes/ui/RecipeCard";

const RecipesCard = async ({ username }: { username: string }) => {
  const data = await getRecipesByUsername(username);
  const areRecipes = data.recipes.length !== 0;

  return (
    <section className="p-9 bg-card rounded-4xl shadow-md space-y-5">
      <h2 className="text-3xl font-bold">{data.full_name}&apos;s Recipes</h2>

      {areRecipes ? (
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(260px,1fr))] justify-items-center gap-4">
          {data.recipes.map((recipe, idx) => (
            <RecipeCard recipe={recipe} key={idx} />
          ))}
        </div>
      ) : (
        <span className="text-copy-lighter">
          There are no recipes
        </span>
      )}
    </section>
  );
};
export default RecipesCard;
