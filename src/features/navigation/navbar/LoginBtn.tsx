import { ClassValue } from "clsx";
import Link from "next/link";

const LoginBtn = ({ pathname, className } : { pathname: string, className: ClassValue }) => {
  return (
    <Link
      href="/auth/signin"
      role="button"
      type="submit"
      className={`${className} rounded-full bg-primary px-6 py-2 font-medium text-slate-50 shadow-lg transition-colors hover:bg-primary-dark ${
        pathname === "/login" ? "!bg-primary-dark" : undefined
      }`}
    >
      Sign In
    </Link>
  );
};

export default LoginBtn;
