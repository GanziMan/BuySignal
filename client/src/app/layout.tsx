import type { Metadata } from "next";
import "./globals.css";
import { Theme as RadixTheme } from "@radix-ui/themes";
import { RootToaster } from "@/Provider/RootToaster";

export const metadata: Metadata = {
  title: "구매각",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <RadixTheme>
          <RootToaster />
          {children}
        </RadixTheme>
      </body>
    </html>
  );
}
