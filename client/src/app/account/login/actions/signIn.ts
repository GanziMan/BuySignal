"use server";

import { PrismaClient } from "@prisma/client";
import { SignInRequest, signinSchema } from "./signinSchema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWTExpired } from "jose/errors";
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

const ACCESS_TOKEN_EXPIRY = "15m";
const REFRESH_TOKEN_EXPIRY = "1d";

export type SigninResponse =
  | {
      code: 400 | 401 | 500;
      message: string;
    }
  | {
      code: 200;
      message: string;
      accessToken: string;
      refreshToken: string;
    };
export default async function signIn(request: SignInRequest) {
  const validated = signinSchema.safeParse(request);

  if (validated.success === false) {
    return {
      code: 400,
      message: validated.error.message[0],
    };
  }

  const { email, password } = request;
  const prisma = new PrismaClient();

  const isUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!isUser) {
    return {
      code: 401,
      message: "존재하지 않는 계정입니다.",
    };
  }

  const isPasswordValid = await bcrypt.compare(password, isUser.password);
  if (!isPasswordValid) {
    return {
      code: 401,
      message: "비밀번호가 일치하지 않습니다.",
    };
  }
  try {
    const accessToken = jwt.sign({ userId: isUser.id }, ACCESS_TOKEN_SECRET!, {
      expiresIn: ACCESS_TOKEN_EXPIRY,
    });
    const refreshToken = jwt.sign(
      { userId: isUser.id },
      REFRESH_TOKEN_SECRET!,
      { expiresIn: REFRESH_TOKEN_EXPIRY }
    );

    // 토큰이 존재하는지
    const existingToken = await prisma.token.findFirst({
      where: {
        userId: isUser.id,
      },
    });

    if (existingToken) {
      await prisma.$transaction(async (tx) => {
        await tx.token.deleteMany({
          where: {
            userId: isUser.id,
          },
        });

        await tx.token.create({
          data: {
            userId: isUser.id,
            accessToken,
            refreshToken,
            accessTokenExpires: new Date(Date.now() + 15 * 60 * 1000), // 15분
            refreshTokenExpires: new Date(Date.now() + 7 * 24 * 60 * 1000), // 7일
          },
        });
      });
    } else {
      await prisma.token.create({
        data: {
          userId: isUser.id,
          accessToken,
          refreshToken,
          accessTokenExpires: new Date(Date.now() + 15 * 60 * 1000), // 15분
          refreshTokenExpires: new Date(Date.now() + 7 * 24 * 60 * 1000), // 7일
        },
      });
    }

    return {
      code: 200,
      message: "로그인 되었습니다.",
      accessToken,
      refreshToken,
    };
  } catch (error) {
    const errorId = crypto.randomUUID();
    console.log(errorId);
    if (error instanceof JWTExpired) {
      return {
        code: 401,
        message: "TOKEN EXPIRED",
      };
    } else {
      return {
        code: 500,
        message: "Internal Server Error",
      };
    }
  } finally {
    await prisma.$disconnect();
  }
}
