import Hero from "@/features/homepage/components/Hero";
import Community from "@/features/homepage/components/Community";
import Stats from "@/features/homepage/components/Stats";
import AllIngredients from "@/features/homepage/components/AllIngredients";
import ShareRecipes from "@/features/homepage/components/ShareRecipes";

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
