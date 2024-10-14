import "server-only";

export const ACCESS_TOKEN_SECRET = new TextEncoder().encode(
  process.env.ACCESS_TOKEN_SECRET
);

export const REFRESH_TOKEN_SECRET = new TextEncoder().encode(
  process.env.REFRESH_TOKEN_SECRET
);

export const ACCESS_TOKEN_EXPIRY = "15m";

export const REFRESH_TOKEN_EXPIRY = "7d";

export const DOMAIN_URL = process.env.NEXT_PUBLIC_DOMAIN_URL;
