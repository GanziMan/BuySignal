import type { Metadata } from "next";
import "./globals.css";
import { Theme as RadixTheme } from "@radix-ui/themes";
import { RootToaster } from "@/Provider/RootToaster";
import Head from "next/head";
import { Inter, Poppins, Fredoka } from "next/font/google";

const fredoka = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
});

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
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={fredoka.className}>
        <RadixTheme>
          <RootToaster />
          {children}
        </RadixTheme>
      </body>
    </html>
  );
}
