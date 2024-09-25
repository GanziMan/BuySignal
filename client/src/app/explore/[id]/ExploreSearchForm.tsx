"use client";

import {
  ArrowLeftIcon,
  MixerHorizontalIcon,
  MixerVerticalIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

const mockExploreSearchData = [
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
  {},
  {},
  {},
];
export default function ExploreSearchForm() {
  const router = useRouter();
  return (
    <section className="h-full w-full flex flex-col gap-6 py-2">
      <div className="flex justify-between">
        <ArrowLeftIcon width={25} height={25} className="font-black" />
        <p>검색어</p>
        <MixerHorizontalIcon width={25} height={25} className="font-black" />
      </div>
      <div className="grid grid-cols-2 text-center justify-items-center ">
        {mockExploreSearchData.map((item) => {
          return (
            <div
              onClick={() => router.push(`/explore/`)}
              className="max-w-[173px] w-full h-[248px] border rounded-2xl px-[18px] py-5 flex flex-col  items-center"
            >
              <div className="flex flex-col gap-[5px] w-full">
                <p className="font-semibold"></p>
                <p className="text-sm text-[#7C7C7C]"></p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="font-semibold text-lg ">3,0000원</p>
                <div className="w-6 h-6 rounded-2xl flex items-center justify-center bg-[#696969]">
                  <Image
                    src={"/images/icons/ic-plus.svg"}
                    alt="플러스 아이콘"
                    width={15}
                    height={15}
                    color="white"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
