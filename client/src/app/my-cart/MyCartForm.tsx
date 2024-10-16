"use client";

import BottomDrawer from "@/components/BottomDrawer";
import Header from "@/components/Header";
import {
  ChevronRightIcon,
  Cross1Icon,
  MinusIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const mockCartData = [
  { name: "나이키 에어맥스 운동화", price: 5000 },
  { name: "나이키 에어맥스 운동화", price: 5000 },
  { name: "나이키 에어맥스 운동화", price: 5000 },
  { name: "나이키 에어맥스 운동화", price: 5000 },
  { name: "나이키 에어맥스 운동화", price: 5000 },
  { name: "나이키 에어맥스 운동화", price: 5000 },
  { name: "나이키 에어맥스 운동화", price: 5000 },
  { name: "나이키 에어맥스 운동화", price: 5000 },
];
export default function MyCartForm() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const drawClose = () => {
    setDrawerOpen(false);
  };

  const totalPrice = mockCartData.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <section className="h-full w-full flex flex-col gap-6 py-2 items-center">
        <Header label="장바구니" />
        <div className="flex flex-col gap-7">
          {mockCartData.map((item, index) => {
            return (
              <div className="flex flex-col gap-7" key={index}>
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
                        <p className="text-base font-bold">{item.name}</p>
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

                      <p className="font-semibold">{item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => setDrawerOpen(true)}
          className="bg-[#489E67] text-white max-w-[344px] w-full h-[57px] bottom-[117px] fixed  rounded-2xl flex justify-center items-center z-[1000px]"
        >
          <p className="text-lg font-semibold">구매하기</p>
          <p className="text-xs">({totalPrice}원)</p>
        </button>
      </section>
      <BottomDrawer
        open={drawerOpen}
        onClose={drawClose}
        height={60}
        children={
          <div className="px-6 py-9">
            <div className="flex justify-between">
              <p className="text-2xl font-semibold">결제</p>
              <Cross1Icon width={18} height={18} onClick={drawClose} />
            </div>
            {/* 수령방법 */}
            <div>
              <Separator className="w-full bg-[#E2E2E2] h-[1px] my-5" />
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg text-[#7C7C7C]">
                  수령 방법
                </p>
                <div className="flex gap-[15px] items-center">
                  <p className="font-semibold">직접 수령</p>
                  <ChevronRightIcon width={18} height={18} />
                </div>
              </div>
            </div>
            {/* 결제 방식 */}
            <div>
              <Separator className="w-full bg-[#E2E2E2] h-[1px] my-5" />
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg text-[#7C7C7C]">
                  결제 방법
                </p>
                <div className="flex gap-[15px] items-center">
                  <Image
                    src={"/images/order/img-card.svg"}
                    alt="카드 이미지"
                    width={21}
                    height={16}
                  />
                  <ChevronRightIcon width={18} height={18} />
                </div>
              </div>
            </div>
            {/* 총 가격 */}
            <div>
              <Separator className="w-full bg-[#E2E2E2] h-[1px] my-5" />
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg text-[#7C7C7C]">총가격</p>
                <div className="flex gap-[15px] items-center">
                  <p className="font-semibold">{totalPrice}원</p>
                  <ChevronRightIcon width={18} height={18} />
                </div>
              </div>
            </div>
            <Separator className="w-full bg-[#E2E2E2] h-[0px] my-7" />
            <div className="w-full flex justify-center">
              {/* <Dialog>
                <Trigger asChild>
                  <button className="bg-[#489E67] text-white max-w-[344px] w-full h-[57px] rounded-2xl flex justify-center items-center">
                    <p className="text-lg font-semibold">결제실패</p>
                  </button>
                </Trigger>

                <Portal>
                  <Overlay></Overlay>
                </Portal>
              </Dialog> */}
              <button
                onClick={() => router.push("/tosspayments")}
                className="bg-[#489E67] text-white max-w-[344px] w-full h-[57px] rounded-2xl flex justify-center items-center"
              >
                <p className="text-lg font-semibold">결제하기</p>
              </button>
            </div>
          </div>
        }
      />
    </>
  );
}
