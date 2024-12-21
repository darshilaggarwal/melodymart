import { z } from "zod";

export const logInValidation = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(255),
});

export type LogInFormValues = z.infer<typeof logInValidation>;
