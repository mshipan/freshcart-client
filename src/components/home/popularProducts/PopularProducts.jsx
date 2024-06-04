import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";
import cabbage from "/public/images/cabbage.png";
import cauliflower from "/public/images/cauliflower.png";
import corn from "/public/images/corn.png";
import eggplant from "/public/images/eggplant.png";
import greenApple from "/public/images/greenApple.png";
import greenCapsicum from "/public/images/greenCapsicum.png";
import greenChili from "/public/images/greenChili.png";
import lettuce from "/public/images/lettuce.png";
import malta from "/public/images/malta.png";
import potatoes from "/public/images/potatoes.png";
import bag from "/public/images/icons/bag.png";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";

const PopularProducts = () => {
  return (
    <div className="container">
      <div className="pb-12 w-full">
        <div className="flex flex-row items-center justify-between mb-8">
          <h1 className="font-poppins font-semibold text-xl md:text-3xl text-[#1A1A1A]">
            Popular Products
          </h1>
          <div className="text-[#00B207] flex flex-row items-center gap-3">
            <p className="font-poppins font-medium text-base">View All</p>
            <HiOutlineArrowNarrowRight />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 content-center justify-items-center gap-6">
          <div className="md:w-[264px] md:h-[327px] border relative group hover:border-[#00B207] transition-all ease-in-out duration-300">
            <Image
              src={greenApple}
              width={254}
              height={230}
              alt="products image"
            />
            <div className="p-3">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <p className="font-poppins font-normal text-sm text-[#4D4D4D] group-hover:text-[#2C742F] transition-all duration-300 ease-in-out">
                    Green Apple
                  </p>
                  <div className="flex flex-row items-center gap-1">
                    <p className="font-poppins font-medium text-base text-[#1A1A1A]">
                      $14.99
                    </p>
                    <p className="font-poppins font-normal text-base text-[#999999] line-through">
                      $20.99
                    </p>
                  </div>
                </div>
                <div className="bg-[#F2F2F2] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#00B207] transition-all duration-300 ease-in-out">
                  <Image src={bag} alt="cart icon" width={20} height={20} />
                </div>
              </div>
              <Rating
                style={{ maxWidth: 80 }}
                orientation="horizontal"
                value={4.52}
                key={4.52}
              />
            </div>
            {/* Wishlist and View */}
            <div className="group-hover:flex hidden transition-all duration-300 ease-in-out flex-col items-center gap-2 absolute top-2 right-3">
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center">
                <GoHeart className="text-[#1A1A1A]" />
              </div>
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center ">
                <FaRegEye className="text-[#1A1A1A]" />
              </div>
            </div>
            {/* Offer Badge */}
            <div className="bg-[#EA4B48] flex flex-row items-center gap-1 py-1 px-2 rounded-md w-fit absolute top-2 left-2">
              <p className="font-poppins font-normal text-sm text-white">
                Sale
              </p>
              <p className="font-poppins font-normal text-sm text-white">50%</p>
            </div>
          </div>

          <div className="md:w-[264px] md:h-[327px] border relative group hover:border-[#00B207] transition-all ease-in-out duration-300">
            <Image src={malta} width={254} height={230} alt="products image" />
            <div className="p-3">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <p className="font-poppins font-normal text-sm text-[#4D4D4D] group-hover:text-[#2C742F] transition-all duration-300 ease-in-out">
                    Fresh Indian Malta
                  </p>
                  <div className="flex flex-row items-center gap-1">
                    <p className="font-poppins font-medium text-base text-[#1A1A1A]">
                      $20.00
                    </p>
                  </div>
                </div>
                <div className="bg-[#F2F2F2] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#00B207] transition-all duration-300 ease-in-out">
                  <Image src={bag} alt="cart icon" width={20} height={20} />
                </div>
              </div>
              <Rating
                style={{ maxWidth: 80 }}
                orientation="horizontal"
                value={4.52}
                key={4.52}
              />
            </div>
            {/* Wishlist and View */}
            <div className="group-hover:flex hidden transition-all duration-300 ease-in-out flex-col items-center gap-2 absolute top-2 right-3">
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center">
                <GoHeart className="text-[#1A1A1A]" />
              </div>
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center ">
                <FaRegEye className="text-[#1A1A1A]" />
              </div>
            </div>
          </div>

          <div className="md:w-[264px] md:h-[327px] border relative group hover:border-[#00B207] transition-all ease-in-out duration-300">
            <Image
              src={cabbage}
              width={254}
              height={230}
              alt="products image"
            />
            <div className="p-3">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <p className="font-poppins font-normal text-sm text-[#4D4D4D] group-hover:text-[#2C742F] transition-all duration-300 ease-in-out">
                    Chinese cabbage
                  </p>
                  <div className="flex flex-row items-center gap-1">
                    <p className="font-poppins font-medium text-base text-[#1A1A1A]">
                      $12.00
                    </p>
                  </div>
                </div>
                <div className="bg-[#F2F2F2] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#00B207] transition-all duration-300 ease-in-out">
                  <Image src={bag} alt="cart icon" width={20} height={20} />
                </div>
              </div>
              <Rating
                style={{ maxWidth: 80 }}
                orientation="horizontal"
                value={4.52}
                key={4.52}
              />
            </div>
            {/* Wishlist and View */}
            <div className="group-hover:flex hidden transition-all duration-300 ease-in-out flex-col items-center gap-2 absolute top-2 right-3">
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center">
                <GoHeart className="text-[#1A1A1A]" />
              </div>
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center ">
                <FaRegEye className="text-[#1A1A1A]" />
              </div>
            </div>
          </div>

          <div className="md:w-[264px] md:h-[327px] border relative group hover:border-[#00B207] transition-all ease-in-out duration-300">
            <Image
              src={lettuce}
              width={254}
              height={230}
              alt="products image"
            />
            <div className="p-3">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <p className="font-poppins font-normal text-sm text-[#4D4D4D] group-hover:text-[#2C742F] transition-all duration-300 ease-in-out">
                    Green Lettuce
                  </p>
                  <div className="flex flex-row items-center gap-1">
                    <p className="font-poppins font-medium text-base text-[#1A1A1A]">
                      $9.00
                    </p>
                  </div>
                </div>
                <div className="bg-[#F2F2F2] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#00B207] transition-all duration-300 ease-in-out">
                  <Image src={bag} alt="cart icon" width={20} height={20} />
                </div>
              </div>
              <Rating
                style={{ maxWidth: 80 }}
                orientation="horizontal"
                value={4.52}
                key={4.52}
              />
            </div>
            {/* Wishlist and View */}
            <div className="group-hover:flex hidden transition-all duration-300 ease-in-out flex-col items-center gap-2 absolute top-2 right-3">
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center">
                <GoHeart className="text-[#1A1A1A]" />
              </div>
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center ">
                <FaRegEye className="text-[#1A1A1A]" />
              </div>
            </div>
          </div>

          <div className="md:w-[264px] md:h-[327px] border relative group hover:border-[#00B207] transition-all ease-in-out duration-300">
            <Image
              src={eggplant}
              width={254}
              height={230}
              alt="products image"
            />
            <div className="p-3">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <p className="font-poppins font-normal text-sm text-[#4D4D4D] group-hover:text-[#2C742F] transition-all duration-300 ease-in-out">
                    Eggplant
                  </p>
                  <div className="flex flex-row items-center gap-1">
                    <p className="font-poppins font-medium text-base text-[#1A1A1A]">
                      $34.00
                    </p>
                  </div>
                </div>
                <div className="bg-[#F2F2F2] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#00B207] transition-all duration-300 ease-in-out">
                  <Image src={bag} alt="cart icon" width={20} height={20} />
                </div>
              </div>
              <Rating
                style={{ maxWidth: 80 }}
                orientation="horizontal"
                value={4.52}
                key={4.52}
              />
            </div>
            {/* Wishlist and View */}
            <div className="group-hover:flex hidden transition-all duration-300 ease-in-out flex-col items-center gap-2 absolute top-2 right-3">
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center">
                <GoHeart className="text-[#1A1A1A]" />
              </div>
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center ">
                <FaRegEye className="text-[#1A1A1A]" />
              </div>
            </div>
          </div>

          <div className="md:w-[264px] md:h-[327px] border relative group hover:border-[#00B207] transition-all ease-in-out duration-300">
            <Image
              src={potatoes}
              width={254}
              height={230}
              alt="products image"
            />
            <div className="p-3">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <p className="font-poppins font-normal text-sm text-[#4D4D4D] group-hover:text-[#2C742F] transition-all duration-300 ease-in-out">
                    Big Potatoes
                  </p>
                  <div className="flex flex-row items-center gap-1">
                    <p className="font-poppins font-medium text-base text-[#1A1A1A]">
                      $20.00
                    </p>
                  </div>
                </div>
                <div className="bg-[#F2F2F2] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#00B207] transition-all duration-300 ease-in-out">
                  <Image src={bag} alt="cart icon" width={20} height={20} />
                </div>
              </div>
              <Rating
                style={{ maxWidth: 80 }}
                orientation="horizontal"
                value={4.52}
                key={4.52}
              />
            </div>
            {/* Wishlist and View */}
            <div className="group-hover:flex hidden transition-all duration-300 ease-in-out flex-col items-center gap-2 absolute top-2 right-3">
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center">
                <GoHeart className="text-[#1A1A1A]" />
              </div>
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center ">
                <FaRegEye className="text-[#1A1A1A]" />
              </div>
            </div>
          </div>

          <div className="md:w-[264px] md:h-[327px] border relative group hover:border-[#00B207] transition-all ease-in-out duration-300">
            <Image src={corn} width={254} height={230} alt="products image" />
            <div className="p-3">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <p className="font-poppins font-normal text-sm text-[#4D4D4D] group-hover:text-[#2C742F] transition-all duration-300 ease-in-out">
                    Corn
                  </p>
                  <div className="flex flex-row items-center gap-1">
                    <p className="font-poppins font-medium text-base text-[#1A1A1A]">
                      $20.00
                    </p>
                  </div>
                </div>
                <div className="bg-[#F2F2F2] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#00B207] transition-all duration-300 ease-in-out">
                  <Image src={bag} alt="cart icon" width={20} height={20} />
                </div>
              </div>
              <Rating
                style={{ maxWidth: 80 }}
                orientation="horizontal"
                value={4.52}
                key={4.52}
              />
            </div>
            {/* Wishlist and View */}
            <div className="group-hover:flex hidden transition-all duration-300 ease-in-out flex-col items-center gap-2 absolute top-2 right-3">
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center">
                <GoHeart className="text-[#1A1A1A]" />
              </div>
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center ">
                <FaRegEye className="text-[#1A1A1A]" />
              </div>
            </div>
          </div>

          <div className="md:w-[264px] md:h-[327px] border relative group hover:border-[#00B207] transition-all ease-in-out duration-300">
            <Image
              src={cauliflower}
              width={254}
              height={230}
              alt="products image"
            />
            <div className="p-3">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <p className="font-poppins font-normal text-sm text-[#4D4D4D] group-hover:text-[#2C742F] transition-all duration-300 ease-in-out">
                    Fresh Cauliflower
                  </p>
                  <div className="flex flex-row items-center gap-1">
                    <p className="font-poppins font-medium text-base text-[#1A1A1A]">
                      $12.00
                    </p>
                  </div>
                </div>
                <div className="bg-[#F2F2F2] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#00B207] transition-all duration-300 ease-in-out">
                  <Image src={bag} alt="cart icon" width={20} height={20} />
                </div>
              </div>
              <Rating
                style={{ maxWidth: 80 }}
                orientation="horizontal"
                value={4.52}
                key={4.52}
              />
            </div>
            {/* Wishlist and View */}
            <div className="group-hover:flex hidden transition-all duration-300 ease-in-out flex-col items-center gap-2 absolute top-2 right-3">
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center">
                <GoHeart className="text-[#1A1A1A]" />
              </div>
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center ">
                <FaRegEye className="text-[#1A1A1A]" />
              </div>
            </div>
          </div>

          <div className="md:w-[264px] md:h-[327px] border relative group hover:border-[#00B207] transition-all ease-in-out duration-300">
            <Image
              src={greenCapsicum}
              width={254}
              height={230}
              alt="products image"
            />
            <div className="p-3">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <p className="font-poppins font-normal text-sm text-[#4D4D4D] group-hover:text-[#2C742F] transition-all duration-300 ease-in-out">
                    Green Capsicum
                  </p>
                  <div className="flex flex-row items-center gap-1">
                    <p className="font-poppins font-medium text-base text-[#1A1A1A]">
                      $9.99
                    </p>
                    <p className="font-poppins font-normal text-base text-[#999999] line-through">
                      $20.99
                    </p>
                  </div>
                </div>
                <div className="bg-[#F2F2F2] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#00B207] transition-all duration-300 ease-in-out">
                  <Image src={bag} alt="cart icon" width={20} height={20} />
                </div>
              </div>
              <Rating
                style={{ maxWidth: 80 }}
                orientation="horizontal"
                value={4.52}
                key={4.52}
              />
            </div>
            {/* Wishlist and View */}
            <div className="group-hover:flex hidden transition-all duration-300 ease-in-out flex-col items-center gap-2 absolute top-2 right-3">
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center">
                <GoHeart className="text-[#1A1A1A]" />
              </div>
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center ">
                <FaRegEye className="text-[#1A1A1A]" />
              </div>
            </div>
            {/* Offer Badge */}
            <div className="bg-[#EA4B48] flex flex-row items-center gap-1 py-1 px-2 rounded-md w-fit absolute top-2 left-2">
              <p className="font-poppins font-normal text-sm text-white">
                Sale
              </p>
              <p className="font-poppins font-normal text-sm text-white">50%</p>
            </div>
          </div>

          <div className="md:w-[264px] md:h-[327px] border relative group hover:border-[#00B207] transition-all ease-in-out duration-300">
            <Image
              src={greenChili}
              width={254}
              height={230}
              alt="products image"
            />
            <div className="p-3">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <p className="font-poppins font-normal text-sm text-[#4D4D4D] group-hover:text-[#2C742F] transition-all duration-300 ease-in-out">
                    Green Chili
                  </p>
                  <div className="flex flex-row items-center gap-1">
                    <p className="font-poppins font-medium text-base text-[#1A1A1A]">
                      $34.00
                    </p>
                  </div>
                </div>
                <div className="bg-[#F2F2F2] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#00B207] transition-all duration-300 ease-in-out">
                  <Image src={bag} alt="cart icon" width={20} height={20} />
                </div>
              </div>
              <Rating
                style={{ maxWidth: 80 }}
                orientation="horizontal"
                value={4.52}
                key={4.52}
              />
            </div>
            {/* Wishlist and View */}
            <div className="group-hover:flex hidden transition-all duration-300 ease-in-out flex-col items-center gap-2 absolute top-2 right-3">
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center">
                <GoHeart className="text-[#1A1A1A]" />
              </div>
              <div className="size-[40px] bg-white border rounded-full flex items-center justify-center ">
                <FaRegEye className="text-[#1A1A1A]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
