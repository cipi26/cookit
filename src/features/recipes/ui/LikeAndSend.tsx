import { cn } from "@/utils/tailwindFormatting";
import { Heart, Send } from "lucide-react";
import Button from "@/ui/Button";
import { formatNumber } from "@/utils/formatNumber";
import { ClassValue } from "clsx";

const LikeAndSend = ({
  className,
  likes,
  ...props
}: {
  className?: ClassValue;
  likes: number;
}) => {
  return (
    <div {...props} className={cn("flex items-center gap-3", className)}>
      <Button className="flex items-center gap-1 text-love">
        <Heart className="w-6" />
        {formatNumber(likes)}
      </Button>
      <Button>
        <Send className="w-6" />
      </Button>
    </div>
  );
};
export default LikeAndSend;
