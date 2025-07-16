import { signIn } from "@auth/signin/actions/signIn";

export const metadata = {
  title: "Sign In to Cookit | Discover and Share Delicious Recipes",
  description:
    "Access your Cookit account to explore new recipes, share your own creations, and connect with other food enthusiasts.",
};

const page = () => {
  return (
    <main className="flex h-svh items-center justify-center p-3">
      <article className="max-w-[30.5rem] flex-1 space-y-7 rounded-3xl bg-card px-7 py-6 shadow-lg">
        <h2 className="text-3xl font-bold text-primary">Cookit</h2>

        <div className="mx-auto max-w-[355px] space-y-8">
          <div className="space-y-4">
            <h1 className="text-center text-4xl font-bold">
              Welcome Back to Cookit
            </h1>
            <p className="text-center text-base leading-tight">
              Sign in to explore, share, and save delicious recipes. Use your
              details below to continue.
            </p>
          </div>

          <form className="flex flex-col space-y-4" action={signIn}>
            <div className="space-y-2">
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
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-copy-lighter">
            By continuing, you agree to Cookit’s Terms of Service and Privacy
            Policy
          </p>
        </div>
      </article>
    </main>
  );
};
export default page;
