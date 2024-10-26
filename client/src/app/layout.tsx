import type { Metadata } from "next";
import "./globals.css";
import { Theme as RadixTheme } from "@radix-ui/themes";
import { RootToaster } from "@/Provider/RootToaster";
import Head from "next/head";

export const metadata: Metadata = {
  title: "구매각",
  description: "사용자들이 원하는  상품을 진열해드리고 있습니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <RadixTheme>
          <RootToaster />
          {children}
        </RadixTheme>
      </body>
    </html>
  );
}
