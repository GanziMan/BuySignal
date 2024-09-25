"use client";

import { ReactNode } from "react";

export default function Header({ label }: { label: string }) {
  return (
    <div className="flex justify-between">
      <p className="text-xl font-bold">{label}</p>
    </div>
  );
}
