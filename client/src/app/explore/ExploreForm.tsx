"use client";

import Header from "@/components/Header";
import SearchComponent from "@/components/SearchComponent";
import { useRouter } from "next/navigation";

const mockExploreData = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];
export default function ExploreForm() {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col gap-5 py-2">
      <div className="flex flex-col gap-[30px] items-center">
        <Header label="Search" />
        <SearchComponent />
      </div>

      <div className="grid grid-cols-2 gap-[15px] w-full h-full max-w-[364px]">
        {mockExploreData.map((item) => {
          return (
            <div
              onClick={() => router.push(`/explore/1`)}
              className="flex flex-col gap-7 justify-center items-center max-w-[174px] w-full h-[189px] border border-zinc-300 rounded-xl"
            >
              <p className="text-base font-bold">나이키 에어포스1</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
