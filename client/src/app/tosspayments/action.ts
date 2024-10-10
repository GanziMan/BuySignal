// utils/payment.ts

export async function PaymentConfirm({
  paymentKey,
  orderId,
  amount,
}: {
  paymentKey: string;
  orderId: string;
  amount: number;
}) {
  try {
    const widgetSecretKey = "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6";
    const encryptedSecretKey =
      "Basic " + Buffer.from(widgetSecretKey + ":").toString("base64");

    const response = await fetch(
      "https://api.tosspayments.com/v1/payments/confirm",
      {
        method: "POST",
        headers: {
          Authorization: encryptedSecretKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentKey, orderId, amount }),
      }
    );

    const responseBody = await response.json();
    return {
      status: response.status,
      body: responseBody,
    };
  } catch (error: any) {
    const status = error.response ? error.response.status : 500;
    const errorMsg = error.response
      ? await error.response.json()
      : { message: "Internal Server Error" };
    return {
      status,
      body: errorMsg,
    };
  }
}
