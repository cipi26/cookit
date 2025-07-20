import { z } from "zod";
import { signInTypes } from "@auth/signin/types";
import { signUpTypes } from "@auth/signup/types";

export type AuthFormStateType<T extends AuthTypes> = StateType<
  T extends "signin" ? signInTypes : T extends "signup" ? signUpTypes : never
>;

type StateType<T> = 
  | { status: "invalid_schema"; error: z.core.$ZodFlattenedError<T> }
  | { status: "username_taken"; message: string }
  | { status: "supabase_error"; message: string }
  | { status: "success"; message: string }

export type AuthTypes = "signin" | "signup";
