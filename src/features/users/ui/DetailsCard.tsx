import { format } from "date-fns";
import { getUserIntroduction } from "../actions/getUserIntroduction";
import { cn } from "@/utils/tailwindFormatting";

const DetailsCard = async ({ username }: {username: string}) => {
  const user = await getUserIntroduction(username);

  const formatedDate = format(new Date(user.created_at), "MMMM yyyy");

  return (
    <section className="rounded-4xl bg-card shadow-md w-full p-9 space-y-5">
      <h2 className="text-3xl font-bold">Introduction</h2>
      <p
        className={cn({
          "text-copy-lighter": !user.bio,
        })}
      >
        {user.bio ? user.bio : "No bio yet"}
      </p>
      <p className="text-copy-lighter font-medium">Member since {formatedDate}</p>
    </section>
  );
};

export default DetailsCard;
