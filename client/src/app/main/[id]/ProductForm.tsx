import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "@radix-ui/react-icons";
import Image from "next/image";
export default function ProductForm() {
  return (
    <div className="w-full flex  flex-col h-full items-center">
      <div className="w-full max-w-[413px] h-[371px] bg-[#F2F3F2] rounded-b-3xl flex-col gap-[27px] items-center flex">
        <div className="flex w-full justify-between px-5 py-6">
          <ArrowLeftIcon width={25} height={25} className="font-black" />
          <Share2Icon width={25} height={25} className="font-black" />
        </div>
        <Image
          src={"/images/product/img-shoes.png"}
          width={100}
          height={100}
          alt=""
        />
      </div>
    </div>
  );
}
