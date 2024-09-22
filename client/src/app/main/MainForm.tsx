"use client";

import SearchComponent from "@/components/SearchComponent";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { PlusIcon } from "@radix-ui/react-icons";
import "react-multi-carousel/lib/styles.css";
import NavBar from "@/components/NavBar";
export default function MainForm() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="w-full flex flex-col items-center gap-5 text-black py-[100px]">
      <Image
        src={"/images/location/img-location.png"}
        alt="위치 이미지"
        width={162}
        height={22.69}
      ></Image>
      <SearchComponent />

      <div className="w-full flex justify-center">
        <Carousel
          swipeable={true}
          // draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          // keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={"mobile"}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="h-[114px] w-[364px]"
        >
          <img
            src={"/images/carousel/img-banner.png"}
            alt="배너 이미지"
            className="w-full object-contain"
          />
          <img
            src={"/images/carousel/img-banner.png"}
            alt="배너 이미지"
            className="w-full object-contain"
          />
          <img
            src={"/images/carousel/img-banner.png"}
            alt="배너 이미지"
            className="w-full object-contain"
          />
        </Carousel>
      </div>

      <div className="flex justify-between items-center  w-[364px]">
        <p className=" font-semibold text-2xl">이번주 상품</p>
        <p className="text-[#53B175] text-sm font-semibold">전체 상품 보기</p>
      </div>
      <div className="w-[364px] flex justify-between">
        <div className="w-[173px] h-[308px] border rounded-2xl py-8 px-[22px] flex flex-col justify-between">
          <Image
            width={123}
            height={62}
            src={"/images/product/img-shoes.png"}
            alt="제품 이미지"
            objectFit="contain"
          />
          <div className="flex flex-col gap-[5px]">
            <p className="font-semibold">맛있는 사과</p>
            <p className="text-sm text-[#7C7C7C]">1kg당, 가격</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-lg ">5,000원</p>
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-[#53B175]">
              <Image
                src={"/images/icons/ic-plus.svg"}
                alt="플러스 아이콘"
                width={17}
                height={17}
                color="white"
              />
            </div>
          </div>
        </div>
        <div className="w-[173px] h-[308px] border rounded-2xl py-8 px-[22px] flex flex-col justify-between">
          <Image
            width={123}
            height={62}
            src={"/images/product/img-shoes2.png"}
            alt="제품 이미지"
            objectFit="contain"
          />
          <div className="flex flex-col gap-[5px]">
            <p className="font-semibold">맛있는 사과</p>
            <p className="text-sm text-[#7C7C7C]">1kg당, 가격</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-lg ">5,000원</p>
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-[#53B175]">
              <Image
                src={"/images/icons/ic-plus.svg"}
                alt="플러스 아이콘"
                width={17}
                height={17}
                color="white"
              />
            </div>
          </div>
        </div>
      </div>

      <NavBar />
    </div>
  );
}
