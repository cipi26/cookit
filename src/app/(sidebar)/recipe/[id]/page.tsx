import InfoBox from "@/features/recipes/ui/InfoBox";
import LikeAndSend from "@/features/recipes/ui/LikeAndSend";
import Page from "@/ui/Page";
import Pill from "@/ui/Pill";
// import { getRecipes } from "@/features/discover/actions/getRecipes";
import { getRecipeById } from "@recipes/actions/getRecipeById";
import { cn } from "@/utils/tailwindFormatting";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getRecipeById(id);
  if (!data) notFound();
  const { name, description } = data;
  return { title: name, description };
}

// export async function generateStaticParams() {
//   const recipes = await getRecipes();
//   return recipes.map((recipe) => ({ id: recipe.id.toString() }));
// }

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <Page className="space-y-11">
      {/* <Suspense fallback={<Loading />}> */}
      <PageContent id={id} />
      {/* </Suspense> */}
    </Page>
  );
};
export default page;

const PageContent = async ({ id }: { id: string }) => {
  const data = await getRecipeById(id);
  if (!data) notFound();
  const {
    name,
    description,
    image,
    likes,
    users: { full_name, avatar },
    info,
    tags,
    ingredients,
    instructions,
  } = data;

  return (
    <>
      <article className="mt-3 flex flex-col-reverse justify-center gap-x-5 gap-y-10 xl:flex-row">
        <Image
          src={image}
          alt={name}
          height={320}
          width={560}
          priority={true}
          className="h-[20rem] w-auto max-w-[35rem] flex-1 shrink basis-[21.5rem] rounded-3xl object-cover object-center shadow-md xl:max-w-[28.125rem]"
        />
        <div className="max-w-[700px] flex-1 space-y-5 sm:space-y-4">
          <div className="flex flex-col items-start justify-between gap-4">
            <h1 className="line-clamp-2 py-1 text-5xl font-black">{name}</h1>
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, id) => (
                <span
                  key={id}
                  className="bg-primary-lighter border border-primary-dark px-2 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="max-w-[37.5rem]">{description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Pill content={full_name} image={avatar} />
            <LikeAndSend likes={likes} />
          </div>
          <div className="grid max-w-[490px] grid-cols-[repeat(auto-fit,107px)] flex-wrap justify-center gap-5 sm:justify-between sm:gap-3">
            <InfoBox type="calorie" value={info.caloriesPerServing} />
            <InfoBox type="cookTime" value={info.cookTime} />
            <InfoBox type="difficulty" value={info.difficulty} />
            <InfoBox type="servings" value={info.servings} />
          </div>
        </div>
        <div className="space-y-8">
          <InfoBlock title="Ingredients" content={ingredients} />
          <InfoBlock title="Instructions" content={instructions} />
        </div>
      </article>
    </>
  );
};

const InfoBlock = ({
  title,
  content,
}: {
  title: string;
  content: string | string[];
}) => {
  return (
    <div className="max-w-[550px] space-y-5">
      <h2 className="text-4xl font-bold">{title}</h2>
      <div
        className={cn({
          "whitespace-pre-line": typeof content === "string",
          "list-inside list-disc": typeof content === "object",
        })}
      >
        {typeof content === "string"
          ? content
          : typeof content === "object" &&
            content.map((data, id) => <li key={id}>{data}</li>)}
      </div>
    </div>
  );
};
