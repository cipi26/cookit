import BackButton from "@auth/signout/components/BackButton";
import { signOut } from "@auth/signout/actions/signOut";

export const metadata = {
  title: "Sign out",
  description: "You are about to sign out!",
};

const page = () => {
  return (
    <main className="flex h-svh items-center justify-center p-3">
      <article className="mx-auto my-auto max-w-[30.5rem] flex-1 space-y-7 rounded-3xl bg-foreground px-7 py-6 shadow-lg">
        <h2 className="text-3xl font-bold text-primary">Cookit</h2>

        <div className="mx-auto max-w-[355px] space-y-8">
          <div className="space-y-4">
            <h1 className="text-center text-4xl font-bold">
              You are about to sign out!
            </h1>
          </div>

          <div className="flex gap-2">
            <BackButton />
            <form className="w-1/2" action={signOut}>
              <button
                type="submit"
                className="w-full rounded-2xl border-[1px] border-border px-5 py-3 font-medium text-error shadow transition-all ease-linear will-change-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </article>
    </main>
  );
};
export default page;
