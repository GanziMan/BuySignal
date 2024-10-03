import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductDataType {
  name: string;
  description: string;
  price: string;
  productUrl: string;
}
export default function ThisWeekProduct({
  title,
  productData,
}: {
  title: string;
  productData: ProductDataType[];
}) {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between items-end  w-full ">
        <p className=" font-semibold text-2xl">{title}</p>
        <p className="text-[#53B175] text-sm font-semibold cursor-pointer">
          전체 상품 보기
        </p>
      </div>
      <div className="w-full flex justify-between">
        {productData.map((item, index: number) => {
          return (
            <div
              key={index}
              onClick={() => router.push(`/main/${index}`)}
              className="w-[173px] h-[238px] border rounded-2xl px-[18px] flex flex-col  items-center gap-[15px]"
            >
              <div className="flex flex-col">
                <Image
                  width={200}
                  height={62}
                  src={item.productUrl}
                  alt="제품 이미지"
                />
                <div className="flex flex-col gap-[5px] w-full">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-[#7C7C7C]">{item.description}</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="font-semibold text-lg ">{item.price}</p>
                <div className="w-6 h-6 rounded-2xl flex items-center justify-center bg-[#696969]">
                  <Image
                    src={"/images/icons/ic-plus.svg"}
                    alt="플러스 아이콘"
                    width={15}
                    height={15}
                    color="white"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
