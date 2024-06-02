import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
import banner1 from "/public/images/banner1.png";
import banner2 from "/public/images/banner2.png";
import banner3 from "/public/images/banner3.png";
import Button from "../shared/Button";
import Link from "next/link";
import Slider from "./Slider";

const Banner = () => {
  return (
    <>
      <div className="hidden md:hidden lg:block">
        <div className="container">
          {/* Desktop Part */}
          <div className="flex flex-row gap-6 my-6">
            <div className="lg:w-[600px] xl:w-[700px] 2xl:w-[1000px] h-[622px] relative">
              <Image
                src={banner1}
                layout="fill"
                objectFit="cover"
                alt="Banner 1 image"
                className="rounded-2xl"
              />
              <div className="absolute top-0 left-0 ps-14 flex flex-col items-start justify-center gap-7 h-full">
                <h1 className="font-poppins font-semibold text-5xl text-white max-w-96">
                  Fresh & Healthy Organic Food
                </h1>
                <div className="flex flex-col gap-2 border-l-2 border-[#84D187] ps-3">
                  <p className="font-poppins font-medium text-xl text-white">
                    Sale up to{" "}
                    <span className="font-semibold text-xl text-white py-1 px-3 bg-[#FF8A00] rounded-md ml-2">
                      30% OFF
                    </span>
                  </p>
                  <p className="font-poppins font-normal text-sm text-white">
                    Free shipping on all your order.
                  </p>
                </div>
                <Link href="/shop">
                  <Button
                    buttonText="Shop now"
                    className="font-poppins font-semibold text-base text-[#00B207] py-4 bg-white rounded-full"
                    icon={HiOutlineArrowNarrowRight}
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="lg:w-[360px] xl:w-[460px] 2xl:w-[410px] h-[300px] relative">
                <Image
                  src={banner2}
                  alt="Banner 2 image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
                <div className="absolute top-0 left-0 ps-8 pt-8">
                  <p className="font-poppins font-medium text-sm text-[#1A1A1A] mb-2">
                    Summer Sale
                  </p>
                  <h3 className="font-poppins font-semibold text-3xl text-[#1A1A1A] mb-3">
                    75% OFF
                  </h3>
                  <p className="font-poppins font-normal text-sm text-[#666666] mb-6">
                    Only Fruit & Vegetable
                  </p>
                  <Link href="/shop">
                    <div className="flex flex-row items-center gap-2">
                      <p className="font-poppins font-semibold text-base text-[#00B207]">
                        Shop Now
                      </p>
                      <HiOutlineArrowNarrowRight className="text-[#00B207]" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="lg:w-[360px] xl:w-[460px] 2xl:w-[410px] h-[300px] relative">
                <Image
                  src={banner3}
                  layout="fill"
                  objectFit="cover"
                  alt="Banner 3 image"
                  className="rounded-2xl"
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-3">
                  <p className="font-poppins font-medium text-sm text-white">
                    Best Deal
                  </p>
                  <h1 className="font-poppins font-semibold text-3xl text-white max-w-80 text-center mb-5">
                    Special Products Deal of the Month
                  </h1>
                  <Link href="/shop">
                    <div className="flex flex-row items-center gap-2">
                      <p className="font-poppins font-semibold text-base text-[#00B207]">
                        Shop Now
                      </p>
                      <HiOutlineArrowNarrowRight className="text-[#00B207]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile part slider */}
        </div>
      </div>
      <div className="block md:block lg:hidden w-full my-4">
        <Slider />
      </div>
    </>
  );
};

export default Banner;
