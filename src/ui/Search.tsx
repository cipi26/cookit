"use client";
import { SearchIcon } from "lucide-react";
import { Turn as Hamburger } from "hamburger-react";
import { useContext } from "react";
import { SidebarStatus } from "@navigation/sidebar/SidebarStatusProvider";

const Search = ({ children }: { children?: React.ReactNode }) => {
  const [open, setOpen] = useContext(SidebarStatus);

  return (
    <>
      <div
        onClick={() => setOpen && setOpen(false)}
        className={`absolute inset-0 z-40 transition-all ease-out lg:pointer-events-none lg:backdrop-blur-0 ${
          !open ? "pointer-events-none" : "backdrop-blur-md"
        }`}
      />{" "}
      {/* blur wrapper on mobile */}
      <div className="sticky top-0 z-30 -mx-4 flex h-[4.7rem] justify-around gap-5 bg-background px-4 py-4 md:-mx-9 md:px-9">
        <button className="text-copy-light lg:hidden">
          <Hamburger
            toggled={open}
            toggle={setOpen ? setOpen : undefined}
            size={30}
            direction="right"
          />
        </button>
        <div className="flex flex-1 justify-center">
          <div className="flex max-w-80 flex-1 rounded-full shadow">
            <input
              className="input-focus z-[1] w-full rounded-s-full bg-zinc-50 px-5"
              type="text"
              placeholder="Search.."
            />
            <button
              role="button"
              className="flex items-center justify-center input-focus rounded-e-full bg-zinc-50 px-3 transition-colors hover:bg-zinc-100 border-l border-border"
            >
              <SearchIcon className="text-copy-light size-6" />
            </button>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};
export default Search;
