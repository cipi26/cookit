import DetailsCard from "@/features/users/ui/DetailsCard";
import ProfileCard from "@/features/users/ui/ProfileCard";
import RecipesCard from "@/features/users/ui/RecipesCard";
import StatsCard from "@/features/users/ui/StatsCard";
import Page from "@/ui/Page";
import React, { Suspense } from "react";

const page = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params;

  return (
    <Page className="flex flex-col gap-5">
      <Suspense>
        <ProfileCard username={username} />
      </Suspense>

      <div className="flex gap-5">
        <Suspense>
          <DetailsCard username={username} />
        </Suspense>
        <StatsCard />
      </div>

      <Suspense>
        <RecipesCard username={username} />
      </Suspense>
    </Page>
  );
};

export default page;
