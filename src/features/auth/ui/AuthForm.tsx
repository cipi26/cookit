"use client";

import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { AuthFormStateType, AuthTypes } from "@auth/types";
import useAuthFormState from "../hooks/useAuthFormState";

const Submit = ({ type }: { type: AuthTypes }) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="flex items-center justify-center w-fit mx-auto bg-primary hover:bg-primary-dark cursor-pointer gap-5 rounded-2xl px-8 py-3 font-medium text-slate-50 shadow transition-all ease-linear will-change-transform hover:scale-[1.02] active:scale-[0.98]"
    >
      {type === "signin" ? "Sign In" : "Sign Up"}
    </button>
  );
};

function isSignUpState<T extends AuthTypes>(
  type: T,
  state: AuthFormStateType<T>
): state is AuthFormStateType<"signup"> {
  return type === "signup";
}

const AuthForm = ({ type }: { type: AuthTypes }) => {
  const [formData, setFormData] = useState({
    username: "",
    full_name: "",
    email: "",
    password: "",
  });
  const [state, formAction, isPending] = useAuthFormState(type);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (state.status === "supabase_error" && state.message) toast.error(state.message);
  }, [state]);

  return (
    <form className="flex flex-col space-y-4" action={formAction} noValidate>
      <div className="space-y-2">
        {type === "signup" && (
          <>
            <div>
              <input
                value={formData.username}
                onChange={handleChange}
                disabled={isPending}
                type="text"
                placeholder="Username"
                name="username"
                className="flex w-full items-center gap-5 rounded-2xl border-[1px] border-border px-5 py-3 font-medium text-copy-light shadow-sm transition-all"
              />
              <p
                aria-live="polite"
                role="status"
                className="text-error text-sm mt-1 pl-2 font-medium"
              >
                {state.status === "username_taken"
                  ? state.message
                  : state.status === "invalid_schema" &&
                    isSignUpState(type, state) &&
                    state.error.fieldErrors.username?.[0]}
              </p>
            </div>
            <div>
              <input
                value={formData.full_name}
                onChange={handleChange}
                disabled={isPending}
                type="text"
                placeholder="Full name"
                name="full_name"
                className="flex w-full items-center gap-5 rounded-2xl border-[1px] border-border px-5 py-3 font-medium text-copy-light shadow-sm transition-all"
              />
              <p
                aria-live="polite"
                role="status"
                className="text-error text-sm mt-1 pl-2 font-medium"
              >
                {state.status === "invalid_schema" &&
                  isSignUpState(type, state) &&
                  state.error.fieldErrors.full_name?.[0]}
              </p>
            </div>
          </>
        )}
        <div>
          <input
            onChange={handleChange}
            value={formData.email}
            disabled={isPending}
            type="email"
            placeholder="Email"
            name="email"
            className="flex w-full items-center gap-5 rounded-2xl border-[1px] border-border px-5 py-3 font-medium text-copy-light shadow-sm transition-all"
          />
          <p
            aria-live="polite"
            role="status"
            className="text-error text-sm mt-1 pl-2 font-medium"
          >
            {state.status === "invalid_schema" &&
              state.error.fieldErrors.email?.[0]}
          </p>
        </div>
        <div>
          <input
            value={formData.password}
            onChange={handleChange}
            disabled={isPending}
            type="password"
            placeholder="Password"
            name="password"
            className="flex w-full items-center gap-5 rounded-2xl border-[1px] border-border px-5 py-3 font-medium text-copy-light shadow-sm transition-all"
          />
          <p
            aria-live="polite"
            role="status"
            className="text-error text-sm mt-1 pl-2 font-medium"
          >
            {state.status === "invalid_schema" &&
              state.error.fieldErrors.password?.[0]}
          </p>
        </div>
      </div>

      <Submit type={type} />
    </form>
  );
};

export default AuthForm;
