import HomeContainer from "@/features/Homepage/components/ui/HomeContainer";
import { PumpkinSoup } from "@/features/Homepage/constants/recipes";
import InfoBox from "@/features/Homepage/components/ui/InfoBox";
import HomeRecipeCard from "@/features/Homepage/components/ui/HomeRecipeCard";
import { HomeRecipeTypes } from "../types";

const AllIngredients = () => {
  return (
    <HomeContainer className="flex flex-col items-center justify-center gap-10 lg:flex-row">
      <div className="w-[min(37.5rem,_100%)]">
        <h1 className="mb-3 text-4xl font-bold">
          Cooking made easy.
        </h1>

        <p>
          Get ready to cook up a storm right away with Yumy&apos;s comprehensive
          recipe listings. From detailed ingredient lists and quantities to
          preparation times and step-by-step instructions, we provide all the
          information you need to whip up delicious meals in no time.
        </p>
      </div>

      <RecipeDetailsUI recipe={PumpkinSoup} />
    </HomeContainer>
  );
};

export default AllIngredients;

const RecipeDetailsUI = ({ recipe }: {recipe: HomeRecipeTypes}) => {
  const {
    recipe: { info },
  } = recipe;

  return (
    <article className="flex w-[min(32.5rem,_100%)] flex-col items-center gap-5 justify-center rounded-[2rem] border-2 border-border bg-[#e9e9e9] p-4 shadow-md sm:p-5">
      <HomeRecipeCard recipe={recipe} />
      <div className="grid grid-cols-[repeat(auto-fit,107px)] w-full justify-center gap-5 sm:gap-3">
        <InfoBox type="calorie" value={info.caloriesPerServing} />
        <InfoBox type="cookTime" value={info.cookTime} />
        <InfoBox type="difficulty" value={info.difficulty} />
        <InfoBox type="servings" value={info.servings} />
      </div>
    </article>
  );
};

// const RecipeDetailsUI = ({ recipe }) => {
//   const {
//     name,
//     image,
//     recipe: { info, ingredients },
//   } = recipe;

//   return (
//     <article className="flex max-h-[419px] w-[min(32.5rem,_100%)] flex-col space-y-6 overflow-hidden rounded-[2rem] border-2 border-border bg-[#e9e9e9] p-4 shadow-md sm:p-5">
//       <div className="flex items-center justify-between">
//         <Image
//           src={image}
//           alt={`Image of ${name}`}
//           width={80}
//           height={25}
//           className="rounded-xl"
//         />

//         <h6 className="text-xl font-bold">{name}</h6>
//       </div>

//       <div className="grid max-w-[490px] grid-cols-[repeat(auto-fit,107px)] flex-wrap justify-center gap-5 sm:justify-around sm:gap-3">
//         <InfoBox type="calorie" value={info.caloriesPerServing} />
//         <InfoBox type="cookTime" value={info.cookTime} />
//         <InfoBox type="difficulty" value={info.difficulty} />
//         <InfoBox type="servings" value={info.servings} />
//       </div>

//       <InfoBlock title="Ingredients" content={ingredients} />
//     </article>
//   );
// };
