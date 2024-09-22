"use client";

import SearchComponent from "@/components/SearchComponent";
import Image from "next/image";

import "react-multi-carousel/lib/styles.css";
import NavBar from "@/components/NavBar";
import ThisWeekProduct from "./components/ThisWeekProduct";
import CarouselProuduct from "./components/CarouselProduct";
export default function MainForm() {
  return (
    <div className="w-full flex flex-col items-center gap-5 text-black py-[100px]">
      <Image
        src={"/images/location/img-location.png"}
        alt="위치 이미지"
        width={162}
        height={22.69}
      ></Image>
      <SearchComponent />
      <CarouselProuduct />
      <ThisWeekProduct />
      <NavBar />
    </div>
  );
}
