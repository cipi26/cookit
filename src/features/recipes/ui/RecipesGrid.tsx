import RecipeCard from "@recipes/ui/RecipeCard";
import Link from "next/link";
import { getRecipes } from "@recipes/actions/getRecipes";

const RecipesGrid = async () => {
  const recipes = await getRecipes();
  const areRecipes = recipes.length !== 0;

  return (
    <section className="">
      <Link
        href="#"
        className="link-focus group mb-3 mt-1 flex w-fit items-center gap-1 p-1 !ring-0 transition-all"
      >
        {areRecipes && (
            <h2 className="mr-1 inline text-3xl font-bold">All Recipes</h2>
        )}
      </Link>
      {!areRecipes && (
        <p className="text-center font-medium">
          We couldn&apos;t find any recipe.
        </p>
      )}
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(260px,1fr))] justify-items-center gap-4">
        {recipes.map((recipe, idx) => (
          <RecipeCard recipe={recipe} key={idx} />
        ))}
      </div>
    </section>
  );
};
export default RecipesGrid;
