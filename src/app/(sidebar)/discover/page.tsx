import RecipesGrid from "@/features/recipes/ui/RecipesGrid";
// import { Suspense } from "react";
// import Loading from "@/app/components/ui/Loading";
import Page from "@/ui/Page";

export const metadata = {
  title: "Discover",
  description: "Discover new recipes!",
};

const page = async () => {
  return (
    <Page>
      <h1 className="mb-6 text-5xl font-black">Discover</h1>
      {/* <Suspense fallback={<Loading />}> */}
      <RecipesGrid />
      {/* </Suspense> */}
    </Page>
  );
};

export default page;
