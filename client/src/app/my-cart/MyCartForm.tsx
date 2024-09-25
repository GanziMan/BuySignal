"use client";

import Header from "@/components/Header";
import { Cross1Icon, MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

const mockCartData = [
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
export default function MyCartForm() {
  return (
    <section className="h-full w-full flex flex-col gap-6 py-2 items-center">
      <Header label="장바구니" />

      <div className="flex flex-col gap-7">
        {mockCartData.map((item) => {
          return (
            <div className="flex flex-col gap-7">
              <Separator className="w-full bg-[#E2E2E2] h-[1px] max-w-[363px]" />

              <div className="flex justify-between gap-8">
                <Image
                  src={"/images/product/img-shoes.png"}
                  alt="상품 이미지"
                  width={70}
                  height={30}
                />
                <div className="flex flex-col w-[260px] gap-4">
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col gap-[5px]">
                      <p className="text-base font-bold">
                        나이키 운동화 에어맥스
                      </p>
                      <p className="text-sm text-[#7C7C7C]">한켤레당 가격 </p>
                    </div>
                    <Cross1Icon
                      className="text-[#B3B3B3]"
                      width={16}
                      height={16}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between max-w-[120px] w-full">
                      <PlusIcon width={20} height={20} />
                      <div className="flex justify-center border border-[#E2E2E2] items-center w-[45px] h-[45px] rounded-[17px] font-semibold text-lg">
                        1
                      </div>
                      <MinusIcon width={20} height={20} />
                    </div>

                    <p className="font-semibold">110</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <nav className="bg-[#489E67] text-white max-w-[344px] w-full h-[57px] bottom-[117px] fixed  rounded-2xl flex justify-center items-center z-[1000px]">
        <p className="text-lg font-semibold">구매하기</p>
        <p className="text-xs">(총 금액)</p>
        {/* <p className="float-right">총 금액</p> */}
      </nav>
    </section>
  );
}
