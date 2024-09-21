"use client";

import { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <section className="w-full h-screen flex justify-center bg-white">
      {children}
    </section>
  );
}
