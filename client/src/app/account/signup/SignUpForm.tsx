"use client";

import { TextField } from "@mui/material";
import Image from "next/image";
import { useForm } from "react-hook-form";
import signUp from "./actions/signUp";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface SignUpType {
  email: string;
  password: string;
  name: string;
}
export default function SignUpForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>();

  return (
    <form
      onSubmit={handleSubmit(
        async (data) =>
          await signUp(data).then((res) => {
            if (res.code === 200) {
              toast.success("회원가입이 되었습니다.");
              router.push("/account/signin");
            }
          })
      )}
      className="h-screen flex flex-col gap-[20px]"
    >
      <Image
        src={"/images/account/img-header.png"}
        alt=""
        width={0}
        height={233}
        className="w-full"
      />
      <div className="flex flex-col gap-[64px]  px-10">
        <div className="flex flex-col gap-6">
          <TextField
            id="standard-basic"
            label="이름"
            variant="standard"
            className="block w-full"
            {...register("name")}
            InputProps={{
              sx: { width: "100%" },
            }}
          />
          <TextField
            id="standard-basic"
            label="이메일"
            variant="standard"
            className="block w-full"
            {...register("email")}
            InputProps={{
              sx: { width: "100%" },
            }}
          />
          <TextField
            id="standard-basic"
            label="비밀번호"
            variant="standard"
            className="block  w-full"
            type="password"
            {...register("password")}
            InputProps={{
              sx: { width: "100%" },
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full h-[57px] text-lg bg-[#53B175] flex justify-center items-center text-white rounded-[19px]"
        >
          회원가입
        </button>
      </div>
    </form>
  );
}
