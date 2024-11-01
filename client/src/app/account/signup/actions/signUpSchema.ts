import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string(),
  password: z.string(),
  name: z.string(),
  gender: z.string(),
});

export type SignUpRequest = z.input<typeof signUpSchema>;
