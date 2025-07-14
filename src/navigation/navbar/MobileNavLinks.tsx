"use client";
import Link from "next/link";
import LoginBtn from "./LoginBtn";
import { NavbarLinks } from "./NavLinks";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

const MobileNavLinks = ({
  pathname,
  isOpen,
  setIsOpen,
}: {
  pathname: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 right-0 z-50 flex flex-col gap-3 border-b-2 border-border bg-background px-8 py-5 *:text-center sm:hidden"
          >
            {NavbarLinks.map((link, index) => (
              <motion.p
                whileHover={{ scale: 1.05 }}
                key={index}
                className={`rounded-full border-2 border-border ${
                  pathname === link.href && "font-semibold text-primary-dark"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Link
                  href={link.href}
                  role="button"
                  className="inline-block w-full py-2"
                >
                  {link.name}
                </Link>
              </motion.p>
            ))}
            <motion.p
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(false)}
            >
              <LoginBtn className="inline-block w-full" />
            </motion.p>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavLinks;
