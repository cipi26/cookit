import {
  MerleRacoComment,
  BBQRibs,
} from "@/features/homepage/constants/recipes";
import HomeContainer from "@/features/homepage/components/ui/HomeContainer";
import HomeRecipeCard from "@/features/homepage/components/ui/HomeRecipeCard";
import HomeComment from "@/features/homepage/components/ui/HomeComment";

const Community = () => {
  return (
    <HomeContainer className="flex flex-col items-center justify-center gap-10 lg:flex-row">
      <div className="w-[min(37.5rem,_100%)]">
        <h1 className="mb-3 text-4xl font-bold">
          Connect with a Global Community of Food Enthusiasts
        </h1>

        <p className="">
          Explore a world of flavors by connecting with passionate home cooks
          and chefs from all corners of the globe. Share recipes, exchange
          cooking tips, and make new friends who share your love for culinary
          adventures.
        </p>
      </div>

      <CommunityUI />
    </HomeContainer>
  );
};

export default Community;

const CommunityUI = () => {
  return (
    <article className="flex w-[min(32.5rem,_100%)] flex-col items-center justify-center rounded-[2rem] border-2 border-border bg-[#e9e9e9] p-4 shadow-md sm:p-5">
      <HomeRecipeCard recipe={BBQRibs} />
      <span className="block h-3 w-full" />
      <HomeComment comment={MerleRacoComment} />
    </article>
  );
};
