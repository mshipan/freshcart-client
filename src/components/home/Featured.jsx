import Image from "next/image";
import headphone from "/public/images/icons/headphone.png";
import packageImg from "/public/images/icons/package.png";
import shoppingBag from "/public/images/icons/shoppingBag.png";
import truck from "/public/images/icons/truck.png";

const Featured = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 w-full p-10 shadow-2xl shadow-slate-300 rounded-xl mb-3">
        <div className="flex flex-row items-center gap-4">
          <Image src={truck} width={40} height={40} alt="truck icon" />
          <div className="flex flex-col gap-2">
            <h6 className="font-poppins text-base font-semibold text-[#1A1A1A]">
              Free Shipping
            </h6>
            <p className="font-poppins text-sm font-normal text-[#999999]">
              Free shipping on all your order
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4">
          <Image src={headphone} width={40} height={40} alt="truck icon" />
          <div className="flex flex-col gap-2">
            <h6 className="font-poppins text-base font-semibold text-[#1A1A1A]">
              Customer Support 24/7
            </h6>
            <p className="font-poppins text-sm font-normal text-[#999999]">
              Instant access to Support
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4">
          <Image src={shoppingBag} width={40} height={40} alt="truck icon" />
          <div className="flex flex-col gap-2">
            <h6 className="font-poppins text-base font-semibold text-[#1A1A1A]">
              100% Secure Payment
            </h6>
            <p className="font-poppins text-sm font-normal text-[#999999]">
              We ensure your money is save
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4">
          <Image src={packageImg} width={40} height={40} alt="truck icon" />
          <div className="flex flex-col gap-2">
            <h6 className="font-poppins text-base font-semibold text-[#1A1A1A]">
              Money-Back Guarantee
            </h6>
            <p className="font-poppins text-sm font-normal text-[#999999]">
              30 Days Money-Back Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
