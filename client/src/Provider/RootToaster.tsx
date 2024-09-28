"use client";

import { useEffect } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

// https://github.com/timolins/react-hot-toast/issues/31

export function RootToaster({
  max = 10,
  ...props
}: React.ComponentProps<typeof Toaster> & {
  max?: number;
}) {
  const { toasts } = useToasterStore();

  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= max) // Is toast index over limit?
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) for no exit animation
  }, [toasts, max]);

  return (
    <Toaster
      position="top-center"
      toastOptions={{
        icon: null,
        className: "min-w-[400px] !bg-gray-900 !text-white !text-center",
        success: {
          className: "min-w-[400px] !bg-green-400 !text-white !text-center",
        },
        error: {
          className: "min-w-[400px] !bg-red-700 !text-white !text-center",
        },
      }}
      {...props}
    />
  );
}