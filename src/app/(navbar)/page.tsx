import Hero from "@/features/Homepage/components/Hero";
import Community from "@/features/Homepage/components/Community";
import Stats from "@/features/Homepage/components/Stats";
import AllIngredients from "@/features/Homepage/components/AllIngredients";
import ShareRecipes from "@/features/Homepage/components/ShareRecipes";

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
