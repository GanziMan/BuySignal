"use client";
import { useEffect, useState } from "react";
import { PaymentConfirm } from "../action";
import { useRouter } from "next/navigation";

export default function SuccessForm({
  orderId,
  amount,
  paymentKey,
}: {
  orderId: string;
  amount: string;
  paymentKey: string;
}) {
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // 쿼리 파라미터 값이 결제 요청할 때 보낸 데이터와 동일한지 반드시 확인하세요.
    // 클라이언트에서 결제 금액을 조작하는 행위를 방지할 수 있습니다.
    const requestData = {
      orderId,
      amount,
      paymentKey,
    };

    function confirm() {
      // const response = await fetch("/api/confirm", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(requestData),
      // });

      const response = PaymentConfirm({
        orderId,
        amount: Number(amount),
        paymentKey,
      });

      // const json = await response.json();

      // if (!response.ok) {
      //   // 결제 실패 비즈니스 로직을 구현하세요.
      //   setIsConfirm(false);
      //   return;
      // }
      setIsConfirm(true);

      // 결제 성공 비즈니스 로직을 구현하세요.
    }
    confirm();
  }, []);

  return (
    <div className="wrapper h-screen">
      {isConfirm ? (
        <div className="flex flex-col  align-center confirm-success w-full max-w-[540px] gap-10">
          <div className="flex flex-col items-center">
            <img
              src="https://static.toss.im/illusts/check-blue-spot-ending-frame.png"
              width="120"
              height="120"
            />

            <h2 className="mt-8 mb-0 text-[#191f28] font-bold text-2xl">
              결제를 완료했어요
            </h2>
          </div>
          <div className="response-section w-100">
            <div className="flex justify-between">
              <span className="text-[#333d48] font-semibold text-[17px]">
                결제 금액
              </span>
              <span
                id="amount"
                className="font-medium text-[17px] text-[4e5968#] break-words text-right"
              >
                {amount}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#333d48] font-semibold text-[17px]">
                주문번호
              </span>
              <span
                id="orderId"
                className="font-medium text-[17px] text-[4e5968#] break-words text-right"
              >
                {orderId}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#333d48] font-semibold text-[17px]">
                paymentKey
              </span>
              <span
                id="paymentKey"
                className="font-medium text-[17px] text-[4e5968#] break-words text-right"
              >
                {paymentKey}
              </span>
            </div>
          </div>

          <div className="button-group">
            <div className="flex gap-4">
              <p
                className="py-[11px] px-[22px] text-center rounded-lg bg-[#f2f4f6] text-[#4e5968] text-base cursor-pointer w-full"
                onClick={() => router.push("/main")}
              >
                확인
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-column align-center confirm-loading w-100 max-w-540">
          <div className="flex-column align-center">
            <div className="flex items-center w-full justify-center">
              <img
                src="https://static.toss.im/lotties/loading-spot-apng.png"
                width="120"
                height="120"
              />
            </div>
            <h2 className="mt-8 mb-0 text-[#191f28] font-bold text-2xl text-center">
              결제 요청까지 성공했어요.
            </h2>

            <h4 className="mt-2 text-[#4e5968] text-[17px] font-medium text-center description">
              결제 승인하고 완료해보세요.
            </h4>
          </div>
          <div className="w-full">
            <button
              className="w-full py-[11px] px-[22px] text-center rounded-lg cursor-pointer font-semibold bg-[#3282f6] text-[#f9fcff]"
              onClick={() => confirm()}
            >
              결제 승인하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
