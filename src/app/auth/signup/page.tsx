import AuthForm from "@/features/auth/ui/AuthForm";

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

          <AuthForm type="signup" />

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
