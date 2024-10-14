"use server";

import { SignUpRequest, signUpSchema } from "./signUpSchema";
import { PrismaClient } from "@prisma/client";

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

  await prisma.user.create({
    data: {
      email,
      password,
      name,
    },
  });

  return {
    code: 200,
    message: "회원가입이 되었습니다.",
  };
}
