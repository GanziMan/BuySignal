import type { Metadata } from "next";
import "./globals.css";
import { Theme as RadixTheme } from "@radix-ui/themes";

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
        <RadixTheme>{children}</RadixTheme>
      </body>
    </html>
  );
}
