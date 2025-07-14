"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      type="submit"
      className="w-1/2 rounded-2xl border-[1px] border-border px-5 py-3 font-medium text-copy-light shadow transition-all ease-linear will-change-transform hover:scale-[1.02] active:scale-[0.98]"
    >
      Go back
    </button>
  );
};
export default BackButton;
