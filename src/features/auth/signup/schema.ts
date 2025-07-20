import { z } from "zod";

export const signUpSchema = z.object({
  full_name: z
    .string()
    .min(4, {
      error: (iss) => {
        return `Full name must have ${iss.minimum} characters or more`;
      },
    })
    .max(100, {
      error: (iss) => {
        return `Full name cannot exceed ${iss.maximum} characters`;
      },
    })
    .regex(/^[a-zA-ZÀ-ÿ' -]+$/, {
      message:
        "Full name can only contain letters, spaces, dashes, and apostrophes",
    }),
  username: z
    .string()
    .min(3, {
      error: (iss) => `Username must have ${iss.minimum} characters or more`,
    })
    .max(15, {
      error: (iss) => `Username cannot exceed ${iss.maximum} characters`,
    })
    .regex(/^[a-z][a-z0-9_]*$/, {
      message:
        "Username must start with a letter and can only contain lowercase letters, numbers, and underscores",
    }),
  email: z.email(),
  password: z
    .string()
    .min(8, {
      error: (iss) => {
        return `Password must have ${iss.minimum} characters or more`;
      },
    })
    .max(64, {
      error: (iss) => {
        return `Password cannot exceed ${iss.maximum} characters`;
      },
    })
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, {
      message:
        "Password must contain at least an uppercase letter, a lowercase letter, and a number",
    }),
});