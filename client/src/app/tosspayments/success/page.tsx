"use client";

import { useSearchParams } from "next/navigation";
import PageContainer from "@/components/PageContainer";
import { Suspense } from "react";
import SuccessForm from "./SuccessForm";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");
  const paymentKey = searchParams.get("paymentKey");

  return (
    <SuccessForm orderId={orderId!} amount={amount!} paymentKey={paymentKey!} />
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContainer>
        <SuccessContent />
      </PageContainer>
    </Suspense>
  );
}
