import { Globe2, Send, Settings, LogOut, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type SidebarLinkTypes = {
  name: string,
  path: string,
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

export const SidebarLinks: SidebarLinkTypes[] = [
  {
    name: "Discover",
    path: "/discover",
    icon: Globe2,
  },
  {
    name: "Messages",
    path: "#",
    icon: Send,
  },
  {
    name: "Settings",
    path: "#",
    icon: Settings,
  },
  {
    name: "Sign out",
    path: "/auth/signout",
    icon: LogOut,
  },
];
