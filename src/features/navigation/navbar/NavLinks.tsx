import Link from "next/link";
import LoginBtn from "./LoginBtn";

const NavLinks = ({ pathname }: { pathname: string }) => {
  return (
    <nav className="hidden items-center gap-8 sm:flex">
      {NavbarLinks.map((link, index) => (
        <Link
          href={link.href}
          role="button"
          key={index}
          className={`cursor-pointer transition-opacity hover:opacity-60 ${
            pathname === link.href ? "font-bold text-primary-dark" : undefined
          }`}
        >
          {link.name}
        </Link>
      ))}
      <LoginBtn pathname={pathname} className="-ml-2" />
    </nav>
  );
};

export default NavLinks;

export const NavbarLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms and Conditions", href: "#" },
];
