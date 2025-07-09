"use client";
import { Turn as Hamburger } from "hamburger-react";
import MobileNavLinks from "./MobileNavLinks";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-b-border bg-background px-4 py-4 lg:px-6 lg:py-4">
        <h2 className="text-3xl font-bold text-primary lg:text-4xl">Yumy</h2>
        <NavLinks pathname={pathname} />
        <div className="block sm:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={30}
            direction="right"
          />
        </div>
      </header>
      <MobileNavLinks
        pathname={pathname}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default Navbar;
