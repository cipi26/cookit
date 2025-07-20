import Hero from "@homepage/components/Hero";
import Community from "@homepage/components/Community";
import Stats from "@homepage/components/Stats";
import AllIngredients from "@homepage/components/AllIngredients";
import ShareRecipes from "@homepage/components/ShareRecipes";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Stats />
      <Community />
      <ShareRecipes />
      <AllIngredients />
    </main>
  );
}
