import { cn } from "@/utils/utils";
import Search from "@/ui/Search";
import AccountPill from "@/ui/AccountPill";
import { ClassValue } from "clsx";

type PageTypes = {
  search?: boolean;
  className?: ClassValue;
  children: React.ReactNode;
};

const Page = ({ search = true, className, ...props }: PageTypes) => {
  return (
    <main className="h-svh flex-1 overflow-y-auto px-4 pb-4 md:px-9 md:pb-9 [scrollbar-gutter:stable]">
      <div className="mx-auto max-w-[1200px]">
        {search && (
          <Search>
            <AccountPill />
          </Search>
        )}

        <div className={cn(className)} {...props}/>
      </div>
    </main>
  );
};
export default Page;
