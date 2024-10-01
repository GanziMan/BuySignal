"use client";

import { TextField } from "@mui/material";
import Image from "next/image";

export default function LoginForm() {
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
          <p className="underline underline-offset-2 cursor-pointer text-xs">
            계정을 잃어버리셨나요?
          </p>
        </div>
      </div>
    </div>
  );
}
