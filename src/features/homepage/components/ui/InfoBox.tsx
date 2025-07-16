import { cn } from "@/utils/utils";
import Image from "next/image";

const InfoBox = ({
  type,
  value,
}: {
  type: "calorie" | "cookTime" | "difficulty" | "servings";
  value: string;
}) => {
  return (
    <div className="flex aspect-square min-w-[107px] flex-col items-center justify-center space-y-1 rounded-[1.3rem] bg-background px-[10.5px] py-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <Image src={data[type].icon} alt="" height={45} width={45} />
      <div className="text-center leading-4">
        {type === "difficulty" &&
          (value === "Easy" || value === "Medium" || value === "Hard") && (
            <DifficultyGraph value={value} />
          )}
        <h5
          className={cn("font-medium", {
            "text-success": type === "difficulty" && value === "Easy",
            "text-warning/90": type === "difficulty" && value === "Medium",
            "text-error/90": type === "difficulty" && value === "Hard",
          })}
        >
          {value}
        </h5>
        {type !== "difficulty" && (
          <p className="text-sm text-copy-lighter">{data[type].description}</p>
        )}
      </div>
    </div>
  );
};
export default InfoBox;

const DifficultyGraph = ({ value }: { value: "Easy" | "Medium" | "Hard" }) => {
  return (
    <div className="flex h-[14px] gap-1 mb-1">
      <div
        className={cn("w-[26px] bg-border rounded-[4px]", {
          "bg-success": value === "Easy",
          "bg-warning/90": value === "Medium",
          "bg-error/90": value === "Hard",
        })}
      ></div>
      <div
        className={cn("w-[26px] bg-border rounded-[4px]", {
          "bg-warning/90": value === "Medium",
          "bg-error/90": value === "Hard",
        })}
      ></div>
      <div
        className={cn("w-[26px] bg-border rounded-[4px]", {
          "bg-error/90": value === "Hard",
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
