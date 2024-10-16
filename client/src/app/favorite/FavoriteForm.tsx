import Header from "@/components/Header";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

const mockFavoriteData = [
  { name: "나이키 에어맥스 운동화", price: 5000 },
  { name: "나이키 에어맥스 운동화", price: 5000 },
  { name: "나이키 에어맥스 운동화", price: 5000 },
  { name: "나이키 에어맥스 운동화", price: 5000 },
  { name: "나이키 에어맥스 운동화", price: 5000 },
  { name: "나이키 에어맥스 운동화", price: 5000 },
  { name: "나이키 에어맥스 운동화", price: 5000 },
  { name: "나이키 에어맥스 운동화", price: 5000 },
];

const totalPrice = mockFavoriteData.reduce((acc, item) => acc + item.price, 0);

export default function FavoriteForm() {
  return (
    <section className="h-full w-full flex flex-col gap-6 py-2 items-center">
      <Header label="찜" />

      <div className="flex flex-col gap-7">
        {mockFavoriteData.map((item, index) => {
          return (
            <div className="flex flex-col gap-7" key={index}>
              <Separator className="w-full bg-[#E2E2E2] h-[1px] max-w-[363px]" />

              <div className="flex justify-between gap-8">
                <Image
                  src={"/images/product/img-shoes.png"}
                  alt="상품 이미지"
                  width={70}
                  height={30}
                />
                <div className="flex flex-col w-[260px] gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-[5px]">
                      <p className="text-base font-bold">{item.name}</p>
                      <p className="font-semibold text-sm">{item.price}원</p>
                    </div>

                    <ChevronRightIcon width={20} height={20} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <nav className="bg-[#489E67] text-white max-w-[344px] w-full h-[57px] bottom-[117px] fixed  rounded-2xl flex justify-center items-center z-[1000px]">
        <p className="text-lg font-semibold">장바구니 담기</p>
        <p className="float-right">총 금액({totalPrice}원)</p>
      </nav>
    </section>
  );
}
