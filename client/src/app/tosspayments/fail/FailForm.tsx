"use client";

export function FailForm({
  errorCode,
  errorMessage,
}: {
  errorCode: string;
  errorMessage: string;
}) {
  return (
    <div className="w-full flex flex-col items-center p-6 overflow-auto">
      <div className="flex flex-col align-middle w-full max-w-[540px]">
        <div className="w-full flex flex-col items-center">
          <img
            src="https://static.toss.im/lotties/error-spot-apng.png"
            width="120"
            height="120"
          />
          <h2 className="mt-8 mb-0 text-[#191f28] font-bold text-2xl">
            결제를 실패했어요
          </h2>
        </div>
        <div className="w-full mt-[60px] flex flex-col gap-4 text-xl">
          <div className="flex justify-between">
            <span className="font-semibold text-[#333d48] text-[17px]">
              code
            </span>
            <span
              id="error-code"
              className="font-medium text-[#4e5968] text-[17px] pl-4 break-words text-right"
            >
              {errorCode}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-[#333d48] text-[17px]">
              message
            </span>
            <span
              id="error-message"
              className="font-medium text-[#4e5968] text-[17px] pl-4 break-words text-right"
            >
              {errorMessage}
            </span>
          </div>
        </div>

        <div className="w-full mt-8 flex flex-col justify-center gap-4">
          <a
            className="text-center py-[11px] px-[22px] rounded-lg bg-[#f2f4f6] text-[#4e5968] font-semibold text-[17px] cursor-pointer"
            href="https://developers.tosspayments.com/sandbox"
            target="_blank"
            rel="noreferrer noopener"
          >
            다시 테스트하기
          </a>
          <div className="flex gap-4">
            <a
              className="text-center first:py-[11px] px-[22px] rounded-lg bg-[#f2f4f6] text-[#4e5968] font-semibold text-[17px] cursor-pointer"
              href="https://docs.tosspayments.com/reference/error-codes"
              target="_blank"
              rel="noreferrer noopener"
            >
              에러코드 문서보기
            </a>
            <a
              className="text-center py-[11px] px-[22px] rounded-lg bg-[#f2f4f6] text-[#4e5968] font-semibold text-[17px] cursor-pointer"
              href="https://techchat.tosspayments.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              실시간 문의하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
