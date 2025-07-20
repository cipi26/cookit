import { cn } from "@/utils/tailwindFormatting";
import Image from "next/image";
import { HomeRecipeTypes } from "@homepage/types";
import { Heart } from "lucide-react";

type HomeRecipeCardTypes = {
  recipe: HomeRecipeTypes;
  small?: boolean;
};

const HomeRecipeCard = ({ recipe, small }: HomeRecipeCardTypes) => {
  const { name, likes, image, user } = recipe;

  return (
    <article
      className={`relative w-full grow text-slate-100 shadow-xl ${
        small ? "max-w-60" : "max-w-[27rem]"
      } z-0 aspect-video flex-shrink overflow-hidden rounded-3xl shadow-lg`}
    >
      <Image
        src={image}
        alt={name}
        fill={true}
        className="absolute object-cover object-center"
        sizes="(max-width: 600px) 100vw, 50vw"
      />

      <div
        className={`absolute bottom-0 left-0 right-0 flex justify-between gap-3 ${
          small ? "px-4 pb-2 pt-16" : "px-5 pb-4 pt-28"
        } bg-gradient-to-t from-[#000000e7] to-transparent`}
      >
        <div>
          <h4
            className={`line-clamp-2 !leading-5 font-semibold ${
              small ? "text-sm sm:text-base" : "text-lg sm:text-xl"
            }`}
          >
            {name}
          </h4>
          <p
            className={`line-clamp-1 text-stone-400 ${
              small ? "text-sm" : undefined
            }`}
          >
            {user.name}
          </p>
        </div>

        {likes && (
          <div className="flex items-center gap-1 text-[#E94959]">
            <Heart
              className={cn({
                "w-5": !small,
                "w-4": small,
              })}
            />
            <span
              className={cn("font-medium", {
                "text-base": !small,
                "text-sm": small,
              })}
            >
              {likes}
            </span>
          </div>
        )}
      </div>
    </article>
  );
};

export default HomeRecipeCard;
