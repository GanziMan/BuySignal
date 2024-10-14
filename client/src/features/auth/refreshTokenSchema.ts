import { z } from "zod";

export const refreshTokenSchema = z.object({});

export type RefreshTokenRequest = z.input<typeof refreshTokenSchema>;
