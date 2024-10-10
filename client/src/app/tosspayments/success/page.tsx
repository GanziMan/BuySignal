"use client";
import { SuccessForm } from "./SuccessForm";
import { useSearchParams } from "next/navigation";
import PageContainer from "@/components/PageContainer";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");
  const paymentKey = searchParams.get("paymentKey");
  return (
    <PageContainer
      children={
        <SuccessForm
          orderId={orderId!}
          amount={amount!}
          paymentKey={paymentKey!}
        />
      }
    ></PageContainer>
  );
}
