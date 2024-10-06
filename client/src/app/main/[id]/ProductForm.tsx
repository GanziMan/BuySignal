"use client";

import AccordionDemo from "@/components/AccordionComponent";
import AccordionComponent from "@/components/AccordionComponent";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "@radix-ui/react-icons";
import { PlusIcon } from "@radix-ui/react-icons";
import { MinusIcon } from "@radix-ui/react-icons";

import { HeartIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function ProductForm() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col h-full gap-[30px]">
      {/* 사진 영역 */}
      <div className="w-full max-w-[413px] h-[371px] bg-[#F2F3F2] rounded-b-3xl flex-col gap-[27px] items-center flex">
        <div className="flex w-full justify-between px-5 py-6">
          <ArrowLeftIcon
            width={25}
            height={25}
            className="font-black"
            onClick={() => router.back()}
          />
          <Share2Icon width={25} height={25} className="font-black" />
        </div>
        <Image
          src={"/images/product/img-shoes.png"}
          width={200}
          height={100}
          alt=""
        />
      </div>

      {/* 텍스트 수량 영역 */}
      <div className="flex flex-col gap-[30px] w-full max-w-[413px]">
        <div className="flex flex-col px-[25px] gap-[10px]">
          <div className="flex gap-[10px] items-center justify-between w-full">
            <p className="font-bold text-2xl">나이키 에어포스1</p>
            <HeartIcon width={24} height={24} />
          </div>
          <p className="text-[#7C7C7C] font-semibold text-base">
            한켤레당, 가격
          </p>
        </div>
        <div className="flex items-center justify-between px-[25px]">
          <div className="flex items-center justify-between max-w-[120px] w-full">
            <PlusIcon width={20} height={20} />
            <div className="flex justify-center border border-[#E2E2E2] items-center w-[45px] h-[45px] rounded-[17px] font-semibold text-lg">
              1
            </div>
            <MinusIcon width={20} height={20} />
          </div>
          <p className="font-bold text-2xl">110,000</p>
        </div>
      </div>
      <Separator className="w-full bg-[#E2E2E2] h-[1px] max-w-[363px]" />

      <div className="px-4">
        <AccordionDemo />
      </div>
    </div>
  );
}
