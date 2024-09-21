"use client";

import { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-screen flex justify-center bg-slate-100">
      <section className="max-w-[600px] w-full bg-white">{children}</section>
    </main>
  );
}
