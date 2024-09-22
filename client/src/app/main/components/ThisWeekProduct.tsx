import Image from "next/image";

export default function ThisWeekProduct() {
  return (
    <>
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
    </>
  );
}
