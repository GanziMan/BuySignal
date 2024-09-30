"use client";

import { TextField } from "@mui/material";

export default function SignUpForm() {
  return (
    <div className="pt-10 h-screen p-10">
      <div className="flex flex-col gap-[64px]">
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
            className="block w-full"
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
          <p className="underline underline-offset-2 cursor-pointer">
            계정을 잃어버리셨나요?
          </p>
        </div>
      </div>
    </div>
  );
}
