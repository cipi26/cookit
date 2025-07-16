import { signUp } from "@auth/signup/actions/signUp";

export const metadata = {
  title: "Create a Cookit Account | Join the Recipe Community",
  description:
    "Sign up for Cookit to discover, share, and save your favorite recipes. Join our growing community of food lovers today.",
};

const page = () => {
  return (
    <main className="flex h-svh items-center justify-center p-3">
      <article className="max-w-[30.5rem] flex-1 space-y-7 rounded-3xl bg-card px-7 py-6 shadow-lg">
        <h2 className="text-3xl font-bold text-primary">Cookit</h2>

        <div className="mx-auto max-w-[355px] space-y-8">
          <div className="space-y-4">
            <h1 className="text-center text-4xl font-bold">
              Create Your Cookit Account
            </h1>
            <p className="text-center text-base leading-tight">
              Join Cookit and start discovering, sharing, and saving your
              favorite recipes. Fill in the details below to get started!
            </p>
          </div>

          <form className="flex flex-col space-y-4" action={signUp}>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="flex w-full items-center gap-5 rounded-2xl border-[1px] border-border px-5 py-3 font-medium text-copy-light shadow-sm transition-all"
              />
              <input
                type="text"
                placeholder="Full name"
                name="full_name"
                className="flex w-full items-center gap-5 rounded-2xl border-[1px] border-border px-5 py-3 font-medium text-copy-light shadow-sm transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="flex w-full items-center gap-5 rounded-2xl border-[1px] border-border px-5 py-3 font-medium text-copy-light shadow-sm transition-all"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="flex w-full items-center gap-5 rounded-2xl border-[1px] border-border px-5 py-3 font-medium text-copy-light shadow-sm transition-all"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-fit mx-auto bg-primary hover:bg-primary-dark cursor-pointer gap-5 rounded-2xl px-8 py-3 font-medium text-slate-50 shadow transition-all ease-linear will-change-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-copy-lighter">
            By signing up, you agree to Cookit’s Terms of Service and Privacy
            Policy
          </p>
        </div>
      </article>
    </main>
  );
};
export default page;
