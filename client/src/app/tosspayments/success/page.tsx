import { SuccessForm } from "./SuccessForm";
import { useSearchParams } from "next/navigation";
import PageContainer from "@/components/PageContainer";
import { Suspense } from "react";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");
  const paymentKey = searchParams.get("paymentKey");
  return (
    <PageContainer
      children={
        <Suspense fallback={<div>Loading...</div>}>
          <SuccessForm
            orderId={orderId!}
            amount={amount!}
            paymentKey={paymentKey!}
          />
        </Suspense>
      }
    ></PageContainer>
  );
}
