"use client";

import SearchComponent from "@/components/SearchComponent";
import Image from "next/image";

export default function ExploreForm() {
  return (
    <section>
      <div className="flex flex-col gap-[30px]">
        <div>검색</div>
        <SearchComponent />
      </div>

      <div className="grid grid-cols-2 gap-[15px] w-full max-w-[364px]">
        <div className="flex flex-col gap-7 justify-center items-center w-[174px] h-[189px]">
          <Image src={""} alt="" width={111} height={75} />
          <p className="text-base font-bold">나이키 에어포스1</p>
        </div>
        <div className="flex flex-col gap-7 justify-center items-center w-[174px] h-[189px]">
          <Image src={""} alt="" width={111} height={75} />
          <p className="text-base font-bold">나이키 에어포스1</p>
        </div>
      </div>
    </section>
  );
}
