import { useActionState } from "react";
import { AuthFormStateType, AuthTypes } from "../types";
import { signIn } from "@auth/signin/actions";
import { signUp } from "@auth/signup/actions";

type ActionType<T extends AuthTypes> = (
  prevState: Awaited<AuthFormStateType<T>>,
  formData: FormData
) => Promise<AuthFormStateType<T>>;

const useAuthFormState = <T extends AuthTypes>(type: T) => {
  const action: ActionType<T> = type === "signin" ? signIn : signUp;

  const initialState: Awaited<AuthFormStateType<T>> = {
    status: "supabase_error",
    message: "",
  };

  const [state, formAction, isPending] = useActionState<AuthFormStateType<T>, FormData>(
    action,
    initialState
  );

  return [state, formAction, isPending] as const;
};

export default useAuthFormState;
