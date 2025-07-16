"use client";
import Link from "next/link";

import { useContext } from "react";
import { SidebarStatus } from "@navigation/sidebar/SidebarStatusProvider";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/utils/utils";
import { usePathname } from "next/navigation";
import { SidebarLinks } from "../constants";

const Sidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useContext(SidebarStatus);

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
        {SidebarLinks.map((link, idx) => (
          <Link
            onClick={() => setOpen && setOpen(false)}
            href={link.path}
            key={idx}
            className={cn(
              `group flex items-center gap-2 rounded-full px-3 py-2 outline-none transition-all hover:bg-background hover:font-semibold hover:text-copy focus:bg-background focus:font-semibold focus-visible:text-copy`,
              {
                "bg-background font-semibold text-copy border border-border":
                  pathname === link.path,
                "text-error hover:text-error focus-visible:text-error":
                  link.name === "Sign out",
              }
            )}
          >
            <div
              className={cn(
                "w-6 transition-transform group-hover:scale-110 group-focus-visible:scale-110",
                {
                  "scale-110": pathname === link.path,
                }
              )}
            >
              <link.icon className="size-6" />
            </div>
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar;
