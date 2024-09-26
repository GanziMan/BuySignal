"use client";
import CheckComponent from "@/components/framer/CheckComponent";
import Confetti from "react-confetti";

export default function OrderSucessForm() {
  return (
    <section className="h-screen w-full bg-cover bg-center py-[100px]">
      {/* <Confetti
          numberOfPieces={30}
          width={50}
          height={50}
          colors={["#CAB0FF"]}
        /> */}
      <div className="flex flex-col justify-center gap-[67px] items-center">
        <CheckComponent />
        <div className="flex flex-col justify-center gap-5">
          <p className="text-[28px] font-semibold text-center break-keep">
            상품 결제가 완료되었습니다!
          </p>
          <p className="text-[#7C7C7C] text-center break-keep">
            고객님의 물품이 주문되었으며, 현재 처리 중에 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
