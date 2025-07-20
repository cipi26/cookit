import { z } from "zod";
import { signInSchema } from "./schema";

export type signInTypes = z.infer<typeof signInSchema>;
