"use server";

import { PrismaClient } from "@prisma/client";
import { RefreshTokenRequest } from "./refreshTokenSchema";
import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

const ACCESS_TOKEN_EXPIRY = "15m";
const REFRESH_TOKEN_EXPIRY = "1d";

export default async function refreshToken(request: RefreshTokenRequest) {
  //   const prisma = new PrismaClient();
}
