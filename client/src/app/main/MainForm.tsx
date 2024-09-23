"use client";

import SearchComponent from "@/components/SearchComponent";
import Image from "next/image";

import "react-multi-carousel/lib/styles.css";
import NavBar from "@/components/NavBar";
import ThisWeekProduct from "./components/ThisWeekProduct";
import CarouselProuduct from "./components/CarouselProduct";

interface ProductDataType {
  name: string;
  description: string;
  price: string;
  productUrl: string;
}

const PROUDCT_DATA: ProductDataType[] = [
  {
    name: "나이키 에어포스1",
    description: "한켤레당, 가격",
    price: "110,000원",
    productUrl: "/images/product/img-shoes.png",
  },
  {
    name: "나이키 에어머시기",
    description: "한켤레당, 가격",
    price: "140,000원",
    productUrl: "/images/product/img-shoes.png",
  },
];
export default function MainForm() {
  return (
    <div className="w-full flex flex-col items-center gap-5 text-black p-[100px]">
      <Image
        src={"/images/logo-buysignal.png"}
        alt="로고 이미지"
        width={70}
        height={70}
      />
      <Image
        src={"/images/location/img-location.png"}
        alt="위치 이미지"
        width={162}
        height={22.69}
      ></Image>
      <SearchComponent />
      <CarouselProuduct />
      <ThisWeekProduct title="이번 주 상품" productData={PROUDCT_DATA} />
      <ThisWeekProduct title="베스트 셀러 상품" productData={PROUDCT_DATA} />
      <NavBar />
    </div>
  );
}
