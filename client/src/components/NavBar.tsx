"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className="bg-white max-w-[600px] w-full fixed  left-1/2 transform -translate-x-1/2 bottom-0 rounded-t-2xl h-[92px] shadow-2xl flex justify-between px-[30px] py-4 items-center z-[1000px]">
      <div
        onClick={() => router.push("/main")}
        className="flex flex-col gap-[3px] w-[40px] h-[42px] justify-between items-center cursor-pointer"
      >
        <Image
          src={"/images/icons/ic-shop.svg"}
          width={20}
          height={20}
          alt="shop 아이콘"
        />
        <p className="text-xs font-semibold">메인</p>
      </div>
      <div
        onClick={() => router.push("/explore")}
        className="flex flex-col gap-[3px] w-[40px] h-[42px] justify-between items-center cursor-pointer"
      >
        <Image
          src={"/images/icons/ic-explore.svg"}
          width={22}
          height={24}
          alt="explore 아이콘"
        />
        <p className="text-xs font-semibold">전체</p>
      </div>
      <div
        onClick={() => {
          router.push("/my-cart");
        }}
        className="flex flex-col gap-[3px] w-[50px] h-[42px] justify-between items-center cursor-pointer"
      >
        <Image
          src={"/images/icons/ic-cart.svg"}
          width={20}
          height={20}
          alt="cart 아이콘"
        />
        <p className="text-xs font-semibold">장바구니</p>
      </div>
      <div
        onClick={() => router.push("/favorite")}
        className="flex flex-col gap-[3px] w-[40px] h-[42px] justify-between items-center cursor-pointer"
      >
        <Image
          src={"/images/icons/ic-bookmark.svg"}
          width={20}
          height={20}
          alt="bookmark 아이콘"
        />
        <p className="text-xs font-semibold">찜</p>
      </div>
      <div
        onClick={() => {
          toast("준비중입니다.", {
            icon: "🥹",
          });
        }}
        className="flex flex-col gap-[3px] w-[40px] h-[42px] justify-between items-center cursor-pointer"
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
  );
}
