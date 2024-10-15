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
      onSubmit={handleSubmit((data) =>
        signUp(data).then((res) => {
          if (res.code === 200) {
            toast.success("회원가입이 되었습니다.");
            router.push("/account/signin");
          } else {
            toast.error(res.message);
          }
        })
      )}
      className="h-screen flex flex-col gap-[20px]"
    >
      {/* <Image
        src={"/images/account/img-header.png"}
        alt=""
        width={0}
        height={233}
        className="w-full"
      /> */}
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
          <div className="flex flex-col gap-1">
            <TextField
              id="standard-basic"
              label="이메일"
              variant="standard"
              className="block w-full"
              {...register("email", {
                required: "필수 값입니다.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "이메일 형식이 옳바르지 않습니다.",
                },
              })}
              InputProps={{
                sx: { width: "100%" },
              }}
            />
            {errors.email && (
              <p className="text-red-600 text-xs">{errors.email.message}</p>
            )}
          </div>
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
