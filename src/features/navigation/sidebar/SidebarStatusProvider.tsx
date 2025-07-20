"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type SidebarStatusTypes = [boolean, Dispatch<SetStateAction<boolean>> | null];

export const SidebarStatus = createContext<SidebarStatusTypes>([false, null]);

const SidebarStatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SidebarStatus value={[open, setOpen]}>
        {children}
      </SidebarStatus>
    </>
  );
};
export default SidebarStatusProvider;
