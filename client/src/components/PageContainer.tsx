"use client";

import { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-full flex justify-center bg-slate-100">
      <section className="max-w-[600px] w-full bg-white flex justify-center">
        <div className="max-w-[364px] w-full">{children}</div>
      </section>
    </main>
  );
}
