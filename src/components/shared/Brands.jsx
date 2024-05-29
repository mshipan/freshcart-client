import Image from "next/image";
import logo from "../../../public/images/logo.png";
import search from "../../../public/images/icons/search.png";
import love from "../../../public/images/icons/love.png";
import bag from "../../../public/images/icons/bag.png";

import Button from "./Button";
import Link from "next/link";
const Brands = () => {
  return (
    <div className="container py-7 flex-col md:flex-row items-center justify-between gap-3">
      {/* Logo Section */}
      <div className="flex flex-row items-center justify-between gap-24 md:gap-0">
        <Link href="/" className="flex flex-row items-center gap-2">
          <Image src={logo} height={32} width={32} alt="logo" />
          <p className="font-inter text-lg md:text-[32px] font-bold text-[#002603]">
            FreshCart
          </p>
        </Link>
        {/* Mobile Shopping cart and wishlist Section */}
        <div className="flex flex-row items-center gap-4 md:hidden">
          <Image src={love} alt="whishlist" width={28} height={24} />
          <div className="h-[30px] border-s border-s-gray-300"></div>
          <div className="flex flex-row items-center gap-3">
            <Image src={bag} alt="cart" width={34} height={34} />
            <div className="hidden md:flex md:flex-col md:gap-1">
              <p className="font-poppins text-sm font-normal text-[#4D4D4D]">
                Shopping cart:
              </p>
              <p className="font-poppins text-base font-medium text-[#1A1A1A]">
                $<span>57.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Search Secton */}
      <div className="flex flex-row items-center ">
        <div className="border border-gray-300 py-[12px] ps-4 flex flex-row items-center gap-2 rounded-s-md">
          <Image src={search} width={20} height={20} alt="Search Icon" />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
        <Button
          buttonText="Search"
          className="bg-[#00B207] border border-[#00B207] font-inter text-sm font-semibold text-white rounded-e-md"
        />
      </div>
      {/* Wishlist and Cart Section */}
      <div className="hidden md:flex flex-row items-center gap-4">
        <Image src={love} alt="whishlist" width={28} height={24} />
        <div className="h-[30px] border-s border-s-gray-300"></div>
        <div className="flex flex-row items-center gap-3">
          <Image src={bag} alt="cart" width={34} height={34} />
          <div>
            <p className="font-poppins text-sm font-normal text-[#4D4D4D]">
              Shopping cart:
            </p>
            <p className="font-poppins text-base font-medium text-[#1A1A1A]">
              $<span>57.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
