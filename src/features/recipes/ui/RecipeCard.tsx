import { formatNumber } from "@/utils/formatNumber";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FeedRecipeTypes } from "../types";

const RecipeCard = async ({ recipe }: { recipe: FeedRecipeTypes }) => {
  const {
    id,
    name,
    image,
    likes,
    users: { full_name },
  } = recipe;

  return (
    <Link
      href={`/recipe/${id}`}
      className="relative z-0 aspect-video w-full max-w-[27rem] flex-shrink cursor-pointer overflow-hidden rounded-3xl text-slate-100 shadow-lg !ring-primary-dark transition-all ease-in-out will-change-transform hover:scale-[1.02] focus-visible:scale-[1.02]"
    >
      <Image
        src={image}
        alt={name}
        fill={true}
        className="absolute object-cover object-center"
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1450px) 33vw, 25vw"
      />

      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 bg-gradient-to-t from-[#000000e7] to-transparent px-5 pb-4 pt-28">
        <div>
          <h3 className="line-clamp-2 text-lg font-semibold !leading-5 sm:text-xl sm:!leading-6">
            {name}
          </h3>
          <p className="line-clamp-1 text-stone-400">{full_name}</p>
        </div>

        {likes && (
          <div className="mb-2 flex items-center gap-1 text-[#E94959]">
            <Heart className="w-6" />
            <span className="font-medium">{formatNumber(likes)}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default RecipeCard;
