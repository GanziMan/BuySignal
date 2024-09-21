"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function SearchComponent() {
  return (
    <div className="w-[364px] h-[51px] rounded-2xl px-[15px] bg-[#F2F3F2] flex items-center">
      <input
        placeholder="Search Store"
        className="bg-[#F2F3F2] text-[#7C7C7C] w-[364px] h-[51px] rounded-2xl"
      />
      <MagnifyingGlassIcon className="text-[#7C7C7C] w-7 h-8 mr-2" />
    </div>
  );
}
