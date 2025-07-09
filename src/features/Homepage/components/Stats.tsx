import HomeContainer from "@/features/Homepage/components/ui/HomeContainer";

const Stats = () => {
  return (
    <HomeContainer className="flex flex-col flex-wrap items-center justify-center gap-10 rounded-3xl sm:flex-row lg:!my-36 lg:gap-32">
      <div>
        <h2 className="text-center text-5xl font-black text-primary lg:text-6xl">
          30M+
        </h2>
        <p className="text-center font-medium text-primary-dark">
          Food Enthusiasts
        </p>
      </div>
      <div>
        <h2 className="text-center text-5xl font-black text-primary lg:text-6xl">
          90M+
        </h2>
        <p className="text-center font-medium text-primary-dark">Recipes</p>
      </div>
      <div>
        <h2 className="text-center text-5xl font-black text-primary lg:text-6xl">
          800K+
        </h2>
        <p className="text-center font-medium text-primary-dark">
          Culinary Experts and Chefs
        </p>
      </div>
    </HomeContainer>
  );
};

export default Stats;
