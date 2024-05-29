import Link from "next/link";
import Brands from "./Brands";
import TopBar from "./TopBar";
import phoneCall from "../../../public/images/icons/phoneCall.png";
import Image from "next/image";
import Links from "./link/Links";

const Navbar = () => {
  return (
    <div>
      <TopBar />
      <Brands />

      <div className="py-5 bg-[#333333]">
        <div className="container flex-row items-center justify-between">
          <Links />
          <div className="flex flex-row items-center gap-2">
            <Image
              src={phoneCall}
              width={28}
              height={28}
              alt="phone call icon"
            />
            <p className="font-poppins font-medium text-sm text-white">
              +880 1622 543390
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
