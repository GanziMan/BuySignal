"use client";

import Header from "@/components/Header";
import SearchComponent from "@/components/SearchComponent";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

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

const categoryButtonData = [
  {
    url: "all",
    name: "전체",
  },
  {
    url: "clothes",
    name: "옷",
  },
  {
    url: "shoes",
    name: "신발",
  },
];
export default function ExploreForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExploreContent />
    </Suspense>
  );
}

function ExploreContent() {
  const searchParams = useSearchParams();
  const searchCategory = searchParams.get("category");

  const [category, setCategory] = useState<
    "all" | "clothes" | "shoes" | string
  >("all");

  useEffect(() => {
    if (searchCategory) setCategory(searchCategory!);
  }, [searchCategory]);

  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col gap-5 py-2">
      <div className="flex flex-col gap-[30px] items-center">
        <Header label="전체 상품" />
        <SearchComponent />
      </div>

      <div className="grid grid-cols-3 gap-[15px] w-full h-full max-w-[364px]">
        {categoryButtonData.map((item) => (
          <div
            key={item.url}
            onClick={() => router.push(`/explore?category=${item.url}`)}
            className={twMerge(
              "flex flex-col gap-7 justify-center items-center max-w-[174px] w-full h-[80px] border border-zinc-300 rounded-xl cursor-pointer hover:bg-slate-200",
              category === item.url ? "bg-slate-200" : ""
            )}
          >
            <p className="text-base font-bold">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-[15px] w-full h-full max-w-[364px]">
        {mockExploreData.map((item, index) => (
          <div
            key={index}
            onClick={() => router.push(`/explore/1`)}
            className="flex flex-col gap-7 justify-center items-center max-w-[174px] w-full h-[189px] border border-zinc-300 rounded-xl"
          >
            <p className="text-base font-bold">나이키 에어포스1</p>
          </div>
        ))}
      </div>
    </div>
  );
}
