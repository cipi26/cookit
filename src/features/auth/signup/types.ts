import { z } from "zod";
import { signUpSchema } from "./schema";

export type signUpTypes = z.infer<typeof signUpSchema>;
