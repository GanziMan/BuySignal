"use server";

import { SignUpRequest, signUpSchema } from "./signUpSchema";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export type SignUpResponse = {
  code: 400 | 200;
  message: string;
};

export default async function signUp(
  request: SignUpRequest
): Promise<SignUpResponse> {
  const validated = signUpSchema.safeParse(request);

  if (validated.success === false) {
    return {
      code: 400,
      message: validated.error.message[0],
    };
  }

  const { email, password, name } = request;

  const prisma = new PrismaClient();

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    // 이메일 중복 검증
    if (existingUser) {
      return {
        code: 400,
        message: "이미 존재하는 회원입니다.",
      };
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        id: crypto.randomUUID(),
        email,
        password: hashedPassword,
        name,
      },
    });

    return {
      code: 200,
      message: "회원가입이 되었습니다.",
    };
  } catch (e) {
    return {
      code: 400,
      message: "정의가 되지않는 에러가 발생했습니다.",
    };
  }
}
