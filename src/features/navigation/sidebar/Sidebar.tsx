"use client";
import Link from "next/link";

import {
  Dispatch,
  ForwardRefExoticComponent,
  RefAttributes,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { SidebarStatus } from "@navigation/sidebar/SidebarStatusProvider";
import { ArrowLeft, LucideProps, UserCircle2 } from "lucide-react";
import { cn } from "@/utils/tailwindFormatting";
import { usePathname } from "next/navigation";
import { SidebarLinks } from "../data";
import { createClient } from "@/utils/supabase/client";

const Sidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useContext(SidebarStatus);
  const [username, setUsername] = useState("");

  const supabase = createClient();
  // @ts-expect-error remove supabase warning about using getSession() from the console
  supabase.auth.suppressGetSessionWarning = true;

  useEffect(() => {
    const data = supabase.auth.getSession();
    data.then((value) =>
      setUsername(value.data.session?.user.user_metadata.username)
    );
  }, [supabase.auth]);

  return (
    <aside
      className={cn(
        `fixed -left-64 z-50 h-svh w-64 space-y-10 overflow-y-auto bg-zinc-50 px-7 py-5 shadow-lg transition-all ease-out lg:sticky lg:left-0`,
        {
          "left-0": open,
          "-left-64": !open,
        }
      )}
    >
      <div className="flex items-center justify-between">
        <h2 className="ml-6 text-4xl font-bold text-primary">Cookit</h2>
        <button
          onClick={() => setOpen && setOpen(false)}
          className="input-focus mt-1 inline-block rounded-full p-1 transition-colors hover:bg-border lg:hidden"
        >
          <ArrowLeft className="w-5" />
        </button>
      </div>
      <nav className="flex flex-col gap-4 text-copy-light tracking-tight">
        <SidebarLink
          name="Profile"
          pathname={pathname}
          path={`/user/${username}`}
          Icon={UserCircle2}
          setOpen={setOpen}
        />
        {SidebarLinks.map((link, idx) => (
          <SidebarLink
            key={idx}
            name={link.name}
            pathname={pathname}
            path={link.path}
            Icon={link.icon}
            setOpen={setOpen}
          />
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar;

type SidebarLinkType = {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  setOpen?: Dispatch<SetStateAction<boolean>> | null;
  path: string;
  pathname?: string;
  name: string;
};

const SidebarLink = ({
  setOpen,
  path,
  pathname,
  name,
  Icon,
}: SidebarLinkType) => {
  return (
    <Link
      onClick={() => setOpen && setOpen(false)}
      href={path}
      className={cn(
        `group flex items-center gap-2 rounded-full px-3 py-2 outline-none transition-all hover:bg-background hover:font-semibold hover:text-copy focus:bg-background focus:font-semibold focus-visible:text-copy`,
        {
          "bg-background font-semibold text-copy border border-border":
            pathname === path,
          "text-error hover:text-error focus-visible:text-error":
            name === "Sign out",
        }
      )}
    >
      <div
        className={cn(
          "w-6 transition-transform group-hover:scale-110 group-focus-visible:scale-110",
          {
            "scale-110": pathname === path,
          }
        )}
      >
        <Icon className="size-6" />
      </div>
      {name}
    </Link>
  );
};
