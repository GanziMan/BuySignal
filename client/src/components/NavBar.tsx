import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-black max-w-[600px] w-full fixed bottom-0 rounded-t-2xl h-[92px] shadow-2xl flex justify-between px-[30px] py-4 items-center z-[1000px]">
      <div className="flex flex-col gap-[3px] w-[29px] h-[42px] justify-between items-center">
        <Image
          src={"/images/icons/ic-shop.svg"}
          width={20}
          height={20}
          alt="shop 아이콘"
        />
        <p className="text-xs font-semibold">Shop</p>
      </div>
      <div className="flex flex-col gap-[3px] w-[29px] h-[42px] justify-between items-center">
        <Image
          src={"/images/icons/ic-explore.svg"}
          width={22}
          height={24}
          alt="shop 아이콘"
        />
        <p className="text-xs font-semibold">Explore</p>
      </div>
      <div className="flex flex-col gap-[3px] w-[29px] h-[42px] justify-between items-center">
        <Image
          src={"/images/icons/ic-cart.svg"}
          width={20}
          height={20}
          alt="shop 아이콘"
        />
        <p className="text-xs font-semibold">Cart</p>
      </div>
      <div className="flex flex-col gap-[3px] w-[29px] h-[42px] justify-between items-center">
        <Image
          src={"/images/icons/ic-bookmark.svg"}
          width={20}
          height={20}
          alt="shop 아이콘"
        />
        <p className="text-xs font-semibold">Favourite</p>
      </div>
      <div className="flex flex-col gap-[3px] w-[29px] h-[42px] justify-between items-center">
        <Image
          src={"/images/icons/ic-user.svg"}
          width={20}
          height={20}
          alt="shop 아이콘"
        />
        <p className="text-xs font-semibold">Account</p>
      </div>
    </nav>
  );
}
