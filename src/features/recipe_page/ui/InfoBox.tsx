import { cn } from "@/utils/utils";
import Image from "next/image";

const InfoBox = ({
  type,
  value,
}: {
  type: "calorie" | "cookTime" | "difficulty" | "servings";
  value: string | number;
}) => {
  return (
    <div className="flex aspect-square min-w-[107px] flex-col items-center justify-center space-y-1 rounded-[1.3rem] bg-card px-[10.5px] py-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <Image src={data[type].icon} alt="" height={45} width={45} />
      <div className="text-center leading-4">
        {type === "difficulty" && <DifficultyGraph value={value} />}
        <h5
          className={cn(
            {
              "font-medium": type !== "difficulty",
              "text-sm": type === "difficulty",
            },
            {
              "text-success": type === "difficulty" && value === 0,
              "text-warning": type === "difficulty" && value === 1,
              "text-error/90": type === "difficulty" && value === 2,
            }
          )}
        >
          {type !== "difficulty"
            ? value
            : value === 0
            ? "Easy"
            : value === 1
            ? "Medium"
            : value === 2 && "Hard"}
        </h5>
        {type !== "difficulty" && (
          <p className="text-sm text-copy-lighter">{data[type].description}</p>
        )}
      </div>
    </div>
  );
};
export default InfoBox;

const DifficultyGraph = ({ value }: { value: string | number }) => {
  return (
    <div className="flex h-[14px] gap-1 mb-1">
      <div
        className={cn("w-[26px] bg-border rounded-[4px]", {
          "bg-success": value === 0,
          "bg-warning/90": value === 1,
          "bg-error/90": value === 2,
        })}
      ></div>
      <div
        className={cn("w-[26px] bg-border rounded-[4px]", {
          "bg-warning/90": value === 1,
          "bg-error/90": value === 2,
        })}
      ></div>
      <div
        className={cn("w-[26px] bg-border rounded-[4px]", {
          "bg-error/90": value === 2,
        })}
      ></div>
    </div>
  );
};

const data = {
  calorie: { icon: "/icons/calorie.svg", description: "per serving" },
  cookTime: { icon: "/icons/cook-time.svg", description: "cook time" },
  difficulty: { icon: "/icons/difficulty.svg", description: null },
  servings: { icon: "/icons/servings.svg", description: "servings" },
};
