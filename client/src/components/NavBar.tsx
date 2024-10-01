"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import SideBar from "./SideBar";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
const navBarData = [
  {
    url: "main",
    iconUrl: "/ic-shop.svg",
    alt: "shop 아이콘",
    name: "메인",
  },
  {
    url: "explore",
    iconUrl: "/ic-explore.svg",
    alt: "explore 아이콘",
    name: "전체",
  },
  {
    url: "my-cart",
    iconUrl: "/ic-cart.svg",
    alt: "cart 아이콘",
    name: "장바구니",
  },
  {
    url: "favorite",
    iconUrl: "/ic-bookmark.svg",
    alt: "bookmark 아이콘",
    name: "찜",
  },
];
export default function NavBar() {
  const router = useRouter();

  const pathName = usePathname().substring(usePathname().lastIndexOf("/") + 1);

  const [drawState, setDrawState] = useState<boolean>(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setDrawState(open);
    };

  return (
    <>
      <nav className="bg-white max-w-[600px] w-full fixed  left-1/2 transform -translate-x-1/2 bottom-0 rounded-t-2xl h-[92px] shadow-2xl flex justify-between px-[30px] py-4 items-center z-[1000px]">
        {navBarData.map((item) => {
          return (
            <div
              onClick={() => router.push("/" + item.url)}
              className={twMerge(
                "flex flex-col w-[70px] h-[70px] rounded-full gap-2 justify-center items-center cursor-pointer",
                item.url === pathName ? "bg-slate-100" : ""
              )}
            >
              <Image
                src={`/images/icons/${item.iconUrl}`}
                width={20}
                height={20}
                alt={item.alt}
              />
              <p className="text-xs font-semibold">{item.name}</p>
            </div>
          );
        })}

        <div
          onClick={() => setDrawState(true)}
          className="flex flex-col  w-[70px] h-[70px] rounded-full gap-2 justify-center items-center cursor-pointer"
        >
          <Image
            src={"/images/icons/ic-user.svg"}
            width={20}
            height={20}
            alt="user 아이콘"
          />

          <p className="text-xs font-semibold">내 정보</p>
        </div>
      </nav>
      <SideBar state={drawState} toggleDrawer={toggleDrawer} />
    </>
  );
}
