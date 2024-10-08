"use client";
import { useEffect } from "react";
import { SuccessForm } from "./SuccessForm";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");
  const paymentKey = searchParams.get("paymentKey");
  return (
    <SuccessForm orderId={orderId!} amount={amount!} paymentKey={paymentKey!} />
  );
}
