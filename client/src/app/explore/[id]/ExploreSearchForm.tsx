"use client";

import BottomDrawer from "@/components/BottomDrawer";
import CheckBox from "@/components/Checkbox";
import Header from "@/components/Header";
import { ArrowLeftIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const drawClose = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      <section className="h-full w-full flex flex-col gap-6 py-2">
        <div className="flex justify-between">
          <ArrowLeftIcon
            width={25}
            height={25}
            className="font-black"
            onClick={() => router.back()}
          />
          <Header label="검색어" />
          <MixerHorizontalIcon
            width={25}
            height={25}
            className="font-black"
            onClick={() => setDrawerOpen(true)}
          />
        </div>
        <div className="grid grid-cols-2 gap-3 text-center justify-items-center ">
          {mockExploreSearchData.map((item) => {
            return (
              <div
                onClick={() => router.push(`/main/1`)}
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
      <BottomDrawer
        open={drawerOpen}
        onClose={drawClose}
        height={85}
        children={
          <>
            <div className="flex flex-col gap-10">
              <div className="px-6 py-[30px] w-full h-full bg-white">
                <div className="flex flex-col gap-7">
                  <p className="text-2xl font-semibold">카테고리</p>
                  <div className="flex flex-col gap-5">
                    <CheckBox label="옷" />
                    <CheckBox label="신발" />
                  </div>
                </div>
              </div>
              <div className="px-6 py-[30px] w-full h-full bg-white">
                <div className="flex flex-col gap-7">
                  <p className="text-2xl font-semibold">브랜드</p>
                  <div className="flex flex-col gap-5">
                    <CheckBox label="나이키" />
                    <CheckBox label="뉴발란스" />
                    <CheckBox label="무신사" />
                  </div>
                </div>
              </div>
            </div>
            <nav className="bg-[#489E67] text-white max-w-[344px] w-full h-[57px] bottom-[117px] fixed left-1/2 transform -translate-x-1/2 rounded-2xl flex justify-center items-center z-[1000px]">
              <p className="text-lg font-semibold">적용하기</p>
            </nav>
          </>
        }
      />
    </>
  );
}
