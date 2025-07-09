// import { HeartIcon } from "@heroicons/react/24/solid";
// import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import Image from "next/image";
import { HomeCommentTypes } from "../../types";

const HomeComment = ({ comment }: { comment: HomeCommentTypes }) => {
  const { name, image, likes, time, liked, content } = comment;

  return (
    <div className="flex gap-3">
      <div className="flex w-8 flex-shrink-0 flex-col items-center gap-2">
        <Image
          src={image}
          alt="Profile picture"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>

      <div>
        <h4 className="inline font-bold">{name}</h4>{" "}
        <p className="inline">{content}</p>
        <div className="text-text-700 mt-1 flex gap-2 text-sm">
          <div
            className={
              liked ? "text-love drop-shadow-[0_1px_3px_#EB5C68]" : undefined
            }
          >
            {/* {liked ? (
              <HeartIcon className="size-5" />
            ) : (
              <HeartOutline className="size-5 stroke-copy-light stroke-2" />
            )} */}
          </div>

          <p>Reply</p>
          <p>{time}</p>
          {likes && <p>{likes} likes</p>}
        </div>
      </div>
    </div>
  );
};

export default HomeComment;
