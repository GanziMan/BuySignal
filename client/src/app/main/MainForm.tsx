"use client";

import SearchComponent from "@/components/SearchComponent";
import Image from "next/image";

import "react-multi-carousel/lib/styles.css";
import NavBar from "@/components/NavBar";
import ThisWeekProduct from "./components/ThisWeekProduct";
import CarouselProuduct from "./components/CarouselProduct";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const [locationName, setLocationName] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
        },
        (err) => {
          setError("Error fetching location: " + err.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  console.log(location);
  useEffect(() => {
    if (!location) return; // 위치가 없으면 리턴

    const fetchLocationName = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.lat}&lon=${location.lon}`
        );
        const data = await response.json();

        if (data && data.display_name) {
          const addressParts = data.display_name
            .split(",")
            .map((part: string) => part.trim());
          const filteredAddress = addressParts.slice(0, 1).join(" ");
          setLocationName(addressParts[5] + " " + filteredAddress);
        } else {
          setError("Error fetching location name");
        }
      } catch (err) {
        setError("Error fetching location name: " + err);
      }
    };

    fetchLocationName();
  }, [location]); // location이 설정된 후에만 실행

  if (error) {
    toast.error(error);
  }
  return (
    <div className="w-full h-full flex-auto flex flex-col items-center gap-5 text-black py-5">
      <div className="flex gap-2 items-center justify-center">
        {locationName && (
          <>
            <Image
              src={"/images/icons/ic-gps.svg"}
              alt="위치 이미지"
              width={20}
              height={20}
            />
            <p>{locationName}</p>
          </>
        )}
      </div>
      <SearchComponent />
      <CarouselProuduct />
      <ThisWeekProduct title="이번 주 상품" productData={PROUDCT_DATA} />
      <ThisWeekProduct title="베스트 셀러 상품" productData={PROUDCT_DATA} />
    </div>
  );
}
