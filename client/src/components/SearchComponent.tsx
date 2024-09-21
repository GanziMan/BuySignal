"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function SearchComponent() {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("검색 되었습니다.");
    }
  };

  return (
    <div className="w-[364px] h-[51px] rounded-2xl px-[15px] bg-[#F2F3F2] flex items-center">
      <input
        placeholder="Search Store"
        className="bg-[#F2F3F2] text-[#7C7C7C] w-[364px] h-[51px] rounded-2xl outline-none"
        onKeyDown={handleKeyDown}
      />
      <MagnifyingGlassIcon className="text-[#7C7C7C] w-7 h-8 mr-2 cursor-pointer" />
    </div>
  );
}
