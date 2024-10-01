"use client";

import { TextField } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col gap-[20px]">
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
            label="Email"
            variant="standard"
            className="block w-full"
            InputProps={{
              sx: { width: "100%" },
            }}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            className="block  w-full"
            type="password"
            InputProps={{
              sx: { width: "100%" },
            }}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-7">
          <button className="w-full h-[57px] text-lg bg-[#53B175] flex justify-center items-center text-white rounded-[19px]">
            로그인
          </button>
          <p
            className="underline underline-offset-2 cursor-pointer text-xs"
            onClick={() => router.push("/account/signup")}
          >
            계정이 없으신가요?
          </p>
        </div>
      </div>
    </div>
  );
}
